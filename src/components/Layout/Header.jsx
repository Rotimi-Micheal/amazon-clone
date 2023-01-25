import React, { Fragment, useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeaderImg from "./HeaderImg";
import HeaderInput from "./HeaderInput";
import ProductContext from "../../context/ProductContext";

const Header = ({ onChange, value, onClick }) => {
  const ctx = useContext(ProductContext);
  const { searchProduct, onClickSearch, onSearchChange, result } = ctx;
  // console.log(searchProduct, result);

  return (
    <Fragment>
      <header className="h-16 flex justify-center items-center bg-[#131921] sticky top-0 z-[100]">
        <HeaderImg />
        <HeaderInput
          onChange={onSearchChange}
          value={searchProduct}
          onClick={onClickSearch}
        />
        <nav className="flex justify-evenly">
          <div className="nav-option">
            <span className="nav-option-line-1">Hello Guest</span>
            <span className="nav-option-line-2">Sign In</span>
          </div>
          <div className="nav-option">
            <span className="nav-option-line-1">Returns</span>
            <span className="nav-option-line-2">& orders</span>
          </div>
          <div className="nav-option">
            <span className="nav-option-line-1">Your</span>
            <span className="nav-option-line-2">Prime</span>
          </div>
          <div className="flex items-center text-white relative">
            <ShoppingCartOutlinedIcon />
            <span className="nav-option-line-2 absolute -top-2 left-2">0</span>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
