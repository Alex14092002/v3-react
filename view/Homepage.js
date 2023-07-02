import { Component } from '../core/Component.js';
import {Header} from '../components/Header.js'
import { Login } from '../components/Login.js';
console.log(Login);

class HomePage extends Component {
  
  display() {

    const rootElement = document.getElementById('root');
    rootElement.innerHTML = `
      ${new Header().display()}
      ${new Login().display()}
    `;
  }
}

export { HomePage };
