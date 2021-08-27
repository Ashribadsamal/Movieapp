import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'



const darkTheme= createMuiTheme({
    palette:{
        type: "dark"
    }
})


function CustomPagination({setPage,numofPage=10}) {

    const handelChange=(page)=>{
        setPage(page)
        window.scroll(0,0)
    }

    return (
        <div
        style={{
            width: "100%",
            display:"flex",
            justifyContent: "center",
            marginTop: 10
        }}>
            <ThemeProvider theme={darkTheme}>
              <Pagination count={numofPage} onChange={(e)=>handelChange(e.target.textContent)}
              hideNextButton
              hidePrevButton
              color="primary"/>
            </ThemeProvider> 
        </div>
    )
}

export default CustomPagination
