function afficher_menu(){
    var recouvrement = document.getElementById("recouvrement-noir");
    recouvrement.classList.add("recouvrement-burger");
    var menu_burger = document.getElementById("menu-burger");
    menu_burger.style.display="none";
}

function masquer_menu(){
    var recouvrement = document.getElementById("recouvrement-noir");
    recouvrement.classList.remove("recouvrement-burger");
    var menu_burger = document.getElementById("menu-burger");
    menu_burger.style.display="block";
}



const w = window.innerWidth;
const h = window.innerHeight;
console.log(w,h);

const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

const notMoved = false;
const move = e => {
  if(notMoved === false){
    setTimeout(e =>document.body.classList.remove('notMoved'),1000);
    ;
  }
  console.log(e);
  let scrollY = window.scrollY;
  let hex = hslToHex(Math.round(e.pageX/w * 80) + 80, 20,0+Math.round((e.pageY-scrollY)/h * 80));
  document.body.style.backgroundColor = hex;
}


document.addEventListener('mousemove',move);
document.addEventListener('mouseenter',move);

function playCowSound() {
    const cowSound = document.getElementById('cowSound');
    cowSound.currentTime = 0; // Remet le son au début à chaque clic
    cowSound.play(); // Joue le son
}
