"use strict";

var React = require('react');
var Input = require('../common/textInput');
var AuthorStore = require('../../stores/authorStore');

var AuthorsDropDownList = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChangeAuthor: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        }
    },

    render: function () {

        var createAuthorOption = function (author) {
            return (
                <option key={author.id} value={author.id}>
                    {author.firstName} {author.lastName}
                </option>
            );
        };

        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div>
                    <select className="form-control" name={this.props.name} onChange={this.props.onChangeAuthor}>
                        {this.state.authors.map(createAuthorOption, this)}
                    </select>
                </div>
            </div>
        );
    }
});

module.exports = AuthorsDropDownList;