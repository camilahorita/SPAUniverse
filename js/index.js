// const routes = {
//   "/" :"/pages/home.html" , 
//   "/about" :"/pages/about.html" , 
//   "/explore" :"/pages/explore.html" , 
// }

// function route(event) {
//   event = event || window.event
//   event.preventDefault();
//   let route = event.target.href
//   window.history.pushState({}, "", route)
//   handle()
// }

// function handle(){
//   const { pathname } = window.location
//   const route = routes[pathname] 

//   fetch(route)
//   .then( data => data.text())
//   .then( html => document.querySelector('#app').innerHTML = html)

// }

// handle()


// window.onpopstate = () => handle()

// window.route = () => route()


import Router from './router.js'
import { aboutPage, homePage, explorePage, image } from './buttons.js'
import Events from "./events.js"

const router = new Router

router.add("/", "/pages/home.html");
router.add("/about", "/pages/about.html");
router.add("/explore", "/pages/explore.html");

router.handle();


window.onpopstate = () => router.handle();
window.route = () => router.route();

Events({aboutPage, homePage, explorePage, image})








