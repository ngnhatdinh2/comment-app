import React from 'react';
//import TextField from '@material-ui/core/TextField';

const SuccessfulSignUp = ({ signIn, username}) =>{
	return(
		<div>
			<h2>
		            CONGRATS U HAVE SIGNED UP SUCCESSFULLY
	      	</h2>
	      	<h1>Wellcome to Hell </h1>

          	 <button
          	 	color="primary" 
          	 	onClick={signIn}
          	 >
		          Home Page
	        </button>
		</div>
	)
}
export default SuccessfulSignUp;