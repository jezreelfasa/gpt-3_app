import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
    {
        title: 'Improving Contextual Understanding',
        text: 'GPT-3 demonstrates a strong ability to understand and generate text in context.',
    },
    {
        title: 'Knowledge Comprehension',
        text: 'GPT-3 has been trained on a massive dataset sourced from the internet, allowing it to understand and generate text on a wide range of topics.',
    },
    {
        title: 'Greately Improved Scalability',
        text: 'GPT-3 is one of the largest language models created to date. Its size contributes to its impressive performance in understanding and generating text across diverse contexts and languages.',
    },
    {
        title: 'Few-shot and Zero-shot Learning',
        text: 'GPT-3 exhibits the ability to perform well on tasks with minimal training examples (few-shot learning) or even without any task-specific training data (zero-shot learning)...',
    },
];

function Features() {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features