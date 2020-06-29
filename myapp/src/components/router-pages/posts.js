//Will be using axios to consume Jsonplaceholder data.
//We will be using the componentDidMount hook.
//Please note that this hook can only be used on class based ie. state components.

import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts : [ ],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            
            this.setState({
                posts : res.data.slice(0,10),
            })
           
        })
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card">
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (<div className = 'center'>No posts yet.</div>);

        return(
            <div>
                <h1 className = 'center'>Hello from posts.</h1>
                {postList}
            </div>
        )
    }
}

export default Posts;