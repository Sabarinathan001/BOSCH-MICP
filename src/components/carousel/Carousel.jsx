import React,{useState} from 'react'
import styles from "./carousel.module.scss"

function Carousel({images}){
  // console.log(props.data,"data")

  // const {images} = data;
  
    const [currentImage, setCurrentImage] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };
  
    const handleNextClick = () => {
      setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };
  
    return (
      <div className={styles.carousel}>
        <div className={styles.image_container}>
          <img className={styles.image} src={images[currentImage]} alt="Carousel" />
        </div>
        <div className={styles.button_container}>
          <button className={styles.button} onClick={handlePrevClick}>&lt;</button>
          <button className={styles.button} onClick={handleNextClick}>&gt;</button>
        </div>
      </div>
    );
  
}

export default Carousel