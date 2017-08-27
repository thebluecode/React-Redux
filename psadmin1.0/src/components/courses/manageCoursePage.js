"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var CoursePage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?'))
                transition.abort();
        }
    },

    getInitialState: function () {
        return {
            course: {
                id: '',
                title: '',
                watchHref: '',
                author: {},
                length: '',
                category: ''
            },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
        var courseId = this.props.params.id; // from the path 'course/:id'

        if (courseId) {
            this.setState({ course: CourseStore.getCourseById(courseId) });
        }
    },

    setCourseState: function (event) {
        this.setState({ dirty: true });
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({ course: this.state.course });
    },

    setCourseAuthorState: function (event) {
        this.setState({ dirty: true });
        var authorId = event.target.value;
        this.state.course.author = AuthorStore.getAuthorById(authorId);
        return this.setState({ course: this.state.course });
    },

    courseFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Title name must be at least 3 characters.';
            formIsValid = false;
        }
        
        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.course.length.length === 0) {
            this.state.errors.length = 'Length name must be provided.';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });

        return formIsValid;
    },

    saveCourse: function (event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id)
            CourseActions.updateCourse(this.state.course);
        else
            CourseActions.createCourse(this.state.course);

        this.setState({ dirty: false });
        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    render: function () {

        return (
            <div>
                <h1>Manage Courses</h1>
                <CourseForm
                    course={this.state.course}
                    onChange={this.setCourseState}
                    onChangeAuthor={this.setCourseAuthorState}
                    onSave={this.saveCourse}
                    errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = CoursePage;