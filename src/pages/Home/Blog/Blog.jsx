

const Blog = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold uppercase'>blog</h2>
            <div className="mt-14">
                <div className="relative">
                    <img className="md:w-1/2" src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=996&ftt=st=1686466868~exp=1686467468~hmac=68c8ae0ad810e7d49aad9331ba274a1fd54de6d5d2a7e00983a6ac136f8e895c" alt="" />
                    <div className="md:absolute top-10 md:top-24 right-[600px] left-36 bg-white">
                        <div className="flex w-[32%] md:w-[40%] border m-2">
                            <img src="https://img.freepik.com/premium-photo/photographer-takes-pictures-field-with-chamomiles-during-sunrise_221513-2064.jpg?size=626&ext=jpg" alt="" />
                            <img src="https://img.freepik.com/free-photo/portrait-photographer-covering-her-face-with-camera-ph_1391-388.jpg?size=626&ext=jpg" alt="" />
                            <img src="" alt="" />
                            <img src="https://img.freepik.com/free-photo/backpacker-relax-mountain-with-camera-adn-sunset_1150-7755.jpg?size=626&ext=jpg" alt="" />
                        </div>
                        <div className="bg-white ps-5 pb-3">
                            <h2 className="text-lg font-bold">Through the Lens: Capturing Moments that Last Forever</h2>
                            <p>Discover the captivating world of photography, where fleeting moments are transformed into everlasting memories, showcasing the artistry.</p>
                        </div>
                    </div>
                    <div className="md:absolute top-10 right-0">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center px-2">P h o t o g r a p h y</h2>
                        <p className="md:w-[450px] px-4 pb-4 md:pt-5">Through the Lens celebrates not only the artistry of photographers but also the universal language of images. It reminds us that photography has the capacity to bridge cultures, transcend language barriers, and evoke emotions that are universally understood.</p>
                        <div className="md:ml-5 flex justify-center md:justify-start mb-6"><button className="btn btn-secondary btn-outline">view more</button></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;