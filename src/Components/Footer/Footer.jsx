import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-5'>
            <ul className='list-unstyled d-flex justify-content-evenly m-0 '>
                <li className='icon_container '>
                    <a href="https://github.com/Lorenzo-Daniel?tab=repositories" target={'_blank'} rel='noreferrer'>
                        <i className="fa-brands fa-github fs-1"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/daniel-lorenzo-1a2623186/" target={'_blank'} rel={'noreferrer'}>
                        <i className="fa-brands fa-linkedin fs-1"></i>
                    </a>
                </li>
                <li>
                    <a href='mailto:info.daniellorenzo@gmail.com'>
                        <i className="fa-solid fa-envelope fs-1 "></i>
                    </a>
                </li>
            </ul>
            <p className='mt-4 mb-0 py-1 text-center'>
                Desarrollado por Daniel Lorenzo
            </p>
        </footer>
    )
}

export default Footer