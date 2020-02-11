import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="bounds">
    <h1>Not Found</h1>
    <p>Oops! We couldn't find that page.</p>
    <Link to="/courses" className="button button-secondary">Return to List</Link>
  </div>
);