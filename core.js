const judul = document.getElementById('judul');
const artis = document.getElementById('artis');
const lirik = document.getElementsByClassName("lirik-body")[0];

const lrc = ["The chemistry was not enough", "Oh we just collide", "I hate myself when I say", "I...", "Need tonight", "Just say goodbye",
"I...", "Will give what's left", "Inside", "So rush over me one more time", "I will miss you", "Torn apart after tonight",
"And we can't fix it", "Rush over me one more time", "The end is coming", "Rush over, rush over me", "'Cause I will miss you", ". . .", "'Cause I will miss you"];
const delay = [0, 4, 4.2, 1.8, 3.5, 2, 1.6, 3.5, 2, 5.5, 5.5, 2, 5, 2.25, 5, 2, 5, 3, 11];
const typedSpeed = [3000, 3800, 2300, 2500, 1000, 2100, 2500, 1000, 1000,
4100, 1000, 4000, 1500, 3400, 1800, 3800, 1800, 9000, 1800];
var index = 0;
let tmps;

for(let i = 0;i < lrc.length;i++) {
  let tmp = tampilkan("p");
  tmp.textContent = lrc[i];
  lirik.appendChild(tmp);
}
  
tmps = lirik.children;
function putarLirik() {
  setTimeout(function() {
    typed(tmps[index], lrc[index], 0, typedSpeed[index] / lrc[index].length);
    index++;
    if(index < lrc.length) putarLirik();
  }, delay[index] * 1000);
}

function typed(ele, char, end, spd) {
  setTimeout(function() {
    ele.innerHTML = '<span style="color:white">' + char.substring(0, end) + '</span>' + char.substring(end);
    end++;
    if(end <= char.length) typed(ele, char, end, spd);
  }, spd);
}

function tampilkan(tag) {
  const tmp = document.createElement(tag);
  tmp.classList.add("lirik-child");
  return tmp;
}

judul.textContent = "Rush Over Me";
artis.textContent = "ILLENIUM ft. Haliene";
putarLirik();
