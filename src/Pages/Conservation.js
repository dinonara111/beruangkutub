import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Footer from "../components/Common/footer";
import { UncontrolledCarousel } from 'reactstrap';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function Conservation() {
  return (

    <section id="conservation" className="section-conservation" >
      <div className="container">
        <h1><b>Ancaman</b></h1>

        <div class="row">
          <div class="col">
            <h2>Aktivitas Komersial</h2>
            <p>
              Aktivitas komersial di Arktik meningkat seiring dengan semakin mudahnya akses ke wilayah tersebut. Aktivitas ini meliputi eksplorasi dan pengembangan minyak dan gas, pengiriman barang, pertambangan, dan pariwisata masing-masing memiliki tantangannya sendiri.
              Aktivitas minyak dan gas, misalnya, tidak hanya membawa risiko tumpahan, tetapi juga dapat mengganggu induk beruang kutub dan anak-anaknya yang bersembunyi di sarang di bawah salju—waktu paling rentan dalam siklus hidup mereka.
            </p>
          </div>
          <div class="col-md-6 ">
            <img src="/aktivitas2.png" class="img-fluid img-thumbnail" />
          </div>



          <div class="container ">
            <div class="row">
              <div class="col-md-6">
                <img src="/konflik.jpg" class="img-fluid img-thumbnail" />
              </div>
              <div class="col">
                <h2>Konflik & Pertemuan</h2>
                <p>Saat es laut mencair dan semakin banyak beruang kutub menghabiskan lebih banyak waktu di pantai, dan dalam jangka waktu yang lebih lama, konflik antara beruang kutub dan manusia diperkirakan akan meningkat.
                  Sesungguhnya, banyak desa pesisir telah mengalami peningkatan pertemuan dengan beruang kutub, terkadang dengan hasil yang tragis.</p>
              </div>

            </div>

            <div class="row mt-5">
              <div class="col">
                <h2>Polusi</h2>
                <p>Lingkungan alami beruang kutub mungkin tampak putih dan murni jauh dari polusi di kota-kota besar dan kawasan industri.

                  Namun pada kenyataannya, beruang kutub di beberapa bagian Kutub Utara dapat membawa zat kimia beracun dalam jumlah yang sangat tinggi.

                  Mengapa? Karena angin dan arus laut mengangkut polutan ini ke beberapa bagian Arktik, tempat polutan tersebut terkonsentrasi saat naik ke rantai makanan. Beruang kutub menyerap kadar yang lebih tinggi ini saat memakan anjing laut.

                  Mengurangi polutan ini tidak hanya akan membantu beruang kutub, tetapi juga manusia.</p>
              </div>
              <div class="col-md-6">
                <img src="/polusi.png" class="img-fluid img-thumbnail" />
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <img src="/penyakit.png" class="img-fluid img-thumbnail" />
          </div>
          <div class="col">
            <h2>Penyakit</h2>
            <p>
              Seperti kebanyakan spesies beruang, beruang kutub tidak terlalu rentan terhadap penyakit.
              Beberapa virus telah terdeteksi pada beruang kutub di Alaska dan Rusia. Selain itu, beberapa parasit, seperti Trichinella, diketahui telah menginfeksi beruang.
              Kekhawatiran besar bagi para ilmuwan adalah bahwa lebih banyak penyakit akan muncul seiring menghangatnya Arktik, akibat meningkatnya aktivitas manusia dan migrasi spesies di lintang rendah ke Utara Jauh.
            </p>
          </div>

        </div>
      </div>


      <div className="container text-center">
        <h1><b>Upaya Konservasi</b></h1>
        <CardGroup className="card-group">
          <Card>
            <CardImg
              alt="Card image cap"
              src="/aktivitas.jpg"
              top
              width="100%"
              height="200px"
            />
            <CardBody>
              <CardSubtitle
                className="mb-2  text-primary"
                tag="h5"
              >
                Mengurangi Emisi Gas Rumah Kaca
              </CardSubtitle>
              <CardText>
                Upaya ini mencakup mengurangi emisi gas rumah kaca di seluruh dunia, yang menjadi penyebab utama pencairan es laut. Dengan memperlambat laju pemanasan global, kita bisa melindungi habitat es laut yang sangat penting bagi kelangsungan hidup beruang kutub.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="/lingkungan.png"
              top
              width="100%"
              height="200px"
            />
            <CardBody>
              <CardSubtitle
                className="mb-2  text-primary"
                tag="h5"
              >
                Pengendalian Polusi di Arktik
              </CardSubtitle>
              <CardText>
                Polusi lingkungan, termasuk bahan kimia beracun seperti polutan organik persisten (POP), juga mengancam beruang kutub. Upaya untuk mengurangi polusi di wilayah Arktik melalui pengendalian industri dan limbah berbahaya juga merupakan bagian penting dari konservasi beruang kutub.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="/edukasi.png"
              top
              width="100%"
              height="200px"
            />
            <CardBody>
              <CardSubtitle
                className="mb-2 text-primary"
                tag="h5"
              >
                Edukasi dan Kesadaran Global
              </CardSubtitle>
              <CardText>
                Meningkatkan kesadaran masyarakat tentang pentingnya melindungi beruang kutub dan peran mereka dalam ekosistem Arktik sangat penting. Banyak organisasi lingkungan internasional menjalankan kampanye untuk mendidik publik tentang ancaman yang dihadapi beruang kutub dan bagaimana perubahan iklim memengaruhi kelangsungan hidup mereka.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>


        {/* <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 /> */}

      </div>
      <Footer />
    </section>
  );
}

export default Conservation;




