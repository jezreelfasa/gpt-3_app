import "./Header.css"
import People from "../../assets/people.png"
import AI from "../../assets/ai.png"

function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Best way to get started with the GPT-3 OpenAI, all you need in one place and you do not need to go any further no more because we got you covered. Sign-up to get started.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address" />

                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={People} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
            <div className="gpt3__header-image">
                <img src={AI} alt="ai" />
            </div>
        </div>
    )
}

export default Header
