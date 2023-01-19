import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <Fragment>
      <header className="h-16 flex justify-center items-center bg-[#131921] sticky top-0 z-[100]">
        <img
          className="w-[100px] object-contain mx-5 mt-[18px]"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div className="flex items-center w-full flex-1 rounded-[24px]">
          <input className="h-[12px] p-3 border-none w-full" type={"text"} />
          <SearchIcon className="p-[5px] h-[22px] bg-[#cd9042]" />
        </div>
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
