import { useContext, useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import rating from "/rating.jpg";
import { products } from "../../Utils/products";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);

  console.log(useParams);
  const { id } = useParams();

  const productData = products.find((product) => product.id == id);
  useEffect(() => {
    document.title = `${productData.name.toLowerCase()}-DUTO`;
  }, []);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  const animate = useRef();
  const navigate = useNavigate();
  const animateHome = () => {
    animate.current.classList.add("animate-pulse");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="grid">
      <div>
        <div className="relative top-5 flex gap-1 px-28">
          {navigationLinks.map(({ label }) => (
            <ul key={label}>
              <li onClick={animateHome}>/{label}</li>
            </ul>
          ))}
        </div>

        <div ref={animate} className="flex justify-center px-[7rem] py-[5rem]">
          <img className="h-[25rem]" src={productData.image} alt="" />
          <div className="flex flex-col gap-10 px-28">
            <div className="text-[24px]">
              <h1 className="font-bold tracking-[2px]">{productData.name}</h1>
              <p className="font-sans">${productData.price}</p>
            </div>
            <div className="flex items-center">
              <img className="h-6" src={rating} alt="" />
              <span className="text-[#929292] text-[13px]">
                (Customer Review)
              </span>
            </div>
            <div className="text-[#929292] text-[16px] description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </div>
            <div className="flex align-middle">
              <button className="flex gap-12 px-2 py-2 border text-[.8rem] text-[#999]">
                <span>Quantity</span>
                <span className="flex items-center gap-4">
                  <IoMdArrowDropleft />
                  <span>4</span>
                  <IoMdArrowDropright />
                </span>
              </button>
              <button
                onClick={() => addToCart(productData)}
                type="submit"
                className="relative bg-black px-[2.51rem] py-[.27rem] text-white"
              >
                <span className="relative top-[.4rem] font-bold text-[12px] tracking-[.15rem]">
                  ADD TO CART
                </span>
                <span className="relative -top-[2rem] left-[8.3rem] flex w-3 h-3">
                  <span className="inline-flex absolute bg-slate-700 opacity-75 rounded-full w-full h-full animate-ping"></span>
                  <span className="inline-flex relative bg-black rounded-full w-3 h-3"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
