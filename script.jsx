class ListTweet extends React.Component {
    render() {
        return(
            <li>{this.props.tweet} </li>
            );
    }
}

class List extends React.Component {
    render() {
        let tweetsElements = this.props.tweets.map( (tweet,index) => {

return (
                                    <div key= {index}>
                                        <ListItem
                                            class="tweethandle"
                                            tweet={tweet.user.screen_name}
                                        ></ListItem>
                                        <ListItem
                                            class="tweetTime"
                                            tweet={tweet.created_at}
                                        ></ListItem>
                                        <ListItem
                                            class="tweetMessage"
                                            tweet={tweet.text}
                                        ></ListItem>
                                        <ListItem
                                            class="retweets"
                                            tweet={tweet.retweet_count}
                                        ></ListItem>
                                        <ListItem
                                            class="favorites"
                                            tweet={tweet.favorite_count}
                                        ></ListItem>
                                     </div>
                                );
                            });
                return (
            <div>{tweetElements}</div>
        );
    }
}

ReactDOM.render(
    <List tweets={tweets} />,
    document.getElementById('root')
);