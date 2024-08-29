'use strict';

{
  // Humberguar Menu
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close=document.getElementById('close');
  // Close menu when click menu-contents
  const close1=document.getElementById('close1');
  const close2=document.getElementById('close2');
  const close3=document.getElementById('close3');
  const close4=document.getElementById('close4');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    close.classList.add('show2');
    open.classList.add('hide');
  });
  close.addEventListener('click',()=>{
    overlay.classList.remove('show');
    close.classList.remove('show2');
    open.classList.remove('hide');
  });
  close1.addEventListener('click',()=>{
    overlay.classList.remove('show');
    close.classList.remove('show2');
    open.classList.remove('hide');
  });
  close2.addEventListener('click',()=>{
    overlay.classList.remove('show');
    close.classList.remove('show2');
    open.classList.remove('hide');
  });
  close3.addEventListener('click',()=>{
    overlay.classList.remove('show');
    close.classList.remove('show2');
    open.classList.remove('hide');
  });
  close4.addEventListener('click',()=>{
    overlay.classList.remove('show');
    close.classList.remove('show2');
    open.classList.remove('hide');
  });
}