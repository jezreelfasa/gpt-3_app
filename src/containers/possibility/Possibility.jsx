import "./Possibility.css"
import PossibImg from "../../assets/possibility.png"

function Possibility() {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={PossibImg} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
                <p>GPT-3 can aid researchers, academics, and professionals in retrieving information, summarizing articles, and generating literature reviews. It can assist in data analysis, hypothesis generation, and problem-solving across various domains..</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility