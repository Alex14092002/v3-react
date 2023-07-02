  import { AppRouter } from './core/AppRouter.js';

  const router = new AppRouter();
  console.log(router);
  const rootElement = document.getElementById('root');
  function handleRouteChange() {
    const path = window.location.pathname;
    console.log(path);
    const ComponentClass = router.getComponent(path); // Đổi tên biến thành ComponentClass
  
    console.log(ComponentClass);
    if (ComponentClass) {
      const component = new ComponentClass({}); // Tạo đối tượng class từ tên class
      component.display({});
    } else {  
      rootElement.innerHTML = '<h1>404 - Không tìm thấy trang</h1>';
    }
  }  
  window.addEventListener('popstate', handleRouteChange);
  handleRouteChange();