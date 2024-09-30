import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../App.css'
import Footer from '../components/Common/footer';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const images = [
  "/galeri/galeri1.jpg",
  "/galeri/galeri2.jpg",
  "/galeri/galeri3.jpg",
  // "/galeri/galeri4.jpg",
  "/galeri/galeri5.jpg",
  "/galeri/background.png",
"/galeri/galeri6.jpg",
"/galeri/galeri7.jpg",
"/galeri/galeri8.jpg",
"/galeri/galeri10.jpg",


];
const Galeri = () => {
  const [data, setData] = useState({ images: '', i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  }
  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'prev-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  }

  return (
    <>
      <section id="Galeri" className="section-Galeri" >
        <div>
          <h1><b>Galeri</b></h1>
          <div className='container' style={{backgroundColor: "white"}}>
          {data.img && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                background: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <button onClick={() => imgAction()} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
              <button onClick={() => imgAction('prev-img')}>Prev</button>
              <img
                src={data.img}
                style={{
                  width: 'auto',
                  maxWidth: '90%',
                  maxHeight: '90%',
                }}
              />
              <button onClick={() => imgAction('next-img')}>Next</button>
            </div>
          )}
          <div style={{ padding: '10px' }}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter='20px'>
                {images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>

          </div>
        </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Galeri;
