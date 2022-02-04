import React from 'react'
import starIcon from '../../assets/images/star-icon.png'

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="star" /> 
                        What We Do
                    </span>
                    <h2>Are you looking for expert help on your new product development?</h2>
                    <p>Our clients hire our team for technically challenging product designs.</p>
                    <p>Balancing look, materials. features and cost, we sift through thousands of options, making critical decisions while remaining focused on your end game.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-8 offset-lg-0 offset-sm-2">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>Product Development</h3>
                            <p>We care about your product; how it looks, its function, and if it will exist in real life the way it exists in the industrial designer’s sketch. We take care of the product design engineering, delivering a data package that includes detailed documentation and specifications that can be taken to any manufacturer. Our award-winning team has developed hundreds of products. This extensive experience combined with our proven development process facilitates a smooth and successful product launch.</p>
                        </div>
                    </div>


                    <div className="col-lg-6 col-sm-8 offset-lg-0 offset-sm-2">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>Manufacturing &amp; Operations Consulting</h3> 

                            <p>Utilizing our flexible, extensive, worldwide supply chain network, we match each unique component of your product to its ideal part manufacturer and build a supply chain specifically for your product. We keep your business priorities in mind and custom fit the manufacturing facilities, locations, and technologies that will produce your product the way you envision it. You are able to focus on other details while our highly experienced team of manufacturing and quality control experts does the work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;