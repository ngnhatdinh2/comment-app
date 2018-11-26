import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './Home.css';
// MUST READ
// routes are defined here: /news   Posts: De cu, gon nhieu catelogy
// news/1 tro di Posts: ung voi moi catelogy
const defaultPosts=[{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }];
const imgUrl="https://picsum.photos/800/600/?random";
const aaaa ="What is a paragraphParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.How do I decide what to put in a paragrBefore you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be:Unified: All of the sentences in a single paragraph should be related to a single controlling idea (often expressed in the topic sentence of the paragraph).Clearly related to the thesis: The sentences should all refer to the central idea, or thesis, of the paper (Rosen and Behrens 119).Coherent: The sentences should be arranged in a logical manner and should follow a definite plan for development (Rosen and Behrens 119).Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).How do I organize a paragraph?There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:Narration: Tell a story. Go chronologically, from start to finish. (See an example.)Description: Provide specific details about what something looks, smells, tastes, sounds, or feels like. Organize spatially, in order of appearance, or by topic. (See an example.)Process: Explain how something works, step by step. Perhaps follow a sequence—first, second, third. (See an example.)Classification: Separate into groups or explain the various parts of a topic. (See an example.)Illustration: Give examples and explain how those examples prove your point. (See the detailed example in the next section of this handout.)5-step process to paragraph developmentLet’s walk through a 5-step process for building a paragraph. For each step there is an explanation and example. Our example paragraph will be about slave spirituals, the original songs that African Americans created during slavery. The model paragraph uses illustration (giving examples) to prove its point.What is a paragraphParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.How do I decide what to put in a paragrBefore you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be:Unified: All of the sentences in a single paragraph should be related to a single controlling idea (often expressed in the topic sentence of the paragraph).Clearly related to the thesis: The sentences should all refer to the central idea, or thesis, of the paper (Rosen and Behrens 119).Coherent: The sentences should be arranged in a logical manner and should follow a definite plan for development (Rosen and Behrens 119).Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).How do I organize a paragraph?There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:Narration: Tell a story. Go chronologically, from start to finish. (See an example.)Description: Provide specific details about what something looks, smells, tastes, sounds, or feels like. Organize spatially, in order of appearance, or by topic. (See an example.)Process: Explain how something works, step by step. Perhaps follow a sequence—first, second, third. (See an example.)Classification: Separate into groups or explain the various parts of a topic. (See an example.)Illustration: Give examples and explain how those examples prove your point. (See the detailed example in the next section of this handout.)5-step process to paragraph developmentLet’s walk through a 5-step process for building a paragraph. For each step there is an explanation and example. Our example paragraph will be about slave spirituals, the original songs that African Americans created during slavery. The model paragraph uses illustration (giving examples) to prove its point."
const bbbb = "Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.";
const catelogies=['history','politics','sport','culture','tech','health'];
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
  render() {
  		const { posts } = this.state;
      const { match, username, signOut } = this.props;
      console.log('main', posts);
  		return(
      <div>
        <div className="home">
          <Header username={username} signOut={signOut}/>
          <Route path='/news' exact render={()=><Redirect to="/news/1" />} />
          <Route path='/' exact render={()=><Redirect to="/news/1" />} />
          {
            posts &&<Route exact path="/news/:catelogy"  
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
const CatelogyPage = ({ posts, catelogy }) =>{
  return(
    <React.Fragment>
      <div className="top-page">
        <div className="big-post-container">
          <Post 
            post={posts[0]}
            classPost="big-post" 
          />
        </div>
        <div className="medium-post-container">
          <Post 
            post={posts[0]}
            classPost="medium-post" 
          />
        </div>
        <div className="small-post-container">
           <Post 
            post={posts[0]}
            classPost="small-post" 
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
  const { post, classPost, onClick } = props;
  return(
    <div className={classPost}>
      <img src={'https://picsum.photos/800/600/?random'} alt="wallpaper"/>
      <div className="post-intro">
        <h2 className="subtitle" onClick={onClick}>{post.title}</h2>
        {
          classPost !== "medium-post" && <p>{post.body}</p>
        }
        <span className="author">{'Author not setted'}</span>
        <span>{'Published Date not found'}</span>
      </div>
    </div>
  )
}
const SignInNavItem=({ username, signOut })=>{
  return(
  <div className="signin-nav-item">
    <img src="" />
      <p>{username}</p>
    <button className="signout-btn" onClick={signOut}>Sign Out</button>
  </div>
  )
}
const Header = ({ username, signOut }) => {
  return(
    <div className="header">
      <div className="header-bar">
        <Link to="/news"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8oLTMTGyOqrK4QGCAjKS+5ursYHybc3d6UlplGSlAdIyp3eXxmaW0TGiINFh8ADhnP0NGztLZpbG+Iio1hZGjm5ue+v8GBg4bW19hTV1v39/ghJi1vcXXu7u81OT8ACRZITFE/Q0gAAA7Gx8ien6IJUbamAAAEGElEQVR4nO2d63aiMBRGTQXRooK3egHUsc77v+JobctUCURXzkX67b9lRfb6zpEUE+h0AAAAAAAAAAAAAAAAAAAAAAAAAADaSdYr0nS/m6+lT4SK4yGJjTFhNC620udCwiAJzSeRaWOMw9SUhOlS+ny8UyTmB0lP+ow8U4zNFelU+py8Mnu5Fjyl2CbF0U2CLUtxVinYohSLihKtSTFbrmajb1ZT/ddOW4LVitkgCuK8JA6SoXLH6h60Ferba3BzTGQmMqfuRl2Ct4rbQ1xxTDjuS51+M1WXiRrFWVR5TH7IxAwaqC/RC//14jG1HBP8FZSoo6lEr1OcVdXomfBVZ4j2y4Qlxeoa/QhRZSc29+BVimtbkZ4MNU4OXHrwp+LEbvjSlda5xa0HvxXPBpPE+neFhu4leuHci09lOLpT8KTYfSrD+wXPvdh/HsN7S/RCNLddDtUZPiZojF1QmeHiQcE6VBk+0oNPZfhoiT6NIUmCmgwpelCVIU2JKjK0/IveHkOqElVjSPQlo8eQrAe1GFImqMKQsAd1GNImqMCQtAc1GFInKG5I3IPyhuQlKm04IpuqKTFkKFFZQ/ovGWFDjh4UNWRKUM6QpwcFDdkSlDJkuUxIGvKVqJAhq6CJBuyCjD34wZg7RG7Bz1+J+eAt0Qspp6KEIGuK/CV6gW3JrZQgW4oyJcqoKJcgk6KsIEMvSpbopyJtigvGybYN0kKVLtELhCnqECRMUb4HvyBK8XZzlhwkO9/m9mV1AqT+t2hO7et3JQiN74002zxs/lhOosKz4VzBhfAngec6vd2NJE009ypYs4peinDn1bCnL0Oz97qNRqNh6lPwFxhm79I+N8RDr4adTS5tdI3vbdLHvbTRFaH3TZdDZZf8xPuDNbKNKsU9wabSrNir6cWI6Hea4yYJSphn4nH5yUm8eiMRPLGd9L5YHlgV49Xy+5P7THuC/7AaSvwG/ApDGMIQhjBkNQzjKu6ZIuk2jILDsIqRSZwlNRvm0dw6x5psEsdRFBtGm9o5ZC90G0avYbxoGGbtVqhqDcNd4yx56XT3QK1hcGweqKh50IB6w3zjMFDf5U6lVsPI6V6Dy/9hWg3HTo+SWzmUqVbDyOn5VQOHe1wwpACGMCyBIQypgCEMS2AIQypgCMMSGMKQChjCsASGMKQChjAsgSEMqYAhDEtgCEMqYAjDEhjCkIr2G7qsgvFnyP4wsxMjhyV3/gz9b+RqpuvwEAl/hrHAmzrfHJ4i4c0wb1rESYLDjkRvhhJF2ulsTeN3jS/DF897fl2ZNK6292Q4dlnEScL60LAQ3Ythng7lXtGZdXf7wE7y7mQ4f68bY78Qfhtwf9qz4/bG6XXdED2dr1gFAAAAAAAAAAAAAAAAAAAAAAAAAACt5B+Kul5aRFXaTgAAAABJRU5ErkJggg==" alt="home logo"/></Link>
        <h1 className="logo">
          Blog
        </h1>
        <SignInNavItem username={username} signOut={signOut}/>
        {/*<Link to='/signin'> SIGN IN </Link>
        <Link to='/signup'> SIGN UP </Link>*/}
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
        <img src="https://picsum.photos/800/600/?random" alt=""/>
        <div className="post-content">
    			<h1 className="post-title">{post.title}</h1>
          <div className="post-info">
            <img src={`https://robohash.org/${post.title}`} alt=""/>
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
        <h2></h2>
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
          console.log('Reg',posts);
          return(
            posts && posts.map( post => 
                                <div className="bottom-left-container-item" key={post.id}>
                                  <img src={`https://robohash.org/${post.title}`} alt=""/>
                                  <Link  
                                    to={`/news/${catelogy}/${post.title}`}
                                  > 
                                      {post.title}<br/>
                                  </Link>
                                </div>
                                ))
}
export default Home;

{/*<div className="big-post">
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

 this is Small-Post
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




*/}