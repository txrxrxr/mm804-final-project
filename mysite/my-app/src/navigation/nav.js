import React from 'react';
import './nav.css'

export default class Nav extends React.Component {
render() {    
    return (
        <nav className="navbar-default" role="navigation">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">
                    <span className="glyphicon glyphicon-dashboard"><img className="glyphicon" src="/dashboard.png" alt="Bootstrap"/></span> COVID-19</ a>
            </div>
            <div>
                <ul className="navbar-nav">
                    <li><a href="./confirmed.html" id="confirmed">Confirmed</a></li>
                    <li><a href="./Death.html" id="death">Deaths</a></li>
                    <li><a href="./Recovered.html" id="recovered">Recovered</a></li>
                    <li><a href="./vaccine.html" id="vaccine">Vaccination</a></li>
                    <li><a href="/" id="vaccine_comparision">Canada Vaccination</a></li>
                    <li><a href="/detail" id="vaccine_comparision">Details</a></li>
                </ul>
            </div>
        </nav>
    );}
}