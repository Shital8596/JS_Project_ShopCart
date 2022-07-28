const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const product = [
    {
        id : 1,
        title: "TITAN",
        price:119,
        img:"images/titan.jpg",
        colors:[
            {
                code:"images/titan.jpg",
                img:"images/titan.jpg",
            },
            {
                code:"images/titan.png",
                img:"images/titan.png",
            },
        ],
    },
    {
        id : 2,
        title: "ROLEX",
        price:150,
        img:"images/rolex.jpg",
        colors:[
            {
                code:"images/rolex.jpg",
                img:"images/rolex.jpg",
            },
            {
                code:"images/rolex.png",
                img:"images/rolex.png",
            },
        ], 
    },
    {
        id : 3,
        title: "MAXIMA",
        price:140,
        img:"images/maxima.jpg",
        colors:[
            {
                code:"images/maxima.jpg",
                img:"images/maxima.jpg",
            },
            {
                code:"images/maxima2.jpg",
                img:"images/maxima2.jpg",
            },
        ],
    },
    {
        id : 4,
        title: "SONATA",
        price:120,
        img:"images/sonata.avif",
        colors:[
            {
                code:"images/sonata.avif",
                img:"images/sonata.avif",
            },
            {
                code:"images/sonata.png",
                img:"images/sonata.png",
            },
        ],
    },
    {
        id : 5,
        title: "APPLE",
        price:110,
        img:"images/apple.jpg",
        colors:[
            {
                code:"images/apple.jpg",
                img:"images/apple.jpg",
            },
            {
                code:"images/apple2.jpg",
                img:"images/apple2.jpg",
            },
        ],
    }
]

                    //Updating product page------>

let choosenProduct = product[0];
var currentProductImg = document.querySelector(".productImg");
var currentProductTitle = document.querySelector(".productTitle");
var currentProductPrice = document.querySelector(".productPrice");
var currentProductColors = document.querySelectorAll(".color");
var currentProductSizes = document.querySelectorAll(".size");


        // Added each product on product page

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = product[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent =  choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index)=>{
            color.src = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


//  Close and open functionality for payment option

var productButton = document.querySelector(".productBtn");
var payment = document.querySelector(".payment");
var close1 = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

    close1.addEventListener("click", ()=>{
        payment.style.display = "none";
    });



        // Creating cart in html

var close2 = document.querySelector(".cartClose");
var cartIcon = document.querySelector(".cartImage");
var cartButton = document.querySelector(".cartBtn");
 var cart = document.querySelector(".cartContainer");
 var cartIndata = document.querySelector(".cartInData");
 var cartData = document.getElementById('navSpan');

    cartIcon.addEventListener("click", ()=>{
       if(parseInt(cartData.innerHTML) == 0){
        alert('Your Cart is empty');
        }
    });
 
let x = 0;
cartButton.addEventListener("click", ()=>{
    cartData.innerHTML = ++x;
});

//  Close and open functionality for cart option

cartIcon.addEventListener("click", ()=>{
    if(parseInt(cartData.innerHTML) > 0){
    cart.style.display = "flex";
    };
});


close2.addEventListener("click", ()=>{
    cart.style.display = "none";
});


let cartItem = document.querySelector('.cartProducts');

var total_amount = document.querySelector('.ctotal')
var itemPrice = document.querySelector('.productPrice');
var cartPrice = document.querySelector('.cprice');
var basketTotal = document.querySelector('.bascketTotal');
var cartInItem = document.querySelector('.cIcon');

const decreaseNum = (indec,cprice) =>{
    var itemval = document.getElementById(indec);
    var itemCartPrice = document.getElementById(cprice);
    if(itemval.value <= 0){
        itemval.value = 0;
        alert('Negative numbers are not allowed');
    }else{
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemCartPrice.innerHTML = parseInt(itemCartPrice.innerHTML)- parseInt(cartPrice.innerHTML);
        basketTotal.innerHTML = parseInt(itemCartPrice.innerHTML)+10;
    }
}
const increaseNum = (indec,cprice) =>{
    var itemval = document.getElementById(indec);
    var itemCartPrice = document.getElementById(cprice);
    itemval.value = parseInt(itemval.value) + 1;
     itemCartPrice.innerHTML = parseInt(itemCartPrice.innerHTML) + parseInt(cartPrice.innerHTML);
     basketTotal.innerHTML = parseInt(itemCartPrice.innerHTML)+10;
}


            //  Adding Elements to cart

var currentCartImg = document.querySelector(".cartImg");
var currentCartTitle = document.querySelector(".cartSTitle");
var currentCartPrice = document.querySelector(".cprice");
var currentCartQuantity = document.querySelector(".cartInput");



choosenProduct = product[0];
menuItems.forEach((item, index)=>{
    choosenProduct = product[index];
    cartButton.addEventListener("click", ()=>{
        currentCartImg.src = choosenProduct.img;
        currentCartTitle.innerHTML = choosenProduct.title;
        currentCartPrice.innerHTML = choosenProduct.price;
         total_amount.innerHTML = parseInt(choosenProduct.price);
    });
});








