function showPreloader() {
    var button = document.querySelector('.button');
    button.classList.add('loading');
    
    // Simulating a delayed action
    setTimeout(function() {
      button.classList.remove('loading');
    }, 2000);
  }
  