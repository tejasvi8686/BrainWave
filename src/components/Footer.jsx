import React from "react";
import Section from "./section";
import { socials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="caption text-n-4">
          Crafted with passion by{" "}
          <Link
            className="font-bold text-n-3"
            target="_blank"
            to="https://tejasviraj.vercel.app/"
          >
            Tejasvi Raj 
          </Link>{"  "}
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
