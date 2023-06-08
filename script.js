const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 2000,
      disableOninteraction: false,
    },
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // for email

  function sendemail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "sidrakhan17777@gmail.com",
      Password : "9548048033",
      To : 'sidrakhan17777@gmail.com',
      From : document.getElementById("email").value,
      Subject : document.getElementById("subject").value,
      Body : "Name =" 
  }).then(
    message => alert("Your message sent successfully")
  );
  }



  let burger=document.querySelector(".burger");
  let upper=document.querySelector(".upper");
  let list=document.querySelector(".list");

  burger.addEventListener('click',()=>{
    list.classList.toggle('v-list-resp')
    upper.classList.toggle('h-nav-resp');
    
  })