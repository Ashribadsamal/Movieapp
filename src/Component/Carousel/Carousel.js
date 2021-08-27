import axios from 'axios';
import React,{useState,useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../../Config/config';
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault();



 const Carousel = ({media_type, id}) => {
     const [credits, setCredits] = useState()

     const items = credits?.map((i)=>(
         <div className="carouselItem">
             <img
             src={i.profile_path ? `${img_300}/${i.profile_path}` : noPicture}
             alt={i?.name}
             onDragStart={handleDragStart}
             className="carouselItem_img"
             />

             <b className="carouselItem_txt">{i?.name}</b>
         </div>
     ))

     const responsive={
         0:{
             items: 3,
         },
         512:{
             items: 5,
         },
         1024:{
             item: 7,
         }
     }



     const fetchImage=async ()=>{
         const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_MY_API_KEY}&language=en-US`)
            console.log("crdits",data)
         setCredits(data.cast)
     }

     useEffect(() => {
        fetchImage()
         // eslint-disable-next-line
     }, [])

  return (
    <AliceCarousel 
    mouseTracking
    responsive={responsive}
    infinite
    disableDotsControls
    disableButtonsControls
    autoPlay 
    items={items} 
    />
  );
}

export default Carousel