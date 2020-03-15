import React, {useState} from 'react'
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import tileData from '../utils/tileData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  const [url, setUrl] = useState('https://thumbs.gfycat.com/ImpeccableLeadingApe-mobile.mp4');
  const [srcType, setSrcType] = useState('mp4');

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  const handleClick = (e) =>{
      setUrl(e.target.parentNode.getAttribute('name'))
      setSrcType(e.target.parentNode.getAttribute('type'))
      handleChange()
  }

  function FormRow() {
    return (
      <React.Fragment>
          {tileData.map(item=>{
              return (<Grid item xs={2}>
              <Paper className={classes.paper} name={item.link} type={item.type}><Button variant="contained" color="secondary" name={item.link} type={item.type} onClick={handleClick}>
            Secondary
          </Button></Paper>
            </Grid>)
          })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid> */}
        {/* <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid> */}
      </Grid>
      <Grow in={checked} timeout={2000} >
    <div className='player'>{srcType === 'mp4'? <ReactPlayer playing={true} loop width='100%' height='100%' url={url} /> : <img src={url}></img>}</div>
      </Grow>
      
    </div>
  );
}


