var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm
      </div>
    );
  }
});
ReactDOM.render(
  React.createElement(CommentForm, null),
  document.getElementById('content')
);