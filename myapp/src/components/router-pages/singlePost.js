//we can extract the route param from the props.match.params.id

import React, { Component } from 'react';
import axios from 'axios';


class SinglePost extends Component{
    state = {
        id : '',
        post: '',
    }

    componentDidMount(){
        var newId = this.props.match.params.id;
        console.log(`New ID : ${newId}`);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + newId)
        .then(res => {
            this.setState({
                id:newId,
                post: res.data,
            })
            console.log(res);
            console.log(this.state);

        })
    }
    render(){
        return(
            <div className="container center">
                <h1 className="blue-text">
                    {this.state.post.title} ({this.state.post.id})
                </h1>
                <h3 className = 'center'>{this.state.post.body}</h3>


            </div>
        )
    }
}
export default SinglePost;