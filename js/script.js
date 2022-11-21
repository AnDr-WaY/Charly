const nav = document.querySelectorAll('.nav_link')
const nav_link1 = nav[0]
const nav_link2 = nav[1]
const nav_link3 = nav[2]
const nav_link4 = nav[3]
const nav_link5 = nav[4]

const razdel1 = document.querySelector('.bio')
const razdel2 = document.querySelector('.film')
const razdel3 = document.querySelector('.obraz')
const razdel4 = document.querySelector('.fact')
const razdel5 = document.querySelector('.photo')

nav_link1.addEventListener('click', (e)=>{
    razdel1.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
})

nav_link2.addEventListener('click', (e)=>{
    razdel2.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
})

nav_link3.addEventListener('click', (e)=>{
    razdel3.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
})

nav_link4.addEventListener('click', (e)=>{
    razdel4.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
})

nav_link5.addEventListener('click', (e)=>{
    razdel5.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
})


const golovna_link = document.querySelector('.header_link')
const golovna = document.querySelector('.intro')

golovna_link.addEventListener('click', (e)=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth'})
})




const burger = document.querySelector('.burger')
const burgera = document.querySelector('.burgera')
const menu = document.querySelector('.menu')

burger.addEventListener('click', ()=>{
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('lock')
})


const menu_links = document.querySelectorAll('.menu_link')
const menu_link1 = menu_links[0]
const menu_link2 = menu_links[1]
const menu_link3 = menu_links[2]
const menu_link4 = menu_links[3]
const menu_link5 = menu_links[4]
const menu_link6 = menu_links[5]


menu_link1.addEventListener('click', (e)=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth'})
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu_link2.addEventListener('click', (e)=>{
    razdel1.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu_link3.addEventListener('click', (e)=>{
    razdel2.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu_link4.addEventListener('click', (e)=>{
    razdel3.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu_link5.addEventListener('click', (e)=>{
    razdel4.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu_link6.addEventListener('click', (e)=>{
    razdel5.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    burgera.classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})