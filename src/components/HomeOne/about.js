import React from "react";
import './about.css';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/1 (2).jfif',
    altText: 'Beruang Kutub Sedang Berburu',
    caption: 'Beruang Kutub Sedang Berburu di Es Laut',
    key: '1'
  },
  {
    src: '/1 (3).jfif',
    altText: 'Beruang Kutub dan Anaknya',
    caption: 'Beruang Kutub Betina dengan Anak-anaknya',
    key: '2'
  },
  {
    src: '/1 (4).jfif',
    altText: 'Lingkungan Es Kutub',
    caption: 'Beruang Kutub di Lingkungan Es yang Berubah',
    key: '3'
  }
];

function About() {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <h1><b>Bagaimana mereka makan dan tinggal</b></h1>
        <div className="row">
          <div className="col-lg-6">
            <h2>Makanan</h2>
            <h5>
              Makanan utama beruang kutub adalah anjing laut. Lemak dari anjing laut sangat penting bagi mereka untuk bertahan hidup di lingkungan Arktik yang dingin. Selain anjing laut, mereka juga bisa memakan ikan, bangkai hewan, telur burung, bahkan tumbuhan dan rumput laut saat makanan utama sulit ditemukan.
              <br />
             </h5>
          </div>
          <div className="col-lg-6">
            <UncontrolledCarousel items={items} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <img src="/end.png" alt="Beruang di Habitat Alami" className="img-fluid habitat-image" />
          </div>
          <div className="col-lg-6">
            <h2>Tempat tinggal</h2>
            <h5>
               Mereka menghabiskan sebagian besar waktu mereka di atas es laut, berkeliaran di antara bongkahan-bongkahan es yang luas.
              <br />
              <br />
              Pencairan es laut yang diakibatkan oleh perubahan iklim telah memaksa mereka untuk menjelajah lebih jauh untuk mencari makanan, membuat perjalanan mereka semakin berbahaya dan mengurangi peluang bertahan hidup mereka.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
