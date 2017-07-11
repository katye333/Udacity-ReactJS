import React, { Component } from 'react'
import ListContacts from './ListContacts'

/* 
    Move contacts array into the component so the 
    component will be able to determine if/when the
    array has changed and update the app appropriately 
*/
class App extends Component {
    state = {
        // The contacts array is inside an object now
        // Change the equal sign to a colon 
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
    /*
        removeContact is taking in a contact as an argument
        and updating our state after its removed the 
        contact with filter
    */
    removeContact = (contact) => {
        /*
            Functional setState()
            Need to update contacts by removing an entry in
            the object so it will be based on the previous values
        */
        this.setState((state) => ({
            // Remove where the state contacts ID does not equal 
            // the ID of the contact that was clicked on
            contacts: state.contact.filter((c) => c.id !== contact.id)
        }))

        /*
            Object setState()
            Would be used if you wanted to replace all of the 
            contacts in the array with totally different values

            this.setState({ ... })
        */
    }
    render() {
        return (
            // Invoke the removeContact method on button click by
            // passing it as a prop that references the removeContact method
            // c.id will be equal to the ID of the row (because of 'this')
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            </div>
        )
    }
}
export default App;
