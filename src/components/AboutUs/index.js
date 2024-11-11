import './index.css'

const AboutUS = () => (
  <li className="user-card-container">
    <div className="user-details-container">
      <h1 className="user-name">name </h1>
      <p className="user-designation"> role </p>
    </div>
    <button className="delete-button" type="button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
        alt="cross"
        className="delete-img"
      />
    </button>
  </li>
)

export default AboutUS
