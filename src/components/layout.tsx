import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>
        <a href="/">TV Series Search</a>
      </h1>
      <Outlet />
    </div>
  );
};

export default Layout;
