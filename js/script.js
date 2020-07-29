'use strict';

const hamburger = document.querySelector('.menu__hamburger');
const menu = document.querySelector('.menu');
const sectionContainer = document.querySelector('.section-container');

if (window.screen.width < 767) {
  menu.classList.add('collapsed');
  sectionContainer.classList.add('expanded');
} else {
  menu.classList.remove('collapsed');
  menu.classList.remove('expanded');
}

function shortMenu(current = menu.classList) {
  if (current == 'menu') {
    menu.classList.add('collapsed');
    sectionContainer.classList.add('expanded');
  } else {
    menu.classList.remove('collapsed');
    sectionContainer.classList.remove('expanded');
  }
}

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  shortMenu();
})
