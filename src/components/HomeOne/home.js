import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Image from 'react-bootstrap/Image';
import './home.css';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      <section id="header" className={`section-header ${isVisible ? 'animate' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="slider-text text-center">
                <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>
                  Dunia Beruang Kutub
                </h1>
                <p className={`fade-in-delayed ${isVisible ? 'visible' : ''}`}>
                  <b>
                    Selamat datang di Dunia Beruang Kutub! Bergabunglah dengan kami dalam sebuah petualangan seru untuk menjelajahi kehidupan luar biasa makhluk ikonik ini. Mulai dari habitatnya yang ekstrem di padang es Arktik hingga perilaku unik yang membuat mereka mampu bertahan hidup di lingkungan yang keras dan tak kenal ampun. Di sini, Anda akan mempelajari bagaimana beruang kutub berburu, merawat anak-anaknya, dan menavigasi lautan es yang terus berubah.
                  </b>
                </p>
                <Image src="/home1.png" alt="Home Image" className={`fade-in-image ${isVisible ? 'visible' : ''}`} />
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
}

export default Header;
