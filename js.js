const myOpenBtn=document.querySelector(".header__open__btn");
const myCloseBtn=document.querySelector(".header__close__btn");
const myMenu=document.querySelector(".header__nav__menu-mobile");
const myImg=document.querySelector(".header__content__img");

myImg.setAttribute("src","./images/illustration-1.svg");

myOpenBtn.addEventListener("click",()=>{
    myMenu.classList.add("come_left");
    myOpenBtn.classList.add("hide");
    myCloseBtn.style.display="block";
});

myCloseBtn.addEventListener("click",()=>{
    myMenu.classList.remove("come_left");
    myOpenBtn.classList.remove("hide");
    myCloseBtn.style.display="none";
});




