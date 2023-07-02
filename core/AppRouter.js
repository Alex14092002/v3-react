import {HomePage} from '../view/HomePage.js'
import {AboutPage} from '../view/AboutPage.js'


// core/AppRouter.js
class AppRouter {
  constructor() {
    this.routes = {
      '/neww/': HomePage,
      '/neww//': AboutPage,
    };
  }

  getComponent(path) {
    return this.routes[path];
  }
}

export { AppRouter }; // Đảm bảo bạn đã export class AppRouter ở đây
