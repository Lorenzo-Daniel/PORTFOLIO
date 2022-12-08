import React from 'react'
import dani from '../../../assets/images/da1-2.jpg'
// import MatrixRain from '../../Matrix/MatrixRain'




const Hero = () => {
    return (
        <section >
            <div className='  d-xl-none mt-3 '>
            {/* <MatrixRain/> */}
                <img src={dani} className='img-fluid w-100 ' alt="portada"
                style={{
                    maxHeight : 400,
                    objectFit : 'cover',
                    objectPosition : 'center'
                }}/>
            </div>
        </section>
    )
}

export default Hero