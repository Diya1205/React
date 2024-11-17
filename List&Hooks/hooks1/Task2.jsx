import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Task2() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Task2;