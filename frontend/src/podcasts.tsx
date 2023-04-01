import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const styles = {
  card: {
    backgroundColor: '#0e416c',
    borderRadius: 55,
    padding: '3rem',
    maxWidth: '900px', // Change the maxWidth to your desired value
    margin: '0 auto', // This centers the card horizontally
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 55,
    width: '50vw',
    height: '30vh',
  },
};

function Podcasts() {
  return (
    <div className="div">
      <Outlet />
      <Card m-5 border-0 shadow style={styles.card}>
        <CardBody className="position-relative">
          <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-primary text-white">
            Podcasts
          </CardTitle>

          <div>
            <CardImg
              src="./baconsale3.webp"
              alt="Mic"
              className="position-relative img-fluid size"
            ></CardImg>
          </div>
          <br></br>
          <div>
            <button
              onClick={() => (window.location.href = 'https://baconsale.com')}
              className="btn btn-primary text-dark"
              style={{ backgroundColor: 'white', borderColor: '#0e416c' }}
            >
              Click Here
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Podcasts;
