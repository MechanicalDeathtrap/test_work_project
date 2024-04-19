import style from "./FaqBlock.module.sass"
import { useState} from "react";

export const FaqBlock = () =>{

    const [isOpenedNumber, setOpenNumber] = useState(0);

    const handleOpening = (accordionNumber) =>{
        if (accordionNumber === isOpenedNumber){
            return setOpenNumber(0)
        }
        setOpenNumber(accordionNumber)
    }

    return(
        <div className={style.mainContainer}>
            <div className="titleContainer">
                <h1 className={style.blockTitle}>Faq</h1>
            </div>
            <div className={style.accordionContainer}>
                <ul className="accordionList">
                    <li className={style.listItem} onClick={() => handleOpening(1)}>
                        <div className={style.accordion}>
                            <div className={style.accordionTitle}>
                                <h2 className={style.title}> Какие услуги предоставляет ваша студия? </h2>
                                <img src="/public/AccordionArrow.svg" alt="arrow" className={(isOpenedNumber === 1)? `${style.accordionArrow} ${style.arrowActive}`: `${style.accordionArrow} `}/>
                            </div>
                            <div className={(isOpenedNumber === 1)? `${style.accordionContent}`: `${style.accordionContent} ${style.nonActive}`}>
                                <p className={style.info}>Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.</p>
                            </div>
                        </div>
                    </li>
                    <li className={style.listItem} onClick={() => handleOpening(2)}>
                        <div className={style.accordion}>
                            <div className={style.accordionTitle}>
                                <h2 className={style.title}>Как вы обеспечиваете качество и уникальность дизайна? </h2>
                                <img src="/public/AccordionArrow.svg" alt="arrow" className={(isOpenedNumber === 2)? `${style.accordionArrow} ${style.arrowActive}`: `${style.accordionArrow} `}/>
                            </div>

                            <div className={(isOpenedNumber === 2)? `${style.accordionContent}`: `${style.accordionContent} ${style.nonActive}`}>
                                <p className={style.info}>Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.</p>
                            </div>
                        </div>
                    </li>
                    <li className={style.listItem} onClick={() => handleOpening(3)}>
                        <div className={style.accordion}>
                            <div className={style.accordionTitle}>
                                <h2 className={style.title}>Предоставляете ли вы услуги по созданию контента для сайтов и приложений? </h2>
                                <img src="/public/AccordionArrow.svg" alt="arrow" className={(isOpenedNumber === 3)? `${style.accordionArrow} ${style.arrowActive}`: `${style.accordionArrow} `}/>
                            </div>
                            <div className={(isOpenedNumber === 3)? `${style.accordionContent}`: `${style.accordionContent} ${style.nonActive}`}>
                                <p className={style.info}>Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}