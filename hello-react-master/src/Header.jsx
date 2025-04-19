// import React from 'react';
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       judul: "Ini dari State",
//       dataPotoRandom: this.props.list,
//     }
//   }

//   render() {
//     return (
//       <div>

//         <h2>{this.state.judul}</h2>
//         <p>Mengakses props dari App secara langsung : {this.props.dataPotoRandom}</p>
//       </div>
//     );
//   }
// }
// export default Header

// function Header () {
//   const[judul] = useState("ini dari state");
//   const[list] = useState("10 poto random");
//     return (
//       <div>
//         <h2>Poto Random</h2>
//         <p>{list}</p>
//         <p>{judul}</p>
//       </div>
//     );
// }
import React, { Component, useState } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      judul: "ini adalah  judul dari state",
      dataMakanan: this.props.list,
    }
  } 
  render(){
    return(
      <div>
        <h1>Componen dari class header</h1>
        <h2>{this.state.judul}</h2>
        <p>Mengakses props dari Apps secara langsung {this.props.list}</p>
        <p>Mengakses props dari state {this.state.list}</p>
      </div>
    )
  }
}


export default Header;