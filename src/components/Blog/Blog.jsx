import PropTypes from 'prop-types';

const Blog = ({blogs}) => {
    return (
        <div>
            <h3>Hlw From Blog : {blogs.length}</h3>
        </div>
    );
};

Blog.propTypes = {
    blogs: PropTypes.object.isRequired
}
export default Blog;