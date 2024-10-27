const Banner = () => {
    return (
        <div className="bg-[url('/banner.png')] min-h-[600px] max-w-[1320px] mx-auto rounded-[24px] text-white text-center content-center">
            <div className="max-w-[933px] mx-auto">
                <h1 className="mb-6">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-[40px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div>
                    <button className="btn-primary bg-[#0BE58A] text-black mr-6">Explore Now</button>
                    <button className="btn-primary border-[1px] border-white">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;