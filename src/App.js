import React from 'react';
import './App.css';
import { getReddits } from './redditApi';
import RedditCard from './RedditCard';
import Loading from './loading';
import RedditSubscribers from './RedditSubs.js';
import SearchForm from './SearchForm';
import RedditsList from './RedditsList';



class App extends React.Component {
  
    constructor() {
      super();
      this.state = {
        reddits: [],
        loading: false,
        history: [],
        count: 0,
        subsCount: null
      };
      this.increaseCount = this.increaseCount.bind(this);
    }

  handleSearch = async (searchValue) =>{
    this.setState({loading: true});
    let reddits = await getReddits(searchValue);
    this.setState({ reddits, loading:false, subsCount: reddits[0].data.subreddit_subscribers.toLocaleString()});
    this.setState({history: [searchValue, ...this.state.history]})
  }

  increaseCount(event){
    this.setState({ count: this.state.count + 1});
    console.log(this.state.count);
  }




  render(){
    return (
      <div> 
      <SearchForm onSearch ={this.handleSearch}/>

      <p>Number of clicks: {this.state.count}</p>

      <p>Search History:</p>
      {this.state.history.map((term) => {
        return (
          <div onClick={this.handleSearch.bind(this,term)}>
          {term}
          <hr></hr>
          </div>
        );
      })}
       
      {this.state.loading ? <Loading /> : (
        <div>
          {this.state.subsCount && <RedditSubscribers count={this.state.subsCount}/>}
          <RedditsList reddits={this.state.reddits} onClick={this.increaseCount}/>
        </div>
      )}
    </div>

      );
  }
}
export default App;
