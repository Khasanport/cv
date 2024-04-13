const x = document.querySelector('.x')
const show = document.querySelector('.show')

const showFoto = document.querySelectorAll('.foto')
const isian = document.querySelector('.isian')

x.addEventListener('click', (e) => {
    show.classList.add('hidden')
    isian.src = ''
    isian.alt = ''
})

showFoto.forEach(e => {
    e.addEventListener('click', (e) => {
        isian.src = e.target.src
        isian.alt = e.target.alt
        show.classList.remove('hidden')
        console.log(e)
    })
});