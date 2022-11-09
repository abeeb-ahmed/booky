import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt=""
      />
      <div className="siDesc">
        <h2 className="siTitle">Be-Here Hotel</h2>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="sicancelOpSubtitle">
          You can cancel later, so lock in this great deal.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
