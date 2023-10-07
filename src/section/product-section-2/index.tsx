import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../component/card/product-card";
import Input from "../../component/input";
import FlatButton from "../../component/button/flat-primary";
import { add } from "../../config/redux/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

type Product = {
  image: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  id: number;
}

export default function SectionTwoProduct() {
  const navigate = useNavigate();
  const [listData, setListData] = useState<any>([]);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.cart);

  let getData = () =>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      setListData([...res.data]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const clickCard = (id: number) => {
    navigate(`/${id}`);
  };

  const addToCart = (x: any) => {
    dispatch(add(x));
  };

  return (
    <div className="row m-0 p-0 justify-content-center ">
      <div className="col-11 col-md-9 mt-3 ">
        <div className="row ms-2">
        <button
        className="w-25 border border-dark rounded-1 text-light bg-dark py-3 fs-4 fw-bold"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart Item {data.length}
        </button>
        </div>
        <div className="row">
          {listData.map((x:any, i:any) => (
            <ProductCard
              key={i}
              image={x.image}
              title={x.title}
              rating={x.rating}
              onBtnClick={() => clickCard(x.id)}
              onClick={() => clickCard(x.id)}
              onadditemClick={() => addToCart(x)}
              addItemTitle="Add To Cart"
            />
          ))}
        </div>
      </div>
      <div className="col-11 col-md-3">

      <div className="py-4 px-5 my-5 mx-3" style={{ background: "#ffffff" }}>
          <p className="text_card5 pb-3 ">Product</p>
          {listData.map((x:any, i:any) => (
              <div className="row py-2" key={i} onClick={() => clickCard(x.id)}>
                <div className="col-4">
                  <img src={x.image} style={{ height: "10vh", width:'5vw' }} />
                </div>
                <div className="col">
                    <p
                     className="text_card9"
                    >
                      {x.title}
                    </p>
                </div>
              </div>
              ))}
            </div>
            
        
        <div className="py-4 px-5 my-5 mx-3" style={{ background: "#ffffff" }}>
          <p className="text_card5 pb-3 ">Instagram Feeds</p>
          <div className="row py-3">
            {listData.map((x:any, i:any) => (
              <div className="col-6 my-2" key={i} onClick={() => clickCard(x.id)}>
                <img src={x.image} style={{ height: "10vh", maxWidth:'5vw' }} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="py-4 px-5 my-5 mx-3" style={{ background: "#ffffff" }}>
          <p className="text_card5 pb-3 ">Newsletter</p>
          <div className="row py-3">
            <Input placeholder="Enter email" />
            <FlatButton title="Search" />
          </div>
        </div>

      </div>
    </div>
  );
}
