let timer = 60;
let hitrn;
let score = 0;
let HitVal;

hit = () => {
  HitVal = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = HitVal;
};

makeBubble = () => {
  let clutter = "";
  for (let i = 0; i < 144; i++) {
    hitrn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble" class="flex">${hitrn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
};

SetTimer = () => {
  let timeInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector("#pbottom").style.fontSize = "5rem";
      document.querySelector("#pbottom").innerHTML = "Game Over";
    }
  }, 1000);
};

increaseScore = () => {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
};

document.getElementById("pbottom");
addEventListener(
  "click",
  (funtion = (e) => {
    let num =  Number(e.target.textContent);
    if (num === HitVal) {
      hit();
      increaseScore();
      makeBubble();
    }
  })
);

hit();
makeBubble();
SetTimer();
