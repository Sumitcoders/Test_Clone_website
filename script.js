const nxt = document.getElementById('next')
const prev = document.getElementById('prev')
nxt.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg);
var im1 = document.getElementById('img1')
var im2 = document.getElementById('img2')
var im3 = document.getElementById('img3')
var im4 = document.getElementById('img4')
var im5 = document.getElementById('img5')
var im6 = document.getElementById('img6')
var impos = 1024
var counter = 0
function nextImg(){
    
    

    if (counter<5){
        counter += 1
    }
    var tran = `translateX(-${impos*counter}px)`
    // console.log(tran)
    im1.style.transform = tran
    im2.style.transform = tran
    im3.style.transform = tran
    im4.style.transform = tran
    im5.style.transform = tran
    im6.style.transform = tran
    console.log(counter)

    if (counter === 5){
        nxt.style.visibility = "hidden"
    }else{
        nxt.style.visibility = "visible"
    }
    prev.style.visibility = "visible"
    
}
function prevImg(){
    console.log(tran)
    if (counter>0){
        counter -= 1
        
    }else{
        return
    }
    console.log(counter)
    
    var tran = `translateX(-${impos*counter}px)`
    // console.log(tran)
    im1.style.transform = tran
    im2.style.transform = tran
    im3.style.transform = tran
    im4.style.transform = tran
    im5.style.transform = tran
    im6.style.transform = tran

    if (counter === 0){
        prev.style.visibility = "hidden"
    }else{
        prev.style.visibility = "visible"
    }
    nxt.style.visibility = "visible"
}

const c1 = document.getElementById('i1')
const c2 = document.getElementById('i2')
const c3 = document.getElementById('i3')
const c4 = document.getElementById('i4')
const c5 = document.getElementById('i5')
const c6 = document.getElementById('i6')

c1.addEventListener('click',open_link1)
c2.addEventListener('click',open_link2)
c3.addEventListener('click',open_link3)
c4.addEventListener('click',open_link4)
c5.addEventListener('click',open_link5)
c6.addEventListener('click',open_link6)
c1.addEventListener('mouseover', function() {
    c1.style.cursor = 'pointer'; 
});
c2.addEventListener('mouseover', function() {
    c2.style.cursor = 'pointer'; 
});
c3.addEventListener('mouseover', function() {
    c3.style.cursor = 'pointer'; 
});
c4.addEventListener('mouseover', function() {
    c4.style.cursor = 'pointer'; 
});
c5.addEventListener('mouseover', function() {
    c5.style.cursor = 'pointer'; 
});
c6.addEventListener('mouseover', function() {
    c6.style.cursor = 'pointer'; 
});

function open_link1(){
    window.open("https://experiments.withgoogle.com/collection/webxr","_self")
}
function open_link2(){
    window.open("https://labs.google/","_self")
}
function open_link3(){
    window.open("https://experiments.withgoogle.com/collection/arts-culture","_self")
}
function open_link4(){
    window.open("https://experiments.withgoogle.com/collection/experimentsforlearning","_self")
}
function open_link5(){
    window.open("https://experiments.withgoogle.com/collection/startwithone","_self")
}
function open_link6(){
    window.open("https://experiments.withgoogle.com/collection/chrome","_self")
}


const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')

b1.addEventListener('click',b1_link)
b2.addEventListener('click',b2_link)
b3.addEventListener('click',b3_link)
b4.addEventListener('click',b4_link)
b5.addEventListener('click',b5_link)


function b1_link(){
    window.open("https://experiments.withgoogle.com/passage-of-water","_self")
}
function b2_link(){
    window.open("https://experiments.withgoogle.com/instrument-playground","_self")
}
function b3_link(){
    window.open("https://experiments.withgoogle.com/cultural-icons","_self")
}
function b4_link(){
    window.open("https://experiments.withgoogle.com/say-what-you-see","_self")
}
function b5_link(){
    window.open("https://experiments.withgoogle.com/dont-touch-the-art","_self")
}
b1.addEventListener('mouseover', function() {
    b1.style.cursor = 'pointer'; 
});
b2.addEventListener('mouseover', function() {
    b2.style.cursor = 'pointer'; 
});
b3.addEventListener('mouseover', function() {
    b3.style.cursor = 'pointer'; 
});
b4.addEventListener('mouseover', function() {
    b4.style.cursor = 'pointer'; 
});
b5.addEventListener('mouseover', function() {
    b5.style.cursor = 'pointer'; 
});

const sbox1 = document.getElementById('sbox1')
const sbox2 = document.getElementById('sbox2')
const sbox3 = document.getElementById('sbox3')
const sbox4 = document.getElementById('sbox4')

sbox1.addEventListener('click',sbox1_link)
sbox2.addEventListener('click',sbox2_link)
sbox3.addEventListener('click',sbox3_link)
sbox4.addEventListener('click',sbox4_link)

function sbox1_link(){
    window.open("https://jfriedhoff.medium.com/tarot-time-b149230a35d6","_blank")
}
function sbox2_link(){
    window.open("https://medium.com/tensorflow/move-mirror-an-ai-experiment-with-pose-estimation-in-the-browser-using-tensorflow-js-2f7b769f9b23?linkId=54484629","_blank")
}
function sbox3_link(){
    window.open("https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5?","_blank")
}
function sbox4_link(){
    window.open("https://jfriedhoff.medium.com/where-c-meets-css-tech-tricks-from-an-ar-lyrics-experiment-3cc4becaab6","_blank")
}
sbox1.addEventListener('mouseover', function() {
    sbox1.style.cursor = 'pointer'; 
});
sbox2.addEventListener('mouseover', function() {
    sbox2.style.cursor = 'pointer'; 
});
sbox3.addEventListener('mouseover', function() {
    sbox3.style.cursor = 'pointer'; 
});
sbox4.addEventListener('mouseover', function() {
    sbox4.style.cursor = 'pointer'; 
});

const facebook = document.getElementById('facebook')

facebook.addEventListener('click',facebook_link)

function facebook_link(){
    window.open("https://www.facebook.com/ExpWithGoogle/","_blank")
}
facebook.addEventListener('mouseover', function() {
    b5.style.cursor = 'pointer'; 
});

const experiment = document.getElementById('exp')
experiment.addEventListener('click',exp_link)
function exp_link(){
    window.open('https://experiments.withgoogle.com/experiments','_self')
}

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')

im1.addEventListener('click',btn1_link)
im2.addEventListener('click',btn2_link)
im3.addEventListener('click',btn3_link)
im4.addEventListener('click',btn4_link)
im5.addEventListener('click',btn5_link)
im6.addEventListener('click',btn6_link)

function btn1_link(){
    window.open('https://experiments.withgoogle.com/collection/tfliteformicrocontrollers',"_self")
}
function btn2_link(){
    window.open('https://experiments.withgoogle.com/looktospeak',"_self")
}
function btn3_link(){
    window.open('https://experiments.withgoogle.com/shared-piano',"_self")
}
function btn4_link(){
    window.open('https://experiments.withgoogle.com/collection/insideguide',"_self")
}
function btn5_link(){
    window.open('https://experiments.withgoogle.com/collection/experimentsforlearning',"_self")
}
function btn6_link(){
    window.open('https://experiments.withgoogle.com/teachable-machine',"_self")
}

const cross = document.getElementById('cross')
const all = document.querySelector('*')
cross.addEventListener('click',rmvpopup)
function rmvpopup(){
    let a = document.getElementById('popup')
    a.style.display = 'none'
    all.style.overflow = 'scroll'
}
cross.addEventListener('mouseover',fade)
