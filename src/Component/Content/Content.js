export default function Content() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                {/* Left Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="https://cdn.thewirecutter.com/wp-content/media/2023/11/meditation-apps-2048px-1481.jpg?auto=webp&quality=75&width=1024"
                        alt="Description"
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>

                {/* Right Text */}
                <div className="md:w-1/2 md:pl-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Amazing Features Await You</h2>
                    <p className="text-gray-600 mb-6">
                        Experience the best of technology with our innovative solutions.
                        Our platform is designed to make your life easier, faster, and more efficient.
                    </p>
                    <button className="text-start font-semibold  border rounded-md shadow-md bg-gray-50 p-3 hover:bg-black hover:text-white">Get Started</button>
                    
                </div>
            </div>
        </div>
    )
}