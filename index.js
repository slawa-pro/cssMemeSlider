const memeImages = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.dot');
const memeTitles = document.querySelectorAll('.title-meme');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const imgId = dot.getAttribute('data-img');

    // Скрываем все изображения и заголовки
    memeImages.forEach(img => img.classList.add('hidden'));
    memeTitles.forEach(title => title.classList.add('hidden'));

    // Показываем текущее изображение и заголовок
    document.getElementById(imgId)?.classList.remove('hidden');
    document.querySelector(`[data-title="${imgId}"]`)?.classList.remove('hidden');

    // Обновляем выделение точек
    dots.forEach(dot => dot.classList.remove('selected'));
    dot.classList.add('selected');
  });
});