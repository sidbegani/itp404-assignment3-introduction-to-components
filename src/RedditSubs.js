import React from 'react';

export default function RedditSubscribers(props){
	let reddit = props.reddit;
	return(
		<div>
			<p>Subscribers: {props.count}</p>
		</div>
		);
}