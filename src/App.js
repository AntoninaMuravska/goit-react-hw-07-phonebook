import { Component } from 'react';
import { connect } from 'react-redux';
import Container from './components/Container';
import Contacts from './components/Contacts';
import contactOperations from './components/redux/contacts/contacts-operations';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <Container>
          <Contacts />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
