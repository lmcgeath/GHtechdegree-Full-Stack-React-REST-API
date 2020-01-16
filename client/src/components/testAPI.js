import React, { Component } from 'react';

class testAPI extends Component {
   componentDidMount(){
   fetch('http://localhost:5000/api')
   .then(res => console.log(res))
  
}
}
export default testAPI;
