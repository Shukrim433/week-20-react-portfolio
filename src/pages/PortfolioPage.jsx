//import { useState, useEffect } from 'react';
//import array of project objects from mock json database
//import data from "../data/projects.json"
// import project 'card' component that will be reused for all 6 projects
import Project from '../components/UI/Project';
//import ListItem from '../components/UI/ListItem';
import '../styles/Portfolio.css';

export default function PortfolioPage () {
    return(
        <div className="portfolio">
            <div className='project'>
                <Project/>
            </div>
        </div>
    )
}