import { FacebookSharp, Instagram, X } from "@mui/icons-material";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    const footerList1 = [
        "Help & Contact Us",
        "Returns & Refunds",
        "Online Stores",
        "Terms & Conditions",
    ];
    const footerList2 = [
        "What We Do",
        "Available Services",
        "Latest Posts",
        "FAQs",
    ];
    const footerList3 = ["Twitter", "Instagram", "Tumblr", "Pinterest"];
    const footerList4 = [
        "My Account",
        "Checkout",
        "Order Tracking",
        "Help & Support",
    ];
    return (
        <>
        
        <div className=" bg-black px-14 text-[#fff] overflow-hidden">
        <div className="flex justify-between md:p-28 p-6 md:items-center md:flex-row flex-col ">
            <div>
            <h1 className="tracking-[.2rem] mb-5">CUSTOMER SERVICE</h1>
            {footerList1.map((list, i) => (
                <motion.ul
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                key={i}
                className=" text-[14px] text-[#999999]"
                >
                <Link>{list}</Link>
                </motion.ul>
            ))}
            </div>
            <div>
            <h1 className="tracking-[.2rem] mb-5">COMPANY</h1>
            {footerList2.map((list, i) => (
                <motion.ul
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                key={i}
                className=" text-[14px] text-[#999999]"
                >
                <Link>{list}</Link>
                </motion.ul>
            ))}
            </div>
            <div>
            <h1 className="tracking-[.2rem] mb-5">SOCIAL MEDIA</h1>
            {footerList3.map((list, i) => (
                <motion.ul
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                key={i}
                className="text-[14px] text-[#999999]"
                >
                <Link>{list}</Link>
                </motion.ul>
            ))}
            </div>
            <div>
            <h1 className="tracking-[.2rem] mb-5">PROFILE</h1>
            {footerList4.map((list, i) => (
                <motion.ul
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                key={i}
                className=" text-[14px] text-[#999999]"
                >
                <Link>{list}</Link>
                </motion.ul>
            ))}
            </div>
        </div>
        <div className="md:flex justify-between text-white border-y border-x-0 border border-y-[#c6c6c643] p-5 text-[15px] md:px-28 px-0">
            <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
            &copy; DUTO Interactive, All Rights Reserved
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
            >
            <span> Follow us </span>
            <FaXTwitter />
            <FaInstagram />
            <FaFacebook />
            </motion.div>
        </div>
        </div>
        </>
    );
};

export default Footer;
