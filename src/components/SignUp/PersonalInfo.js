import React from 'react';


const PersonalInfo = ({handleChange, nextStep, values, classes, children, className}) =>{	
	return(
		<div>
		    <h2>PersonalInfo</h2>
	      	<div className='signup-form'>
		      	<div className="name">
		      		<label htmlFor="Name">Name</label>
			      	<input
			          name="Name"
			          value={values.name}
			          onChange={handleChange('name')}
		          	/>
		         </div>
		        <div className="country">
		          	<label htmlFor="Country">Country</label>
		          	<input
			          name="Country"
			          value={values.country}
			          onChange={handleChange('country')} />
			    </div>
			    <div className="phone">
			        <label htmlFor="Phone">Phone</label>
		          	<input
			          name="Phone"
			          value={values.phone}
			          onChange={handleChange('phone')}
		          	/>
		        </div>
		        <div className="credit-card">
		          	<label htmlFor="Credit-Card">Credit-Card</label>
		          	<input
			          margin="normal"
			          name="Credit-Card"
			          value={values.creditCard}
			          onChange={handleChange('creditCard')}
		          	/>
		        </div>
	          	 <button
	          	 	color="primary" 
	          	 	onClick={nextStep}
	          	 >
			          Next step
		        </button>
		      </div>
		</div>
	)
}

export default PersonalInfo;