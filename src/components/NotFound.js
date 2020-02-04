import React from 'react';
import error from '../assets/error.png';

function NotFound() {
  return (
    <div id="error" className="page thirdColor ">
      <section className="flex-row-center">
        <div className="left fifty">
          <h1>Looks like you are lost!</h1>
          <h3>And you also dropped your ice cream. Fool...</h3>
        </div>
        <div className="right fifty">
          <img src={error} alt="error" />
        </div>
      </section>
    </div>
  );
}

export default NotFound;
