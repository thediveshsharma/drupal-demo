import React from "react";

function HomePage({ content }) {
  const homePageData = content?.field_home_page_flexy_body;

  return (
    <div className="mainContentBox">
      <div class="mainContainer">
        <img
          src={`http://122.176.75.250:4548${homePageData[0]?.component?.content?.field_image_field.file_url}`}
          className="w-100"
          alt="Snow"
        />
        <div class="centered">
          <h1 className="heading">
            {homePageData[0]?.component?.content?.field_title}
          </h1>
          <p className="para">
            {homePageData[0]?.component?.content?.field_sub_title}
          </p>
        </div>
      </div>

      <div className="p-2 ">
        <div className="card mt-3 mb-3">
          <div class="card-body">
            <p class="card-text text-center font-weight-bold p-3">
              {homePageData[1].component?.content?.field_title}
            </p>
          </div>
        </div>
        <div className="m-2 pb-3">
          <h1 className="text-center bg-info w-100">Welcome to Gralary! </h1>
          <div className="row mb-3 mt-3">
            <div className="col-lg-4">
              <div class="card">
                <img src="/DidYou.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Sneha</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card">
                <img src="/d.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Remu sharma</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card">
                <img src="/coachingCource.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kabita</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
