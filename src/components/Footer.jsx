import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-slate-200 mt-8">
      <div className="text-center pt-3 ">
        <p> ©2023 NextPage Book Store.</p>
        <div className="flex justify-center gap-4 pt-2  pb-6 items-center">
          <p>Terms of Use </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
