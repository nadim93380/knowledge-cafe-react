import profile from'../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-centers py-8'>
            <h1 className='text-center text-4xl font-bold'>Knowledge Cafe React</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;