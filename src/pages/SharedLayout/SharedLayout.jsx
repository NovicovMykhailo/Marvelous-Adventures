
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div >
      SharedLayout
      <div>hedder</div>
      <Outlet />
      <div>footer</div>
    </div>
  );
};

export default SharedLayout;
