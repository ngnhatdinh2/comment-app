import React from 'react';
//import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
const SuccessfulSignUp = ({ history }) =>{
	return(
		<div>
			<h2>CONGRATS U HAVE SIGNED UP SUCCESSFULLY</h2>
			<button
				color="primary"
				onClick={()=>history.push('/news')}>
				Home Page
			</button>
		</div>
	)
}
export default withRouter(SuccessfulSignUp);
