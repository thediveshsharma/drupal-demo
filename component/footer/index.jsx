import React from "react";

function Footer({ content }) {
 
  return (
    <div className="footer bg-light d-flex align-items-center justify-content-between">
      <div className="d-flex justify-content-around">
        <span>{content?.field_footer_text}</span>
      </div>
      <p className="m-0">{content?.field_footer_text_2}</p>
    </div>
  );
}

export default Footer;
