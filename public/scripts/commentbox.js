var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return <div>This is jasmine</div>;
  },
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);