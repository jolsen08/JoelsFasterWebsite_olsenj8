import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

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

function Home() {
  return (
    <div className="div">
      <Outlet />
      <Card m-5 border-0 shadow style={styles.card}>
        <CardBody className="position-relative">
          <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-primary text-white">
            Welcome to Joel Hilton's Movie Collection
          </CardTitle>
          <CardSubtitle className="h6 mb-2 pt-2 font-weight-bold text-primary text-white">
            Here you will find Joel's personal movie collection and also a link
            to his baconsale podcast!
          </CardSubtitle>

          <div>
            <CardImg
              src="./joel.jpg"
              alt="Joel"
              className="position-relative img-fluid size"
              style={{ border: '3px solid white' }}
            ></CardImg>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
