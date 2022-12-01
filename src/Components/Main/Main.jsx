import React, { useState } from 'react'
import Aside from '../Aside/Aside'
import Hero from './Hero/Hero'
import MainContent from './MainContent/MainContent'
import Form from './Form/Form'
import Footer from '../Footer/Footer';
import PopUpCoder from './PopUpCoder/PopUpCoder'
import PopUpCurriculum from './PdfViewer/PopUpCurriculum'





const Main = () => {
    const [visibilityPopUpCoder, setVisibilityPopUpCoder] = useState(false)
    const [visibilityPopUpCurriculum, setVisibilityPopUpCurriculum] = useState(false)
    const showPopUpCoder = () => {
        setVisibilityPopUpCoder(true)
    }
    const closePopUpCoder = () => {
        setVisibilityPopUpCoder(false)
    }
    const showPopUpCurriculum = () => {
        setVisibilityPopUpCurriculum(true)
    }
    const closePopUpCurriculum = () => {
        setVisibilityPopUpCurriculum(false)
    }
    return (
        <div className='d-flex flex-column flex-xl-row'>
            <div className='col-3 d-none d-xl-flex'>
                <Aside />
            </div>
            <div>
                <div className='col-11 col-xl-10 m-auto'>
                    <Hero />
                    <MainContent showPopUpCoder={showPopUpCoder} showPopUpCurriculum={showPopUpCurriculum} />
                    <Form />
                </div>
                <Footer />
            </div>
            <PopUpCoder
                visibility={visibilityPopUpCoder ? '' : 'd-none'}
                closePopUp={closePopUpCoder} />
            <PopUpCurriculum 
            visibility={visibilityPopUpCurriculum ? '' : 'd-none'} 
            closePopUpCurr={closePopUpCurriculum}/>
         
        </div>
    )
}

export default Main