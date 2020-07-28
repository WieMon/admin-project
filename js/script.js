'use strict';

const hamburger = document.querySelector('.menu__hamburger');
const menu = document.querySelector('.menu');
const sectionContainer = document.querySelector('.section-container');

if (window.screen.width < 767) {
  menu.classList.add('collapsed');
  sectionContainer.classList.add('expanded');
  //console.log('small');
} else {
    menu.classList.remove('collapsed');
    menu.classList.remove('expanded');
    //console.log('big');
  }

function shortModal(cur = menu.classList) {
  if (cur == 'menu') {
    menu.classList.add('collapsed');
    sectionContainer.classList.add('expanded');
  //console.log('long menu');
  } else {
      menu.classList.remove('collapsed');
      menu.classList.remove('expanded');

    }
}

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  shortMenu();
})
