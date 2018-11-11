import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const UserInfo = ({handleChange, nextStep, prevStep, values}) =>{
	return(
		<div>
			<AppBar position="static" color="default">
		        <Toolbar>
		          <Typography variant="h6" color="inherit">
		            UserInfo
		          </Typography>
		        </Toolbar>
	      	</AppBar>
	      	<TextField
	            required
	          id="standard-required"
	          label="Email"
	          margin="normal"
	          onChange={handleChange('email')}
          	/>
	      	<TextField
	            required
	          id="standard-required"
	          label="Username"
	          margin="normal"
	          onChange={handleChange('username')}
          	/>
          	{values.errors && <h1>password errors</h1>}
          	<TextField
	            required
	          id="standard-required"
	          label="Password"
	          value={values.password}
	          margin="normal"
	          onChange={handleChange('password')}
          	/>
          	<TextField
	            required
	          id="standard-required"
	          label="Confirm Password"
	          value={values.confirmPassword}
	          margin="normal"
	          onChange={handleChange('confirmPassword')}
          	/>
          	 <Button size="large" variant="outlined" 
          	 	color="primary" 
          	 	onClick={nextStep}
          	 >
		          Next step
	        </Button>
	         <Button size="large" variant="outlined" 
          	 	color="secondary" 
          	 	onClick={prevStep}
          	 >
		          Prev step
	        </Button>
		</div>
	)
}
export default UserInfo;