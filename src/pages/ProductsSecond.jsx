// import { useSearchParams } from "react-router-dom";

// const ProductsSecond = () => {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get("name");
//   const color = searchParams.get("color");
//   const maxPrice = searchParams.get("maxPrice");

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Color: {color}</p>
//       <p>Maximum price: {maxPrice}</p>
//     </div>
//   );
// };

// const [searchParams] = useSearchParams();

// const name = searchParams.get("name");
// console.log(name, typeof name);// "hoodie", string

// const maxPrice = searchParams.get("maxPrice");
// console.log(maxPrice, typeof maxPrice);// "500", string

// const inStock = searchParams.get("inStock");
// console.log(inStock, typeof inStock);// "true", string

// import { useSearchParams } from 'react-router-dom';

// export default function UpdateSingleParamExample() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // Функція оновлення певного ключа
//   const updateSearchParams = (key, value) => {
// 	  // 1. Копіюємо існуючі параметри
//     const updatedParams = new URLSearchParams(searchParams);

//     // 2. Оновлюємо певний ключ
//     updatedParams.set(key, value);

//     // 3. Застосовуємо зміни до URL
//     setSearchParams(updatedParams);
//   };

//   return (
//     <div>
//       <h2>Оновлення одного параметра в URL</h2>
//       <p>Поточні параметри:</p>
//       <pre>{searchParams.toString()}</pre>

//       <button onClick={() => updateSearchParams('name', 'snickers')}>
//         Змінити name на snickers
//       </button>
//       <button onClick={() => updateSearchParams('maxPrice', 800)}>
//         Змінити maxPrice на 800
//       </button>
//        <button onClick={() => updateSearchParams('inStock', false)}>
//         Змінити inStock на false
//       </button>
//     </div>
//   );
// };

// import { useSearchParams } from "react-router-dom";

// export default function Products() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get("name");

//   // Функція для оновлення певного ключа
//   const updateSearchParams = (key, value) => {
//     // 1. Копіюємо існуючі параметри
// 	const updatedParams = new URLSearchParams(searchParams);

// 	// 2. Оновлюємо певний ключ
// 	updatedParams.set(key, value);

// 	// 3. Застосовуємо зміни до URL
//     setSearchParams(updatedParams);
//   }

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={e => updateSearchParams("name", e.target.value)}
//       />
//     </div>
//   );
// };

import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox";
import { getProducts } from "../fakeApi";

export default function Products() {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);

    if (value !== "") {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }

    setSearchParams(updatedParams);
  };

  return (
    <main>
      <SearchBox
        value={productName}
        onChange={(value) => updateSearchParams("name", value)}
      />
      <ProductList products={visibleProducts} />
    </main>
  );
}
