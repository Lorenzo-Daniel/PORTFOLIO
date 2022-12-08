import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [changeBtnValue, setChangeBtnValuue] = useState(true)
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [message, setMessage] = useState([]);
    const [phone, setPhone] = useState([]);
    const [invalidName, setInvalidName] = useState(true);
    const [invalidEmail, setInvalidEmail] = useState(true);
    const [invalidPhone, setInvalidPhone] = useState(true);
    const [invalidMessage, setInvalidMessage] = useState(true);
    useEffect(() => {
        if (name.length !== 0) {
            setInvalidName(true)
        }
        if (email.length !== 0) {
            setInvalidEmail(true)
        }
        if (phone.length !== 0) {
            setInvalidPhone(true)
        }
        if (message.length !== 0) {
            setInvalidMessage(true)
        }
    }, [name, email, message, phone])

    const validarCampos = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            setInvalidName(false)
            return false
        } else if (email.length === 0) {
            setInvalidEmail(false)
            return false
        } else if (phone.length === 0) {
            setInvalidPhone(false)
            return false
        } else if (message.length === 0) {
            setInvalidMessage(false)
            return false
        }
        else {
            setChangeBtnValuue(false);
            emailjs.sendForm('default_service', 'template_0ra71df', form.current, '32WkBY9c16zRle6EC')
                .then(() => {
                    form.current.reset();
                    alert('fin del proceso')
                    setChangeBtnValuue(true);
                }, () => {
                    form.current.reset();
                    alert('fin del proceso que salio mal')
                    setChangeBtnValuue(true);
                });
        }
    }

    return (
        <div className='form'>
            <h2>Contacto</h2>
            <form className='d-flex flex-column gap-4 flex-md-row' ref={form} onSubmit={validarCampos}>
                <div className="col-md-6 d-flex flex-column gap-4">
                    <div className="form-group">
                        <label className='label-input' >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            className={invalidName ? 'form-input' : 'form-input-invalid'}
                            onInput={(e) => setName(e.target.value)}
                        />
                        <p className={invalidName ? 'd-none' : 'requiredField'}>
                            Campo requerido *
                        </p>
                    </div>
                    <div className="form-group">
                        <label className='label-input' >
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            className={invalidEmail ? 'form-input' : 'form-input-invalid'}
                            onInput={(e) => setEmail(e.target.value)} />
                        <p className={invalidEmail ? 'd-none' : 'requiredField'}>
                            Campo requerido *
                        </p>
                    </div>
                    <div className="form-group">
                        <label className='label-input' >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id='phone'
                            name='phone'
                            className={invalidPhone ? 'form-input' : 'form-input-invalid'}
                            onInput={(e) => setPhone(e.target.value)} />
                        <p className={invalidPhone ? 'd-none' : 'requiredField'}>
                            Campo requerido *
                        </p>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column gap-4 justify-content-md-between ">
                    <div className="form-group">
                        <textarea
                            name="message"
                            id="message"
                            className={invalidMessage ? 'form-input textarea' : 'form-input-invalid textarea'}
                            placeholder="Mensaje"
                            onInput={(e) => setMessage(e.target.value)} />
                        <p className={invalidMessage ? 'd-none' : 'requiredField'}>
                            Campo requerido *
                        </p>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            id='btnSubmit'
                            value={changeBtnValue ? 'ENVIAR MENSAJE' : 'ENVIANDO MENSAJE...'}
                            disabled={!changeBtnValue}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form