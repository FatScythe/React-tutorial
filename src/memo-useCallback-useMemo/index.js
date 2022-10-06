import React, { useContext } from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import defaultImage from "../assets/hero-md.jpg";
import useFetch from "../hooks/useFetch";

const IndexContext = React.createContext();

const Index = React.memo(() => {
  // Every time prop changes components re-render

  // https://course-api.com/react-prop-types-example
  const url = "http://localhost:8000/products";

  const { data: products, loading } = useFetch(url);

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const handleComplexCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // useCallBack
  const addToCart = useCallback(() => {
    setCart((oldCart) => oldCart + 1);
  });

  // useMemo
  // const calculateMostExpensive = (data) => {
  //   return data.reduce((acc, curr) => {
  //     const price = curr.price;
  //     if (price >= acc.price) {
  //       let acc = price;
  //     }
  //     return acc;
  //   });
  // };

  // let calc = calculateMostExpensive(products);

  // console.log(products, calc);

  useEffect(() => {
    console.log("countin");
  });

  return (
    <IndexContext.Provider value={{ addToCart }}>
      <h1>Count : {count} </h1>
      {/* <h3>Most Expensive : ${calculateMostExpensive(products)}</h3> */}
      <button
        className='btn'
        onClick={handleComplexCounter}
        style={{ marginBottom: "2rem" }}
      >
        Click me
      </button>

      <h1>Cart Item: {cart}</h1>

      <BigList products={products} loading={loading}></BigList>
    </IndexContext.Provider>
  );
});

// memo
const BigList = React.memo(({ products, loading }) => {
  useEffect(() => {
    console.log("BigList");
  });
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='products'>
          {products.map((product) => {
            return <SingleProduct key={product.id} {...product} />;
          })}
        </div>
      )}
    </>
  );
});

const SingleProduct = ({ name, price, image }) => {
  useEffect(() => {
    console.count("Products list");
  });
  const url = image && image.url;
  const mainData = useContext(IndexContext);
  return (
    <>
      <article className='product'>
        <img src={url || defaultImage} alt={name} />
        <h2>{name || "Default name"}</h2>
        <p>$ {price || 3.99}</p>
        <button className='btn' onClick={mainData.addToCart}>
          Add to Cart
        </button>
      </article>
    </>
  );
};

SingleProduct.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};
export default Index;
