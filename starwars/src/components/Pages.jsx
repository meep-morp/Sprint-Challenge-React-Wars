import React, { useEffect } from "react";

const Pages = (props) => {
    const {pageNumber, onClickNext, onClickPrev} = props;
    return (
        <div className="buttonContainer"
        style={{display: 'flex', justifyContent: 'center', fontSize:'2.5rem', height:'5%'}}>
            <button className="prev"
            onClick={onClickPrev}
            style={{background: 'transparent', width: '20px', border: 'none', 
            color: 'white', fontSize:'2.5rem', cursor: 'pointer'}}>&#171;</button>

            <p className="pagenumber" 
            style={{margin: '10px', color: '#e0c742', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
                Episode: {pageNumber}</p>
            <button className="next"
            onClick={onClickNext}
            style={{background: 'transparent', width: '20px', border: 'none', 
            color: 'white', fontSize:'2.5rem', cursor: 'pointer'}}>&#187;</button>
        </div>
    );
  }
  
  export default Pages;