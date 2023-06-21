function showPreloader() {
    var button = document.querySelector('.button button');
    var preloader = document.querySelector('.button .preloader');

    button.disabled = true; // Disable the button while loading
    button.classList.add('loading');
    preloader.style.opacity = '1'; // Show the preloader

    setTimeout(function () {
      button.disabled = false; // Enable the button
      button.classList.remove('loading');
      preloader.style.opacity = '0'; // Hide the preloader
    }, 3000); // Remove the 'loading' class after 3 seconds (adjust the delay as needed)
  }