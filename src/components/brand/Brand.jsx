import "./Brand.css"
import {
    Google,
    Slack,
    Atlas,
    Dropbx,
    Shopify,
} from "./imports"
function Brand() {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={Google} />
            </div>

            <div>
                <img src={Slack} />
            </div>

            <div>
                <img src={Atlas} />
            </div>

            <div>
                <img src={Dropbx} />
            </div>

            <div>
                <img src={Shopify} />
            </div>
        </div>
    )
}

export default Brand