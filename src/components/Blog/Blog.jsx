
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({ blog,handleBookMark }) => {
    const { cover_img, author_name, author_img, post_title, reading_time, hashtags, published_date } = blog;
    return (
        <div className='space-y-4 mb-4'>
            <img className='w-[845px] object-cover rounded-xl' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-4'>
                    <img className='w-[60px] h-[60px] object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h4>{author_name}</h4>
                        <p>Posted On : {published_date}</p>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-4'>
                    <p>{reading_time} mins read</p>
                    <button className='underline' onClick={()=>handleBookMark(blog)}><FaRegBookmark/></button>
                </div>
            </div>
            <h3 className='text-4xl font-bold text-left'>{post_title}</h3>
            <p className='flex justify-start gap-2'>
                {
                    hashtags.map((tag,idx) => <p key={idx}>#{tag}</p> )
                }
            </p>
            <button className='underline text-blue-800 font-bold'>Mark As Read</button>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;