var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass({
//   render : function() {
//     return (
//        <div>
//           <Nav/>
//           <h1>this is the Main component</h1>
//           {this.props.children}
//        </div>
//     );
//   } 
// });

var Main =(props) => {
  return (
       <div>
          <Nav/>
          <h1>this is the Main component</h1>
          {props.children}
       </div>
    );
}

module.exports=Main;