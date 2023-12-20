import { Outlet } from 'react-router-dom';

import Header from './Header';
import { CartOverview } from '../features/cart';

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </>
  );
}

export default AppLayout;