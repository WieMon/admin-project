'use strict';
const hamburger = document.querySelector('.menu__hamburger');
const menu = document.querySelector('.menu');
const sectionContainer = document.querySelector('.section-container');
const overlay = document.querySelector('.overlay');
const modalOpen = document.querySelector('.modal__open');
const modalClose = document.querySelector('.modal__close');


/*Menu*/
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
      if(window.screen.width <= 768) {
        menu.classList.remove('collapsed');

      } else {
        menu.classList.remove('collapsed');
sectionContainer.classList.remove('expanded');
      }
  }
}

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  shortMenu();
})

/*Chart*/
var ctx = document.getElementById('myChart').getContext('2d');
var Chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#20bf6b',
      borderColor: '#1AB298',
      data: [280, 150, 200, 280, 350, 330, 320, 180, 250, 270]
    },
    {
      label: 'FTD',
      backgroundColor: '#d81159',
      borderColor: '#a64970',
      data: [300, 140, 240, 220, 370, 100, 150, 200, 400, 280],
    },
    {
      label: 'Earned',
      backgroundColor: '#F7A658',
      borderColor: '#F7A658',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 100,
          min: 0,
          max: 600,

        },
      }],
      xAxes: [{
        ticks: {
          thickLength: 0,
        }
      }]
    },
  }
});

/*Toggling pages*/
const menuLinks = document.querySelectorAll('.menu__link');

for (let i=0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const content = document.querySelector(href + '_section');
    const all = document.querySelectorAll('.toggle');

  if(content) {
    for (let j=0; j < all.length; j++) {
      all[j].classList.add('hidden');
    }
      content.classList.remove('hidden');
    }
  });
}

/*Modals*/
function openModal() {
  document.querySelector('.overlay').classList.add('show');
  document.querySelector('.modal-manager').classList.add('show');
}

function closeModal() {
  document.querySelector('.overlay').classList.remove('show');
}

modalOpen.addEventListener('click', function(e) {
  e.preventDefault();
  openModal();
})

modalClose.addEventListener('click', function(e) {
  e.preventDefault();
  closeModal();
})
