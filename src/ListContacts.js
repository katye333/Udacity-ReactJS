import React, { Component } from 'react'

function ListContacts (props) {
	/*
		Arrow function will be invoked on button click 
		which invokes the onDeleteContact method (App.js)
		passing it the specific contact that we're iterating over
		Stack Trace: 
			Button Click
			onDeleteContact(contact)
			removeContact
			Filter removes the specific contact
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

export default ListContacts