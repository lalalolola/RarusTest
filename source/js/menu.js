const buttonOpenCatalogMenu = document.querySelector('.catalog-menu-mobile__button-open');
const buttonCloseCatalogMenu = document.querySelector('.catalog-menu-mobile__button-close');
const catalogMenu = document.querySelector('.catalog-menu-mobile');
const header = document.querySelector('.main-header')

buttonOpenCatalogMenu.addEventListener('click', onButtonOpenCatalogMenu);
buttonCloseCatalogMenu.addEventListener('click', onButtonCloseCatalogMenu);

function onButtonOpenCatalogMenu (){
  catalogMenu.classList.add('catalog-menu-mobile--open');
  buttonOpenCatalogMenu.classList.add('button-toggle--active');
  buttonCloseCatalogMenu.classList.add('button-toggle--active');
  buttonCloseCatalogMenu.addEventListener('click', onButtonCloseCatalogMenu);
  buttonOpenCatalogMenu.removeEventListener('click', onButtonOpenCatalogMenu);
}

function onButtonCloseCatalogMenu (){
  catalogMenu.classList.remove('catalog-menu-mobile--open');
  buttonOpenCatalogMenu.classList.remove('button-toggle--active');
  buttonOpenCatalogMenu.addEventListener('click', onButtonOpenCatalogMenu);
  buttonCloseCatalogMenu.removeEventListener('click', onButtonCloseCatalogMenu);
}

