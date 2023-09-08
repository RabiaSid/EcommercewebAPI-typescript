import React from "react";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductDetailCard(props: ProductCardProps) {
  const { image, title, price, description, rating } = props;
  return (
    <div
      className="row shadow my-5 justify-content-center  py-3"
      style={{ background: "#ffffff" }}
    >
      <div className="col-11 col-md-4">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ minWidth: "28vw", height: "60vh" }}
        />
      </div>
      <div className="col-11 col-md-6 pt-5">
        <p className="text_card3">{title}</p>
        <p className="text_card4">{description}</p>
        <p>
          <span className="text_card5">Price:</span>
          <span className="text_card6">{price}</span>
        </p>
        <div className="rating">
          <p>
            <span className="text_card5">Rating: </span>
            <span className="text_card6">{rating.rate}</span>
          </p>
          <p>
            <span className="text_card5">Reviews: </span>
            <span className="text_card6">{rating.count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
