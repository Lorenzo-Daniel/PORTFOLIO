import React from 'react'
import dani from '../../../assets/images/da1-2.jpg'


const Hero = () => {
    return (
        <section className='  d-xl-none mt-3 '>
            <div>
                <img src={dani} className='img-fluid w-100 ' alt="portada"
                    style={{
                        maxHeight: 400,
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }} />
            </div>
            <h1 className='mt-4 text-center'>Sobre Mi</h1>
            <p className='text-center'>
                Soy una persona con un alto grado de responsabilidad, compromiso, interés y entusiasmo por desarrollarme en el mundo IT.
            </p>
        </section>
    )
}

export default Hero