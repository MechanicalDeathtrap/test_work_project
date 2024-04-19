import style from "./Checkbox.module.sass";

export const Checkbox = () =>{
    return(
        <div className={style.inputs__checkbox}>
            <div className="checkboxContainer">
                <div className={style.checkboxContainer}>
                    <input type={"checkbox"}  id="customCheckbox" className={style.checkbox}/>
                    <label htmlFor="customCheckbox" className={style.label}></label>
                </div>
            </div>
            <p className={style.checkboxInfo}>Я согласен (-а) на обработку персональных данных</p>
        </div>
    )
}