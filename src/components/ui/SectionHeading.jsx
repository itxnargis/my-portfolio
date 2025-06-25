const SectionHeading = ({ children }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <span className="hidden sm:block w-16 h-[1px] bg-amber-500 dark:bg-amber-400"></span>
      <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 text-transparent bg-clip-text">
        {children}
      </h2>
      <span className="hidden sm:block w-16 h-[1px] bg-amber-500 dark:bg-amber-400"></span>
    </div>
  )
}

export default SectionHeading
