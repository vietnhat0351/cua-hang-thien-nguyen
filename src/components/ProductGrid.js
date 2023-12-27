import React, { useEffect, useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import ProductItem from "./ProductItem";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "Description of Product 1",
//     price: 19.99,
//     rating: 4,
//     image: "https://picsum.photos/300/400",
//   },
//   {
//     id: 2,
//     name: "Product 1",
//     description: "Description of Product 1",
//     price: 19.99,
//     rating: 4,
//     image: "https://picsum.photos/300/400",
//   },
// ];

const ProductsPerPage = 18;

const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / ProductsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   {[...Array(5)].map((_, rowIndex) => (
  //     <Row key={rowIndex} className="mb-4">
  //       {currentProducts
  //         .slice(rowIndex * 6, (rowIndex + 1) * 6)
  //         .map((product) => (
  //           <Col key={product.id} xs={6} sm={3} lg={2} xl={2}>
  //             {/* Render your product item here */}
  //             {/* Example: <ProductItem product={product} /> */}
  //             <ProductItem product={product} />
  //           </Col>
  //         ))}
  //     </Row>
  //   ))}
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Container>
      {
        /* Render your product grid here */
        <Row>
          {currentProducts.map((product) => (
            <Col key={product.id} xs={6} sm={3} lg={2} xl={2}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      }

      <Pagination className="mt-3">
        <Pagination.Prev
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
};

export default ProductGrid;
