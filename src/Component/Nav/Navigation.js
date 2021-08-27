import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
   backgroundColor: "#2d313a",
   bottom:0,
   zIndex:100, 
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory()

  useEffect(() => {
    if(value === 0){return history.push("/")}
    if(value === 1){return history.push("/movie")}
    if(value === 2){return history.push("/series")}
    if(value === 3){return history.push("/search")}

  }, [value, history])


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" style={{color: "white"}} icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movie" style={{color: "white"}} icon={<MovieIcon />} />
      <BottomNavigationAction label="tv" style={{color: "white"}} icon={<TvIcon/>}/>
      <BottomNavigationAction label="search" style={{color: "white"}} icon={<SearchIcon/>}/>
    </BottomNavigation>
  );
}
