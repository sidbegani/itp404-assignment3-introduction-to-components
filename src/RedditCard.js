import React from 'react';

export default function RedditCard(props){
	let reddit = props.reddit;
	
	return(
		<div onClick={props.onClick}>
			<a href = {reddit.data.url} target = "_blank">{reddit.data.title}</a>
			<p>Author: {reddit.data.author}</p>
			<p>Ups: {reddit.data.ups.toLocaleString()}</p>
			<p>Comments: {reddit.data.num_comments? reddit.data.num_comments.toLocaleString(): "No Comments"} </p>
			<hr></hr>
		</div>
	);

}

