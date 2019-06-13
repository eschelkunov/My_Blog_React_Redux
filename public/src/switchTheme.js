import img1 from '../images/site-hero.jpg';
import img2 from '../images/mountains.jpg';

const root = document.documentElement;

document.querySelectorAll('.toolbar > button').forEach((btn) => {
  btn.addEventListener('click', updateTheme);
});

function updateTheme(e) {
  switch (e.target.value) {
    case 'dark':
      root.style.setProperty('--bgImg', `url(${img2})`);
      window.localStorage.setItem('theme', 'dark');
      break;
    case 'light':
      root.style.setProperty('--bgImg', `url(${img1})`);
      window.localStorage.setItem('theme', 'light');
      break;
  }
}

const theme = window.localStorage.getItem('theme');
if (theme === 'dark') {
  root.style.setProperty('--bgImg', `url(/${img2})`);
} else {
  root.style.setProperty('--bgImg', `url(/${img1})`);
}
