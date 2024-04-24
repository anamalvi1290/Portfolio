/*===== MENU SHOW =====*/ 
const navToggle = document.getElementById('nav-toggle');

const toggleNavSmall = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 767) {
    navToggle.classList.add('nav__toggle--small');
  } else {
    navToggle.classList.remove('nav__toggle--small');
  }
};

// Call the function when the page loads
toggleNavSmall();

// Call the function whenever the window is resized
window.addEventListener('resize', toggleNavSmall);


/*==================== REMOVE MENU MOBILE ====================*/
const navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.toggle('show');
}

navToggle.addEventListener('click', linkAction);
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 0,
    delay: 10,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 10}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
