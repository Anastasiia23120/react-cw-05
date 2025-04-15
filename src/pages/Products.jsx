// export default function Products() {
//   return <div>Products Page</div>;
// }

import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../../fakeApi";
import { useSearchParams } from "react-router-dom";
import { SearchBox } from "../components/SearchBox/SearchBox";

export default function Products() {
  const products = getProducts();
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  // return (
  //   <main>
  //     <ProductList products={products} />
  //   </main>
  // );

  // return (
  //   <Link to="/products/h-1" state="/dashboard?name=hoodie">
  //   Navigate to product h-1
  //   </Link>;
  // )

  //   return (
  //   <Link to="/products/h-1" state={location}>
  //   Navigate to product h-1
  //   </Link>;
  // )

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
}
