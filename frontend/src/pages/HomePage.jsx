import { Col, Row } from "react-bootstrap";

// import products from "../products";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError?.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default HomePage;
