import Link from "next/link";
import React from "react";

function Header({ content }) {
  console.log(content, "content");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light headerBg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="logoStyle">
            <img
              src={`http://122.176.75.250:4548${content?.field_image_field?.file_url}`}
              alt={content?.field_image_field?.image_alt}
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {content?.field_menu?.map((item, index) => {
              return (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href={item?.title_component?.field_title}
                    >
                      {item?.title_component?.field_title}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
