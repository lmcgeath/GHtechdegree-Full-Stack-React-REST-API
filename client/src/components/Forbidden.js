import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="bounds">
        <h1>Forbidden</h1>
        <p>Nice try! You are not authorized to access this page.</p>
        <Link to="/courses" className="button button-secondary">Return to List</Link>
    </div> 
)