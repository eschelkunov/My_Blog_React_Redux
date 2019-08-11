import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import hero from '../images/site-hero.jpg';

var styles1 = {
  backgroundImage: hero,
  display: 'block',
  position: 'absolute',
  color: 'black',
};

export default function LoadingSpinner() {
  return (
    <div style={styles1}>
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only" style={{ color: 'black', textAlign: 'center' }}>
          Loading...
        </span>
      </Spinner>
    </div>
  );
}
