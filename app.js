// themeColor
let color1 = document.getElementById('default');
let color2 = document.getElementById('comfort');
let color3 = document.getElementById('dark');

//container
let container = document.getElementById('container');
let topic = document.getElementById('topics');
let point = document.getElementById('points');
let anchor = document.querySelectorAll('a');

//window
let winDow = document.getElementById('window');
let text1 = document.querySelectorAll('h1');
let text2 = document.querySelectorAll('h2');
let text3 = document.querySelectorAll('h3');
let text4 = document.querySelectorAll('h4');

//settings
let font = document.querySelector('.fonts');
let light = document.querySelector('.lighting');
let fontOption = document.querySelector('.font_option');
let lightOption = document.querySelector('.theme_option');

let note = document.getElementById('notes');
let fontSelect = document.getElementById("options");

// fonts settings
let textSize = document.getElementById("text_size");
let decreaseButton = document.getElementById("decrease");
let sizePer = document.getElementById("size");
let increaseButton = document.getElementById("increase");

let onePage = document.getElementById("one-page");
let twoPage = document.getElementById("two-page");

let align = document.getElementById("alignment");


//icons
let setIcon = document.getElementById('settingsIcon');
let set = document.getElementById('settings');

let isActive = false;
setIcon.onclick = () => {
  if (isActive) {
    set.style.display = "none";
    isActive = false;
  } else {
    set.style.display = "block";
    isActive = true;
  }
}

winDow.onclick = () => {
    set.style.display = "none";
    isActive = false;
}

    

font.addEventListener('click', changeToggle1);
light.addEventListener('click', changeToggle2);

function changeToggle1() {
  font.style.color = "#7278c1";
  light.style.color = "#ccc";
  fontOption.style.display = "flex";
  lightOption.style.display = "none"; 
  fontOption.style.flexDirection = "column";
}
function changeToggle2() {
  font.style.color = "#ccc";
  light.style.color = "#7278c1";
  fontOption.style.display = "none";
  lightOption.style.display = "flex";
  lightOption.style.flexDirection = "column"; 
}

fontSelect.addEventListener('change', function() {

if (fontSelect.value === "option1") {
  container.style.fontFamily = 'Verdana';

} else if (fontSelect.value === "option2") {
  container.style.fontFamily = 'Lucida Sans';

} else if (fontSelect.value === "option3") {
  container.style.fontFamily = 'Arial';

} else if (fontSelect.value === "option4") {
  container.style.fontFamily = 'Times New Roman';

} else if (fontSelect.value === "option5") {
  container.style.fontFamily = 'Georgia';

} else if (fontSelect.value === "option6") {
  container.style.fontFamily = 'monospace';
  
} else if (fontSelect.value === "option7") {
  container.style.fontFamily = 'sans-serif';
  
}
});


let n = 16;
increaseButton.addEventListener("click", function() {
if (n < 24) {
    n += 2; 
    container.style.fontSize = n + "px";
    sizePer.innerHTML = Math.round((n*100)/16) + "%";
    container.style.lineHeight = (n + 8) + "px";
    
    for (let i = 0; i < text1.length; i++) {
        text1[i].style.lineHeight = 0.2*n + "rem";
        
    }
}
 
});

decreaseButton.addEventListener("click", function() {
if (n > 8) {
    n -= 2; 
    container.style.fontSize = n + "px";
    sizePer.innerHTML = Math.round((n*100)/16) + "%"; 
    container.style.lineHeight = (n + 8) + "px";
    
    for (let i = 0; i < text1.length; i++) {
        text1[i].style.lineHeight = 2*n + "px";
        
    }
}
});


align.addEventListener('change', function() {

if (align.value === "option1") {
  container.style.textAlign = 'left';

} else if (align.value === "option2") {
  container.style.textAlign = 'justify';
  
}
});


function themeColor(clr1, clr2, clr3, clr4, clr5, clr6, clr7)  { 
    document.body.style.backgroundColor = clr1;
    topic.style.backgroundColor = clr5;
    winDow.style.color = clr2;
    navBar.style.color = clr3;

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.borderColor = clr6;
        headings[i].style.color = clr3;
    }
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].style.color = clr2;
    }
    for (let i = 0; i < text1.length; i++) {
        text1[i].style.color = clr3;
    }
    for (let i = 0; i < text3.length; i++) {
        text3[i].style.color = clr3;
    }
    for (let i = 0; i < text4.length; i++) {
        text4[i].style.color = clr4;
    }

    if (mediaQuery.matches) {
        topic.style.backgroundColor = clr7;
    }
   
}

let headings = document.getElementsByClassName('headings');

color1.addEventListener("click", function() {
  themeColor('#e5e5e5', '#444', '#111', '#282828', '#b8b8b8', '#555', '#ccc');
});
color2.addEventListener("click", function() {
  themeColor('#424253', '#ddd', '#fff', '#eee', '#343541', '#999', '#393b47');
});
color3.addEventListener("click", function() {
  themeColor('#24252b', '#ddd', '#fff', '#eee', '#1b1b1f', '#999', '#212121');
});


//notes
let isActive2 = true;
const mediaQuery = window.matchMedia('(max-width: 800px)');

note.addEventListener('click', function() {
    if (mediaQuery.matches) {
        if (isActive2 == true) {
            topic.style.transform = "translateX(0)";
            topic.style.boxShadow = "1px 0 100px 0 #000";
            isActive2 = false;
        } else {
            topic.style.transform = "translateX(-100%)";
            topic.style.boxShadow = "0 0 0 0 #000";
            isActive2 = true;
        }
    
    } else {
            if (isActive2 == true) {
            topic.style.marginLeft = "-22%";
            point.style.width = "27%";
            isActive2 = false;
        } else {
            topic.style.marginLeft = "0%";
            point.style.width = "18%";
            isActive2 = true;
        }
    }
    
});


let navBar = document.querySelector('.nav');
let ptCon = document.getElementById('pointsCon');
let ptCon1 = document.getElementById('pointsCon1');
let ptCon2 = document.getElementById('pointsCon2');
ptCon.innerHTML = ptCon1.innerHTML;

let opera = document.getElementById('operatingSystem');
let conet = document.getElementById('computerNetworks');
opera.style.display = "none";

let pa1 = document.getElementById('panchor1');
let pa2 = document.getElementById('panchor2');

pa1.addEventListener('click', function () {
    opera.style.display = "none";
    conet.style.display = "block";
    ptCon.innerHTML = ptCon1.innerHTML;

    if (mediaQuery.matches) {
        topic.style.transform = "translateX(-100%)";
        topic.style.boxShadow = "0 0 0 0 #000";
        isActive2 = true;
    }
    

});

pa2.addEventListener('click', function () {
    opera.style.display = "block";
    conet.style.display = "none";
    ptCon.innerHTML = ptCon2.innerHTML;

    if (mediaQuery.matches) {
        topic.style.transform = "translateX(-100%)";
        topic.style.boxShadow = "0 0 0 0 #000";
        isActive2 = true;
    }
});





let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");

let blink1 = document.getElementById("blink1");
let blink2 = document.getElementById("blink2");
let blink3 = document.getElementById("blink3");
blink1.style.display = "none";
blink2.style.display = "none";
blink3.style.display = "none";

let cross = document.getElementById("cross");
let btn = document.getElementById("btn");
let typin = document.getElementById("hello");
let userName = document.getElementById("name");
let inputName = document.getElementById("inputName");



let i = 0;
let speed = 50;

userName.addEventListener("input", function() {
    if (userName.value.trim() !== "") {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

btn.addEventListener('click', typeWriter); 
function typeWriter() {

    inputName.style.display = "none";

    let user = userName.value.trim().charAt(0).toUpperCase() + userName.value.slice(1).trim();

    let t1 = `Hello ${user}!`;
    let t2 = "In this message, it's important to highlight the intention behind taking inspiration from Apna College (Resources) and reassure users that it was done with ethical considerations and with the aim of improving their experience. Encourage users to provide feedback, and emphasize your commitment to continuous improvement based on their input.";
    let t3 = "Thank you for visiting our website. We hope you enjoy your stay!"

    let len1 = t1.length + t2.length;
    let len2 = t1.length + t2.length + t3.length;
    // console.log(len1);
    // console.log(len2);

  if (i < t1.length) {
    blink1.style.display = "inline";
    line1.innerHTML += t1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i > t1.length-1 && i <= len1) {
    blink1.style.display = "none";
    blink2.style.display = "inline";
    line2.innerHTML += t2.charAt(i - t1.length);
    i++;
    setTimeout(typeWriter, speed);
    // console.log(i);
  }
  if (i > len1 && i <= len2 ) {
    blink2.style.display = "none";
    blink3.style.display = "inline";
    line3.innerHTML += t3.charAt(i - len1-1);
    i++;
    setTimeout(typeWriter, speed);
    // console.log(i);
  }
  if (i > len2 && i <= len2+70) {
    if (i == len2+70) {
        blink3.style.display = "none";
    }   
    i++;
    setTimeout(typeWriter, speed);   
  }

 
}


let blur = document.getElementById('blur');

cross.addEventListener('click',function() {
    typin.style.display = "none";
    blur.style.display = "none";
});




userName.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Check if Enter key (keyCode 13) is pressed
        typeWriter();
    }
});


let moreNote = document.getElementById('moreNotes');
let inProgress = document.getElementById('inProgress');

let ai = true;
moreNote.addEventListener('click', function() {
    if (ai) {
        inProgress.style.display = "block";
        ai = false;
    } else {
        inProgress.style.display = "none";
        ai = true;
    }
    
});