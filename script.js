var itemCmp = document.querySelector('.item-content');
var imgItem = document.querySelector('.img-item');
var titleItem = document.querySelector('.title-item');
var valorItem = document.querySelector('.valor-item');
var pacelaItem = document.querySelector('.pacela-item');
var descricaoItem = document.querySelector('.descricao-item');
var bxX = document.querySelector('.bx-x');
var cdp = document.querySelector('.cdp');
var body = document.querySelector('body');
var item1 = document.querySelector('.item-1');
var item2 = document.querySelector('.item-2');
var item3 = document.querySelector('.item-3');
var item4 = document.querySelector('.item-4');

item1.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/0yGSWbBH/Whats-App-Image-2022-01-26-at-16-36-33-1-removebg-preview.png"
  titleItem.innerHTML = "Capa de sousplat com estampa natalina branca com tecido 100% algodão"
  valorItem.innerHTML = "R$17,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Capa de sousplat com estampa natalina branca para enfeitar sua mesa."
  cdp.value = "UKYU"
});

item2.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/6Q9vDBs6/Whats-App-Image-2022-01-26-at-16-36-33-2-removebg-preview.png"
  titleItem.innerHTML = "Capa de sousplat com estampa natalina vermelha com tecido 100% algodão"
  valorItem.innerHTML = "R$17,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Capa de sousplat com estampa natalina vermelha para enfeitar sua mesa."
  cdp.value = "JYGY"
});

item3.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/Hxn7k3sf/Whats-App-Image-2022-01-26-at-16-36-33-3-removebg-preview.png"
  titleItem.innerHTML = "Capa de sousplat com estampa natalina verde com tecido de oxford"
  valorItem.innerHTML = "R$14,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Capa de sousplat com estampa natalina verde para enfeitar sua mesa."
  cdp.value = "JSUS"
});

item4.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/tg2xb8y3/Whats-App-Image-2022-01-26-at-16-36-33-4-removebg-preview-1.png"
  titleItem.innerHTML = "Capa de sousplat com estampa florida de girassóis com tecido 100% algodão"
  valorItem.innerHTML = "R$14,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Capa de sousplat com estampa florida de girassóis para enfeitar sua mesa."
  cdp.value = "GFCF"
});