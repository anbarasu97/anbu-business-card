import React from "react";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsTelegram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/anbarasu97" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a
        href="https://www.facebook.com/Anbuu.Arasu/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://twitter.com/anbu_arasu97"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a href="https://t.me/anbarasu1997" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </footer>
  );
}
