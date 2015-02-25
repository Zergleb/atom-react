

//////////////////////////////////////////////////////
var React = require('react');
var AtomReact = require("atom-react");
var _ = require("lodash");
var TodoEvents = require('../events/TodoEvents');
//////////////////////////////////////////////////////

var TodoTextInput = require('./TodoTextInput.react');



var Header = AtomReact.createPureClass("Header",{

    propTypes: {
        textInputCursor: AtomReact.PropTypes.isCursor
    },

    render: function() {
        return (
            <header id="header">
                <h1>todos</h1>
                <TodoTextInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    textInputCursor={this.props.textInputCursor}
                    onSave={this._onSave}
                />
            </header>
        );
    },

    _onSave: function(text) {
        this.transact(function() {
            this.props.textInputCursor.unset();
            this.publish(TodoEvents.create(text));
        }.bind(this));
    }

});

module.exports = Header;
