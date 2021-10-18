import { useState, useEffect, useCallback } from "react";
import axios from "../services/axios";

function useFetch(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  const sendRequest = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(`/?page=${page}`);
      {
        res.data?.articles.length > 0 &&
          (await setNews((prev) => [...prev, ...res.data?.articles]));
      }
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, page]);

  return { loading, error, news };
}

export default useFetch;
