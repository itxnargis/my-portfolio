import { Link } from "react-router-dom"

const Button = ({ children, href, to, variant = "primary", size = "md", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300"

  const variants = {
    primary: "bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white",
    ghost: "bg-transparent hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  }

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
