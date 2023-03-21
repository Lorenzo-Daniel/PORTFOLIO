import React from "react";

const MainContent = ({ showPopUpCoder, showPopUpCurriculum }) => {
  return (
    <section className="mt-5">
      <div className="d-flex flex-column flex-md-row">
        <div className="main_item d-flex flex-column col-md-6 flex-xxl-row animate__animated animate__fadeInLeft ">
          <div className="icon_container" onClick={showPopUpCurriculum}>
            <i className="fa-solid fa-file"></i>
          </div>
          <p className="text-center text-xxl-start ">
            <b>Resume</b> <br />
            Here you can see my resume.
          </p>
        </div>
        <div className="main_item d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInRight">
          <a
            href="https://github.com/Lorenzo-Daniel?tab=repositories"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="icon_container">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
          <p className="text-center text-xxl-start">
            <b>GitHub</b> <br />
            Here you can see some of the projects I've been working on.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="main_item d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInLeft">
          <div className="icon_container" onClick={showPopUpCoder}>
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <p className="text-center text-xxl-start">
            <b>Certificates</b> <br />
            View the study certificates that complete my Frontend profile.
          </p>
        </div>
        <div className="main_item d-flex flex-column col-md-6 flex-xxl-row animate__animated animate__fadeInRight">
          <a
            href="http://www.musadeacuarela.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="icon_container">
              <i className="fa-solid fa-code fs-2 pt-1"></i>
            </div>
          </a>
          <p className="text-center text-xxl-start">
            <b>Freelance projects</b> <br />
            Take a look at my latest Freelance project
          </p>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row">
        <div className="main_item  d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInLeft ">
          <div className="icon_containerNoHover">
            <i
              className="fa-solid fa-eye
                    "
            ></i>
          </div>
          <p className="text-center text-xxl-start">
            <b> What I look for</b> <br />
            Being part of a work team that proposes new challenges and allows me
            to continue developing my skills
          </p>
        </div>
        <div className="main_item d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInRight">
          <div className="icon_containerNoHover">
            <i className="fa-solid fa-bullseye"></i>
          </div>
          <p className="text-center text-xxl-start">
            <b>Goals</b> <br />
            Delve into technologies already explored and venture into new
            technologies. Strengthen my knowledge by overcoming challenges,
            contributing ideas and nourishing myself from that experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
