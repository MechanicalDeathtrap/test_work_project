import style from "./NewsBlock.module.sass"
import {NewsCardList} from "../NewsCardList/NewsCardList.jsx";
import {NewsData} from "../../../data/NewsData.js";

export const NewsBlock = () =>{
    return(
        <div className={style.mainContainer}>
            <h1 className={style.newsTitle}>Новости</h1>
            <div className="cardsConrainer">
                <NewsCardList data={NewsData}/>
            </div>
        </div>
    )
}