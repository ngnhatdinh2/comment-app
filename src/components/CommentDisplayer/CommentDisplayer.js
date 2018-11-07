import React from 'react';
import './style.css';
import loveIcon from './love.png';
const CommentDisplayer = ({comment}) =>{
	const {avt,name,body} = comment;
	const avtSrc= `https://robohash.org/${name}`;
	return(
		<div className="CommentDisplayer">
			<div className="identifier">
				<img src={avtSrc} alt="avatar" />
				<h3>{name}</h3>
			</div>
			<div className="display-content">
				<p>{body}</p>
				<img src={loveIcon} onClick={()=>console.log('like')}/>
				<h3 style={{backgroundColor:"blue"}}>reply</h3>
			</div>
		</div>	
	)
}
export default CommentDisplayer;