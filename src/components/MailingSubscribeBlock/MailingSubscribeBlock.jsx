import style from "./MailingSubscribeBlock.module.sass";
import InputMask from "react-input-mask";
import {GradientButton} from "../GradientButton/GradientButton.jsx";
import {Checkbox} from "../Checkbox/Checkbox.jsx";

export const MailingSubscribeBlock = () =>{
    return(
        <div className={style.mainContainer}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>Подпишись на рассылку</h1>
                <span className={style.smallDescription}>
                    Отправляем анонсы новых статей, выпусков и трансляций
                </span>
            </div>
            <form action="" className={style.form}>
                <div className={style.form__inputs}>
                    <div className={style.inputs__fields}>
                        <input type="email" className={style.field} placeholder='Электронная Почта'/>
                        <input type="text" className={style.field} placeholder='Дата (например, 01.01.1990)'/>
                        <InputMask
                            mask='+7 (999) 999-99-99'
                            markChar='_'
                            type="tel"
                            className={style.field}
                            placeholder='Телефон'/>
                        <input type="text" className={style.field} placeholder='Время (например, 10:00)'/>
                    </div>

                    <Checkbox/>
                </div>
                <GradientButton property={['Подписаться', 'white']}/>
            </form>
        </div>
    )
}