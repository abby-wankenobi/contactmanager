import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John',
        email: 'hello@gmail.com',
        phone: '55555555'
      },
      {
        id: 2,
        name: 'Zach',
        email: 'zach@gmail.com',
        phone: '1111111'
      },
      {
        id: 3,
        name: 'Stacey',
        email: 'stacey@gmail.com',
        phone: '55555555'
      }
    ]
  };


  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    )
  }
}

export default Contacts;
