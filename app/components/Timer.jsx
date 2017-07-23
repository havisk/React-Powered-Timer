let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');


let Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countUpStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countUpStatus !== prevState.countUpStatus) {
            switch (this.state.countUpStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            let newCount = this.state.count +1;
            this.setState({
                count: newCount
            });
        }, 1000)
    },
    handleStatusChange: function (newStatus) {
        this.setState({countUpStatus: newStatus});
    },
    render: function () {
        let {count, countUpStatus} = this.state;
        return(
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={countUpStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;