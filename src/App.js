import React from 'react';
import TodoListContainer from './containers/TodoListContainer';
import TodoDetailsContainer from './containers/TodoDetailsContainer';
// eslint-disable-next-line
import styles from './styles/app.scss';
class App extends React.Component {
  render() {
    return <div className='todo-root'>
      <div className='list-view'>
          <TodoListContainer />
      </div>
      <div className='details-view'>
        details
          <TodoDetailsContainer />
      </div>
  </div>
  }
}

export default App;
