// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };

// export default ProductDetails;

import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getProductById } from "../../fakeApi";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  const location = useLocation();
  // console.log(location.state);  //dashboard?name=hoodie

  const backLinkHref = location.state ?? "/products";

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );

  // return <Link to={location.state}>Back to products</Link>

  // return <Link to={backLinkHref}>Back to products</Link>;
}
