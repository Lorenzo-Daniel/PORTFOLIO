import React from 'react'
import viejo from '../../assets/images/viejo.jpg'
import viejo1 from '../../assets/images/viejo1.jpg'

const AsideResp = () => {
    return (
        <div>
            <aside className="aside">
                <div>
                    <div className='mb-5'>
                        <img src={viejo} width={300} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <h1 className='text-center'>Daniel Lorenzo</h1>
                        <h5 className='text-center'>Desarollador Frontend</h5>
                    </div>
                    <div className='d-flex justify-content-evenly mt-5'>
                        <i className="fa-brands fa-html5 fs-1"></i>
                        <i className="fa-brands fa-css3-alt fs-1"></i>
                        <i className="fa-brands fa-react fs-1"></i>
                    </div>
                </div>
                <div className="aside_icons d-flex justify-content-evenly w-75 pb-3 ">
                    <i className="fa-brands fa-github "></i>
                    <i className="fa-brands fa-linkedin "></i>
                    <i className="fa-solid fa-envelope "></i>
                </div>
            </aside>
            <div className="img col-md-6 d-none">
                <img src={viejo1} className='img-fluid w-100' alt="" />
            </div>
        </div>
    )
}

export default AsideResp