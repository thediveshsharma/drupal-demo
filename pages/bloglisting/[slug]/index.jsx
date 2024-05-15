import Contact from "@/component/contact";
import React from "react";

function Page({ content }) {
  return (
    <>
      <div className="mainContentBox">
        <div class="mainContainer">
          <img
            src={`http://122.176.75.250:4548${content?.field_blog_listing_flexy_body[0]?.component?.content?.field_image_field?.file_url}`}
            className="w-100"
            alt={
              content.field_blog_listing_flexy_body[0].component.content
                .field_image_field.image_alt
            }
          />
          <div class="centered">
            <h1 className="heading">
              {
                content?.field_blog_listing_flexy_body[0]?.component?.content
                  ?.field_title
              }
            </h1>
            <p className="para">
              {
                content?.field_blog_listing_flexy_body[0]?.content
                  ?.field_sub_title
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
