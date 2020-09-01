import React, { Component, Fragment } from "react";

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <input onChange={this.handleChange} value={this.state.task} />
        <button onClick={this.addTask}>Add</button>
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </Fragment>
    );
  }

  addTask() {
    const { task, tasks } = this.state;
    this.setState({
      task: "",
      tasks: [].concat(tasks, task),
    });
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }
}
