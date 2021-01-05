import React, { Component } from 'react';
var someVar = 'Hello Shabix';
class ConstLetVar extends Component {
  constructor(props){
    super(props);
    let {someVar} = this.props
    if(someVar == 'Hello'){
        someVar = 'Hello there again!!'
    }
    console.log(someVar)
    var someVar2 = 'method2'
  }
  render () {
    console.log(someVar)
    // console.log(someVar2)

    return (
      <div >
        <h1>Hello There</h1>
      </div>
    )
  }
}

export default ConstLetVar
