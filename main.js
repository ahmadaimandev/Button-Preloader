function showPreloader() {
    var button = document.querySelector('.button');
    button.classList.add('show-preloader');
  
    setTimeout(function() {
      button.classList.remove('show-preloader');
    }, 2000);
  }
  