import React,{useState,useEffect} from 'react'
import useGenre from '../../Hook/useGenre'
import Genres from '../Genres/Genres'
import CustomPagination from '../Pagination/CustomPagination'
import SingleContent from '../SingleContent/SingleContent'
import axios from 'axios'

function Series() {

const [page,setPage] = useState(1)    
const [content, setContent] = useState([])
const [numofPage,setNumofPage] = useState()
const [selectesGeners,setSelectedGeners] = useState([])
const [Genre,setGenres] = useState([])
const genreforURL = useGenre(selectesGeners)

const fetchMovie=async()=>{
    const {data} =await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MY_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    setContent(data.results)
    setNumofPage(data.total_pages)
    //console.log(data.results)
}

useEffect(() => {
   fetchMovie()
    // eslint-disable-next-line
}, [page , genreforURL])

    return (
        <div>
            < span className="pageTitle">Tv Series</span>
            <Genres
           selectesGeners={selectesGeners}
           setSelectedGeners={setSelectedGeners}
           Genre={Genre}
           setGenres={setGenres}
           setPage={setPage}
           type="tv"
           />
           <div className="trending">
            {content.map((item)=>(
                <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.release_date || item.first_air_date}
                media_type="tv"
                vote_average={item.vote_average}/>
              ))}
            </div>
            {
                numofPage > 1 && (
                    <CustomPagination setPage={setPage} numofPage={numofPage}/>
                )
            }
            
        </div>
    )
}

export default Series
