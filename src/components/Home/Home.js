import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			posts: null
		}
	}
	componentDidMount(){
    // fetch some fake data
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res=> res.json())
			.then( posts => this.setState({ posts }))
			.catch(err=>console.log('error'))
	}
  // render the proper post for user
  // may add some method like: renderPostWithTag or Catelogy
	renderPostWithId=(id)=>{
		const {posts} = this.state;
		return(
			posts ? 
				posts.filter(post=>post.userId === 2)
				.map(post=><Link key={post.id} to={`/home/${post.id}`}>{post.title}<br/></Link>) 
			: null
		);
	}

  render() {
  		const { posts } = this.state;
      const { match } = this.props;
  		return(
        <div className="home">
            <Header />
            {/*<Route path='/home' component={Header} /> */}
            <div className="top-page">
              <div className="big-post-container">
                  <img src="https://img.timesnownews.com/story/1521816651-lord_shiva_11.jpg?d=600x450" alt=""/>
                  <div className="post-intro">
                    <h2 className="subtitle">Subtitle</h2>
                    <p>
                      Defines the columns and rows of the grid 
                      with a space-separated list of values. The values represent t
                      he track size, and the space between them represents the grid 
                      line.
                    </p>
                    <span>Nguyen Nhat Dinh</span>
                    <span>01/01/2019</span>
                  </div>
              </div>
              <div className="medium-post-container">
                <div className="medium-post">
                  <img src="https://img.timesnownews.com/story/1521816651-lord_shiva_11.jpg?d=600x450" alt=""/>
                   <div className="post-intro">
                    <h2 className="subtitle">Subtitle</h2>
                    <span>Nguyen Nhat Dinh</span>
                    <span>01/01/2019</span>
                  </div>
                </div>
                <div className="medium-post">
                  <img src="https://img.timesnownews.com/story/1521816651-lord_shiva_11.jpg?d=600x450" alt=""/>
                   <div className="post-intro">
                    <h2 className="subtitle">Subtitle</h2>
                    <span>Nguyen Nhat Dinh</span>
                    <span>01/01/2019</span>
                  </div>
                </div>
                <div className="medium-post">
                  <img src="https://img.timesnownews.com/story/1521816651-lord_shiva_11.jpg?d=600x450" alt=""/>
                   <div className="post-intro">
                    <h2 className="subtitle">Subtitle</h2>
                    <span>Nguyen Nhat Dinh</span>
                    <span>01/01/2019</span>
                  </div>
                </div>
              </div>
              <div className="small-post-container">
                <div className="small-post">
                  <img src="https://img.timesnownews.com/story/1521816651-lord_shiva_11.jpg?d=600x450" alt=""/>
                  <div className="post-intro">
                    <h2 className="subtitle">Subtitle</h2>
                    <p>
                      Defines the columns and rows of the grid 
                      with a space-separated list of values. The values represent t
                      he track size, and the space between them represents the grid 
                      line.
                    </p>
                    <div className="author">
                      <span>Nguyen Nhat Dinh</span>
                      <span>01/01/2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-page">
              <div className="adver">
                ADVERTISEMENT
              </div>
              <div className="post-container">
                <div className="left-container">
                  <Route exact path='/home' render={()=>
                    <RegularPost 
                      posts={posts}
                    />}
                  />
                </div>
                <div className="right-container">
                  <Route exact path='/home' render={()=>
                    <RegularPost 
                      posts={posts}
                    />}
                  />
                </div>
              </div>
            </div>
            { 
              // render the current clicked post
              posts && (
    						<Route path={`/home/:postId`}
  		  					render={({ match })=>
  			  							<Post 
  			  								post={posts.find(post=>post.id == match.params.postId)}
  			  							/>
                  }
  		  				/>
  		  			)
    				}
        </div>
    );}
}
const Ad=(props)=>{
  return(
    props.children
  )
}
const SignInNavItem=()=>{
  return(
  <div className="signin-nav-item">
    <img src="" />
    <p>username</p>
    <button className="danger-btn">Sign Out</button>
  </div>
  )
}
const Header = () => {
  return(
    <div className="header">
      <div className="main-bar">
        <Link to="/home" className="home-btn">Home</Link>
        <h1 className="sub-header">
          Blog
        </h1>
        <SignInNavItem />
        {/*<Link to='/signin'> SIGN IN </Link>
        <Link to='/signup'> SIGN UP </Link>*/}
      </div>
      <div className="catelogy-bar">
        <li>history</li>
        <li>political</li>
        <li>sport</li>
        <li>culture</li>
        <li>tech</li>
        <li>health</li>
      </div>
    </div>
  )
}
const Post=({ post })=>{
	if(!post){
		return null;
	}
	return(
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}
const RegularPost=({ posts })=>{ 
          return(
            posts && posts.filter(post=>post.userId === 10)
                          .map( post => 
                                <div>
                                  <img src="https://www.freeiconspng.com/uploads/no-image-icon-15.png" alt=""/>
                                  <Link key={post.id} 
                                    to={`/home/${post.id}`}
                                  > 
                                      {post.title}<br/>
                                  </Link>
                                </div>
                                ))
}
export default Home;