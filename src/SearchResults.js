// SearchResults.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const { id } = useParams();
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/search-results/${id}`);
        setResultData(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Search Results</h2>
      {resultData ? (
        <div>
          <h3>{resultData.name}</h3>
          {/* Display other details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchResults;
