import React from 'react'




const MainContent = ({ showPopUpCoder, showPopUpCurriculum }) => {
    return (
        <div className="mt-5">
            <div className="d-flex flex-column flex-md-row">
                <div className="main_item d-flex flex-column col-md-6 flex-xxl-row animate__animated animate__fadeInLeft ">
                    <div className="icon_container" onClick={showPopUpCurriculum}>
                        <i className="fa-solid fa-file"></i>
                    </div>
                    <p className="text-center text-xxl-start ">
                        <b>Curriculum</b> <br />
                        Aquí podrás ver mi CV.
                    </p>
                </div>
                <div className="main_item d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInRight">
                    <a href="https://github.com/Lorenzo-Daniel?tab=repositories" target={'_blank'} rel="noreferrer">
                        <div className="icon_container">
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </a>
                    <p className="text-center text-xxl-start">
                        <b>GitHub</b> <br />
                        Aquí podrás ver algunos de los proyectos en los que he estado trabajando.
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
                <div className="main_item d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInLeft">
                    <div className="icon_container" onClick={showPopUpCoder}>
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <p className="text-center text-xxl-start">
                        <b>Certificados</b> <br />
                        Visualiza los certificados de estudio que completan mi perfil Frontend.
                    </p>
                </div>
                <div className="main_item d-flex flex-column col-md-6 flex-xxl-row animate__animated animate__fadeInRight">
                    <a href="http://www.musadeacuarela.com/" target={'_blank'} rel='noreferrer'>
                        <div className="icon_container">
                            <i className="fa-solid fa-code fs-2 pt-1"></i>
                        </div>
                    </a>
                    <p className="text-center text-xxl-start">
                        <b>Proyectos freelance</b> <br />
                        Échale un vistazo a mi último proyecto Freelance
                    </p>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row">
                <div className="main_item  d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInLeft ">
                    <div className="icon_containerNoHover">
                        <i className="fa-solid fa-eye
                    "></i>
                    </div>
                    <p className="text-center text-xxl-start">
                        <b>Lo que busco</b> <br />
                        ...
                    </p>
                </div>
                <div className="main_item d-flex flex-column col-md-6 flex-xxl-row  animate__animated animate__fadeInRight">
                    <div className="icon_containerNoHover">
                        <i className="fa-solid fa-bullseye"></i>
                    </div>
                    <p className="text-center text-xxl-start">
                        <b>Objetivos</b> <br />
                        ...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainContent