import React from 'react';
import uuidv1 from 'uuid/v1';
import './SlideShowGallery.css';
class SlideShowGallery extends React.Component{
  constructor(){
    super();
    this.state={
      curSlide : 0,
    }
  }
  nextSlide=(i)=>{
    let t = this.state.curSlide + i;
    if(t <= this.props.posts.length -  3 && t >= 0)
    {
      this.setState({curSlide: t});
    }
  }
  render(){
    return(
      <div className="gallery">
        <div className="slide-container">
        {
          this.props.posts && this.props.posts.map((post, index)=>{
            let className = "slides";
            if(index >= this.state.curSlide && index < this.state.curSlide + 3){
              className += " visible";
            }
            return (<div className={className}>
              <span className="numbertext">{index+1} / {this.props.posts.length}</span>
              <img className="slide-image" src={post.imgUrl} alt="wallpaper"/>
              <h2 className="slide-subtitle">{post.title}</h2>
            </div>)
          })
        }

        </div>
        <div class="prev" onClick={()=>this.nextSlide(-1)}>&#10094;</div>
        <div class="next" onClick={()=>this.nextSlide(1)}>&#10095;</div>
      </div>
    );
  }
}
export default SlideShowGallery;
