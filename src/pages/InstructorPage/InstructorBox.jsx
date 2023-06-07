
const InstructorBox = ({instructor}) => {
    const {name,image,email}=instructor || {};

    return (
        <div className = "card card-side shadow-xl p-5 bg-gradient-to-r from-purple-600 to-pink-200 " >
        <figure><img src={image} className="md:w-72 md:h-48 rounded " alt="Movie"/></figure>
        <div className="divider divider-horizontal"></div>
        <div>
          <h2 className="text-lg md:text-3xl font-bold">{name}</h2>
          <div className="card-actions ">
          <p className="mt-4 mb-3 text-base md:text-lg font-semibold ">Email : {email}</p>
          <p className="">How to park your car at your garage? Lorem ipsum dolor ,.</p>
          {/* <Link to={`/details/${_id}`}>
                                <button onClick={handleDetails} className="btn btn-primary hover:bg-orange-700">View details</button>
                                </Link> */}
          </div>
          {/* <div className="flex items-center mt-4 ">
            <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-1 text-white'> {rating}</span>
            </div> */}
        </div>
      </div >
    );
};

export default InstructorBox;