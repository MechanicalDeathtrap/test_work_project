import {NewsData} from "../../../data/NewsData";
import {useParams} from "react-router-dom";
import style from "./NewsDetails.module.sass"
export const NewsDetails = () =>{
    const {id} = useParams();
    const data = NewsData[id];

    return(
        <div className={style.newsContainer}>
            <div className="imageContainer">
                <img src={data.imgInnerLink} alt="news_image" className={style.newsImage}/>
            </div>
            <div className={style.newsInfo}>
                <div className={style.newsInfo__title}>
                    <h1 className={style.title}>{data.title}</h1>
                    <span className={style.date}>{data.date}</span>
                </div>
                <div className={style.newsInfo__info}>
                    <p className={style.mainDescription}>{data.bigDescriptionTitle}</p>
                    <p className={style.description}>{data.bigDescription}</p>
                </div>
            </div>
        </div>
    )
}