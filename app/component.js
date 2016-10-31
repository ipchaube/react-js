/**
 * Created by ichaube on 10/31/2016.
 */

//React componetc

var HeaderBox = React.createClass({displayName: 'HeaderBox',
    render: function() {
        return (
            React.createElement('div', {className: "headerBox"},
                "Hello, world! I am a Hear box Commponente."
            )
        );
    }
});

var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
