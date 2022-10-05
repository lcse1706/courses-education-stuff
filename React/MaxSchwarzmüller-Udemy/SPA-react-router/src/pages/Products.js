import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/book">A book</Link>
        </li>
        <li>
          <Link to="/products/blanket">A blanket</Link>
        </li>
        <li>
          <Link to="/products/onlinecourse">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
