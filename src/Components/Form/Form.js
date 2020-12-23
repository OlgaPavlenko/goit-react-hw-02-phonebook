import React, { Component } from 'react';
import { generate } from 'short-id';
import s from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ id: generate(), [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="phone"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.phoneInputId}>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.phoneInputId}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
