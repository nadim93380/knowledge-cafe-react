import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookMark,handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('fakeapi.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;

Blogs.propTypes = {
    handleBookMark: PropTypes.func
}