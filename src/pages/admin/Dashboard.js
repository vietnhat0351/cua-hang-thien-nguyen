import useAxios from "../../hooks/useAxios";

const Dashboard = () => {
  const { data, error, loading } = useAxios(
    "http://3.24.232.151:80/api/v1/products",
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
