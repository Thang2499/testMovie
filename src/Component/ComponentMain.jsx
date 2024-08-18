import React, { useState } from 'react'
import data from '../data/movie.json'
import ComponentChild from './ComponentChild'
import "../movie.css"
import familyspy from '../image/familyspy.jpg'
import onepiece from '../image/onepiece.jpg'
import boruto from '../image/boruto.jpg'
import football from '../image/football.jpg'
import attackonTitan from '../image/attackonTitan.png'
import tsubasa from '../image/tsubasa.jpg'
const ComponentMain = () => {
    const images = {
        "familyspy.jpg": familyspy,
        "onepiece.jpg": onepiece,
        "boruto.jpg": boruto,
        "attackonTitan.png": attackonTitan,
        "tsubasa.jpg": tsubasa,
        "football.jpg": football
    }
    const [datas, setDatas] = useState(data.data);
    const [currentImage, setCurrentImage] = useState(images["familyspy.jpg"]);
    const [currentDescription, setCurrentDescription] = useState("Description for family spy");
    const [movieName,setMoviename] = useState("Spy X Family")
    
    const handleChildClick = (image, description,movieName) => {
        setCurrentImage(image);
        setCurrentDescription(description);
        setMoviename(movieName)
    };

    return (
        <>
            <div className='flex-col heigh-auto'>

                <div className='width container-movieName image-fade img '>
                    <img src={currentImage} alt="family spy" />
                    <div className='movie-name-des'>
                    <h1 className='bg text-white'>{movieName}</h1>
                    <div className='bg text-white'>{currentDescription}</div>
                    </div>
                </div>
                <h2 className='text-white margin-left'>New Release</h2>
                <div className='flex container'>
                    {datas.map(item => <ComponentChild key={item.id} 
                    items={{ ...item, image: images[item.image] }} setDatas={setDatas}
                     onClick={() => handleChildClick(images[item.image], item.description, item.movieName)} 
                    />)}
                </div>
            </div>

        </>
    )
}

export default ComponentMain