import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/segun-jimoh/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/JimohSegun" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/jimohThompson"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials