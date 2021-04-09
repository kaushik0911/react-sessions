import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { todoList: state.todoList }
}

class Todo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        TodoForm
        <ul>
          {
            this.props.todoList.map(item => {
              return (
                <li key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps,)(Todo);