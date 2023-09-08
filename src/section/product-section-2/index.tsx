import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../component/card/product-card";
import HoverButton from "../../component/button/Hover-button";
import color from "../../constant";
import Input from "../../component/input";
import FlatButton from "../../component/button/flat-primary";

interface Product {
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
  const [listData, setListData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickCard = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <div className="row m-0 p-0 justify-content-center ">
      <div className="col-11 col-md-9 ">
        <div className="row">
          {listData.map((x, i) => (
            <ProductCard
              key={i}
              image={x.image}
              title={x.title}
              rating={x.rating}
              onBtnClick={() => clickCard(x.id)}
              onClick={() => clickCard(x.id)}
            />
          ))}
        </div>
      </div>
      <div className="col-11 col-md-3">

      <div className="py-4 px-5 my-5 mx-3" style={{ background: "#ffffff" }}>
          <p className="text_card5 pb-3 ">Product</p>
          {listData.map((x, i) => (
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
            {listData.map((x, i) => (
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
