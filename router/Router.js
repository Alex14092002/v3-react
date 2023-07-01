// router/Router.js
class Router {
    constructor(routes) {
      this.routes = routes;
    }
  
    navigate(path) {
      const route = this.routes.find((r) => r.path === path);
      if (!route) {
        console.error('Route not found!');
        return;
      }
      route.component.display({});
    }
  }
  
  export { Router };
  