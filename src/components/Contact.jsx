import React from "react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white px-8 py-8 min-h-fit">
      <div className="relative h-[400px] ml-4 mt-4">
        <h1 className="text-[290px] font-bold tracking-[-4px] text-[#e5e5e5] ml-4  mt-4">
          contact
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 border-t border-white/10 pb-14">
        {/* EMILIANO SANCHEZ contact */}
        <div className="p-8">
          <div className="flex flex-row">
            <p className="text-8xl font-semibold">EMILIANO SANCHEZ</p>
            <p className="pt-2 pl-2 font-medium">[emisanzmor]</p>
          </div>
          <p className="text-sm text-gray-400 pt-4">MOBILE · WEB DEVELOPER</p>
          <div>
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
