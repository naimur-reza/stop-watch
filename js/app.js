// Global content
const first = document.getElementById("first");
let fourth = document.getElementById("second");
let count = 00;
let second = 0;
let startInter;
// Configure the my interval
const myInterVal = () => {
  count = count + 1;
  if (count < 9) {
    fourth.innerText = "0" + count;
  } else if (count > 9) {
    fourth.innerText = count;
  }
  if (count == 99) {
    count = 0;
  }
  //count the second
  if (count == 98) {
    second++;
    first.innerText = second;
    if (second < 10) {
      first.innerText = "0" + second;
    }
  }
};

// Set timeInterval

const startAudio = new Audio("./sound/car-start.mp3")
const stopAudio = new Audio("./sound/car-stop.mp3")
const resetAudio = new Audio("./sound/car-horn.wav")


document.getElementById("start").addEventListener("click", function () {
  const firstInt = parseFloat(first);
   startInter = setInterval(myInterVal, 40);
  startAudio.play();
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(startInter);
  stopAudio.play();
});

document.getElementById("Reset").addEventListener("click", function () {
  first.innerText = "00";
  fourth.innerText = "00";
  count = 0;
  second = 0;
  clearInterval(startInter)
  resetAudio.play();
});


