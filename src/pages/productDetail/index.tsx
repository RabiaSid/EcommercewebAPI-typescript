import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout";
import ProductDetailCard from "../../component/card/product-detail-card";
import { LoadingGIF } from "../../assets";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [modal, setModal] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get<Product>(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setModal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Layout>
      <div className="row m-0 p-0 px-5" style={{background: '#f7f7f7'}}>
        {modal ? (
          <ProductDetailCard
            image={modal.image}
            title={modal.title}
            description={modal.description}
            price={modal.price}
            rating={modal.rating}
          />
        ) : (
          <div className="col-12 d-flex flex-column justify-content-center align-items-center" style={{height:'65vh'}}>
            <img src={LoadingGIF} style={{width:"15vw", height:"25vh"}}/>
          </div>
        )}
      </div>
    </Layout>
  );
}
