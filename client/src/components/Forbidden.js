import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="bounds">
        <h1>Forbidden</h1>
        <p>Sorry! You are not authorized to update this course.</p>
        <Link to="/courses" className="button button-secondary">Return to List</Link>
    </div> 
)