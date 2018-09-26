import $ from 'jquery'
window.$ = $
import 'bootstrap'


const header = document.querySelector('.sd-header');

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
  let isScrolling = currScrollTop > 0;

  header.classList.toggle('sd-header-scroll', isScrolling);
}

window.addEventListener('scroll', debounce(onScroll, 16));
