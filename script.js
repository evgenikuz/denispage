let button = document.querySelector('.burger');
let close = document.querySelector('.close');
let mobile_menu = document.querySelector('.mobile_menu');
let navHome = document.querySelector(".navHome");
let navAbout = document.querySelector(".navAbout");
let navSkills = document.querySelector(".navSkills");
let navPortfolio = document.querySelector(".navPortfolio");
let navContacts = document.querySelector(".navContacts");

button.addEventListener('click', function() {
    mobile_menu.classList.remove('d-none');
})

close.addEventListener('click', function() {
    mobile_menu.classList.add('d-none');
})

navHome.addEventListener('click', function() {
    mobile_menu.classList.add('d-none');
})
navAbout.addEventListener('click', function() {
    mobile_menu.classList.add('d-none');
})
navSkills.addEventListener('click', function() {
    mobile_menu.classList.add('d-none');
})
navPortfolio.addEventListener('click', function() {
    mobile_menu.classList.add('d-none');
})
navContacts.addEventListener('click', function() {
    mobile_menu.classList.add('d-none');
})
