"use strict";

var React = require('react');
var Input = require('../common/textInput');
var AuthorsDropDownList = require('../authors/authorsDropDownList');

var CourseForm = React.createClass({

    propTypes: {
        course: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onChangeAuthor: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {

        return (
            <form>
                <Input
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />

                <AuthorsDropDownList
                    name="author"
                    label="Author"
                    onChangeAuthor={this.props.onChangeAuthor} />

                <Input
                    name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />

                <Input
                    name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length} />
                

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;