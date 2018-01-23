import React,{Component} from 'react';
import { connect } from 'react-redux'
const items=[{id:1,heading:"heading1",description:"desc1"},{id:2,heading:"heading2",description:"desc2"},{id:3,heading:"heading1",description:"desc1"},{id:4,heading:"heading2",description:"desc2"},{id:5,heading:"heading1",description:"desc1"},{id:6,heading:"heading2",description:"desc2"},{id:7,heading:"heading1",description:"desc1"},{id:8,heading:"heading2",description:"desc2"}]
export default class List extends Component{
    getListItems=(items)=>{
       return items.map((item)=>{
        return <ListItem key={item.id} item={item}/>
      })
    }
    render(){
        return (
          <div className="container myList">
            <div className="row align-items-center justify-content-center"> 
              {this.getListItems(items)}
            </div>
          </div>
        )
    }
}

class ListItem extends Component{
  render(){
    return (
      <div className="col-md-8">
      <div className="card text-white bg-success mb-3">
      <div className="card-header">{this.props.item.heading}</div>
      <div className="card-body">
        <p className="card-text">{this.props.item.description}</p>
      </div>
    </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)