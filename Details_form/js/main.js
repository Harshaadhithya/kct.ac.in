/*===== SHOW NAVBAR  =====*/  

const showNavbar = (toggleId,closetoggle, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId),
    closer=document.getElementById(closetoggle)

    if(toggle && nav && bodypd && headerpd && closer) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')

            toggle.classList.toggle('bx-x')

            bodypd.classList.toggle('body-pd')

            headerpd.classList.toggle('body-pd')
        })

        closer.addEventListener('click', () =>{
            nav.classList.toggle('show')

            toggle.classList.toggle('bx-x')

            bodypd.classList.toggle('body-pd')

            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','header-close-toggle','nav-bar','body-pd','header')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
} 
linkColor.forEach(l=> l.addEventListener('click', colorLink))

