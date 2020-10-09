import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ADD } from '../redux/actions'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = event => {
        event.preventDefault()
        const { title } = this.state
        if (!title.trim()) {
            return
        }
        const newPost = {
            title, id: Date.now().toString(), check: false
        }
        this.props.ADD(newPost)
        this.setState({ title: '' })

    }
    onValueChange = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{ [event.target.name]: event.target.value }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onValueChange}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    ADD
}
export default connect(null, mapDispatchToProps)(PostForm);