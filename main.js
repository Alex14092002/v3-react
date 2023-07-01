import { AppRouter } from './core/AppRouter.js';

const router = new AppRouter();
const rootElement = document.getElementById('root');

function handleRouteChange() {
  const path = window.location.pathname;
  const Component = router.getComponent(path);
  if (Component) {
    const component = new Component({});
    component.display({});
  } else {
    rootElement.innerHTML = '<h1>404 - Không tìm thấy trang</h1>';
  }
}

window.addEventListener('popstate', handleRouteChange);
handleRouteChange();