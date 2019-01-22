import React from 'react';

// The <Mouse> component encapsulates the behavior we need...
const Cat = (props) =>{
  const mouse = props.mouse;
  return(
    <div>
      <span style={{height: 100, width: 100,position:"absolute",left: mouse.x, top: mouse.y}}>🐈</span>
    </div>
  )
}
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1 style={{height: "100vh", width: "100vt"}}>This Test</h1>
        {/* ...but how do we render something other than a <p>? */}
        {
          this.props.render(this.state)
        }
      </div>
    );
  }
}
class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={(mouse)=> <Cat mouse={mouse}/>}/>
      </div>
    );
  }
}
const MyContext =  React.createContext(
  100
);
class MyComp extends React.Component{
  static contextType = MyContext;
  render(){
    console.log(MyComp.context);
    let value = this.context;
    return(
      <h1>This is Shit hole {value}</h1>
    )
  }
}
const MyInterMediate = (props) => (
  <MyComp />
)
export const withMouse=(MyComp) =>{
  return(
    <Mouse render={mouse=> <MyComp mouse={mouse}/>}/>
  )
}
class WithHover extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isHover: false
    };
  }
  handleHover = isHover => () =>{
    this.setState({
      isHover
    })
  }
  render(){
    const { component, render } = this.props;
    return(
      <div onMouseOver={this.handleHover(true)} onMouseOut={this.handleHover(false)}>
        { render(this.state.isHover) }
      </div>
    )
  }
}
const Test =() =>{
  const user="dinh"
  const avatarSize=10;
  const Temp = MyHoc(MyComponent);
  return(
  <div>

    {console.log(MyComponent.data)}
    {/*<h1>Move 🐱 Around</h1>
    {withMouse(Cat)}*/}
    {/*<WithHover render={(isHover)=>  isHover ? <h1>Hover</h1> : <h1>Not Hover</h1> }/>*/}
    <Temp>
      Ngu
    </Temp>
  </div>
  )
}
const enhanceComponent = (MyComp) => {
  return <MyComp />;
}
const MyComponent = (props) =>{
  return(
    <h1>{props.children}-{props.addData}</h1>
  )
}
const MyHoc = (MyComp) =>{
  return class extends React.Component{
    constructor(props){
      super(props);
      this.state={
        data: "dinh"
      }
    }
    handleShit=(data)=>{
      console.log(this.state.data);
    }
    render(){
      return <MyComp addData={this.state.data} {...this.props} />
    }
  }
}
export default Test;
