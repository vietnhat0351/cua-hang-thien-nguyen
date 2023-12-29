import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://cua-hang-thien-nguyen.onrender.com/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Trang sản phẩm</h2>
      {products && <ProductGrid products={products} />}
    </div>
  );
};

export default ProductsPage;
