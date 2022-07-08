import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

(function () {
  let orderBox = document.getElementById("orderBox");
  let pointerElem = document.getElementById("boxElem");

  function onMouseMove(event) {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let crd = orderBox.getBoundingClientRect();
    let activePointer =
      crd.left <= mouseX &&
      mouseX <= crd.right &&
      crd.top <= mouseY &&
      mouseY <= crd.bottom;

    requestAnimationFrame(function movePointer() {
      if (activePointer) {
        pointerElem.classList.remove("box-pointer-hidden");
        pointerElem.style.left = Math.floor(mouseX) + "px";
        pointerElem.style.top = Math.floor(mouseY) + "px";
      } else {
        pointerElem.classList.add("box-pointer-hidden");
      }
    });
  }

  function disablePointer() {
    pointerElem.style.left = "45%";
    pointerElem.style.right = "55%";
    pointerElem.style.buttom = "-65px";
    requestAnimationFrame(function hidePointer() {
      pointerElem.classList.add("box-pointer-hidden");
    });
  }

  if (orderBox) {
    orderBox.addEventListener("mousemove", onMouseMove, false);
    orderBox.addEventListener("mouseleave", disablePointer, false);
  }
})();

