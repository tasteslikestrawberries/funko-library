// use-fetch-data.js
import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //const url = 'https://raw.githubusercontent.com/kennymkchan/funko-pop-data/master/funko_pop.json';
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response);
        console.log(response)
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;