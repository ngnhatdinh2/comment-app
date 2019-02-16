import React from 'react';
import countries from './countries'

const PersonalInfo = ({handleChange, nextStep, values, classes, children, className}) =>{
	console.log(countries)
	return(
		<div>
			<h2>PersonalInfo</h2>
			<div  id='signup-form' className="centerize">
      	<div id="name">
      		<label htmlFor="Name">Name</label>
	      	<input
						autoFocus
	          name="Name"
	          value={values.name}
	          onChange={handleChange('name')}
          	/>
        </div>
        <div id="country">
          	<label htmlFor="Country">Country</label>
          	<select
		          name="Country"
							type="select"
		          value={values.country}
	          onChange={handleChange('country')}>
							{
								countries.map(country=>(
									<option value={country}>
										{country}
									</option>
								))
							}
						</select>
	    	</div>
				<div id="phone">
						<label htmlFor="Phone">Phone</label>
							<input
							name="Phone"
							value={values.phone}
							onChange={handleChange('phone')}
							/>
				</div>
	      <div id="credit-card">
	          	<label htmlFor="Credit-Card">Credit-Card</label>
	          	<input
		          margin="normal"
		          name="Credit-Card"
		          value={values.creditCard}
		          onChange={handleChange('creditCard')}
	          	/>
	      </div>
				<button
					id="submit-button"
					type="submit"
					color="primary"
					onClick={nextStep}>
					Next step
				</button>
	    </div>
		</div>
	)
}
const Phone = ({}) => (
	<div>

	</div>
);
export default PersonalInfo;
