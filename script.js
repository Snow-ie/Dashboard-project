// script.js
document.addEventListener('DOMContentLoaded', () => {
    const starIcons = document.querySelectorAll('.card-icons .fa-star');
    const eyeIcons = document.querySelectorAll('.card-icons .fa-eye');
    const linkIcons = document.querySelectorAll('.card-icons .fa-link');
  
    starIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        alert('Star icon clicked!');
      });
    });
  
    eyeIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        alert('Eye icon clicked!');
      });
    });
  
    linkIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        alert('Link icon clicked!');
      });
    });
  });
  