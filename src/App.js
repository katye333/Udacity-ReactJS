import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

    /*
        Array will be populated using data from the 
        database that we obtain by using ajax requests.
    */
    state = {
        contacts: []
    }

    /*
        When our component mounts, we make an API request
        and when that request resolves, our then() function
        will be invoked with our contacts data. Then when 
        we have those contacts, we call setState() which 
        updates our state causing a re-render of the component,
        passing those new contacts down to our list contact
        component which should finally render them. 
    */
    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {

            /*
                The value is the contacts we're getting
                from our API request but because the key
                and value are the same, we can delete one
                of them from the object entirely
                (Including the semi-colon)

                Original: this.setState({ contacts: contacts })
            */
            this.setState({ contacts })
        })
    }
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contact.filter((c) => c.id !== contact.id)
        }))
    }
    render() {
        return (
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
            </div>
        )
    }
}
export default App;
