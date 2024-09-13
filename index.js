const memeImages = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    // Скрыть все изображения, добавив класс 'hidden'
    memeImages.forEach(img => img.classList.add('hidden'));

    // Получаем ID изображения, которое нужно показать
    const imgId = dot.getAttribute('data-img');
    const imgToShow = document.getElementById(imgId);

    // Показать выбранное изображение, убрав класс 'hidden'
    if (imgToShow) {
      imgToShow.classList.remove('hidden');
    }

    // Убираем класс 'selected' у всех точек и добавляем его к текущей
    dots.forEach(dot => dot.classList.remove('selected'));
    dot.classList.add('selected');
  });
});
