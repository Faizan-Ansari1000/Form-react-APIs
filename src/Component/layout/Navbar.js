function Navbar() {
    return (
        <div>
            <div className="bg-black text-white">
                <div className="container mx-auto p-5 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="https://files.oaiusercontent.com/file-1yv5uT2NlosX9rEFrSnpGLUT?se=2024-10-10T17%3A42%3A39Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc747d512-dfd2-4bd7-bb24-126acf2a1669.webp&sig=1R7vbARGJ1qOyI6zUZqSJ/nt/MkcOwKUoKK2RQF%2BVPI%3D"
                            alt="logo"
                            className="h-10 w-10 rounded-full mr-3"
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="flex space-x-6">
                            <a href="" className="text-lg font-bold hover:text-yellow-300">Home</a>
                            <a href="" className="text-lg font-bold hover:text-yellow-300">Contact</a>
                            <a href="" className="text-lg font-bold hover:text-yellow-300">Service</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Navbar;