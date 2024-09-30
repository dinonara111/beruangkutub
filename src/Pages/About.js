import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Footer from "../components/Common/footer";
import '../App.css'


function About() {
    return (
        <section id="About" className="section-About" style={{ }}>
            <div className="container" style={{marginBottom: "80px",}}>
             <h1 className="title"><b>Tentang Beruang</b></h1>
                <div className="row" style={{ backgroundColor: "#FFFF", boxShadow: "0 0 35px #add8e6"}}>
                    
                    <div className="col-md-6">

                        <Image src="/tentang.png" />
                        <div className="card">
                            <div className="card-body" >
                                <h4><b>Fakta Unik</b></h4>
                                <ul>
                                    <li>
                                        Beruang kutub memiliki lapisan lemak yang bisa mencapai ketebalan 11 cm
                                    </li>
                                    <li>
                                        Kulit berwarna hitam
                                    </li>
                                    <li>
                                        Cakar beruang kutub bisa sepanjang 30cm
                                    </li>
                                    <li>
                                        Beruang kutub memiliki bantalan kaki yang bertekstur dan berbulu
                                    </li>
                                    <li>
                                        Bulu  transparan dan berongga
                                    </li>
                                    <li>
                                        Beruang kutub bisa hidup hingga 20 hingga 30 tahun
                                    </li>
                                    <li>
                                        Mengonsumsi 12.000 kalori dalam satu hari
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="custom-font">
                            Beruang kutub, predator puncak di Arktik sekaligus beruang terbesar di dunia, melambangkan kekuatan dan ketahanan di lingkungan keras tersebut. Nama latinnya, Ursus maritimus, secara harfiah berarti "beruang laut," yang sesuai karena spesies megah ini menghabiskan sebagian besar hidupnya di sekitar laut atau di atas es laut. Di Amerika Serikat, beruang kutub dapat ditemukan di Alaska, tempat dua subpopulasinya hidup.
                            Sebagai perenang andal, beruang kutub mampu berenang dengan kecepatan hingga enam mil per jam dengan menggunakan kaki depan sebagai pengayuh, sementara kaki belakangnya berfungsi sebagai kemudi. Lapisan lemak tebal dan bulu yang tahan air membantu mereka bertahan dari suhu dingin ekstrem di udara maupun di air.
                            Beruang kutub menghabiskan lebih dari setengah waktunya untuk mencari mangsa, namun hanya satu atau dua dari sepuluh anjing laut yang diburu berhasil mereka tangkap, tergantung pada musim dan faktor lainnya. Makanan utamanya adalah anjing laut bercincin dan berjanggut karena mereka membutuhkan asupan lemak yang tinggi untuk bertahan hidup.
                            Beruang kutub sangat mengandalkan es laut sebagai jalur pergerakan, tempat berburu, beristirahat, kawin, dan di beberapa area sebagai lokasi bersarang. Namun, karena pencairan es laut yang terus terjadi akibat perubahan iklim—ancaman terbesar bagi mereka—beruang kutub terdaftar sebagai spesies terancam di Amerika Serikat sejak Mei 2008 di bawah Endangered Species Act. Dengan es laut yang mencair lebih cepat di musim semi dan terbentuk lebih lambat di musim gugur, beruang kutub semakin sering menghabiskan waktu di daratan, yang kadang membuat mereka mendekati wilayah tempat tinggal manusia.

                        </p>
                    </div>
                </div>
                
            </div>
            <Footer />  
        </section>
    );
}

export default About;