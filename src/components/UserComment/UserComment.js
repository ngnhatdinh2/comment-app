import React from 'react';
import './style.css';

const UserComment = ({avt, name, body, handleCommentSubmit, handleInputChange, handleEnter}) => {
	return(
		<div className="UserComment">
			<div className="identifier">
				<img src="https://robohash.org/me" alt="avatar" />
				<h3>{name}</h3>
			</div>
			<div className="input">
				<textarea type="text" name="body" autoFocus={true} 
					value={ body} 
				 	onChange={handleInputChange} 
				 	onKeyDown={handleEnter} 
				 	placeholder='Write your comment ...'
				 	autoFocus
				 />
				<input type="submit" className="submit-button"
					onClick={handleCommentSubmit}/>
			</div>
		</div>
	)
}
export default UserComment;