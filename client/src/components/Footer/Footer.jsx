import React from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom';
export default function Footer() {

    function handlerScrollHome () {
        const home = document.getElementById("Home");
        if (home) {
            home.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
        }
    }

  return (
    <div className={style.footerView}>
        <div className={style.blockLeft}>
            <div className={style.contactos}>
                <h2 className={style.h2BL}>Contactanos</h2>
                <a className={style.aLinks} href=''><i className='bx bxs-phone'></i>+(54) 9 11 81972522</a>
                <a className={style.aLinks} href=''><i className='bx bxl-gmail'></i> Market@gmail.com</a>
                <a className={style.aLinks} href=''><i className='bx bxl-twitter'></i>MMarket</a>
                <a className={style.aLinks} href=''><i className='bx bxl-instagram' ></i> MMarket</a>
                <div >
                    <Link to="/nosotros">
                       <button className={style.custom} >
                          <span className={style.iconText}>👋 Nosotros  </span>
                       </button>
                    </Link>
              </div>
            </div>
            <div className={style.feedback}>
                <h2 className={style.h2BL}>FeedBack</h2>
                <input className={style.input} placeholder='Usuario' type="text" />
                <textarea placeholder="Feedback" className={style.textarea}/>
                <button className={style.btn}>Enviar</button>
            </div>
 
        </div>
        <div className={style.blockRight}>
        <h3 className={style.textIframe}>Donde nos Encontramos</h3>
        <iframe className={style.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.946153287807!2d-58.409132573046854!3d-34.6055231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbe25655e197%3A0xa87d48db46b1fb59!2sCleanliness%20Market%2F%20%40omarmrlumoss!5e0!3m2!1ses!2sar!4v1691163119507!5m2!1ses!2sar" ></iframe>
        <button className={style.btn} onClick={handlerScrollHome}>Inicio</button>
        </div>
    </div>
  )
}
