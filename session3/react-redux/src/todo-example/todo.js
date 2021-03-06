import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { todoList: state.todoReducer.todoList }
}

class Todo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
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
