import React from "react";
import before from "../img/projects/Forest_School_Woodland_Playground_Before_Small.JPG";
import after1 from "../img/projects/Forest_School_Woodland_Playground_After_Small.JPG";
import after2 from "../img/projects/Forest_School_Woodland_Playground_After_Small_2.JPG";
import after3 from "../img/projects/Forest_School_Woodland_Playground_After_Small_3.JPG";
import { useImagePopup } from "../projectLinkwrapper";

const Shelter = () => {
    const [modal, setClickedImage] = useImagePopup();

    return (
        <div>
            {modal}
            <div className="container-fluid shelter-hero-container"></div>
            <div className="description-container">
                <div className="quote-title">Shelter Project</div><br />
                <p className="quote-text">
                    This is a <span className="pop">shelter</span> that we built for a <span className="pop">school</span> in Tunidge Wells.
                    If you think your school or <span className="pop">organisation</span> would benefit from something similar, <a href="/contact">get in touch</a>!<br />
                    <a href="mailto:info@woodlandventure.co.uk">info@woodlandventure.co.uk</a>
                </p>
            </div>
            <div className="panel-container">
                <div className="product-panel">
                    <h3>Before</h3>
                    <img id="shelter" src={before} className="panel-image" onClick={() => setClickedImage(before)}></img>
                </div>
                <div className="product-panel">
                    <h3>Bespoke Outdoor Shelter - 1</h3>
                    <img id="shelter" src={after1} className="panel-image" onClick={() => setClickedImage(after1)}></img>
                </div>
                <div className="product-panel">
                    <h3>Bespoke Outdoor Shelter - 2</h3>
                    <img id="shelter" src={after2} className="panel-image" onClick={() => setClickedImage(after2)}></img>
                </div>
                <div className="product-panel">
                    <h3>Bespoke Outdoor Shelter - 3</h3>
                    <img id="shelter" src={after3} className="panel-image" onClick={() => setClickedImage(after3)}></img>
                </div>
            </div>
        </div>
    )
}

export default Shelter;