import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gradient-to-l from-blue-100 py-4 px-4 md:px-16 lg:px-32">
      <nav className="flex justify-between items-center  mb-8 ">
        <Link href="/">
          <img
            src="/logo_black.png"
            alt="img"
            className="w-8 md:w-12 lg:w-14"
          />
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="text-sm md:text-md lg:text-lg font-bold">
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm md:text-md lg:text-lg font-bold"
          >
            Events
          </Link>
          <Link
            href="/aboutUs"
            className="text-sm md:text-md lg:text-lg font-bold"
          >
            About Us
          </Link>
        </div>
      </nav>
      <p className="text-xl md:text-2xl lg:text-4xl w-3/4 md:w-2/4 mb-16">
        SED UT PERSPICIATIS UNDE OMNIS
      </p>
    </div>
  );
};

export default Header;
