import { data } from './data.js';

const nav = document.querySelector('.nav');
const navItem = nav.querySelectorAll('ul > li');
const body = document.querySelector('body');
const nickName = document.querySelector('.nickName');
const visualImg = document.querySelector('.visual img');

// * setBgColor
function setBgColor(e) {
  const itemIndex = e.target.closest('li').dataset.index;

  for (let i = 0; i < data.length; i++) {
    const dataColor = data[i].color;
    if (+itemIndex === i + 1) {
      body.style.background = `linear-gradient(to bottom, ${dataColor[0]}, ${dataColor[1]}`;
    }
  }
}

// * setImage
function setImage(e) {
  const itemIndex = e.target.closest('li').dataset.index;
  for (let i = 0; i < data.length; i++) {
    const dataSrc = data[i].name.toLowerCase();
    console.log(data[i].name);
    if (+itemIndex === i + 1) {
      visualImg.src = `./assets/${dataSrc}.jpeg`;
    }
  }
}

// * setNameText
function setNameText(e) {
  const itemIndex = e.target.closest('li').dataset.index;
  for (let i = 0; i < data.length; i++) {
    if (+itemIndex === i + 1) {
      nickName.textContent = data[i].name;
    }
  }
}

// * handleNavItem
function handleNavItem(e) {
  const target = e.target.closest('li');
  
  if (!target) {
    return;
  }
  
  navItem.forEach((item) => {
    item.classList.remove('is-active');
  });
  
  target.classList.add('is-active');

  setBgColor(e);
  setImage(e);
  setNameText(e);
}

nav.addEventListener('click', handleNavItem);