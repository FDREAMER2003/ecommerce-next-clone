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
        <h1 className="product-title">Product Details</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {getAllProducts.map((product: any) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
       
}

export default Products
