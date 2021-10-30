import React from "react";
import before from "../img/projects/Forest_School_Woodland_Sanctuary_Before.JPG";
import after from "../img/projects/Forest_School_Woodland_Sanctuary_After.JPG";


const Sanctuary = () => {
    return (
        <div>
            <div className="videoWrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/s_ZwSEIkf3A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="description-container">
                <div className="quote-title">The Sanctuary</div><br/>
                <p className="quote-text">
                <span className="pop">Relax</span> and <span className="pop">refresh</span> in a calming and peaceful multi sensory environment.
                </p>
                </div>
                <div className="sanctuary-description-container">
                <div className="sanctuary-description">
                    Through careful planning and discussions with the client, this area has been transformed from an unused, unloved space to a sanctuary.
                    This bespoke design has been tailored to the specific requirements of the client in order to provide many ways to relax and unwind.
                    From quiet reflections, to therapy sessions and even opportunities for prayer, all in the shade of the olive tree.
                    <br/>
                    <br/>
                    If you have a space that you feel is unloved, why not get in touch and let's see what ideas we can come up with and who knows where the journey will end?
                </div>
                </div>
                
                <div className="panel-container">
                <div className="product-panel">
                    <h3>Before</h3>
                    <img id="shelter" src={before} className="panel-image"></img>
                </div>
                <div className="product-panel">
                    <h3>After</h3>
                    <img id="shelter" src={after} className="panel-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Sanctuary;