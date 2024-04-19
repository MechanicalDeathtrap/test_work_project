import style from "./GradientButton.module.sass";

export const GradientButton = ({property}) =>{
    return(
        <div className={style.buttonBorder}>
            <button type='button'
                    className={(property[1] === 'black'? `${style.contactsButton} ${style.gradientButton}` : `${style.sendButton} ${style.gradientButton}`)}>
                {property[0]}
            </button>
        </div>
    )
}