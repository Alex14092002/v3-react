import { HomePage } from '../view/HomePage.js';
import { AboutPage } from '../view/AboutPage.js';

class AppRouter {
  constructor() {
    this.routes = {
      '/': HomePage,
      '/about': AboutPage,
    };
  }

  getComponent(path) {
    return this.routes[path];
  }
}

export { AppRouter };