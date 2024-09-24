import React from "react";
import logo from "../assets/logo.png";
import logoText from "../assets/logotext.png";
import banner from "../assets/banner.png";

export default function Logo() {
  return (
    <div>
      <div className="logoPart">
        <div className="flex justify-center mt-6">
          <img src={logo} alt="" className="logoImage" />
        </div>
        <div className="flex justify-center mt-2">
          <img src={logoText} alt="" className="logoImage" />
        </div>
      </div>
      <img
        src={banner}
        alt=""
        className="bannerImage w-full mt-3 md:h-[20rem]"
      />
    </div>
  );
}
