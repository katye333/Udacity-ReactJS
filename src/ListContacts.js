import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
	Controlled component used here because we need the UI 
	to update when the state of the input field is changed
		Therefore, a stateless functional component 
		would not work in this situation so a class
		component is required to take its place.
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
		Object setState()
			The new state of the input field
			doesn't depend on the previous state
			so we can just pass an object to it
	*/
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render () {
		/*
			Typing into the input field -->
			Invokes onChange function --> 
			Invokes updateQuery passing it the new string -->
			Updates our state -->
			Updates the specific value of our input field 
		*/
	    return (
	    	<div className='list-contacts'>
	    		{JSON.stringify(this.state)}
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
		            {this.props.contacts.map((contact) => (
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

ListContacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts