import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css"


export default function App() {

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        <div>Personal Digital Assistance</div>
                    </p>
                </div>

            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            tittle = "Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description ="Alexa was created by amazon and helps you buy things"/>
                        </div>
                        
                        <div className="column is-4">
                            <ProfileCard 
                            tittle = "Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description ="Cortana was created by Microsoft"
                            
                            />
                        </div>
                        
                        <div className="column is-4">
                            <ProfileCard 
                            tittle = "Siri"
                            handle="@siri01"
                            image={SiriImage}
                            description="Siri was created by Apple"/>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}