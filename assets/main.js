const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sactionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionld = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionld + ']').classList.add
                ('active__link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionld + ']').classList.remove
                ('active__link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
