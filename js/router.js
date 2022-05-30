 export default class Router {
  routes={}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    let route = event.target.href;
    window.history.pushState({}, "", route);
    this.handle();
  }
  
  handle(){
    const { pathname } = window.location;
    const route = this.routes[pathname] ;
  
    fetch(route)
    .then( data => data.text())
    .then( html => document.querySelector('#app').innerHTML = html)
  
  }
}