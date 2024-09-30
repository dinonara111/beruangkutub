import React from "react";
import { useState } from "react";
import './faq.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



function Blog() {

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }
    return (
        <section id="blog" className="section-faq" style={{ backgroundColor:"#dae7f5"}}>
            <div className="container" >
                <div className="container">
                    <h1 ><b>Tanya Jawab</b></h1>
                    <div className="row">
                        <div className="col">
                            <img src="/picture.png" />
                        </div>
                        <div className="col">
                            <div>
                                <Accordion allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Bagaimana beruang kutub beradaptasi dengan perubahan musim di Arktik?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel style={{backgroundColor: "white"}}>
                                            <p>
                                            Beruang kutub beradaptasi dengan perubahan musim di Arktik melalui perilaku dan fisiologi mereka. Selama musim dingin, mereka berburu anjing laut di es laut yang membeku. Mereka mengandalkan lemak dari anjing laut untuk bertahan hidup saat makanan langka selama musim panas, ketika es laut mencair. Pada musim panas, mereka cenderung menjelajahi daratan, memakan sumber makanan alternatif seperti bangkai hewan atau tanaman, meskipun sumber ini jauh dari ideal untuk kebutuhan nutrisi mereka. Adaptasi metabolik memungkinkan mereka untuk memperlambat metabolisme mereka ketika makanan sulit didapat.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Bagaimana pemanasan global memengaruhi peran beruang kutub sebagai spesies kunci di ekosistem Arktik?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel style={{backgroundColor: "white"}}>
                                            <p>
                                            Pemanasan global mengancam peran beruang kutub sebagai spesies kunci di ekosistem Arktik. Sebagai predator puncak, beruang kutub membantu mengendalikan populasi anjing laut dan menjaga keseimbangan ekosistem laut. Namun, dengan mencairnya es laut dan berkurangnya kesempatan berburu, populasi beruang kutub menurun. Ini dapat mengakibatkan peningkatan populasi mangsa seperti anjing laut, yang pada gilirannya memengaruhi dinamika ekosistem laut. Kehilangan predator puncak ini bisa menyebabkan perubahan besar pada struktur ekosistem Arktik, dengan dampak pada spesies lain dan siklus nutrisi.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Bagaimana beruang kutub melindungi anak-anaknya?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel style={{backgroundColor: "white"}}>
                                            <p>
                                            Induk beruang kutub sangat protektif terhadap anak-anaknya. Mereka melahirkan di sarang yang dibuat di salju atau es laut selama musim dingin, di mana anak-anak tetap aman dan hangat. Induk beruang kutub akan menyusui anak-anaknya dengan susu yang kaya lemak hingga mereka cukup kuat untuk berburu bersama. Mereka juga menjaga anak-anaknya dari ancaman predator dan kondisi lingkungan yang keras.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Berapa lama beruang kutub dapat bertahan tanpa makanan?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel style={{backgroundColor: "white"}}>
                                            <p>Beruang kutub sangat bergantung pada lemak tubuh yang mereka simpan selama bulan-bulan berburu untuk bertahan hidup di musim panas ketika es mencair. Mereka dapat bertahan tanpa makanan selama beberapa bulan dengan mengandalkan cadangan lemak mereka. Namun, periode ini tidak bisa berlangsung terlalu lama, terutama dengan kondisi perubahan iklim yang mempersingkat musim berburu.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Apakah beruang kutub terancam punah?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel style={{backgroundColor: "white"}}>
                                            <p>
                                            Beruang kutub saat ini dikategorikan sebagai "Rentan" oleh IUCN. Ancaman terbesar mereka adalah perubahan iklim yang menyebabkan pencairan es laut, yang menjadi habitat utama dan area berburu mereka. Tanpa es laut, mereka kesulitan berburu anjing laut, sehingga populasi mereka menurun.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Bagaimana beruang kutub beradaptasi dengan suhu dingin ekstrem?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel style={{backgroundColor: "white"}}>
                                            <p>
                                            Beruang kutub memiliki beberapa adaptasi yang membantu mereka bertahan hidup di lingkungan Arktik yang dingin. Mereka memiliki lapisan lemak tebal di bawah kulit yang berfungsi sebagai isolasi. Bulu mereka juga memiliki sifat kedap air, dan kulit mereka sebenarnya hitam untuk menyerap panas dari sinar matahari. Mereka juga memiliki kaki yang lebar untuk membantu berjalan di atas salju dan es.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );

}
export default Blog;