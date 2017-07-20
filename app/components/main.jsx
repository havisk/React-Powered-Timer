let React = require('react');
let Nav = require('Nav');



let Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <Nav/>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

module.exports = Main;