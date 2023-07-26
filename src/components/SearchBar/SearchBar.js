import React, {useState, useCallback} from 'react';
import './SearchBar.css'

function SearchBar(props) {
    const [term, setTerm] = useState('');
    const handleTermChange = useCallback((event) => {
      setTerm(event.target.value);
    }, []);
    const search = useCallback(() => {
      props.onSearch(term);
    }, [props.onSearch, term]);
    
    return(
        <div className="SearchBar">
            <input 
            placeholder="Enter a Song, Artist or Album" 
            name="search" 
            id="search" 
            type="text" 
            onChange={handleTermChange}
            onFocus={(e) => e.target.placeholder = ''}/>
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;