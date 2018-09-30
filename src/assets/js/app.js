import $ from 'jquery'
window.$ = $
import 'bootstrap'


const header = document.querySelector('.sd-header');
const hero = document.querySelector('.sd-hero');

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function onScroll() {
  let currScrollTop = window.scrollY;
  let isScrollingSm = currScrollTop > 0;
  let isScrollingLg = currScrollTop > hero.offsetHeight;

  header.classList.toggle('sd-header-scroll-sm', isScrollingSm);
  header.classList.toggle('sd-header-scroll-lg', isScrollingLg);
}

window.addEventListener('scroll', debounce(onScroll, 16));
