import React from 'react';
import './App.css';
import { getReddits } from './redditApi';
import RedditCard from './RedditCard';
import Loading from './loading';
import RedditSubscribers from './RedditSubs.js';



class App extends React.Component {
  
    constructor() {
      super();
      this.state = {
        reddits: [],
        loading: true
      };
    }


    async componentDidMount(){
   
    let reddits = await getReddits('football');
    this.setState({ reddits, loading:false });
  }

  render(){
    return (
      <div> 

      {this.state.loading ? <Loading /> : <RedditSubscribers reddit={this.state.reddits[0]} />}
     
      <div>
        {this.state.loading ? <Loading /> : this.state.reddits.map((reddit) => {
         return <RedditCard reddit={reddit} key={reddit.data.title} />
          })}
      </div>
    </div>

      );
  }
}


export default App;
