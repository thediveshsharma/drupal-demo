import React from "react";

function HomePage() {
  return (
    <>
      <div className="mainContainer">
        <div class="mainContainer">
          {/* <img src="/bannerlog.jpg" className="w-100" alt="Snow" /> */}
          <div class="centered">
            <h1 className="heading">Welcome World</h1>
            <p className="para">
              Connects humans and machines via awesome interfaces
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-5 p-3">
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
