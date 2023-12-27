import { Card } from "react-bootstrap";

const ProductItem = ({ product }) => {
  return (
    <div>
      <a href="#" className="nav-link">
        <img
          src={product?.productImage}
          className="img-fluid"
          alt={product?.productName}
          style={{
            maxHeight: "400px",
            maxWidth: "400",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <h6
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          {product?.productName}
        </h6>
      </a>
    </div>
  );
};

export default ProductItem;
