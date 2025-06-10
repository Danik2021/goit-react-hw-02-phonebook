import React from 'react';
import css from './Contacts.module.css';

// bibliothecs
import PropTypes from 'prop-types';

// components
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const Contacts = ({ renderContacts }) => {
  return (
    <ul className={css.contactsList}>
      <ContactsItem renderContacts={renderContacts} />
    </ul>
  );
};

Contacts.propTypes = {
  renderContacts: PropTypes.func.isRequired,
};
