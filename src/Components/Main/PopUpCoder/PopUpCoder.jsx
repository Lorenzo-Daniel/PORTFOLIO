import React, { useState } from 'react'
import DW from '../../../assets/images/certificados Coder/DesarrolloWeb.png'
import JS from '../../../assets/images/certificados Coder/JavaScript.png'
import Reactt from '../../../assets/images/certificados Coder/React.png';

const PopUpCoder = ({ visibility, closePopUp }) => {
    const [animation, setAnimation] = useState();
    const [animationIndex, setAnimationIndex] = useState(0);

    return (
        <div className={`popUp_Box ${visibility}`}>
            <div className='popUp_Modal'>
                <div className='popUp_img'>
                    <div className='d-flex overflow-hidden'>
                        <div className='d-flex'>
                            <img
                                src={DW}
                                width={800}
                                className={`img-fluid ${animation}`}
                                alt="Desarrollo web" />
                            <img
                                src={JS}
                                width={800}
                                className={`img-fluid ${animation}`}
                                alt='Java Script' />
                            <img
                                src={Reactt}
                                width={800}
                                className={`img-fluid ${animation}`}
                                alt='React JS'
                                onClick={() => setAnimation('animation2')} />
                            <div>

                                <div className='popUp_img-btn-anterior'>
                                    <button
                                        onClick={() => {
                                            if (animationIndex === 2) {
                                                setAnimation('animationRigth1');
                                                setAnimationIndex(1)
                                            } else if (animationIndex === 1) {
                                                setAnimation('animationRigth2')
                                                setAnimationIndex(0)
                                            }
                                        }}
                                        disabled={animationIndex === 0}>
                                        <i className="fa-solid fa-chevron-left text-white"></i>
                                    </button>
                                </div>

                                <div className='popUp_img-btn-siguiente'>
                                    <button onClick={() => {
                                        if (animationIndex === 0) {
                                            setAnimation('animationLeft1');
                                            setAnimationIndex(1)
                                        } else if (animationIndex === 1) {
                                            setAnimation('animationLeft2')
                                            setAnimationIndex(2)
                                        }
                                    }}
                                        disabled={animationIndex === 2}>
                                        <i className="fa-solid fa-chevron-right text-white"></i>
                                    </button>
                                </div>
                                <div className='popUp_img-btn-close'
                                    onClick={closePopUp}>
                                    <i className='fa-solid fa-close'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpCoder