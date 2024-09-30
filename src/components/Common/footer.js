import React from "react";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer id="footer">


                <div className="footer-bottom" style={{ backgroundColor: "#003153" }}>
                    <div className="container">
                        <div className="row">
                            <footer className="footer  ">

                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <img src="/footer.png" alt="bear logo" height="200" />
                                        <span className="text-white"> Copyright {currentYear} Bear.
                                            </span>
                                    </div>
                                   
                                </div>

                            </footer>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
