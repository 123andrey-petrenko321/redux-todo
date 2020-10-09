import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'

const Posts = ({ myPosts, }) => {

    if (!myPosts) {
        return <p>Задач нету</p>
    }
    return (
        myPosts.map(post => <Post post={post} key={post.id} />)
    );
};
const mapStateToProps = (state) => {
    return {
        myPosts: state.posts
    }
}

export default connect(mapStateToProps, null)(Posts);