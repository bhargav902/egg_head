/*import React from 'react';
const HOC =(InnerComponent)=>class extends React.Component{
  constructor(){
    super();
    this.state={count:0}
  }
  update(){
    this.setState({count:this.state.count + 1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return(
      <InnerComponent 
      {...this.props}
      {...this.state}
      update={this.update.bind(this)}
      />
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <Button>button</Button>
         <hr />
         <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}
const Button  =HOC((props) => <button onClick={props.update}>{props.children}- {props.count}</button>)

class Label extends React.Component{
  componentWillMount(){
    console.log('label will mount')
  }
  render(){
    return(
    <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
    )
  }
}
const LabelHOC = HOC(Label)
export default App 
import React from 'react';

//import './App.css'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:'/*add your jsx here',
      output:'',
      err:''
    }
  }
  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output:window.Babel.transform(code,{ presets:['es2015','react']})
        .code,
        err:''

      })


    }catch(err){
      this.setState({err:err.message})

    }
  }
  render(){
    return(
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)} defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App
import React from 'react';
class App extends React.Component{
  render(){
    return(
      <Parent>
        <div className="childA"></div>
      </Parent>
    )
  }
}
class Parent extends React.Component{
  render(){
    let items= React.Children
    .forEach(this.props.children,child => console.log(child.props.className))
    //let items=React.Children.toArray(this.props.children)
    console.log(items)
    return null
  }
}

export default App*/
import React from  'react';
class  App extends React.Component{
  render(){
    return(
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}
class Buttons extends React.Component {
  constructor(){
    super();
    this.state={selected:'none'}
  }
  selectItem(selected){
    this.setState({selected})
  }
  render(){
    let fn = child => React.cloneElement(child,{onClick:this.selectItem.bind(this, child.props.value)

    })

    let items = React.Children.map(this.props.child,fn);
    return(
      <div>
        <h2>you have selected:{this.state.selected}</h2>
        {items}
      </div>
    )

  }
}
export default App