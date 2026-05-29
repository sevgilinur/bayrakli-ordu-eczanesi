const checkbox = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const slider = document.querySelector('.nav-slider');

function updateSlider() {
  const active = document.querySelector('.nav-links a.active');
  if (active && slider) {
    slider.style.width = active.offsetWidth + 'px';
    slider.style.left = active.offsetLeft + 'px';
  }
}

function closeMenu() {
  if (checkbox) checkbox.checked = false;
}

if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
    const currentPage = window.location.pathname.split('/').pop().split('#')[0];
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage || (!currentPage && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);

/* Image slider */
const sliderTrack = document.getElementById('sliderTrack');
const sliderDots = document.getElementById('sliderDots');
if (sliderTrack) {
  const slides = sliderTrack.querySelectorAll('.slide');
  let currentSlide = 0;
  let slideInterval;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
  });
  const dots = sliderDots.querySelectorAll('span');

  function goToSlide(index) {
    currentSlide = index;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  goToSlide(0);
  slideInterval = setInterval(nextSlide, 10000);

  window.prevSlide = function() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  window.nextSlide = function() {
    goToSlide((currentSlide + 1) % slides.length);
  };
}

/* Brand carousel - infinite loop */
const track = document.getElementById('brandTrack');
if (track) {
  const items = Array.from(track.querySelectorAll('span'));
  const itemGap = 16;
  let currentIndex = 0;
  let isTransitioning = false;

  // Clone all items for seamless loop
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  const allItems = track.querySelectorAll('span');
  const totalItems = items.length;

  function getItemWidth() {
    return allItems[0].offsetWidth + itemGap;
  }

  function slideBrands() {
    if (isTransitioning) return;
    currentIndex++;

    const offset = -currentIndex * getItemWidth();
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(${offset}px)`;

    // When we reach the cloned set, jump back to start without animation
    if (currentIndex >= totalItems) {
      isTransitioning = true;
      setTimeout(() => {
        currentIndex = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        isTransitioning = false;
      }, 500);
    }
  }

  setInterval(slideBrands, 4000);
}

/* Nöbet takvimi */
const nobetDiv = document.getElementById('nobet-takvimi');
if (nobetDiv) {
  const gunAdlari = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
  const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

  const simdi = new Date();
  const yil = simdi.getFullYear();
  const ay = simdi.getMonth();
  const gunSayisi = new Date(yil, ay + 1, 0).getDate();
  const ilkGun = new Date(yil, ay, 1).getDay(); // 0=Paz
  // Pazartesi başlangıç: 0=Paz -> 1=Pzt index'e çevir
  const baslangic = ilkGun === 0 ? 6 : ilkGun - 1;

  // Nöbet günleri (her ay başı güncelle)
  const nobetGunleri = [1, 4, 7, 10, 12, 14, 16, 19, 22, 25, 27, 30];

  let html = `<h3 class="nobet-title">${aylar[ay]} ${yil}</h3>`;
  html += `<div class="nobet-grid">`;

  // Gün adları
  gunAdlari.forEach(g => {
    html += `<div class="nobet-header">${g}</div>`;
  });

  // Boşluklar
  for (let i = 0; i < baslangic; i++) {
    html += `<div></div>`;
  }

  // Günler
  for (let g = 1; g <= gunSayisi; g++) {
    const nobetVar = nobetGunleri.includes(g);
    const bugun = (g === simdi.getDate() && simdi.getMonth() === ay && simdi.getFullYear() === yil);

    let cls = 'nobet-day';
    if (nobetVar) cls += ' nobet-day--nobet';
    if (bugun) cls += ' nobet-day--today';

    html += `<div class="${cls}">${g}</div>`;
  }

  html += `</div>`;
  html += `<div class="nobet-legend">
    <span><span class="nobet-legend-dot nobet-legend-dot--nobet"></span> Nöbetçi</span>
    <span><span class="nobet-legend-dot nobet-legend-dot--today"></span> Bugün</span>
  </div>`;

  nobetDiv.innerHTML = html;
}
