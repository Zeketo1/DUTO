import React, { useEffect, useState } from "react";
import { slider } from "../../Utils/slider";
import { motion } from "framer-motion";

const Banner = () => {
    const [banner, setBanner] = useState(2);

    const nextSlide = () => {
        setInterval(() => {
            setBanner(banner === slider.length - 1 ? 0 : banner + 1);
        }, 4000);
    };

    useEffect(() => {
        setBanner(0);
    }, []);

    useEffect(() => {
        nextSlide();
    }, [banner]);

    const container = (x, delay) => ({
        hidden: { x: x, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        },
    });

    return (
        <div className=" flex md:flex-row justify-center mb-28">
            <div className="bg-[#f3f3f3] h-[38rem] md:w-[90%] w-full flex md:flex-row flex-col  items-center p-16 overflow-hidden justify-center ">
                {slider.map(
                    ({ sliderHeader, quote, image, style, initial, end }, i) =>
                        banner === i && (
                            <div
                                key={i}
                                className=" flex items-center relative md:flex-row flex-col"
                            >
                                <div className="text md:w-[40%] w-[90%] relative -bottom-28">
                                    <motion.h1
                                        variants={container(100, 1)}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-3xl font-medium tracking-[3px] text-gray-800 mb-2"
                                    >
                                        {sliderHeader}.
                                    </motion.h1>
                                    <motion.p
                                        variants={container(100, 1.2)}
                                        initial="hidden"
                                        animate="visible"
                                        className=" text-[#999999] text-[1.1rem] font-[340]"
                                    >
                                        {quote}.
                                    </motion.p>
                                </div>
                                <div className="imgSlider w-[70%] relative left-32 flex">
                                    <motion.img
                                        initial={{ y: initial }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.5,
                                        }}
                                        animate={{ y: end }}
                                        className={style ? style : style[0]}
                                        src={image[0]}
                                        alt=""
                                    />
                                    {image[1] && (
                                        <motion.img
                                            initial={{ y: initial }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 1.6,
                                            }}
                                            animate={{ y: -3 }}
                                            className={style[1]}
                                            src={image[1]}
                                            alt=""
                                        />
                                    )}
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Banner;
