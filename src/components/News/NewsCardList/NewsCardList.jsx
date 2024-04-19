import style from "./NewsCardList.module.sass"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const NewsCardList = ({data}) =>{
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false)

    const slidesNumber = data.length

    const nextSlide = () => {
        setCurrent(current === slidesNumber - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slidesNumber - 1 : current - 1);
    }

    useEffect(() => {
        const handleResize = () => {
            console.log(document.body.offsetWidth);
            setIsMobile(document.body.offsetWidth <= 1024)
        };

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, [])

    return(
        <ul className={style.cardsContainer}>
            {
                (Array.isArray(data) || data.length <= 0) ?
                    (
                        data.map((card, index) =>{
                            return(
                                <>
                                {
                                    ((isMobile && index === current) || !isMobile)?
                                    (
                                        <li  key={index} className={index === current ? `${style.active}` : ``}>
                                            <Link to={`/news/${card.id}`} className={style.cardLink} >
                                                <div className={style.imageContainner}>
                                                    <img src={card.imgInnerLink} alt="card_image" className={style.cardImage}/>
                                                </div>

                                                <div className={style.cardInfo}>
                                                    <div className={style.cardInfo__info}>
                                                        <h2 className={style.cardTitle}>{card.title}</h2>
                                                        <p className={style.cardDescription}>{card.description}</p>
                                                    </div>
                                                    <span className={style.cardInfo__date}>{card.date}</span>
                                                </div>
                                            </Link>
                                            <div className={style.arrows}>
                                                <img className={style.leftArrow} src="/public/Slider_Arrow.svg" alt="arrow" onClick={prevSlide}/>
                                                <img className={style.rightArrow} src="/public/Slider_Arrow.svg" alt="arrow" onClick={nextSlide}/>
                                            </div>
                                        </li>
                                    ) : <></>
                                }
                                </>
                            )
                        })

                    ) : <></>
            }

        </ul>
    )
}