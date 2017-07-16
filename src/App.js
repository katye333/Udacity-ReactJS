import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ contacts })
        })
    }
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))

        ContactsAPI.remove(contact)
    }

    /*
        Using render in the ListContacts Route 
        because we are passing it some props 
        
        The second Route doesn't need to use render
        because we are simply inserting our base
        component, rather than also adding props

        We can remove all instances of the screen state
    */
    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <ListContacts 
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact} 
                    />
                )}/>
                <Route path='/create' component={CreateContact} />
            </div>
        )
    }
}
export default App;
