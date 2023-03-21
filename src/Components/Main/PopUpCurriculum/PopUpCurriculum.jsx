import React from 'react'
// import curriculum from '../../../assets/images/Currículum Diseñador Profesional Blanco y negro.png'
import curriculum from '../../../assets/images/Currículum English.jpg'


const PopUpCurriculum = ({ visibility, closePopUpCurr }) => {
  return (
    <div className={`popUpCurr_Box ${visibility}`}>
      <div className='popUpCurr_Modal'>
        <img src={curriculum} width={800} className='img-fluid'  alt="currculum1" />
          <div className='popUpCurr_img-btn-close' onClick={closePopUpCurr}>
            <i className='fa-solid fa-close'></i>
        </div>
      </div>
    </div>
  )
}

export default PopUpCurriculum;