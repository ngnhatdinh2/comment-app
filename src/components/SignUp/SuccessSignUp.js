import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const SuccessSignUp = ({handleChange, nextStep, values}) =>{
	return(
		<div>
			<AppBar position="static" color="default">
		        <Toolbar>
		          <Typography variant="h6" color="inherit">
		            PersonalInfo
		          </Typography>
		        </Toolbar>
	      	</AppBar>
	      	<h1>HelloWellcome to Hell </h1>

          	 <Button size="large" variant="outlined" 
          	 	color="primary" 
          	 	onClick={nextStep}
          	 >
		          Home Page
	        </Button>
		</div>
	)
}
export default SuccessSignUp;