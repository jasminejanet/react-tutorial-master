var CommentBox=React.createClass({
	render : function(){
		return <div>This is Jasmine</div>;
	},
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
