import "./App.css";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./components/layouts/RootLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/layouts/AdminLayout";
import MainLayout from "./components/layouts/MainLayout";
import ProductsDashboard from "./pages/admin/ProductsDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<RootLayout />}>
    //   <Route index element={<Home />} />
    //   <Route path="/product" element={<ProductPage />} />
    //   <Route path="/admin" element={<AdminLayout />}>
    //     <Route path="dashboard" element={<Dashboard />} />
    //   </Route>
    // </Route>
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProductsPage />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductsDashboard />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <div className="container">
    //       <ControlledCarousel />
    //       <CustomNavbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/product" element={<ProductPage />} />
    //       </Routes>
    //       <CustomFooter />
    //     </div>
    //   </div>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
