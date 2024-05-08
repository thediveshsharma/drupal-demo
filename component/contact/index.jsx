import React from "react";

function Contact({ content }) {
  const blogPageData = content?.field_blog_page_flexy_body;
  return (
    <div className="mainContentBox blog">
      <div class="mainContainer about">
        <img
          src={`http://122.176.75.250:4548/${blogPageData[0].component?.content?.field_image_field?.file_url}`}
          className="w-100"
          alt="Snow"
        />
        <div class="centered">
          <h1 className="heading">
            {blogPageData[0].component?.content?.field_title}
          </h1>
          <p className="para"></p>
        </div>
      </div>
      <div className="card mt-3 p-3 m-3">
        <div class="card-body">
          <h1 className="">
            {blogPageData[1]?.component?.content?.field_title}
          </h1>
          <p class="card-text font-weight-bold">
            {blogPageData[1]?.component?.content?.field_description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
