import React from 'react'
import  Card  from './Card'
import './Panel.css';

export const Dashboard = () => {
    return (
        <div>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>

                    
            </li>
            <div class ='row'>
                    <Card></Card>

                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                    </div>
                    </div>
            
    
    )
}
export default Dashboard