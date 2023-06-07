
const InstructorBox = ({instructor}) => {
    const {name,image,email}=instructor || {};

    return (
        <div className = "card card-side shadow-xl p-5 bg-gradient-to-r from-pink-600 to-purple-200 " >
        <figure><img src={image} className="md:w-72 md:h-48 rounded " alt="Movie"/></figure>
        <div className="divider divider-horizontal"></div>
        <div>
          <h2 className="text-lg md:text-3xl font-bold">{name}</h2>
          <div className="card-actions ">
          <p className="mt-4 mb-3 text-base md:text-lg font-semibold ">Email : {email}</p>
          <p className="">How to park your car at your garage? Lorem ipsum dolor ,.</p>
          </div>
        </div>
      </div >
    );
};

export default InstructorBox;