import { products } from "../../Utils/products";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const Products = () => {
  const filterLinks = [
    "ALL",
    "HOME DECOR",
    "LIGHTING",
    "DECORATION",
    "VASES",
    "BASICS",
  ];

  return (
    <div className=" flex flex-col  items-center mb-20">
      <div className="flex justify-between mx-20 text-[12px] mb-10 justify-self-start self-start gap-[45rem]">
        <ul className="md:flex hidden gap-10  font-semibold tracking-[.1em] ">
          {filterLinks.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
        <p className="flex items-center">
          FILTER <IoMdArrowDropdown />{" "}
        </p>
      </div>
      <div className="grid grid-cols-4  gap-y-10 w-fit justify-center items-center gap-10 max-[600px]:grid-cols-1">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
