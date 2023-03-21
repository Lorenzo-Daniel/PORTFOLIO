import React from 'react'
import dani from '../../assets/images/da1.jpg'

const AsideResp = () => {
    return (
        <aside className="aside">
            <div>
                <div className='mb-5'>
                    <img src={dani} width={300} alt="yo" />
                </div>
                <div className="d-flex flex-column justify-content-between">
                    <h2 className='text-center'>Daniel Lorenzo</h2>
                    <h5 className='text-center mt-2'>Frontend Developer</h5>
                </div>
                <div className='d-flex justify-content-evenly mt-4'>
                    <i className="fa-brands fa-html5 fs-1"></i>
                    <i className="fa-brands fa-css3-alt fs-1"></i>
                    <i className="fa-brands fa-react fs-1"></i>
                </div>
            </div>
            <div className="aside_icons d-flex justify-content-evenly w-75 pb-3 ">
                <a href="https://github.com/Lorenzo-Daniel?tab=repositories" target={'_blank'} rel='noreferrer'>
                    <i className="fa-brands fa-github "></i>
                </a>
                <a href="https://www.linkedin.com/in/daniel-lorenzo-93318b25a/" target={'_blank'} rel={'noreferrer'}>
                    <i className="fa-brands fa-linkedin "></i>
                </a>
                <a href='mailto:info.daniellorenzo@gmail.com'>
                    <i className="fa-solid fa-envelope "></i>
                </a>
            </div>
        </aside>
    )
}

export default AsideResp