import React from "react";


const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row info-row-about simple-top-item">
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.584919171141!2d0.19133631546861227!3d51.134563979575624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df44d4f936cd57%3A0xc665b28b573644ab!2sChilstone!5e0!3m2!1sen!2suk!4v1491253700448" height="450" width="100%" display="block" frameBorder="0" style={{border: 0}} allowFullScreen id="map"></iframe>
                </div>
                <div className="col-sm-6" id="group">
                    <h1 className="half-image-text contact">Contact Us</h1>
                    <p className="half-image-text-body center">
                        We are fortunate enough to be using Priest's Wood
                        which is part of the <a href="http://www.chilstone.com/">Chilstone</a> site.
                        <br /><br />
                        Victoria Park Fordcombe Lodge,<br />Fordcombe Road,<br />Langton Green,
                        <br />Tunbr /idge Wells Kent<br />TN3 0RD<br /><br />
                        For all enquiries, please email <a href="mailto:info@woodlandventure.co.uk">info@woodlandventure.co.uk</a>.<br /><br />
                        Mobile: <a href="tel:+447767827390">07767827390</a><br /><br />
                        (Please be aware, we will not be able to take calls during sessions)
                    </p>
                </div>
            </div>
        </div>           
    )
}

export default Contact;