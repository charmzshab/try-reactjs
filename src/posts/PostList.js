import React, { Component } from 'react';
import PostData from '../data/posts.json';
import PostDetail from './PostDetail';

class PostList extends Component {
  constructor(props){
    super(props);
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.handlePostRemove = this.handlePostRemove.bind(this);
    // this.updateBackend = this.updateBackend.bind(this);
    this.state = {
      postList: []
    }
  }
  handleDataCallback(postItem){
    console.log(postItem);
    // alert(txtMsg);
    let currentPostList = this.state.postList
    currentPostList.push(postItem)
    this.setState({
      postItem:currentPostList
    })
  }

  updateBackend(){
    console.log('Updating....')
  
  }
  handlePostRemove(postItem){
    let currentPostList = this.state.postList
    currentPostList.pop(postItem)

    this.setState({
      postItem:currentPostList
    })
    this.updateBackend()
  }
  componentDidMount(){
    this.setState({
      postList:PostData
    })
  }
  render () {
    const {postList} = this.state
    return (
      <div >
        <h1>Hello There</h1>
        {postList.map((item, index) => {
          return <PostDetail
           post={item} 
           key={`post-list-key ${index}`} 
           didHandleRemove={this.handlePostRemove}
           dataCallback={this.handleDataCallback}
           />
        })}
      </div>
    )
  }
}

export default PostList
