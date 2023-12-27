import ProductItem from "./ProductItem";

const ProductCollectionSection = ({ products }) => {
  return (
    <div
      className="container-fluid"
      style={{ padding: "10px", border: "1px solid blue" }}
    >
      <div className="row">
        <div className="col-md-12">
          <h4 style={{ float: "left" }}>Category Name |</h4>
          <a href="#" style={{ float: "right", textDecoration: "none" }}>
            Xem Tất Cả
          </a>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-6 col-md-4 col-lg-2">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCollectionSection;
