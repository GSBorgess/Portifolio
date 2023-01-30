const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'))
on.addEventListener('click', () => soundTrack('on'))

const soundTrack = (soundState) => {
  if(soundState === 'off') {
    on.style.display = 'block'
    off.style.display = 'none'
    soundCloud.style.color = "#08fdd8"
    myAudio.play()
  }

  else if(soundState === 'on') {
    on.style.display = 'none'
    off.style.display = 'block'
    soundCloud.style.color = "#f50057"
    myAudio.pause()
  }
}

// Modal
const project1 = document.querySelector('.project1')
const project2 = document.querySelector('.project2')
const project3 = document.querySelector('.project3')
const project4 = document.querySelector('.project4')

// Modal 1
function action1() {
  project1.style.display = 'block'
}

function fechar1() {
  let project1 = document.querySelector('.project1')

  project1.style.display = 'none';
}

// Modal 2
function action2() {
  project2.style.display = 'block'
}

function fechar2() {
  let project2 = document.querySelector('.project2')

  project2.style.display = 'none';
}

// Modal 3
function action3() {
  project3.style.display = 'block'
}

function fechar3() {
  let project3 = document.querySelector('.project3')

  project3.style.display = 'none';
}

// Modal 4
function action4() {
  project4.style.display = 'block'
}

function fechar4() {
  let project4 = document.querySelector('.project4')

  project4.style.display = 'none';
}

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');

btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));  

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
      SideNav.classList.add('show-nav');
      btnTimes.style.display = 'block';
      btnBars.style.display = 'none';
    }

    else if(navCondition === 'close'){
      SideNav.classList.remove('show-nav');
      btnTimes.style.display = 'none';
      btnBars.style.display = 'block';
    }
}

$(document).ready(function (){
  if(!$("#myCanvas").tagcanvas({
      textColour: "#08fdd8",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
  }, "tags")){
      // something went wrong hide the canvas container,
      $("#myCanvasContainer");
  }
})

$('.nav-links a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});