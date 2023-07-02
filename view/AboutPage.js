import { Component } from '../core/Component.js';

class AboutPage extends Component {
  display() {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = '<h1>Giới thiệu</h1>';
  }
}

export { AboutPage };
