import "./WhatGPT3.css"
import  Feature  from "../../components/feature/Feature.jsx"
function WhatGPT3() {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature ">
                <Feature title="What is GPT-3?" text="With its remarkable capacity to comprehend and generate natural language, GPT-3 has found applications in numerous fields, including natural language understanding, text generation, chatbots, language translation, and more. Its versatility and potential have made it a significant milestone in the field of artificial intelligence, sparking innovation and exploration in various domains." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots " text="Overall, GPT-3-powered chatbots represent a significant advancement in conversational AI, offering improved user experiences." />
                <Feature title="Knowledgebase" text="In essence, GPT-3 enables chatbots to act as knowledgeable companions, capable of sharing information, answering inquiries, and fostering learning experiences for users." />
                <Feature title="Education" text="GPT-3-powered chatbots have the potential to revolutionize education by making learning more accessible, interactive, and personalized for students worldwide." />
            </div>
        </div>

    )
}

export default WhatGPT3