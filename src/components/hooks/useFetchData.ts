// use-fetch-data.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState<Record<string, any>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = 'https://mocki.io/v1/68826990-e5be-4d12-bc7a-a2763b31a5f5';
    const fetchData = async () => {
      try {
        //destructuring axios response object
        const { data } = await axios.get(url);
        setData(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  //returns an object with properties
  return {
    data,
    loading,
  };
};

export default useFetchData;