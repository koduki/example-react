
let todos = [{
  id: '_1',
  name: 'Buy some milk',
  done: true
},{
  id: '_2',
  name: 'Birthday present to Alice',
  done: false
}];

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;
    return (<li>{todo.name}<button>Done</button></li>);
  }
}

class TodoList extends React.Component {
  render() {
    const rows = this.props.todos
                  .filter((todo) => !todo.done)
                  .map((todo) => (<Todo key={todo.id} todo={todo}></Todo>));
    return (
      <div className="active-todos">
        <h2>Active</h2>
        <ul>{rows}</ul>
      </div>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : ''}
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name.trim();
    alert(name);
    this.setState({
      name: ''
    });
  }

  render() {
    let disabled = this.state.name.trim().length <= 0;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={this.state.name} onChange={this.handleNameChange.bind(this)}></input>
        <input type="submit"></input>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Todo</h1>
        <TodoList todos={todos} />
        <TodoForm onSubmitTodo={this.handleSubmit}/>
      </div>
    );
  }
}

React.render(
  <App></App>,
  document.getElementById('content')
);
