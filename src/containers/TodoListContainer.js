import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from '../components/TodoList';
import * as TodoActions from '../actions/TodoActions';

const mapStateToProps = state => {    
  return {
    todos: state.todoReducer.todos
  }
}
  
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    TodoActions, dispatch)
}

class TodoListContainer extends React.Component {
  
  render() {
    console.log(this.props.todos )
    return <TodoList {...this.props}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer)
