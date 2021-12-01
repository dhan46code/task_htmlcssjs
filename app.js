const btnNav = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

btnNav.addEventListener('click', function () {
  links.classList.toggle('show-links');
});
