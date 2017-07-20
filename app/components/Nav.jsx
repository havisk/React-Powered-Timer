let React = require('react');
let {Link, IndexLink} = require('react-router');


let Nav = React.createClass({
   render: function () {
       return(
           <div className="top-bar">
               <div className="top-bar-left">
                   <ul className="menu">
                       <li className="menu-text"> React Powered Timer App</li>
                       <li>
                           <IndexLink to="/" activeClassName="active"> Timer </IndexLink>
                       </li>
                       <Link to="/countdown" activeClassName="active"> Countdown </Link>
                   </ul>
               </div>
               <div className="top-bar-right">
                   <ul className="menu">
                       <li className="menu-text">
                           Created by Kool Havis
                       </li>
                   </ul>
               </div>
           </div>
       )
   }
});


module.exports = Nav;