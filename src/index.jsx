import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// bibliothecs
import { nanoid } from 'nanoid';

// methods

import { getFilteredContacts } from 'components/getFilteredContacts/getFilteredContacts';

// components
import { Section } from 'components/Section/Section';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Billy Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Bobby Kline', number: '443-89-12' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onTypeName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  onTypeNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(
      ({ contacts }) => {
        return {
          contacts: [...contacts, newContact],
        };
      },
      () => {
        console.log(this.state);
      },
    );
  };

  renderContacts = () => {
    const filtredContacts = getFilteredContacts(this.state);
    return (
      <>
        {filtredContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <Section
        onTypeName={this.onTypeName}
        onTypeNumber={this.onTypeNumber}
        addContact={this.addContact}
        onFilterChange={this.onFilterChange}
        renderContacts={this.renderContacts}
      />
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>,
);
