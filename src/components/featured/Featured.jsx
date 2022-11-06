import React from "react";

import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>400 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>400 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>400 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
