import React from 'react'
import curriculum1 from '../../../assets/images/curr.png';
import curriculum2 from '../../../assets/images/CurriculumVitae2.jpg';


const PopUpCurriculum = ({ visibility, closePopUpCurr }) => {
  return (
    <div className={`popUpCurr_Box ${visibility}`}>
      <div className='popUpCurr_Modal'>
        <img src={curriculum1} width={800} className='img-fluid'  alt="currculum1" />
        <img src={curriculum2} width={800} className='img-fluid'  alt="curriculum2" />
          <div className='popUpCurr_img-btn-close' onClick={closePopUpCurr}>
            <i className='fa-solid fa-close'></i>
        </div>
      </div>
    </div>
  )
}

export default PopUpCurriculum;