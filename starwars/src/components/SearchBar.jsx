import React, { useEffect } from "react";
import axios from "axios";


const Search = (props) => {
  const {
    term,
    setTerm,
    filterData,
    setFilterData,
    numChar,
    isSearching,
    setIsSearching,
  } = props;
  useEffect(() => {
    setFilterData(
      filterData.filter((singleChar) => {
        // console.log(singleChar.name.toLowerCase());
        return singleChar.name.toLowerCase().includes(term);
      })
    );
  }, [term]);

  const fetchAllCharacters = () => {
    const array = [];
    for (let i = 0; i < numChar; i++) {
      if (i === 16) {
        continue;
      } else {
        axios
          .get(`https://swapi.py4e.com/api/people/${i + 1}/`)
          .then((resolve) => {
            console.log(resolve.data);
            array.push(resolve.data);
            // setFilterData(setFilterData([...filterData, resolve.data]));
          })
          .catch((error) => {
            console.log("that's not how the Force works! \n" + error);
          });
      }
    }
    setFilterData(array);
  };

  useEffect(() => {
    fetchAllCharacters();
  }, [numChar]);
  console.log(filterData);

  return (
    <input
      type="text"
      onChange={(event) => {
        if (event.target.value === "") {
          fetchAllCharacters();
          setIsSearching(false);
        } else {
          setTerm(event.target.value);
          setIsSearching(true);
        }
      }}
      placeholder="Search..."
      style={{
        height: "30px",
        width: "25%",
        color: "black",
        background: "#f7ccb3",
        border: "none",
        borderRadius: "4px%",
      }}
    />
  );
};
export default Search;