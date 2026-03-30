(function () {
  document.querySelectorAll('.case-study-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.case-study-carousel__track');
    var slides = carousel.querySelectorAll('.case-study-carousel__slide');
    var prev = carousel.querySelector('.case-study-carousel__btn--prev');
    var next = carousel.querySelector('.case-study-carousel__btn--next');
    if (!track || !slides.length || !prev || !next) return;

    var index = 0;

    function go() {
      track.style.transform = 'translateX(-' + index * 100 + '%)';
    }

    prev.addEventListener('click', function () {
      index = (index - 1 + slides.length) % slides.length;
      go();
    });

    next.addEventListener('click', function () {
      index = (index + 1) % slides.length;
      go();
    });
  });
})();
