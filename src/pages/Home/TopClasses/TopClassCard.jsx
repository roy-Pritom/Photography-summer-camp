
const TopClassCard = ({item}) => {
    const {classImg,instructorName,className,instructorEmail,seats}=item;
    return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="relative">
      <img
        className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:scale-110"
        src={classImg}
        alt="Card"
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card Title</div>
      <p className="font-bold">Available Seats : {seats}</p>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        ipsum sapiente aspernatur.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 2
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Tag 3
      </span>
    </div>
  </div>
    );
};

export default TopClassCard;