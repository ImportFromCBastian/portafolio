const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Sebastian's Portafolio
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
