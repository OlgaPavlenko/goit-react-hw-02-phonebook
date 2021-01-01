import React, { Component } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  k;
  addContact = contact => {
    const isFinded = this.state.contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() === contact.name.toLocaleLowerCase(),
    );

    if (isFinded) {
      alert(`${contact.name} is already in the contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onFilterChanged = filter => {
    this.setState({ filter });
  };

  filterContactList = () => {
    let { contacts, filter } = this.state;
    filter = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter),
    );
  };

  onDelete = rId => {
    let contacts = this.state.contacts.filter(
      ({ id }) => id.toLocaleLowerCase() !== rId,
    );

    this.setState({ contacts });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContactList = this.filterContactList();

    return (
      <>
        <Form onSubmit={this.addContact} />
        <Filter onFilterChanged={this.onFilterChanged} />
        <ContactList
          contactsList={filteredContactList}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
