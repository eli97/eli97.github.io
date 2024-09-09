import React from "react";
import { Typography } from "@mui/material";
import "./Footer.css";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="copyright">
          Designed and Developed by{" "}
          <a
            href={resumeData.socials.LinkedIn.link}
            target="_blank"
            rel="noreferrer">
            Elijah Semeryuk
          </a>
          <br></br>
          Clone idea from{" "}
          <a
            href="https://themeforest.net/user/tavonline"
            target="_blank"
            rel="noreferrer">
            tavonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;