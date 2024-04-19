import style from './Header.module.sass'
import {Link} from 'react-router-dom';
import {GradientButton} from "../GradientButton/GradientButton.jsx";
import {Modal} from "../Modal/Modal.jsx";
import {useEffect, useState} from "react";
import logo from "/public/market-purchase-svgrepo-com.svg"
import arrow from "/public/AccordionArrow.svg"
import cross from "/public/menuCross.svg"
import menu_logo from "/public/Burger.svg"


export const Header = () => {
    const [isVisible, setVisibility] = useState(false);
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    const [isOpenedNumber, setOpenNumber] = useState(0);

    const handleOpening = (accordionNumber) =>{
        if (accordionNumber === isOpenedNumber){
            return setOpenNumber(0)
        }
        setOpenNumber(accordionNumber)
    }

    useEffect(() => {
        const handleResize = () => {
            if(document.body.offsetWidth > 1024)
                setIsVisibleMenu(false)
            setIsMobile(document.body.offsetWidth <= 1024)
        };

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return(
        <>
            <header className={style.header}>
                <div className={style.mainContainer}>
                    <img src={logo} alt="logo" className={style.logo}/>
                    {
                        (isMobile && isVisibleMenu || !isMobile) ?
                            <>
                            <div className={style.overlay}></div>
                            <div className={style.headerInfoContainer}>
                                <nav className={style.headerInfoContainer__navigation}>
                                    <ul className={style.navigation__list}>
                                        <li className="listItem"  onClick={() => handleOpening(1)}>
                                            <div className={style.accordion} >
                                                <span className={`${style.accordionTitle} ${ isOpenedNumber !==1  ? style.shaded : ''}`}>
                                                    О нас
                                                    <img src={arrow} alt="arrow" className={(isOpenedNumber === 1 || !isMobile)? `${style.accordionArrow}`: ``}/>
                                                </span>
                                                <div className={(isOpenedNumber === 1 || !isMobile)? `${style.accordionContent}`: `${style.nonActive}`}>
                                                    <ul className={style.accordionInfo}>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>О 500на700</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Команда</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Документы</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Стратегия</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Устойчивое развитие</Link>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="listItem"  onClick={() => handleOpening(2)}>
                                            <div className={style.accordion}>
                                                <span className={`${style.accordionTitle} ${ isOpenedNumber !==2   ? style.shaded : ''}`}>
                                                    Проекты
                                                    <img src={arrow} alt="arrow" className={(isOpenedNumber === 2 || !isMobile)? `${style.accordionArrow}`: ``}/>
                                                </span>
                                                <div className={(isOpenedNumber === 2 || !isMobile)? `${style.accordionContent}`: `${style.nonActive}`} >
                                                    <ul className={style.accordionInfo}>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>О 500на700</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Команда</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Документы</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Стратегия</Link>
                                                        </li>
                                                        <li className={style.accordionItem}>
                                                            <Link to='/' className={style.accordionItem__link}>Устойчивое развитие</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="listItem" onClick={() => handleOpening(3)}>
                                            <Link to='/' className={`${style.listItem__link} ${ isOpenedNumber !==3  ? style.shaded : ''}`}>Новости</Link>
                                        </li>
                                        <li className="listItem" onClick={() => handleOpening(4)}>
                                            <Link to='/' className={`${style.listItem__link} ${ isOpenedNumber !==4 ? style.shaded : ''}`}>FAQ</Link>
                                        </li>
                                        <li className="listItem" onClick={() => handleOpening(5)}>
                                            <Link to='/' className={`${style.listItem__link} ${ isOpenedNumber !==5 ? style.shaded : ''}`}>Контакты</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <div className={style.buttonContainer} onClick={() => setVisibility(prevState => !prevState)}>
                                    <GradientButton property={['Связаться с нами', 'black']} />
                                </div>
                            </div>
                            </>
                            :
                            <></>
                    }

                    <div className={style.buttonsContainer}>
                        {
                            isVisibleMenu ?
                                <button className={style.cross} onClick={() => {setIsVisibleMenu(prevState => !prevState)}}>
                                    <img src={cross} alt="cross"/>
                                </button> :
                                <button className={style.menu} type='button' onClick={() => {setIsVisibleMenu(prevState => !prevState)}}>
                                    <img src={menu_logo} alt="menu_logo" className="menuLogo"/>
                                </button>
                        }
                    </div>
                </div>
            </header>
            {
                (isVisible) ? <Modal setVisibility={setVisibility}/> : <></>
            }
        </>
    )
}