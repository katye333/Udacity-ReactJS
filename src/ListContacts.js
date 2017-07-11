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
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	/* 
		Resets the input state to blank
	*/
	clearQuery = () => {
		this.setState({ query: '' })
	}

	render () {
		// Creates variables named contacts, onDeleteContact, query
		// instead of writing out this.props.contacts, etc 
		const { contacts, onDeleteContact } = this.props
		const { query } = this.state

		let showingContacts
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
		} 
		else {
			showingContacts = this.props.contacts;
		}
		showingContacts.sort(sortBy('name'))
 
 		/* 
 			If showingContacts.length and contacts.length are not the same length
 			execute a function (shorthand) that will display a counter variable 
 			with the number of matching contacts on the screen
 		*/
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

	    		{showingContacts.length !== contacts.length && (
	    			<div className='showing-contacts'>
	    				<span>Now showing {showingContacts.length} of {contacts.length} total</span>
	    				<button onClick={this.clearQuery}>Show All</button>
	    			</div>
	    		)}
	    	
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
							<button onClick={() => onDeleteContact(contact)} className='contact-remove'>
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