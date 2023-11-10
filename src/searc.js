import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/search?q=${searchTerm}`);
      setSearchResults(response.data.results || []);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleResultClick = (result) => {
    // Navigate to the '/search-results' route with the result ID (or other identifier)
    navigate(`/search-results/${result._id}`);
  };

  const handleKeyPress = (e) => {
    // Trigger search on Enter key press
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='search here &#128269;'
        className='inputsearch'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
      style={{margin:'80px'}}/>
      <button onClick={handleSearch}>Search</button>

      {/* Display search results */}
      <ul>
        {searchResults.map(result => (
          <li key={result._id} onClick={() => handleResultClick(result)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
