import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DEL, COMP } from '../redux/actions';

class Post extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
    clickHandler = (event) => {
        this.props.DEL(this.props.post.id)
    }
    changeHandler = (event) => {
        const check = event.target.checked
        this.props.COMP(this.props.post.id, check)

    }

    render() {
        console.log(this.props.post.check)
        return (
            <div className="container mb-3">
                <div className="card d-flex align-self-center">
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title d-flex align-self-center m-0 "
                            style={{
                                textDecoration: this.props.post.check ? 'line-through' : 'none'
                            }}>
                            {this.props.post.title}</h5>
                        <div className="btn-group">
                            <div className="form-check d-flex align-self-center mr-2">
                                <input type="checkbox"
                                    id={this.props.post.id}
                                    onChange={this.changeHandler}
                                    className="form-check-input position-static"></input>
                            </div>
                            <button
                                type="button"
                                onClick={this.clickHandler}
                                id={this.props.post.id}
                                className="btn-trash btn-sm btn-outline-success">
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    DEL, COMP
}
const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)