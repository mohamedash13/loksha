




var media =  window.matchMedia("(max-width: 720px)");
document.addEventListener('DOMContentLoaded', () => {

    const projectContainers = document.querySelectorAll('.project-cont');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img =  entry.target.querySelector('.project-cont img');
          const projectText = entry.target.querySelector('p');
          if(media.matches){
            projectText.style.cssText = 'display:flex; padding:10px;width: 100%;';
            img.style.cssText = "width: 70%; height: 45%; border-radius: 2050px; position:relative; top: -30%; transform:translateX(10%);"
          } else {
            projectText.style.cssText = 'display:flex; padding:10px;width: 40%; position: absolute; right: 60%; font-size: 20px;';
            img.style.cssText = 'transform:translateX(40%);'
          }
        } else {
          const img =  entry.target.querySelector('.project-cont img');
          const projectText = entry.target.querySelector('p');
          if(media.matches){
            projectText.style.cssText = 'display:none;';
            img.style.cssText = "  width: 100%;height: 100%;display: flex"
          } else{
            projectText.style.cssText = 'display:none;';
            img.style.cssText = 'transform:translateX(0);'
          }
        }
      });
    }, {
      rootMargin: '0px 0px -50% 0px'
    });
  
    projectContainers.forEach((project) => {
      observer.observe(project);
    });
  });
  




  const elements = document.querySelectorAll('.up');
  const down = document.querySelectorAll(".down")
  function animateElements() {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add('slide-up');
      }
    });
    down.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add('slide-down');
      }
    });
  }
  
  animateElements();
  
  window.addEventListener('scroll', animateElements);




let navHover = document.querySelector(".toggle")
let path = document.querySelector(".n-t path")
let svg = document.querySelector(".n-t")

// Get the navigation element
const nav = document.querySelector('.nav');

// Initialize variables for tracking scroll position and direction
let prevScrollPos = window.pageYOffset;
let currentScrollPos = prevScrollPos;

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Update the current scroll position
  currentScrollPos = window.pageYOffset;

  // Determine the scroll direction
  const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';

  // Toggle the visibility of the navigation element based on the scroll direction
  if (scrollDirection === 'down') {
    nav.style.display = 'none';
    nav.classList.remove("nav-up")
  } else {
    nav.style.display = 'flex';
    nav.classList.add("nav-up")
  }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
});

// navHover.addEventListener("mouseenter",()=>{
//     path.setAttribute("d","M0 0h24v3H0zM0 9h18v3H0zM0 18h21v3H0z")
// })
// navHover.addEventListener("mouseleave",()=>{
//     path.setAttribute("d","M0 0h17v3H0zM0 9h25v3H0zM0 18h18v3H0z")
// })


let ul = document.querySelector("ul")


navHover.addEventListener("click",()=>{
    ul.style.display = "flex"
    navHover.style.transform = "translateX(0)"
    svg.setAttribute("height","115")
    svg.setAttribute("width","65")
    path.setAttribute("d","M0 30h65v1H0zM0 70h65v1H0zM0 110h65v1H0z")
    navHover.style.zIndex = "-1"
    navHover.style.padding = "30px"
    navHover.style.borderRadius = "10px"
})
navHover.addEventListener("blur",()=>{
  ul.style.display = "none"
  svg.setAttribute("height","21")
  svg.setAttribute("width","24")
  path.setAttribute("d","M0 0h17v3H0zM0 9h25v3H0zM0 18h18v3H0z")
  navHover.style
  navHover.style.transform = "translateX(0)"
  navHover.style.zIndex = "1"
  navHover.style.padding = "15px"
  navHover.style.borderRadius = "150px"
})


ul.addEventListener("mouseleave",()=>{
    ul.style.display = "none"
    svg.setAttribute("height","21")
    svg.setAttribute("width","24")
    path.setAttribute("d","M0 0h17v3H0zM0 9h25v3H0zM0 18h18v3H0z")
    navHover.style
    navHover.style.transform = "translateX(0)"
    navHover.style.zIndex = "1"
    navHover.style.padding = "15px"
    navHover.style.borderRadius = "150px"
})
ul.addEventListener("click",()=>{
  ul.style.display = "none"
  svg.setAttribute("height","21")
  svg.setAttribute("width","24")
  path.setAttribute("d","M0 0h17v3H0zM0 9h25v3H0zM0 18h18v3H0z")
  navHover.style
  navHover.style.transform = "translateX(0)"
  navHover.style.zIndex = "1"
  navHover.style.padding = "15px"
  navHover.style.borderRadius = "150px"
})