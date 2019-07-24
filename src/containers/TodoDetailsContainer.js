import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoDetailsView from '../components/TodoDetailsView';
import * as TodoActions from '../actions/TodoActions';

const mapStateToProps = state => {   
    const {todoReducer: {activeTodoItem, todos: {byId}}} = state;
    //console.log(byId, activeTodoItem)
    return {
      item: byId[activeTodoItem]
    }
}
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      TodoActions, dispatch)
}

class TodoDetailsContainer extends React.Component {
  render() {
    return <TodoDetailsView {...this.props}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailsContainer)
