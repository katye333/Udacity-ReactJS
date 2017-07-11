import React, { Component } from 'react'
import ListContacts from './ListContacts'

/* 
    Debugging with prop-types example
*/
class App extends Component {
    state = {
        contacts: [
          {
            "id": "ryan",
            "name": "Ryan Florence",
            "email": "ryan@reacttraining.com",
            "avatarURL": "http://localhost:5001/ryan.jpg"
          },
          {
            "id": "michael",
            "name": "Michael Jackson",
            "email": "michael@reacttraining.com",
            "avatarURL": "http://localhost:5001/michael.jpg"
          },
          {
            "id": "tyler",
            "name": "Tyler McGinnis",
            "email": "tyler@reacttraining.com",
            "avatarURL": "http://localhost:5001/tyler.jpg"
          }
        ]
    }
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contact.filter((c) => c.id !== contact.id)
        }))
    }
    render() {
        return (
            /* 
                Question: What would happen if an object was accidentally passed to the contacts prop?
                Answer: The map function would throw an error because it only works if given an array
                        and many hours would be spent debugging the application

                Component: <ListContacts onDeleteContact={this.removeContact} contacts={{ }} />
            */ 
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            </div>
        )
    }
}
export default App;
