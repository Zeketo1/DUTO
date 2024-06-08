import { CloseOutlined, Facebook, Instagram, X } from "@mui/icons-material";
import { useContext, useEffect, useRef } from "react";
import { sideBarContext } from "../../../App";
import { motion } from "framer-motion";
import girl from "/side-bar-products/girl.jpg";
import boutique from "/side-bar-products/boutique.jpg";
import box from "/side-bar-products/box.jpg";
import flower from "/side-bar-products/flower.jpg";
import light from "/side-bar-products/light.jpg";
import vase from "/side-bar-products/vase.jpg";
import shop from "/side-bar-products/shop.jpg";
import pillow from "/side-bar-products/pillow.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SideBar = () => {
    const { bar, setBar } = useContext(sideBarContext);
    const barClose = useRef();

    const images = [girl, light, shop, vase, flower, boutique, box, pillow];
    return (
        <div className="max-[600px]:hidden">
            <motion.div
                initial={{ x: 700 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className={bar}
            >
                <div className=" flex flex-col gap-10 text-white text-center items-center">
                    <CloseOutlined
                        className=" self-end text-white hover:text-stone-800 cursor-pointer top-10 relative -left-5 z-[100000]"
                        onClick={() =>
                            setBar(
                                "right-[-100%] bg-[#000] min-h-[100vh] w-[37.8rem] top-0 fixed z-[9999] transit"
                            )
                        }
                    />
                    <div>
                        <h1 className="my-5">WELCOME</h1>
                        <p className="text-[#929292] text-2xl w-[80%] mx-14">
                            Advertising is the way great brands get to be great
                            brands.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-2 px-10 mx-20 w-[80%] cursor-pointer">
                        {images.map((image, i) => (
                            <div key={i} className="group relative">
                                <img
                                    className="h-24 transition-all duration-1000 group-hover:opacity-30"
                                    src={image}
                                    alt=""
                                />
                                <FaInstagram className="absolute top-[2.5rem] left-[2.4rem] text-xl hidden  group-hover:block me  group-hover:animate-[bounce_1s_both]" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="grid items-center justify-center">
                        <p className="text-[12px] text-[#afafaf] mb-4 font-medium tracking-[0.2rem]">
                            WE ARE AWESOME FOLOW US
                        </p>
                        <div className="icons text-white flex items-center justify-center gap-3 cursor-pointer">
                            <FaXTwitter className="text-xl  hover:text-[#929292]" />
                            <Instagram className=" hover:text-[#929292]" />
                            <Facebook className=" hover:text-[#929292]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SideBar;
