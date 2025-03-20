'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  window.location.href = `mailto:songapradeepthi11@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
});


/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

document.addEventListener("DOMContentLoaded", () => {
  // Get all "View More" buttons
  const viewMoreButtons = document.querySelectorAll(".services__button");

  // Get all modal popups
  const modals = document.querySelectorAll(".services__modal");

  // Get all close buttons
  const closeButtons = document.querySelectorAll(".services__modal-close");

  // Function to open the modal when "View More" is clicked
  viewMoreButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
          modals[index].classList.add("active");
      });
  });

  // Function to close the modal when close button (X) is clicked
  closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
          button.closest(".services__modal").classList.remove("active");
      });
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
      modals.forEach((modal) => {
          if (event.target === modal) {
              modal.classList.remove("active");
          }
      });
  });
});









document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".view-project");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  // Ensure all modals are hidden on page load
  modals.forEach(modal => {
      modal.style.display = "none";
  });

  // Open modal when "View Project" is clicked
  viewButtons.forEach(button => {
      button.addEventListener("click", function (event) {
          event.preventDefault();
          const modalId = this.getAttribute("data-modal");
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = "flex"; // Show modal
          }
      });
  });

  // Close modal when "X" is clicked
  closeButtons.forEach(button => {
      button.addEventListener("click", function () {
          this.closest(".modal").style.display = "none";
      });
  });

  // Close modal when clicking outside modal content
  window.addEventListener("click", function (event) {
      modals.forEach(modal => {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      });
  });
});








document.addEventListener("DOMContentLoaded", function () {
  const skillCategories = document.querySelectorAll(".skill-category");

  skillCategories.forEach(category => {
      category.addEventListener("click", function () {
          this.classList.toggle("active");
      });
  });
});


