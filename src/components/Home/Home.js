import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import './Home.css';

import {provider, auth} from '../Base/Base';
// MUST READ
// routes are defined here: /news   Posts: De cu, gon nhieu catelogy
// news/1 tro di Posts: ung voi moi catelogy

const authWithFireBase=()=>{

    auth.signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result.user);
    }).catch(function(error) {
      console.log('auth error', error);
  });
  }
const catelogies=['history','politics','sport','culture','tech','health'];

const CatelogyPage = ({ posts, catelogy }) =>{
  return(
    <React.Fragment>
      <div className="top-page">
        <div className="big-post-container">
          <PostWithRouter
            post={posts[0]}
            classPost="big-post"
          />
        </div>
        <div className="small-post-container">
          <PostWithRouter 
            post={posts[0]}
            classPost="small-post" 
          />
        </div>
        <div className="medium-post-container">
           <PostWithRouter
            post={posts[0]}
            classPost="medium-post" 
          />
        </div>
      </div>
      <div className="bottom-page">
        <div className="adver">
          ADVERTISEMENT
        </div> 
        <div className="post-container">
          <div className="bottom-left-container">
            <Route  path='/news' render={()=>
              <PostList 
                posts={posts}
                catelogy={catelogy}
              />}
            />
          </div>
          <div className="bottom-right-container">
            <Route  path='/news' render={()=>
              <PopularPostList 
                posts={posts}
                catelogy={catelogy}
              />}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
const Post=(props)=>{
  const { post, classPost, onClick, history } = props;
  return(
    <div className={classPost}>
      <img className="post-image" src={`https://robohash.org/${uuidv1()}`} alt="wallpaper"/>
      <div className="post-intro">
        <h2 className="subtitle" onClick={onClick}>{post.title}</h2>
        {
          //classPost !== "medium-post" && <p onClick={onClick}>{post.body}</p>
        }
        <p className="post-body" onClick={onClick}>{post.body}</p>
        <div>
          <AuthorCase />
        </div>
      </div>
    </div>
  )
}
const PostWithRouter= withRouter((props) => (
  <Post {...props} onClick={ () => props.history.push('/signup') }/>
))
const SignInButton = withRouter(({ history }) =>(
  <button
    className="signin-btn"
    onClick={authWithFireBase}
  >
    Sign In
  </button>
));
const SignUpButton = withRouter(({ history }) =>(
  <button
    className="signup-btn"
    onClick={() => { history.push('/signup') }}
  >
    Sign Up
  </button>
));
const SignOutButton = withRouter(({ history, signOut }) =>(
  <button
    className="signout-btn"
    onClick={signOut}
  >
    Sign Out
  </button>
));
const SignOutNavItem=({ username, signOut })=>{
  return(
  <div className="signin-nav-item">
    <p>{username}</p>
    <SignOutButton signOut={signOut}/>
  </div>
  )
}
const SignInNavItem=({ signIn, signUp })=>{
  return(
    <div className="signin-nav-item">
      <SignInButton />
      <SignUpButton />
    </div>
  )
}
const Header = ({ SignInOrSignOut }) => {
  return(
    <div className="header">
      <div className="header-bar">
        <Link to="/news"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8oLTMTGyOqrK4QGCAjKS+5ursYHybc3d6UlplGSlAdIyp3eXxmaW0TGiINFh8ADhnP0NGztLZpbG+Iio1hZGjm5ue+v8GBg4bW19hTV1v39/ghJi1vcXXu7u81OT8ACRZITFE/Q0gAAA7Gx8ien6IJUbamAAAEGElEQVR4nO2d63aiMBRGTQXRooK3egHUsc77v+JobctUCURXzkX67b9lRfb6zpEUE+h0AAAAAAAAAAAAAAAAAAAAAAAAAADaSdYr0nS/m6+lT4SK4yGJjTFhNC620udCwiAJzSeRaWOMw9SUhOlS+ny8UyTmB0lP+ow8U4zNFelU+py8Mnu5Fjyl2CbF0U2CLUtxVinYohSLihKtSTFbrmajb1ZT/ddOW4LVitkgCuK8JA6SoXLH6h60Ferba3BzTGQmMqfuRl2Ct4rbQ1xxTDjuS51+M1WXiRrFWVR5TH7IxAwaqC/RC//14jG1HBP8FZSoo6lEr1OcVdXomfBVZ4j2y4Qlxeoa/QhRZSc29+BVimtbkZ4MNU4OXHrwp+LEbvjSlda5xa0HvxXPBpPE+neFhu4leuHci09lOLpT8KTYfSrD+wXPvdh/HsN7S/RCNLddDtUZPiZojF1QmeHiQcE6VBk+0oNPZfhoiT6NIUmCmgwpelCVIU2JKjK0/IveHkOqElVjSPQlo8eQrAe1GFImqMKQsAd1GNImqMCQtAc1GFInKG5I3IPyhuQlKm04IpuqKTFkKFFZQ/ovGWFDjh4UNWRKUM6QpwcFDdkSlDJkuUxIGvKVqJAhq6CJBuyCjD34wZg7RG7Bz1+J+eAt0Qspp6KEIGuK/CV6gW3JrZQgW4oyJcqoKJcgk6KsIEMvSpbopyJtigvGybYN0kKVLtELhCnqECRMUb4HvyBK8XZzlhwkO9/m9mV1AqT+t2hO7et3JQiN74002zxs/lhOosKz4VzBhfAngec6vd2NJE009ypYs4peinDn1bCnL0Oz97qNRqNh6lPwFxhm79I+N8RDr4adTS5tdI3vbdLHvbTRFaH3TZdDZZf8xPuDNbKNKsU9wabSrNir6cWI6Hea4yYJSphn4nH5yUm8eiMRPLGd9L5YHlgV49Xy+5P7THuC/7AaSvwG/ApDGMIQhjBkNQzjKu6ZIuk2jILDsIqRSZwlNRvm0dw6x5psEsdRFBtGm9o5ZC90G0avYbxoGGbtVqhqDcNd4yx56XT3QK1hcGweqKh50IB6w3zjMFDf5U6lVsPI6V6Dy/9hWg3HTo+SWzmUqVbDyOn5VQOHe1wwpACGMCyBIQypgCEMS2AIQypgCMMSGMKQChjCsASGMKQChjAsgSEMqYAhDEtgCEMqYAjDEhjCkIr2G7qsgvFnyP4wsxMjhyV3/gz9b+RqpuvwEAl/hrHAmzrfHJ4i4c0wb1rESYLDjkRvhhJF2ulsTeN3jS/DF897fl2ZNK6292Q4dlnEScL60LAQ3Ythng7lXtGZdXf7wE7y7mQ4f68bY78Qfhtwf9qz4/bG6XXdED2dr1gFAAAAAAAAAAAAAAAAAAAAAAAAAACt5B+Kul5aRFXaTgAAAABJRU5ErkJggg==" alt="home logo"/></Link>
        <h1 className="logo">
          Blog
        </h1>
        <RenderProps />
        {SignInOrSignOut}
      </div>
      {/*some error here, please delete /news/ to Debug*/}
      <div className="catelogy-bar">
        {
          catelogies.map((catelogy, index)=>
              <Link to={`/news/${index+1}`} key={index}>{catelogy}</Link>
          )
        }
      </div>
    </div>
  )
}
const MainPost=({ post })=>{
  if(!post){
    return (
      <h1 className="errorPage">OOPSS!!! Somthing went wrong</h1>
    )
  }
  return(
    <div className="main-post-container">
      <div className="main-post">
        <img src="https://picsum.photos/800/600/?random" alt="post image"/>
        <div className="post-content">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-info">
            <img src={`https://robohash.org/${post.title}`} alt="" />
            <span className="author">Nguyen Nhat Dinh</span>
            <span className="date">Jan 1 Updated on Jan 03, 2018</span>
          </div>
          <div className="post-tag">
            <div>#{'ngu'}</div>
            <div>#{'sex'}</div>
          </div>
          <p className="post-body">{post.body}</p>
        </div>
        <div className="scroll-bar">
         <div className="love-btn">
          ❤️ <span>10</span>
         </div>
         <div className="bookmark-btn">
          🔖 <span>10</span>
         </div>
         <div className="share-btn">
          ✈ Share
         </div>
        </div>
      </div>
      <div className="side-bar">
        <h2>This is Side bar</h2>
      </div>

    </div>
  )
}
const PopularPostList=({ posts, catelogy })=>{ 
          return(
            posts && posts.map( (post, index) =>
                                index < 2 &&
                                <div className="popularPostsContainer" key={post.id}>
                                  <h3>{catelogy}</h3>
                                  <div>
                                    <img src={`https://robohash.org/${post.title}`} alt=""/>
                                    <Link 
                                      to={`/news/${catelogy}/${post.title}`}
                                    > 
                                        {post.title}<br/>
                                    </Link>
                                  </div>
                                </div>
                                ))
}
const PostList=({ posts, catelogy })=>{ 
          return(
            posts && posts.map( post => 
                                <div className="bottom-left-container-item" key={post.id}>  
                                  <PostWithRouter post={post} classPost="small-post" />
                                </div>
                                ))
}
class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			posts: null
		}
	}
	componentWillMount(){
    // fetch some fake data
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res=> res.json())
			.then( posts => this.setState({ posts }))
			.catch(err=>console.log('error'))
	}
  handleSignOut=()=>{
    this.props.signOut();
  }
  handleSignIn=()=>{
    console.log('sign in'); 
  }
  handleSignUp=()=>{
    console.log('sign up');
  }
  render() {
  		const { posts } = this.state;
      const { match, username, isSignedIn } = this.props;
      const SignInOrSignOutComponent = 
        isSignedIn ? 
          <SignOutNavItem 
            username={username}
            signOut={this.handleSignOut}
          /> 
          : <SignInNavItem />;
  		return(
      <div>
        <div className="home">
          <Header SignInOrSignOut={SignInOrSignOutComponent} />
          <Route path='/news' exact render={()=><Redirect to="/news/1" />} />
          <Route path='/' exact render={()=><Redirect to="/news/1" />} />
          {
          /* Render THe Page For Each Catelogy*/
          posts && <Route exact path="/news/:catelogy"  
            render={  ({ match })=>
                <CatelogyPage 
                  posts={posts.filter(post=>post.userId == match.params.catelogy)}
                  catelogy={match.params.catelogy}
                />
              }
          />
          }
        { 
          //render the current clicked post
        posts && (
          <Route path={`/news/:catelogy/:title`}
            render={({ match })=>
                  <MainPost 
                    post={posts.find(post=>post.title === match.params.title)}
                  />
            }
          />
        )
        }
          <div className="footer">
            <div className="i1">
              Built by 🕷️ With ❤
            </div>
            <div className="2">
              2
            </div>
            <div className="3">
              3
            </div>
            <div className="4">
              4
            </div>
          </div>
        </div>
      </div>
    );}
}
class RenderProps extends React.Component {
  render() {
    return (
      <HoverState
        render={isHover => {
          if (isHover) {
            return <button>🌙</button>;
          }

          return <button>☀️</button>;
        }}
      />
    );
  }
}
const Author = (props) =>{
  console.log(props.className);
  return(
    <div className={"author-info "+ props.className}>
      <div>
        <img src="" alt="author avatar"/>
        <strong>Author name</strong>
        <button>
          Follow
        </button>
      </div>
    </div>
  )
}
class AuthorCase extends React.Component {
  state = { isHover: false };
  handleHover = isHover => () => {
    this.setState({ isHover });
  };
  render() {
    return(
      <div className="hover-state">
        <span  
          onMouseOver={this.handleHover(true)}
          onMouseOut={this.handleHover(false)}
        >
          Dinh
        </span>
        {
          this.state.isHover ? <Author className="display"/> : null
        }
      </div>
    )
  }
}
class HoverState extends React.Component {
  state = { isHover: false };

  handleHover = isHover => () => {
    this.setState({ isHover });
  };
  render() {  
    return (
      <div
        onMouseOver={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}
        className="hover-state"
      >
        { this.props.children }
        {this.props.render(this.state.isHover)}
      </div>
    );
  }
}

export default Home;