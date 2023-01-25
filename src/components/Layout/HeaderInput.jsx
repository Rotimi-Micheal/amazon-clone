import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const HeaderInput = ({ onChange, onClick, value }) => {
  return (
    <div className="flex items-center w-full flex-1 rounded-[24px]">
      <input
        className="h-[12px] p-3 border-none w-full"
        type={"search"}
        onChange={onChange}
        value={value}
      />
      <button type={"submit"} onClick={onClick}>
        <SearchIcon className="p-[5px] h-[22px] bg-[#cd9042]" />
      </button>
    </div>
  );
};

export default HeaderInput;
