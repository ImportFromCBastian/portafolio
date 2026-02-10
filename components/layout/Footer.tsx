const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Sebastian Hernandez. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
