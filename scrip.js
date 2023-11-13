



const baiat = document.querySelector(".boy");

const getDistance = () => {
  return parseInt(baiat.style.transform.replace('translateX(', ''), 10) || 0;
};

window.addEventListener('keydown', (ev) => {

  if (ev.keyCode === 38) {
    baiat.classList.add("jump");
  } else if (ev.keyCode === 39) {

    const distx = getDistance();
    const maximum = window.innerWidth - boy.getBoundingClientRect().right;
    if (maximum > 0 && distx < 1000) {
      baiat.style.transform = `translateX(${distx + 30}px) rotateY(0deg)`
    } else {
      baiat.style.transform = `translateX(${distx - 1}px) rotateY(180deg)`;
    }
    console.log(distx);

  } else if (ev.keyCode === 37) {
    const distY = getDistance();
    const minm = boy.getBoundingClientRect().left;
    console.log('ghhghg', minm);
    console.log(distY);
    if (minm > 0 && distY > -1000) {
      baiat.style.transform = `translateX(${distY - 30}px) rotateY(180deg)`
    } else {
      baiat.style.transform = `translateX(${distY + 1}px) rotateY(0deg)`

    }
  }









});
baiat.addEventListener('animationend', () => {
  baiat.classList.remove("jump");
});









































