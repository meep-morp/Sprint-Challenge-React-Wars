import React, { useEffect } from "react";
import axios from "axios";

const Search = (props) => {
    const {term, setTerm, filterData, setFilterData, numChar, isSearching, setIsSearching} = props;
    useEffect(() => {
        setFilterData(filterData.filter((singleChar) => {
            // console.log(singleChar.name.toLowerCase());
            return singleChar.name
            .toLowerCase()
            .includes(term)
        }))
    }, [term])

    useEffect(() => {
        for(let i = 0; i < numChar; i++) {
            if(i === 16) {
               continue;
            } else {
          axios.get(`https://swapi.py4e.com/api/people/${i + 1}/`)
          .then(resolve => {
            setFilterData(...filterData, filterData.concat(resolve.data));
          })
          .catch(error => {
            console.log("that's not how the Force works! \n" + error);
          })
        }
      }
      }, [numChar]);

      console.log(filterData)

    return (
        <input type="text"
            onChange={event => {
                setTerm(event.target.value);
                setIsSearching(true);
            }}
            placeholder="I don't work yet ):"
            style={{
                height: '30px',
                width: '25%',
                color: 'black',
                background: '#f7ccb3',
                border: 'none',
                borderRadius: '4px%',
            }}
        />
    );
  }
  
  export default Search;