import videoHomePage from "../../assets/hero-lg.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <video autoPlay muted loop>
              <source src={videoHomePage} type="video/mp4" />
            </video>
          </div>
          <div className="col-sm-5">
            <div className="homepage-content">
              <div className="row">
                <div className="col-sm-10">
                  <h1 className="homepage-content__title">
                    Forms that break the norm
                  </h1>
                </div>
              </div>
              <h2 className="homepage-content__subtitle">
                <span>
                  Get more data—like signups, feedback, and anything else—with
                  forms designed to be <b>refreshingly different</b>
                </span>
              </h2>
              <button className="homepage-content__btn-start">
                Get started—it's free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
