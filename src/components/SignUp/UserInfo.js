import React from 'react';

const UserInfo = ({handleChange, nextStep, prevStep, values}) =>{
	return(
		<div>
			<h2>
		        UserInfo
	      	</h2>
	      	<div className="email">
		      	<label htmlFor="Email">Email</label>
		      	<input
		      	  type="email"
		          name="Email"
		          value={values.email}
		          onChange={handleChange('email')}
	          	/>
          	</div>
          	<div className="username">
	          	<label htmlFor="Username">Username</label>
	          	<input
	          	  type="text"
		          value={values.username}
		          label="Username"
		          onChange={handleChange('username')}/>
	        </div>
	        <div className="password">
		        <label htmlFor="Password">Password</label>
	          	<input
	          	  type="password"
		          name="Password"
		          value={values.password}
		          onChange={handleChange('password')}
	          	/>
          	</div>
          	<div className="confirm-password">x
	          	<label htmlFor="Confirm">Confirm</label>
	          	<input
	          	  type="password"
		          name="Confirm"
		          value={values.confirmPassword}
		          onChange={handleChange('confirmPassword')}
	          	/>
          	</div>
          	 <button
          	 	color="primary" 
          	 	onClick={nextStep}
          	 >
		          Next step
	        </button>
	        <button
          	 	color="secondary" 
          	 	onClick={prevStep}
          	 >
		          Prev step
	        </button>
		</div>
	)
}
export default UserInfo;