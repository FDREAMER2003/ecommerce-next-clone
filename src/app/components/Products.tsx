"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import '../css/table.css';


const Products = () => {
    let allProducts: any = [];
    const [getAllProducts, setProducts] = useState<any[]>([]);
    useEffect(() => {
      productData();
    }, []);
    const productData = () => {
      axios
        .get("https://dummyjson.com/products", {
          params: {},
        })
        .then(function (response) {
          console.log(response);
        //   allProducts = response.data.products;
          setProducts(response.data.products);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      const request = {
        url: "https://dummyjson.com/products",
        params: {},
      };
    };

    return (
      <div className="ecommerce-container">
        <h1 className="product-title">Products Available</h1>
        <div className="product-row">
          {getAllProducts.map((product: any) => (
            <div className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    );
    
}

export default Products
