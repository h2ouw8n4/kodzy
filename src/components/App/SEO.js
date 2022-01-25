import React from 'react'
import { Helmet } from "react-helmet"
import logo from "../../assets/images/logo.png"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Kodzy - Product Development and Management for Connected Devices</title>
                <meta name="description" content="Kodzy - Product Development and Management for Connected Devices" />
                <meta name="og:title" property="og:title" content="Kodzy - Product Development and Management for Connected Devices"></meta>
                <meta name="twitter:card" content="Kodzy - Product Development and Management for Connected Devices"></meta>
                <link rel="canonical" href="https://kodzy.com/"></link>
                <meta property="og:image" content={logo} />
            </Helmet>
        </div>
    )
}

export default SEO
