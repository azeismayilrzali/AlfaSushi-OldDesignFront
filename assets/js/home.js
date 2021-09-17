/*==================== AJAX MENU ====================*/

const li_items = document.getElementsByClassName("food__link")
const li_items_length = li_items.length;

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
            var queryParam = this.textContent.toLowerCase();
            console.log(queryParam);

            $.post("processors/menu.php", {menupick:queryParam}).done(function(response){

                if(response != null){
                    //Success
                    var container = document.getElementsByClassName("product__container")[0];
                    container.innerHTML = response;
                } else {
                    alert("something is wrong with returned value from menuProcessor.php");
                }
            });








            
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
