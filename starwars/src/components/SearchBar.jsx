import React, { useEffect } from "react";

const Search = (props) => {
    const {term, setTerm, charData, setCharData} = props;
    return (
        <input type="text"
            onChange={event => {
                setTerm(event.target.value);
                charData.filter((singleChar) => {
                    return setCharData(
                            singleChar.name
                            .toLowercase()
                            .includes(term.toLowerCase()))
                })
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