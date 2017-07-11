/* 
	NOTICE: Removed { Components } import directive
			Added PropTypes import directive
*/
import React from 'react'
import PropTypes from 'prop-types'

function ListContacts (props) {
	/*
		(Prop-types Example)
			Component: <ListContacts onDeleteContact={this.removeContact} contacts={{}} />
			This would cause problems in our map function because 
			props.contact would no longer be an array 
				ie., props.contacts.map(() => { }) would fail
	*/
    return (
		<ol className='contact-list'>
            {props.contacts.map((contact) => (
				<li key={contact.id} className='contact-list-item'>
					<div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }}/>
					<div className='contact-details'>
						<p>{contact.name}</p>
						<p>{contact.email}</p>
					</div>
					<button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
						Remove
					</button>
				</li>
            ))}
		</ol>
    )
}

/*
	Using PropTypes:
		- Specified the expected type of our prop
		- Made it required for use by everyone

	Warnings shown in console:
		- Warning:  Failed prop type: Invalid prop `contacts` of type `object` supplied to `ListContacts`, expected `array`.
    				in ListContacts (at App.js:39)
    				in App (at index.js:7)
    	- Uncaught TypeError: props.contacts.map is not a function
*/
ListContacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts