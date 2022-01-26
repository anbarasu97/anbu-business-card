import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import PFImage from "../images/profilepic.png";
import { BiWorld } from "react-icons/bi";

export default function Info() {
  return (
    <div className="info">
      <img
        src={PFImage}
        className="info--img"
        width="317px"
        alt="profile cover"
      />
      <h1 className="info--title">Anbarasu Palanisamy</h1>
      <p className="info--role">Frontend Developer</p>
      <p className="info--site">
        <BiWorld />
        <a href="https://anbu.netlify.app" target="_blank" rel="noreferrer">
          anbu.netlify.app
        </a>
      </p>
      <div className="buttons">
        <button className="info--email info--button">
          <a
            href="mailto:anbarasu2100@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail />
            Email
          </a>
        </button>
        <button className="info--linkedin info--button">
          <a
            href="https://www.linkedin.com/in/anbarasu-p-2bb46594/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
