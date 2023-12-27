import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, method = "get", options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url,
          method,
          ...options,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, options]);

  return { data, error, loading };
};

export default useAxios;
