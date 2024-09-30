import React from 'react';
import Footer from "../components/Common/footer";
import { Form, FormText, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function Donation() {
    return (
        <section id="donation" className="section-donation">
            <div className="container">

                <div class="container ">
                    <div className="donation-content">


                        <div class="row" >

                            <div div class="col">
                                <h1><b>Setiap donasi Anda adalah langkah nyata untuk menyelamatkan beruang kutub dari kepunahan</b></h1>
                                <img src="/background.png" class="img-fluid " />
                                <p className='text-muted'>
                                    Mari bersama-sama tunjukkan kepedulian kita terhadap alam dengan mendukung upaya konservasi. Bersama, kita bisa membuat perubahan nyata
                                </p>
                                <p>
                                    Donasi Anda akan digunakan untuk mendukung penelitian, restorasi habitat, dan program pendidikan untuk melindungi beruang kutub. Dengan berkontribusi, Anda tidak hanya menyelamatkan spesies ini, tetapi juga menjaga keseimbangan ekosistem Arktik.
                                </p>
                                <p>
                                    Kontribusi Anda akan memberikan harapan baru bagi beruang kutub dan membantu mereka bertahan hidup di tengah ancaman yang semakin besar. Setiap langkah yang kita ambil sekarang akan membawa perubahan positif bagi masa depan bumi dan semua makhluk yang menghuni planet ini.
                                </p>
                            </div>
                            <div class="col" >

                                <Form className='form-body'>
                                    <FormGroup row>
                                        <Label
                                            for="FirstName"
                                            sm={4}
                                        >
                                            Nama Depan
                                        </Label>
                                        <Col sm={7}>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Nama Depan"
                                                type="email"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="FullName"
                                            sm={4}
                                        >
                                            Nama Lengkap
                                        </Label>
                                        <Col sm={7}>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Nama Lengkap"
                                                type="email"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label
                                            for="NumberPhone"
                                            sm={4}
                                        >
                                            Nomor Telepon
                                        </Label>
                                        <Col sm={7}>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="+62 "
                                                type="password"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="Email"
                                            sm={4}
                                        >
                                            Email
                                        </Label>
                                        <Col sm={7}>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="@ "
                                                type="password"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label
                                            for="Number"
                                            sm={4}
                                        >
                                            Nominal
                                        </Label>
                                        <Col sm={7}>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="$ "
                                                type="password"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label
                                            for="exampleText"
                                            sm={4}
                                        >
                                            Komentar
                                        </Label>
                                        <Col sm={7}>
                                            <Input
                                                id="exampleText"
                                                name="text"
                                                placeholder="Kata untuk Beruang "
                                                type="textarea"
                                            />
                                        </Col>
                                    </FormGroup>



                                    <FormGroup
                                        check
                                        row
                                    >
                                        <Col
                                            sm={{
                                                offset: 4,
                                                size: 4
                                            }}
                                        >
                                            <Button >
                                                Submit
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <section id='end' className='section-end' >
                <Card className="my-2">

                    <CardImg
                        alt="Card image cap"
                        src="/bawah.png"
                        style={{
                            height: 200,
                            width: "100%",
                            objectFit: "cover" 
                        }}
                        top
                    />
                    <CardBody>
                        <CardTitle tag="h5" >
                            Kami sepenuhnya mengandalkan dukungan Anda.
                        </CardTitle>
                        <CardText>
                            "Bersama, kita bisa melindungi Arktik selamanya. Dukungan berkelanjutan Anda adalah cara terbaik untuk membantu kami mencapai tujuan jangka panjang."
                        </CardText>
                        <CardText>
                            <small className="text-muted">
                                Terimakasih
                            </small>
                        </CardText>
                    </CardBody>
                </Card>
            </section>
            <Footer />
        </section>
    );
}
export default Donation;