const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm sm:text-center">
        Coded by{' '}
        <a
          className="text-purple-500 font-bold"
          href="https://github.com/FabKaiz"
          target="_blank"
        >
          FabKaiz
        </a>{' '}
        - All posts and authors are fake or copied from{' '}
        <a
          className="text-purple-500 font-bold"
          href="https://medium.com/"
          target="_blank"
        >
          Medium
        </a>{' '}
        official website
      </span>
    </footer>
  )
}

export default Footer
