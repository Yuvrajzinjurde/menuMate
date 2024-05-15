import { useState, useEffect } from 'react';
import { Route } from './routes';
import Cart from '../pages/Cart/Cart';
import Main from '../pages/Main/main';
export const routes:Route[] = [

    { path: '/', component:Main },
    { path: '/cart', component: Cart },

  
  ];
const Router = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentUrl(window.location.pathname);
    };
  
    window.addEventListener('popstate', handlePopState);
  
    console.log('Popstate event fired');
  
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderComponent = () => {
    const route = routes.find((route) => route.path === currentUrl);
    console.log(route)
    if (route) {

      return <route.component />;
    }

    return <div>404 Not Found</div>;
  };

  return renderComponent();
};

export default Router;