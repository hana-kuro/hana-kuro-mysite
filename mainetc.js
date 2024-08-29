'use strict';
{
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const ul = document.querySelector('ul');
  const slide = ul.children;
  const dots = [];
  const delay = 0.9
  let indeX = 0;

  function setupDots() {//画像下〇ボタンを定義する関数
    for (let i = 0; i < slide.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        indeX = i;
        upDateDots();
        moveslide();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
  }
  function upDateDots(){//〇ボタンの色を変える関数
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[indeX].classList.add('current');
  }
  function updateButton() {//スライドがない向きのボタンを隠す関数
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if (indeX === 0) {
      prev.classList.add('hidden');
    }
    if (indeX === slide.length - 1) {
      next.classList.add('hidden');
    }
  }
  function roll() {//スライド外に行ったら先頭及び最後に戻る関数
    if (indeX === -1) {
      indeX = slide.length - 1;
    }
    if (indeX === slide.length) {
      indeX = 0;
    }
  }
  function moveslide() {
    roll();
    const slideWidth = slide[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * indeX}px)`;
    ul.style.transition = `transform ${delay}s`;

  }
  
  setupDots();
  prev.addEventListener('click', () => {
    indeX--;
    moveslide();
    upDateDots();
  });
  next.addEventListener('click', () => {
    indeX++;
    moveslide();
    upDateDots();
  });

}