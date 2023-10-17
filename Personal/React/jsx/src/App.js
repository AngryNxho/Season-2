import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

export default function App() {

    return (
        <div>
            <div>Personal Digital Assistance</div>

            <img src={AlexaImage}/>
            <img src={SiriImage}/>

            <ProfileCard tittle = "Alexa" handle="@alexa99"/>
            <ProfileCard tittle = "Cortana" handle="@cortana32"/>
            <ProfileCard tittle = "Siri" handle="@siri01"/>

        </div>
    )
}