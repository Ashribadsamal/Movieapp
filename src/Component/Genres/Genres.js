import { Chip } from '@material-ui/core'
import axios from 'axios'
import React,{useEffect} from 'react'

function Genres({
    selectesGeners,
    setSelectedGeners,
    Genre,
    setGenres,
    setPage,
    type
}) {
    const fetchGenres=async ()=>{
          const {data}= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MY_API_KEY}&language=en-US`)
          
          setGenres(data.genres)
    }

    useEffect(() => {
        fetchGenres()
        
        return () => {
            setGenres({})
        }
         // eslint-disable-next-line
    }, [])

    const handelAdd=(item)=>{
        setSelectedGeners([...selectesGeners,item])
        setGenres(Genre.filter((g)=>g.id !== item.id))
        setPage(1)
    }

    const handelRemove=(item)=>{
        setSelectedGeners(selectesGeners.filter((g)=>g.id !== item.id))
        setGenres([...Genre,item])
        setPage(1)
    }

    return (
        
        <div style={{padding: "6px 0"}}
        >
              {
               selectesGeners &&
                   selectesGeners.map((item)=>(
                    <Chip
                    label={item.name}
                    style={{margin: 2}}
                    clickable
                    size="small"
                    color="primary"
                    key={item.id}
                    onDelete={()=>handelRemove(item)}
                    />
                ))
            }
            {
               Genre &&
                Genre.map((item)=>(
                    <Chip
                    label={item.name}
                    style={{margin: 2}}
                    clickable
                    color="primary"
                    size="small"
                    key={item.id}
                    onClick={()=>handelAdd(item)}
                    />
                ))
            }
            
        </div>
    )
}

export default Genres
