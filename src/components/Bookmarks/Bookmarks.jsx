

const Bookmarks = ({ bookMarks }) => {
    console.log(bookMarks)
    return (
        <div className="w-1/3">
            <div className="text-center py-5 bg-blue-300 mb-3 text-white text-2xl font-bold rounded-lg">
                <h3>Total Time Spend : </h3>
            </div>
            <div className="text-center py-5 bg-slate-100 font-bold rounded-lg">
                <h3 className="font-bold underline text-center text-2xl">BookMarked : </h3>

            </div>
        </div>
    );
};

export default Bookmarks;