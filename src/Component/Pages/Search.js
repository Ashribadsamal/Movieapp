import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import SingleContent from '../SingleContent/SingleContent';
import CustomPagination from '../Pagination/CustomPagination';

function Search() {
    const [type,setType] = useState(0)
    const[page,setPage] = useState(1)
    const [numofPage,setNumofPage] = useState()
    const [searchText,setSearchText] = useState("")
    const [content,setContent] =useState()

    const darkTheme=createMuiTheme({
        palette:{
            type: "dark",
            primary:{
                main: "#fff",
            }
        }
    })

    const fetchSearch=async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_MY_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

        setContent(data.results)
        setNumofPage(data.total_pages)
    }

    useEffect(() => {
        window.scroll(0,0)
        fetchSearch()
         // eslint-disable-next-line
    }, [type, page])


    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{display: "flex",margin:"15px 0"}}>
                  <TextField
                    style={{flex: 1}}
                    className="searchBox"
                    label="search"
                    variant="filled"
                    onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <Button variant="contained" style={{marginLeft: 10}} onClick={fetchSearch}>
                        <SearchIcon/>
                    </Button>
                </div>
                <Tabs value={type} indicatorColor="primary" textColor="primary"
                onChange={(event,newValue)=>{
                    setType(newValue)
                    setPage(1)
                }}>
                    <Tab style={{width: "50%"}} label="search Movies"/>
                    <Tab style={{width: "50%"}} label="search TVSeries"/>

                </Tabs>
            </ThemeProvider>

            <div className="trending">
            {content && 
            content.map((item)=>(
                <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.release_date || item.first_air_date}
                media_type={type ? "tv": "movie"}
                vote_average={item.vote_average}/>
              ))}

              {
                  searchText && !content &&
                  (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)
              }
            </div>
            {numofPage > 1 &&(
                <CustomPagination setPage={setPage} numofPage={numofPage}/>
            )}
            
        </div>
    )
}

export default Search
