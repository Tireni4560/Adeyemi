const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

  // Get reference to logo 
  const logo = document.getElementById('logo');

  // Display logo
  logo.style.display = 'block';

  // Wait 1 second before loading rest 
  setTimeout(function() {

    // Hide logo
    logo.style.display = 'none';

    // Rest of initialization code

  }, 1000);

});  