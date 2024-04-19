import {Slider} from "../../components/Slider/Slider.jsx";
import {SliderData} from "../../data/SlideData";
import {NewsBlock} from "../../components/News/NewsBlock/NewsBlock.jsx";
import {FaqBlock} from "../../components/Faq/FaqBlock.jsx";
import {MailingSubscribeBlock} from "../../components/MailingSubscribeBlock/MailingSubscribeBlock.jsx";


export const Home = () => {
    return(
        <>
            <Slider data={SliderData}/>
            <NewsBlock/>
            <FaqBlock/>
            <MailingSubscribeBlock/>
        </>
    )
}