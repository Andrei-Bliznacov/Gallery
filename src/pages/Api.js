import React, { useEffect, useState } from 'react';
import Photos from './Photos';
import axios from 'axios';

function Api() {
    const [type,setType] = useState('Mixed');
    const [images, setImages] = useState([]);

    const urlImg = `https://api.pexels.com/v1/search?query=${type}`;

    useEffect(() => {
        axios.get(urlImg, {
            headers: { Authorization: "j91FInhj1LNx6c22lj3wUd4lECcLJfFI7HIW2NRZpSUGluYn2wIzcGz7" }
        }).then((response) => { setImages(response.data) })
    }, [urlImg])

    const resImages = images.photos
    const img = resImages?.map((e, i) => {
        return <Photos key={i} link={e.src.small} alt={e.alt}/>
    })
    console.log(images);
    return (
        <div>
            {img}
            <button >Search</button>
            <button onClick={() => setType("Mixed")}>Mixed</button>
            <button onClick={() => setType("Ocean")}>Ocean</button>
            <button onClick={() => setType("Road")} >Road</button>
            <button onClick={() => setType("Creative")}>Creative</button>
        </div>
    )
}

export default Api