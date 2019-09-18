export async function getReddits(redditName){
	let response = await fetch(`https://www.reddit.com/r/${redditName}.json`);
    let reddits = await response.json();
    return reddits.data.children;
}