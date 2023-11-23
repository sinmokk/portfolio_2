document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.nav-bar');
    const login = document.querySelector ('.login')

    hamburger.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        login.classList.toggle('active')
    })

    // document.querySelectorAll('.nav-link').
    // forEach(n => n.addEventListener('click',()=> {
    //     hamburger.classList.remove('active');
    //     sitemap.classList.remove('active');
    // }))

    // hamburger.addEventListener('click', function(){
    //     // if(sitemap.classList.add('active')){
    //     //       navBtn.classList.remove('active');
    //     //   }else{
    //     //         navBtn.classList.add('active');
    //     //   };
    //     sitemap.classList('active');
    //   });

   
});