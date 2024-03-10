import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h2>Management Pages</h2>
            <ul className="management-list">
                <li>
                    <Link to="/manageCategory">Manage Category</Link>
                </li>
                <li>
                    <Link to="/manageMenuitem">Manage Menu Items</Link>
                </li>
                <li>
                    <Link to="/ManageExtraPrice">Manage Extra Prices</Link>
                </li>
                <li>
                    <Link to="/manageUsers">Manage Users</Link>
                </li>
            </ul>
        </div>
    );
}

export default Dashboard;
