var mountNode = document.getElementById('r');

var Hello = React.createClass({
    render: function() {
        return <div>Hello React</div>;
    }
});

ReactDOM.render(<Hello/>, mountNode);