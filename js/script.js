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

/*Chart*/
var ctx = document.getElementById('myChart').getContext('2d');
var Chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [280, 150, 200, 280, 350, 330, 320, 180, 250, 270]
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [300, 140, 240, 220, 370, 100, 150, 200, 400, 280],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
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
