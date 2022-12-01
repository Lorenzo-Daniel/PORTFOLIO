import React from 'react'
import viejo1 from '../../../assets/images/viejo1.jpg'

const Hero = () => {
    return (
        <div >
            <div className='mt-3 mt-md-5'>
                <img src={viejo1}  className='img-fluid w-100 ' alt="" />
            </div>
            <div className='col-11 m-auto'>
                <h2 className='text-center mt-4'>Sobre Mi</h2>
                <p className='text-center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolor incidunt iure fuga fugiat quis quam culpa. Aspernatur doloribus nobis laboriosam voluptatem. Adipisci aliquam, eum incidunt facere vel pariatur accusamus?
                </p>
            </div>
        </div>
    )
}

export default Hero