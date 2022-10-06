import useFetch from "../hooks/useFetch";
import SingleProduct from "./SingleProduct";
// import Setup from "../useReducer";
const PropTypes = () => {
  const { loading, data: products } = useFetch(
    "https://course-api.com/react-prop-types-example"
  );
  console.log(loading, products);

  return (
    <>
      <h1>Prop Types</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='products'>
          {/* <Setup /> */}
          {products.map((product) => {
            return <SingleProduct key={product.id} {...product} />;
          })}
        </div>
      )}
    </>
  );
};

export default PropTypes;
