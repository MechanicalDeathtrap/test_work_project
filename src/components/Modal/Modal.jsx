import style from './Modal.module.sass'
import {GradientButton} from "../GradientButton/GradientButton.jsx";
import InputMask from 'react-input-mask'
import {Checkbox} from "../Checkbox/Checkbox.jsx";

export const Modal = ({setVisibility}) =>{
    const changeVisibility = () =>{
        setVisibility(false)
    }

    return(
        <div className={style.overlay}>
            <div className={style.modalWindow}>
                <div className={style.modalTitleContainer}>
                    <h2 className={style.modalTitle}>СВЯЗАТЬСЯ С НАМИ</h2>
                    <img src="/public/cross.svg" alt="cross" onClick={() => changeVisibility()} className={style.cross}/>
                </div>
                <form action="" className={style.modalForm}>
                    <div className={style.modalForm__inputs}>
                        <div className={style.inputs__fields}>
                            <input type="text" className={style.modalInput} placeholder='Имя'/>
                            <InputMask
                                mask='+7 (999) 999-99-99'
                                markChar='_'
                                type="tel"
                                className={style.modalInput}
                                placeholder='Телефон'/>
                        </div>
                        <Checkbox/>
                    </div>
                    <GradientButton property={['Отправить', 'white']}/>
                </form>
            </div>
        </div>
    )
}