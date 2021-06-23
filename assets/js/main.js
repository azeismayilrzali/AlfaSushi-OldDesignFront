/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});


sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content, .aboutPageHeading,.covidHeading `, {
    origin: 'top',
    interval: 200,
})


//  var mr = ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     reset: true,
//  }); 

//  mr.reveal('.aboutPageHeading h1,.covidHeading ',{
//      origin: 'left',
//      interval:200,
//  })




// my part

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll(".footer__content");
    
    var windowHeight = window.innerHeight;
    for(var i = 0; i<reveals.length; i++){
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("scroll__visible");
        } else {
            reveals[i].classList.remove("scroll__visible");
        }
    }
}

// my part end



sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})




/*==================== AJAX MENU ====================*/

const li_items = document.getElementsByClassName("food__link")
// console.log(li_items)
const li_items_length = li_items.length;
// const hideit = document.getElementsByClassName('hideit');
// console.log(hideit);




for(let i = 0; i < li_items_length; i++){
    li_items[i].addEventListener("click", function(){
        if(this.classList.contains('active-link') || this.classList.contains('active-link-sticky') ){
            //it means you clicked on already active menu
            //exit
        } else {
            var activity = "";
            for(let z = 0; z < li_items_length; z++){
                if(li_items[z].classList.contains("active-link")){
                    var activity = 'active-link'
                    li_items[z].classList.remove('active-link');
                } else if (li_items[z].classList.contains("active-link-sticky")){
                    var activity = 'active-link-sticky';
                    li_items[z].classList.remove('active-link-sticky');
                }
            }
            this.classList.add(activity);
            
            
            //first hide all divs
            let product_divs = document.getElementsByClassName('product__content');
            for(let i=0; i<product_divs.length; i++){
                product_divs[i].classList.add('hideit');
            }


            //now set necessary divs visible
            if(this.textContent === "Specials"){

                let temp = document.getElementsByClassName('specials');
                for(let t = 0; t < temp.length; t++){
                    temp[t].classList.remove('hideit');  
                }
                

              
            } else if (this.textContent === "Hot rolls"){
               
                let temp = document.getElementsByClassName('hot-roll');
                for(let t = 0; t < temp.length; t++){
                    temp[t].classList.remove('hideit');  
                }

            } else if (this.textContent === "Cold rolls"){

                let temp = document.getElementsByClassName('cold-roll');
                for(let t = 0; t < temp.length; t++){
                    temp[t].classList.remove('hideit');  
                }
               
                

            } else if (this.textContent === "Sets"){

                let temp = document.getElementsByClassName('set');
                for(let t = 0; t < temp.length; t++){
                    temp[t].classList.remove('hideit');  
                }

            } else if (this.textContent === "Noodles &amp; Drinks"){

                let temp = document.getElementsByClassName('noodle-and-drink');
                for(let t = 0; t < temp.length; t++){
                    temp[t].classList.remove('hideit');  
                }

            } 

        }
    })
}


/*

<div class="product__content hot-roll">
<img src="assets/img/sake-maki.png" alt="" class="product__img">
<h3 class="product__title">Philadelphia Avacado</h3>
<span class="product__category">Cream cheese, salmon, cucumber,
    avacado, rice
</span>
<span class="product__price">AZN 10,00</span>
</div>
<div class="product__content hot-roll">
<img src="assets/img/sake-maki.png" alt="" class="product__img">
<h3 class="product__title">Philadelphia Avacado</h3>
<span class="product__category">Cream cheese, salmon, cucumber,
    avacado, rice
</span>
<span class="product__price">AZN 10,00</span>
</div>

*/



const foodNav = document.getElementsByClassName("food-nav")[0];
const food__link = document.getElementsByClassName("food__link");
const x = window.matchMedia("(max-width: 767px)")
let navoffset = foodNav.offsetTop;

var productContainer = document.getElementsByClassName("product__container")[0];

if(!x.matches){
    if(navoffset > productContainer.offsetTop - foodNav.offsetHeight ){
        foodNav.classList.add('bx-shade');
        foodNav.classList.add('color__change__background');
        for(var i=0;i<food__link.length;i++){
            food__link[i].classList.add('color__change__text');
            if(food__link[i].classList.contains("active-link")){
                food__link[i].classList.remove('active-link');
                food__link[i].classList.add('active-link-sticky');
            }
           
        }
    }
}


document.addEventListener('scroll', function(e) {
    if(!x.matches){
        if (window.pageYOffset >= productContainer.offsetTop - foodNav.offsetHeight ){
            foodNav.classList.add('bx-shade');
            foodNav.classList.add('color__change__background');
            for(var i=0;i<food__link.length;i++){
                food__link[i].classList.add('color__change__text');
                if(food__link[i].classList.contains("active-link")){
                    food__link[i].classList.remove('active-link');
                    food__link[i].classList.add('active-link-sticky');
                }  
            } 
        } else{
            foodNav.classList.remove('bx-shade');
            foodNav.classList.remove('color__change__background');
            for(var i=0;i<food__link.length;i++){
                food__link[i].classList.remove('color__change__text');
                
                if(food__link[i].classList.contains("active-link-sticky")){
                    food__link[i].classList.remove('active-link-sticky');
                    food__link[i].classList.add('active-link');
                }
            }
        }  
    }
})
