import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          TV Series Search
        </button>
      </div>
      <div className="p-2">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
