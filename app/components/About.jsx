var React = require ('react');


// var About = React.createClass({
//   render :function(){
//     return (
//        <h1>this is the About </h1>
//     );
//   } 
// });

var About = (props) => {
  return (
    <div>
       <h1 className="text-center">this is the About </h1>
       <p>welcome to About</p>
     </div>
    );
};

module.exports=About;