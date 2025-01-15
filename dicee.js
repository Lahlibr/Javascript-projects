// Array of dice image paths
const diceImages = [
  './images/dice1.png',
  './images/dice2.png',
  './images/dice3.png',
  './images/dice4.png',
  './images/dice5.png',
  './images/dice6.png'
];
function random() {
  const randomNumber = Math.random();
  const index = Math.floor(randomNumber * diceImages.length);
  return diceImages[index];
}
const randomImage1 = random();
const randomImage2 = random();
const img1=document.querySelector('.img1').setAttribute('src',randomImage1);
const img2=document.querySelector('.img2').setAttribute('src', randomImage2);

if(randomImage1!=randomImage2){
  document.querySelector('h1').innerHTML="tryagain";
}else {
  document.querySelector('h1').innerHTML="Winner";
}