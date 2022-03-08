// use-fetch-data.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState<any>([]); //<Record<string, any>>
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = 'https://mocki.io/v1/b8f51406-30a2-4005-bde3-e4936fe65ac9';
    const fetchData = async () => {
      try {
        //destructuring axios response object
        const { data } = await axios.get(url);
        setData(data)
        //console.log(data)
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