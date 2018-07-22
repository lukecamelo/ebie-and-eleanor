function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

window.sr = ScrollReveal()

const aboutPic = document.querySelector('.about-left')
const aboutBlurb = document.querySelector('.about-right')

const prod1 = document.querySelector('.p1')
const prod2 = document.querySelector('.p2')
const prod3 = document.querySelector('.p3')

if (window.matchMedia('(max-width: 950px)').matches) {
  aboutPic.classList.remove('about')
  aboutBlurb.classList.remove('about')

  aboutPic.classList.add('a1')
  aboutBlurb.classList.add('a2')

  prod1.classList.remove('p-anim')
  prod2.classList.remove('p-anim')
  prod3.classList.remove('p-anim')

  prod1.classList.add('p-anim1')
  prod2.classList.add('p-anim2')
  prod3.classList.add('p-anim3')
}

sr.reveal('.about', { origin: 'left', rotate: { x: 2, y: 2, z: 2 } }, 50)
sr.reveal('.a1', { origin: 'left' })
sr.reveal('.a2', { origin: 'right' })

sr.reveal('.p-anim', 50)
sr.reveal('.p-anim1', { origin: 'bottom' })
sr.reveal('.p-anim2', { origin: 'bottom' })
sr.reveal('.p-anim3', { origin: 'bottom' })
sr.reveal('.product', { origin: 'bottom' }, 50)

// old mission statement section
// sr.reveal('.left')
// sr.reveal('.right')

sr.reveal('.miss-fade', 250)

sr.reveal('.contact-label', 50)
sr.reveal('.form-name')
sr.reveal('.form-email')
sr.reveal('.form-textarea')
sr.reveal('.contact-button')
sr.reveal('.contact-h1')
