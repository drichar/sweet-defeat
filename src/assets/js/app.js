import $ from 'jquery'
window.$ = $
import 'bootstrap'


/**
 * Scrolling menu behavior
 */
const header = document.querySelector('.sd-header');
const hero = document.querySelector('.sd-hero');

function debounce(fn, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), wait);
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


/**
 * Jump to form on Order Now click
 */
(function() {
  $('.sd-btn-order').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('#sdFullName').focus();
  });
})();


/**
 * Stop video playback when modal is closed
 */
(function() {
  $('.modal').on('hidden.bs.modal', function (e) {
    $('.modal iframe').attr('src', $('.modal iframe').attr('src'));
  });
})();
