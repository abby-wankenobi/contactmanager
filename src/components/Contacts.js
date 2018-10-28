import React, { Component } from 'react'

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John',
          email: 'hello@gmail.com',
          phone: '55555555'
        }
        {
          id: 2,
          name: 'Zach',
          email: 'zach@gmail.com',
          phone: '1111111'
        }
        {
          id: 3,
          name: 'Stacey',
          email: 'stacey@gmail.com',
          phone: '22222222'
        }
      ]
    }
  }

  render() {
    return (
      const { contacts } = this.state;

      <div>
        {contacts.map(contact => {
          
        })}
      </div>
    )
  }
}

export default Contacts;
