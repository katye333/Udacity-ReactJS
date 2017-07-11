/* 
	Import the regex and sorting packages for
	filtering matching strings from input field
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

/*
	Implementing fuzzy search
*/
class ListContacts extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	/*
		
	*/
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render () {
		/*
			If there are any special characters inside of query,
			escape them now so we'll be able to use those special
			characters as a string literal rather than regexp chars
			i = not case sensitive
		*/
		let showingContacts
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')

			// Added to the array if current state contains something also in 
			// one of our contact people's names
			showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
		} 
		else {
			showingContacts = this.props.contacts;
		}

		// Always render contacts in alphabetical order
		showingContacts.sort(sortBy('name'))
 
		// Filtered array of contacts based on the input state 
		// should replace this.props.contacts in map function 
		// in order to show only those contacts who should be visible
	    return (
	    	<div className='list-contacts'>
	    		<div className='list-contacts-top'>
	    			<input
	    				className='search-contacts'
	    				type='text'
	    				placeholder='Search contacts'
	    				value={this.state.query}
	    				onChange={(event) => this.updateQuery(event.target.value)}
	    			/>
	    		</div>
	    	
				<ol className='contact-list'>
		            {showingContacts.map((contact) => (
						<li key={contact.id} className='contact-list-item'>
							<div className='contact-avatar' style={{
		                        backgroundImage: `url(${contact.avatarURL})`
		                    }}/>
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
								Remove
							</button>
						</li>
		            ))}
				</ol>
			</div>
	    )
	}
}
export default ListContacts