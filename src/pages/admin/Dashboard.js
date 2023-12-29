import useAxios from "../../hooks/useAxios";

const Dashboard = () => {
  const { data, error, loading } = useAxios(
    "https://cua-hang-thien-nguyen.onrender.com/api/v1/products",
    "get",
    { data: { name: "Product 1", description: "Product 1 description" } }
  );

  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Dashboard;
