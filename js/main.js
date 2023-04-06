let loginBtn = document.querySelector(".login-btn");
let dropLogin = document.querySelector(".drop-login");

loginBtn.onclick = () => {
    dropLogin.classList.toggle("drop-login-open")
}

let menu = document.querySelector('.menu-icon')
let navbar =document.querySelector('.navbar')

menu.onclick=()=> {
    menu.classList.toggle("move");
    navbar.classList.toggle('open-menu')
    dropLogin.classList.remove("drop-login-open")
}

window.onscroll = () =>{
  menu.classList.remove("move");
  navbar.classList.remove('open-menu')
}

let header = document.querySelector("header")

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY>0)
})

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 20000,
      loop:true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });


  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector(".accordion-header");

    accordionHeader.addEventListener('click',()=>{
      const openItem = document.querySelector('.accordion-open');

      toggleItem(item);

      if(openItem && openItem !== item){
        toggleItem(openItem);
      }
    })
  })

  const toggleItem = (item) =>{
    const accordionContent = item.querySelector(".accordion-content");

    if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style');
      item.classList,remove('accordion-open')
    }
    else{
      accordionContent.style.height= accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
    }

  }

  
var swiper = new Swiper(".control-images", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    loop:true,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
