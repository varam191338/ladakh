import {Component} from 'react'

import {Navbar, Nav} from 'react-bootstrap'

// import AboutUs from './components/AboutUs'

import Services from './components/Services'

// import BookingPage from './components/BookingPage'

import './App.css'

const servicesList = [
  {
    title: 'High Speed Internet',
    className: 'fa-solid fa-wifi',
    uniqueId: 1,
    description:
      'not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
  {
    title: 'Healthy Meals',
    className: 'fa-solid fa-burger',
    uniqueId: 2,
    description:
      'A Healthy Breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.',
  },
  {
    title: 'Homely Stay',
    className: 'fa-solid fa-house',
    uniqueId: 3,
    description:
      'Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space.',
  },
  {
    title: 'Transportation',
    className: 'fa-solid fa-car',
    uniqueId: 4,
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
  {
    title: 'Food Delivery',
    className: 'fa-solid fa-person-biking',
    uniqueId: 5,
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
  {
    title: 'Tourism',
    className: 'fa-regular fa-map',
    uniqueId: 6,
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
  {
    title: 'Job',
    className: 'fa-solid fa-flag',
    uniqueId: 7,
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
  {
    title: 'Rental Service',
    className: 'fa-solid fa-car',
    uniqueId: 8,
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
  {
    title: 'Online Shop',
    className: 'fa-solid fa-cart-shopping',
    uniqueId: 9,
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.',
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Brisphere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#discover">Discover</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="banner-container">
          <div className="content-container">
            <h1>Work from ladakh</h1>
            <p>India is first true digital ecosystem</p>
            <i className="fa-brands fa-facebook face-book book-icon" />
            <i className="fa-brands fa-square-instagram icon" />
          </div>
          <div>
            <img
              src="https://www.ladakhmountaintours.com/images/homepages/img-nubra-valley.jpg"
              alt="mountain"
              className="mountain"
            />
          </div>
        </div>
        <div className="button-container">
          <button
            type="button"
            onClick={this.onViewBooking}
            className="book-button"
          >
            Book
          </button>
        </div>
        <div id="discover">
          <h1 className="discover">Discover</h1>
          <div className="discover-section">
            <div className="discover-card-container">
              <h1>Arjun Raghav</h1>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.
              </p>
            </div>
            <div>
              <img
                src="https://moxtain.s3.ap-south-1.amazonaws.com/blogs/PlacesToVisitInLeh-Ladakh/zanskar-valley.jpg"
                alt="river"
                className="river"
              />
            </div>
            <div className="discover-card-container">
              <h1>Arjun Raghav</h1>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.
              </p>
            </div>
          </div>
        </div>
        <div className="discover" id="services">
          <h1>Services</h1>
          <ul className="service-cards">
            {servicesList.map(eachItem => (
              <Services details={eachItem} key={eachItem.uniqueId} />
            ))}
          </ul>
        </div>
        <div id="about-us" className="about-us">
          <h1>Brisphere</h1>
          <p>Spituk, Ladakh,</p>
          <p>India, 194101</p>
          <p>+91 - 7764997033</p>
          <p>amit.jha6700@gmail.com</p>
          <button type="button" className="location-button">
            Location
          </button>
        </div>
      </div>
    )
  }
}

export default App
