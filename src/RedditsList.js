import React from 'react';
import RedditCard from './RedditCard';

export default function RedditsList(props){
	return(
		<div>
        {props.reddits.map((reddit) => {
         return <RedditCard reddit={reddit} key={reddit.url} onClick={props.onClick} />
          })}
      </div>
	)
}