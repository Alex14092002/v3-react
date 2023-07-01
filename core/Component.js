// core/Component.js
import { type_check } from './type_checker.js';

class Component {
  constructor(props) {
    if (!type_check(props, { type: 'object' })) {
      throw new Error('Props must be an object');
    }
    this.props = props;
    this.state = {};
  }

  shouldUpdate(newProps) {
    return JSON.stringify(this.props) !== JSON.stringify(newProps);
  }

  setState(newState) {
    if (!type_check(newState, { type: 'object' })) {
      throw new Error('State must be an object');
    }
    this.state = { ...this.state, ...newState };
    this.display(this.props);
  }

  display(newProps) {
    if (this.shouldUpdate(newProps)) {
      this.props = newProps;
      const content = this.render();
      this.mount(content);
    }
  }

  mount(content) {
    const container = document.createElement('div');
    container.innerHTML = content;
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(container);
  }

  render() {
    return '';
  }
}

export { Component };
