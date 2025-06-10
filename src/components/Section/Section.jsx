import React from 'react';

// bibliothecs
import PropTypes from 'prop-types';

// components
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export const Section = ({
  onTypeName,
  onTypeNumber,
  addContact,
  onFilterChange,
  renderContacts,
}) => {
  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook
        addContact={addContact}
        onTypeName={onTypeName}
        onTypeNumber={onTypeNumber}
      />
      <h2>Contacts</h2>
      <Filter onFilterChange={onFilterChange} />
      <Contacts renderContacts={renderContacts} />
    </>
  );
};

PropTypes.Section = {
  onTypeName: PropTypes.func.isRequired,
  onTypeNumber: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  renderContacts: PropTypes.func.isRequired,
};
