const Header = () => {
  return (
    <div className="flex bg-yellow-400 border-b border-black mt-10">
      <div className="flex justify-between items-center bg-yellow-400  py-10 lg:py-0 max-w-7xl mx-auto">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
          <button className="bg-black text-white py-2 px-8 text-xl rounded-full">
            Start reading
          </button>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium logo"
        />
      </div>
    </div>
  )
}

export default Header
