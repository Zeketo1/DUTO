import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = `DUTO`;
    }, []);
    return (
        <>
        <Banner />
        <Products />
        </>
    );
};

export default Home;
