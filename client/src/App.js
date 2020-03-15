import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { StoreProvider } from './utils/GlobalState';
import Map from './components/InteractiveMap';
import Player from './components/ReactPlayer';
import Menu from './components/Menu';
import News from './components/News';
import './App.css'
import API from './utils/API';

export default function App() {
  const [news, setNews] = useState('')

  useEffect(()=>{
    API.getNews().then(data=>setNews(data.data.articles))
  },[])
  return (
    <Router>
      <>
      <Menu />
      <Switch>
        <Route exact path='/memes' component = {Player}/>
        <Route exact path='/map' component = {Map}/>
        <Route exact path='/news' component ={()=><News data={news}/>}/>
      </Switch>
      </>
    </Router>
  )
}