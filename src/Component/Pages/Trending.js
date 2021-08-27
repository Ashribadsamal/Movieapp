import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SingleContent from '../SingleContent/SingleContent'
//import {env} from 'process';
import "./Trending.css"
import CustomPagination from '../Pagination/CustomPagination'

function Trending() {
const [page,setPage] = useState(1)    
const [content, setContent] = useState([])


const fetchData=async()=>{
    const {data} =await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MY_API_KEY}&page=${page}`)
    setContent(data.results)
    console.log(data.results)
}

console.log(`${process.env.REACT_APP_MY_API_KEY}`)

useEffect(() => {
    fetchData()
     // eslint-disable-next-line
}, [page])


    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
            {content && 
               content.map((item)=>(
                <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.release_date || item.first_air_date}
                media_type={item.media_type}
                vote_average={item.vote_average}/>
              ))}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending
