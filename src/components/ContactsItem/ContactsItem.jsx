// bibliothecs
import PropTypes from 'prop-types';

export const ContactsItem = ({ renderContacts }) => {
  return renderContacts();
};

ContactsItem.propTypes = {
  renderContacts: PropTypes.func.isRequired,
};
