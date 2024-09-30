import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './question.css';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function galeri() {
    return (
        <>
            <section id="about" className="section-galeri" style={{backgroundColor: "#f5f5f5"}}>

                <div className="container">
                    <h1><b>
                        Mengapa mereka penting</b>
                    </h1>
                    <div class="container text-center">

                    <CardGroup className="card-group">
          <Card>
            <CardImg
              alt="Card image cap"
              src="/manfaat1 (3).jfif"
              top
              width="100%"
              height="200px"
            />
            <CardBody>
              <CardSubtitle
                className="mb-2  text-primary"
                tag="h5"
              >
                Siklus Nutrisi
              </CardSubtitle>
              <CardText style={{color: "#003153"}}>
              Ketika beruang kutub memakan mangsanya, sisa-sisa yang tertinggal menyediakan makanan bagi berbagai spesies lain seperti rubah Arktik, burung pemakan bangkai, dan organisme lain. Ini membantu mendaur ulang nutrisi di lingkungan yang sangat keras dan minim sumber daya.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="/manfaat1 (2).jfif"
              top
              width="100%"
              height="200px"
            />
            <CardBody>
              <CardSubtitle
                className="mb-2  text-primary"
                tag="h5"
              >
                Predator Puncak
              </CardSubtitle>
              <CardText style={{color: "#003153"}}>
              Beruang kutub adalah predator utama di wilayah Arktik, terutama berburu anjing laut. Mereka menjaga keseimbangan populasi anjing laut dan spesies lain di rantai makanan, membantu mencegah populasi mangsa menjadi berlebihan.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="/manfaat1 (1).jfif"
              top
              width="100%"
              height="200px"
            />
            <CardBody>
              <CardSubtitle
                className="mb-2 text-primary"
                tag="h5"
              >
                Kesadaran Global
              </CardSubtitle>
              <CardText style={{color: "#003153"}}>
              Beruang kutub sering digunakan sebagai simbol dalam kampanye lingkungan untuk mempromosikan aksi melawan perubahan iklim. Keberadaan dan kondisi mereka menyadarkan dunia akan urgensi dalam menghadapi krisis lingkungan.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
                        
                    </div>

                </div>


            </section>
        </>
    );

};


export default galeri;