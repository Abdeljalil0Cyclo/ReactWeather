var React = require ('react');


// var Examples = React.createClass({
//   render :function(){
//     return (
//        <h1> this is the Examples </h1>
//     );
//   } 
// });


var Examples = (props) => {
  return (
    <div>
       <h3> this is the Examples ! </h3>
      <p>Welcome to github</p>
     </div>
    );
};
module.exports=Examples;