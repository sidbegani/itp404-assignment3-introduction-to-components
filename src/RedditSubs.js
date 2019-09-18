import React from 'react';

export default function RedditSubscribers(props){
	let reddit = props.reddit;
	return(
		<div>
			<p>Subscribers: {reddit.data.subreddit_subscribers.toLocaleString()}</p>
		</div>
		);
}