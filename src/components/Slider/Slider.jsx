import style from './Slider.module.sass'
import {useState} from "react";

export const Slider = ({data}) =>{

    const [current, setCurrent] = useState(0);
    const slidesNumber = data.length

    const nextSlide = () => {
        setCurrent(current === slidesNumber - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slidesNumber - 1 : current - 1);
    }

    return(
        <div className={style.mainContainer}>
            {
                (Array.isArray(data) || data.length <= 0) ?
                    data.map((slide, index) =>{
                        return(
                            <div key={index} className={index === current ? `${style.active} ${style.slide} ${style.sliderContainer}` : `${style.sliderContainer}`}>
                                {
                                    (index === current)?
                                        (
                                            <>
                                                <div className={style.infoContainer}>
                                                    <div className={style.mainInfo}>
                                                        <div className={style.mainInfo__tagContainer}>
                                                            <span className={style.tag}>САЙТЫ</span>
                                                        </div>
                                                        <div className={style.mainInfo__info}>
                                                            <h1 className={style.slideTitle}>{slide.title}</h1>
                                                            <p className={style.slideDesriptiom}>{slide.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className={style.arrows}>
                                                        <img className={style.leftArrow} src="/public/Slider_Arrow.svg" alt="arrow" onClick={prevSlide}/>
                                                        <img className={style.rightArrow} src="/public/Slider_Arrow.svg" alt="arrow" onClick={nextSlide}/>
                                                    </div>
                                                </div>
                                                <div className={style.imageContainer}>
                                                    <img src={slide.imgInnerLink} className={style.sliderImage} alt='slider_image'/>
                                                </div>
                                            </>
                                    ): <></>
                                }
                            </div>)
                    })
                    :
                    null
            }
        </div>
    )
}