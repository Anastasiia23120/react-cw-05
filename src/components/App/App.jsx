// import { Route, Routes, NavLink } from "react-router-dom";
// import clsx from "clsx";
// import Home from "../../pages/Home";
// import About from "../../pages/About";
// import Products from "../../pages/Products";
// import NotFound from "../../pages/NotFound";
// import css from "./App.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export const App = () => {
//   return (
//     <div>
//       <nav className={css.nav}>
//         <NavLink to="/" className={buildLinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/about" className={buildLinkClass}>
//           About
//         </NavLink>
//         <NavLink to="/products" className={buildLinkClass}>
//           Products
//         </NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

{
  /* <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/products">Products</Link>
</nav>; */
}

{
  /* <Route path="/blog/:postId" element={<BlogPost />} />; */
}

// import { Route, Routes, NavLink } from "react-router-dom";
// import clsx from "clsx";
// import Home from "../../pages/Home";
// import About from "../../pages/About";
// import Products from "../../pages/Products";
// import ProductDetails from "../../pages/ProductDetails";
// import NotFound from "../../pages/NotFound";
// import css from "./App.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export const App = () => {
//   return (
//     <div className={css.container}>
//       <header className={css.header}>
//         <p className={css.logo}>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{" "}
//           GoMerch Store
//         </p>

//         <nav className={css.nav}>
//           <NavLink to="/" className={buildLinkClass}>
//             Home
//           </NavLink>

//           <NavLink to="/about" className={buildLinkClass}>
//             About
//           </NavLink>

//           <NavLink to="/products" className={buildLinkClass}>
//             Products
//           </NavLink>
//         </nav>
//       </header>

//       {/* <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/products">Products</Link>
//       </nav> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";
import NotFound from "../../pages/NotFound";
import { AppBar } from "../AppBar/AppBar";
import { Mission } from "../Mission";
import { Team } from "../Team";
import { Reviews } from "../Reviews";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

{
  /* <Route path="/about" element={<About />}>
  <Route path="mission" element={<Mission />} />
  <Route path="team" element={<Team />} />
  <Route path="reviews" element={<Reviews />} />
</Route>; */
}
