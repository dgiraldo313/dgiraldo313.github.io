import React from 'react';
import Social from '../../Containers/Social';
import '../../sass/inc/footer.scss'

const Footer = ( props ) => {
    const year = new Date().getFullYear()

    return (
        <div id="footer">
            <div className="left-side">
                <Social />
            </div>
            <div className="right-side">
                <div className="copy-right">
                    <i className="fa fa-code-fork" aria-hidden="true"></i>
                    <p>Daniel Giraldo | { year }</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
