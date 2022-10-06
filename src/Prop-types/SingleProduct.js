import PropTypes from "prop-types";
import { useEffect } from "react";
import defaultImage from "../assets/hero-md.jpg";

// To check what prop type is missing in an api object

const SingleProduct = ({ name, price, image }) => {
  const url = image && image.url;
  return (
    <>
      <article className='product'>
        <img src={url || defaultImage} alt={name} />
        <h2>{name || "Default name"}</h2>
        <h2>$ {price || 3.99}</h2>
      </article>
    </>
  );
};

SingleProduct.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// SingleProduct.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default SingleProduct;
