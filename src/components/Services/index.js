import './index.css'

const Services = props => {
  const {details} = props
  const {title, description, className} = details

  return (
    <li className="card-container">
      <i className={className} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Services
