const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-md 
        overflow-hidden 
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
