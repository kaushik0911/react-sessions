import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const mapDispatchProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  }
}

class TodoForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      title: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTextChange(event){
    this.setState({title: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    const { title } = this.state;
    this.props.addTodo({ title }); // ??
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>title</label>
        <br/>
        <input type="text" onChange={this.onTextChange}></input>
        <br/>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default connect(null, mapDispatchProps)(TodoForm);