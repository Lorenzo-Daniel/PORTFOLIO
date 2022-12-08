import React from 'react'
import rubik from '../../../assets/images/adobe2.jpg'
import MatrixRain from '../../Matrix/MatrixRain'




const Hero = () => {
    return (
        <section className='hero'>
            <div className=' img mt-3  '>
            <MatrixRain/>
                {/* <img src={rubik}  className='img-fluid w-100 ' alt="portada" /> */}
            </div>
            {/* <div className='col-11 m-auto'>
               <h2 className='text-center mt-5'>Sobre Mi</h2>
                <p className='text-center'>
                  Responsable, aplicado, dinamico, autonomo , con gran adaptabilidad y con gusto por los desafios.
                </p>
            </div> */} 
        </section>
    )
}

export default Hero