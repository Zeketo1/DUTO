import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext/CartContext";
import {
    SearchSharp,
    MenuSharp,
    FavoriteBorder,
    PersonOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { sideBarContext } from "../../App";
const { bar, setBar } = useContext(sideBarContext);
const { getTotalPriceAmount } = useContext(CartContext);


export const lists = [
  { link: "/", title: "HOME" },
  { link: "/shop", title: "SHOP" },
  { link: "/pages", title: "PAGES" },
  { link: "/elements", title: "ELEMENTS" },
];
export const navLeft = [
  { text: `CART ($${getTotalPriceAmount()})`, link: "/cart" },
  { icon: <FavoriteBorder />, text: "($0)" },
  { icon: <PersonOutline />, text: "LOGIN" },
  {
    icon: <SearchSharp className="rotate-90" />,
    text: (
      <MenuSharp
        className="cursor-pointer"
        onClick={() =>
          setBar(
            "right-0 bg-[#000] min-h-[100vh] w-[37.8rem] top-0 fixed z-[9999] transit flex flex-col justify-between"
          )
        }
      />
    ),
  },
];
