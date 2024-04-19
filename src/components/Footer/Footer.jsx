import style from './Footer.module.sass'
import {Link} from "react-router-dom";
import logo from "/public/Logo.svg"

export const Footer = () =>{
    return(
        <footer className={style.footer}>
            <div className={style.logosContainer}>
                <img src={logo} alt="main_logo" className={style.footerLogo}/>
                <div className={style.contactsLogoContainer}>
                    <Link to='/' className={style.listItem__link}>
                        <img src="/public/youtube.svg" alt="youtube_logo"/>
                    </Link>
                    <Link to='/' className={style.listItem__link}>
                        <img src="/public/tg.svg" alt="telegramm_logo"/>
                    </Link>
                    <Link to='/' className={style.listItem__link}>
                        <img src="/public/vk.svg" alt="vk_logo"/>
                    </Link>
                </div>
            </div>
            <div className={style.infoContainer}>
                <div className={style.linksContainer}>
                    <ul className={style.linksList}>
                        <li className="listItem">
                            <Link to='/' className={style.listItem__link}>О нас</Link>
                        </li>
                        <li className="listItem">
                            <Link to='/' className={style.listItem__link}>Проекты</Link>
                        </li>
                        <li className="listItem">
                            <Link to='/' className={style.listItem__link}>Новости</Link>
                        </li>
                    </ul>
                    <ul className={style.linksList}>
                        <li className="listItem">
                            <Link to='/' className={style.listItem__link}>FAQ</Link>
                        </li>
                        <li className="listItem">
                            <Link to='/' className={style.listItem__link}>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.contactsContainer}>
                    <p>г. Горгород, <br/>ул. Мегаполисная, 1</p>
                    <div className={style.contactsInfo}>
                        <p>+7 (000) 000-00-00</p>
                        <p>email@email.ru</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}