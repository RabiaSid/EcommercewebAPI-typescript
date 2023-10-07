import color from "../../../constant";
import {RiShoppingCart2Fill} from "react-icons/ri"

type ProductCardProps = {
  image: any;
  onBtnClick?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
  onadditemClick?: (...args: any[]) => any;
  title: string;
  addItemTitle: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export default function ProductCard(props: ProductCardProps) {
  const { image,onClick, onBtnClick, title, rating, onadditemClick, addItemTitle} = props;

  return (
    <>
      <div
        className="col-11 col-md-6 col-lg-4 py-5 justify-content-center  "
        
      >
        <div className="px-0 rounded-1 shadow-lg" onClick={onClick}>
        <div
          className="m-auto "
          style={{ position: "relative", height: "46vh",width: '23vw' }}
        >
          <img src={image} style={{ height:"45vh",width: '23vw', position: "absolute"}} className="img-fluid"  />
          <button
            className="position-absolute top-50 start-50 translate-middle Catogoriey_Button_text"
            style={{ position: "absolute",
           }}
           onClick={onBtnClick}
          >
            more Detail
          </button>
        </div>
        <div className=" ps-2  row pt-1" style={{ height: "15vh", }}>
           <h3 className="text_card">{title}</h3>
           <div className="rating">
          <p className="card-text">Rating: {rating?.rate}</p>
          <p className="card-text">Reviews: {rating?.count}</p>
        </div>
        </div>
        </div>
        <button
            className="col-11 col-md-6 col-lg-4 text-center  w-100 py-3 bg-light fw-bold"
           onClick={onadditemClick}
          >
           <span className="mx-2"> {addItemTitle} </span> <span className="mx-2"> <RiShoppingCart2Fill size={24} color={color.primaryColorThree} /></span>
          </button>
      </div>
    </>
  );
}
