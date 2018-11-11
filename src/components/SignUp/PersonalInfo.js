import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const PersonalInfo = ({handleChange, nextStep, values}) =>{	
	return(
		<div>
			<AppBar position="static" color="default">
		        <Toolbar>
		          <Typography variant="h6" color="inherit">
		            PersonalInfo
		          </Typography>
		        </Toolbar>
	      	</AppBar>
	      	<TextField
	            required
	          id="standard-required"
	          label="Name"
	          margin="normal"
	          value={values.name}
	          onChange={handleChange('name')}
          	/>
          	<TextField
	            required
	          id="standard-required"
	          label="country"
	          margin="normal"
	          value={values.country}
	          onChange={handleChange('country')}
          	/>
          	<TextField
	            required
	          id="standard-required"
	          label="Phone"
	          margin="normal"
	          value={values.phone}
	          onChange={handleChange('phone')}
          	/>
          	<TextField
	          id="standard-required"
	          label="Credit Card"
	          margin="normal"
	          value={values.creditCard}
	          onChange={handleChange('creditCard')}
          	/>
          	 <Button size="large" variant="outlined" 
          	 	color="primary" 
          	 	onClick={nextStep}
          	 >
		          Next step
	        </Button>
		</div>
	)
}
export default PersonalInfo;