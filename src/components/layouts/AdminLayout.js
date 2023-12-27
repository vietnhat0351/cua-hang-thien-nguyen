import { Outlet } from "react-router-dom";
// import AdminPageSidebar from "../AdminPageSidebar";
import AdminPageSidebar from "../admin-page-sidebar/AdminPageSidebar";
import { Row, Col } from "react-bootstrap";

const AdminLayout = () => {
  return (
    <div className="row flex-nowrap">
      <AdminPageSidebar />
      <div className="col py-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
