import PropTypes from 'prop-types';

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="w-1/3">
            <div className="text-center py-5 bg-blue-300 mb-3 text-white text-2xl font-bold rounded-lg">
                <h3>Total Time Spend : {readingTime}</h3>
            </div>
            <div className="text-center py-5 bg-slate-100 font-bold rounded-lg">
                <h3 className="font-bold underline text-center text-2xl">BookMarked : <span className='no-underline'>{bookMarks.length}</span></h3>
                <div className='px-3'>
                    {
                        bookMarks.map((item, idx) =>
                            <h3 key={idx} className='py-3 bg-slate-200 rounded-xl mb-2'>
                                {item.post_title}
                            </h3>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Bookmarks;

Bookmarks.propTypes = {
    bookMarks: PropTypes.array
}