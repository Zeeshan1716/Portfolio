// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// css progress circular bar 
let phpProgress = document.querySelector(".css"),
  phpValue = document.querySelector(".css-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.navbar-nav a, .link-group a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor click behavior
          const targetId = this.getAttribute('href'); // Get the target section ID
          const targetSection = document.querySelector(targetId); // Select the target section

          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
          }
      });
  });

  // Footer button functionality
  const footerButtons = document.querySelectorAll('.social-links button');
  footerButtons.forEach(button => {
      button.addEventListener('click', function() {
          const socialMediaLinks = {
              'dribble': 'https://www.instagram.com/its_zeeshan077/',
              'whatsapp': 'https://wa.me/919559532626',
              'behance': 'https://www.linkedin.com/in/mohd-jishan-885590347/',
              'behance': 'https://x.com/mohd_zeesh29259?s=21'
          };
          const buttonClass = this.className.split(' ')[1]; // Get the class name to identify the button
          const url = socialMediaLinks[buttonClass]; // Get the corresponding URL

          if (url) {
              window.open(url, '_blank'); // Open the link in a new tab
          }
      });
  });

  // Button functionality for "Hire Me" and "Contact" buttons
  const hireMeButton = document.querySelector('.h-btn'); // Select the "Hire Me" button
  if (hireMeButton) {
      hireMeButton.addEventListener('click', function() {
          alert('Thank you for your interest! I will get back to you soon.'); // Replace with desired functionality
      });
  }

  const contactButton = document.querySelector('.c-btn'); // Select the "Contact" button
  if (contactButton) {
      contactButton.addEventListener('click', function() {
          const name = document.querySelector('#exampleFormControlInput1').value; // Get name input
          const email = document.querySelector('#exampleFormControlInput2').value; // Get email input
          const message = document.querySelector('#exampleFormControlTextarea1').value; // Get message input

          if (name && email && message) {
              alert(`Thank you, ${name}! Your message has been sent.`); // Replace with desired functionality
              // Here you can add code to send the form data to a server if needed
          } else {
              alert('Please fill in all fields before submitting.'); // Alert if fields are empty
          }
      });
  }
});


