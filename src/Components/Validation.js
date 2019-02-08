import React from 'react';

const val = ( props ) => {
    if (props.length < 5) {
      return(
        <div className = "short" >
        <p> too short </p>
        </div>
      )
    }
    else {
      return (
        <div className = "long">
        <p>toolong</p>
        </div>
      )
    }
};

export default val;
