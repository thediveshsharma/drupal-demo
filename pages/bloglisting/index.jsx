import React from "react";
import withPageContent from "../../component/withContent";
import axios from "axios";
function Page({ blogPageData, content }) {
  console.log("dumb", blogPageData, content);
  return (
    <>
      <div className="mainContentBox">
        <div className="mainContainer">
          <img
            src={`http://122.176.75.250:4548${content?.field_blog_listing_flexy_body[0]?.component?.content?.field_image_field?.file_url}`}
            className="w-100"
            alt={
              content.field_blog_listing_flexy_body[0].component.content
                .field_image_field.image_alt
            }
          />
          <div className="centered">
            <h1 className="heading">
              {
                content?.field_blog_listing_flexy_body[0]?.component?.content
                  ?.field_title
              }
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <h1 className="text-muted">Blog Lists</h1>
        </div>
        {blogPageData.map((item, index) => {
          return (
            <div className="card mx-5 my-3" key={index}>
              <div className="card-body">
                <h5 className="card-title">{item.attributes.title}</h5>

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium dolorem itaque, consequatur quas ut odit enim
                  laborum nostrum quasi qui eum minima, soluta error recusandae
                  fugit excepturi adipisci, omnis repellendus...
                </p>
                <a
                  href={item.attributes.path.alias}
                  className="card-link text-danger font-weight-bolder"
                >
                  <u>Read More</u>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Page;
export const getServerSideProps = withPageContent(null, async ({ query }) => {
  const response = await axios.get(
    `http://122.176.75.250:4548/jsonapi/node/blog_page`
  );

  console.log(
    "blog res ><><><><><><><><><><><><><><><><><><",
    response.data.data,
    "blog res ><><><><><><><><><><><><><><><><><>< END"
  );
  // if (response.data.code !== 200) {
  //   return { props: { blogPageData: null } };
  // }

  return {
    props: {
      blogPageData: response.data.data,
    },
  };
});
