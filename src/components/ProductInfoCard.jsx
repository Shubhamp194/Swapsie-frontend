import React from "react";

function ProductInfoCard(props) {
  const { imgLink, name, description, owner } = props;

  function trade() {
    console.log("Trade request sent");
  }

  return (
    <div className="product-info-card">
      <div className="product-details">
        <a href={imgLink} target="blank">
          <img className="product-img" src={imgLink} alt="Product pic" />
        </a>
      </div>
      <div className="product-details">
        <h4>Name : {name}</h4>
        <h5>Owner : {owner}</h5>
        <h6>Description : {description}</h6>
        <button className="btn btn-primary" onClick={trade}>
          Request Trade
        </button>
      </div>
    </div>
  );
}

export default ProductInfoCard;
