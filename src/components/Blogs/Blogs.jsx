import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('fakeapi.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="w-2/3">
            <h3>Blogs : {blogs.length}</h3>
            <Blog blogs={blogs}></Blog>
            
        </div>
    );
};

export default Blogs;