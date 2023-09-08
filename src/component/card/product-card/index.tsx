import color from "../../../constant";

type ProductCardProps = {
  image: any;
  onBtnClick?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
  title: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export default function ProductCard(props: ProductCardProps) {
  const { image,onClick, onBtnClick, title, rating} = props;

  return (
    <>
      <div
        className="col-11 col-md-6 col-lg-4 py-5 justify-content-center  "
        onClick={onClick}
      >
        <div className="px-0 rounded-1 shadow-lg" >
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
        <div className=" ps-2  row pt-1" style={{ height: "20vh", }}>
           <h3 className="text_card">{title}</h3>
           <div className="rating">
          <p className="card-text">Rating: {rating?.rate}</p>
          <p className="card-text">Reviews: {rating?.count}</p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
