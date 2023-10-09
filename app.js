window.addEventListener('mousemove', (details) => {
    // console.log(details);
    console.log(details.clientX);
     var rect = document.querySelector('.rect');
    let valueX =  gsap.utils.mapRange(
        0, 
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2, 
        window.innerWidth - (200 + rect.getBoundingClientRect().width/2) , 
        details.clientX
    );
    gsap.to('.rect', {
        left: valueX + "px",
        ease: Power3,
    });

});

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = [ "Learner😉...","FrontEnd Developer 😌	", "Learning GSAP.😏" ];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}


const type = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
      cursor.classList.remove('blink');
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    } else {
      cursor.classList.add('blink');
      setTimeout(erase, 1000);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    type();
  })