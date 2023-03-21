import React from 'react'

const PopUpForm = ({visibility,text,closePopUpForm}) => {
    return (
        <div className={visibility ? 'd-none': 'popUpForm-container'}>
            <div className='popUpForm-modal'>
                <p>
                    {text.texto1}
                </p>
                <p>
                    {text.texto2}
                </p>
                <button onClick={closePopUpForm}>
                CLOSE
                </button>
                <div onClick={closePopUpForm}>
                    <i className='fa-solid fa-close'></i>
                </div>
            </div>
        </div>
    )
}

export default PopUpForm