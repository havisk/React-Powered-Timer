let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () =>{
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.countUpStatus).toBe('started');
            expect(timer.state.count).toBe(1);
            done();
        }, 1000)
    });
    it('should pause timer on paused status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(() => {
            expect(timer.state.countUpStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        }, 1000)
    });
    it('should clear timer on stopped status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.countUpStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1000)
    });
});