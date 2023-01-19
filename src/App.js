
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

pageSize = 6;

   state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
       <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="General" pageSize={this.pageSize} country={'in'} category={'General'}/>} exact/>
          <Route path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country={'in'} category={'Business'}/>} exact/>
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country={'in'} category={'Entertainment'}/>} exact/>
          <Route path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country={'in'} category={'Health'}/>} exact/>
          <Route path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country={'in'} category={'Science'}/>} exact/>
          <Route path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country={'in'} category={'Sports'}/>} exact/>
          <Route path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country={'in'} category={'Technology'}/>} exact/>
        
        </Routes>
        </Router>
      </div>
    )
  }
}


