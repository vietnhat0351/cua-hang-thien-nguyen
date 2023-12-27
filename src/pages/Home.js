import ProductCollectionSection from "../components/ProductCollectionSection";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      rating: 4,
      image:
        "https://firebasestorage.googleapis.com/v0/b/cua-hang-thien-nguyen.appspot.com/o/images%2Fd02a51c0-a1bb-47a0-bff9-891347c67d4f?alt=media&token=2b43b782-f12f-407b-82bd-ce344e26131c",
    },
    {
      id: 2,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      rating: 4,
      image: "https://picsum.photos/300/400",
    },
    {
      id: 3,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      rating: 4,
      image: "https://picsum.photos/300/400",
    },
    {
      id: 4,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      rating: 4,
      image: "https://picsum.photos/300/400",
    },
    {
      id: 5,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      rating: 4,
      image: "https://picsum.photos/300/400",
    },
    {
      id: 6,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      rating: 4,
      image: "https://picsum.photos/300/400",
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Trang chủ</h2>
      <ProductCollectionSection products={products} />
    </div>
  );
};

export default Home;
