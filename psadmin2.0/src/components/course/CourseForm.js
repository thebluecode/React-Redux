import React, { PropTypes } from 'react';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, error}) => {
    return (
        <form>

            <TextInput
                name="title"
                Label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />

            <SelectInput
                name="authorId"
                Label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId} />

            <TextInput
                name="category"
                Label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />

            <TextInput
                name="length"
                Label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} />

            <input
                type="text"            
                disabled={loading}
                value={loading ? 'Saving...': 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;