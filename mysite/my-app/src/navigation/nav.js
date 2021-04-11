import React from 'react';
import './nav.css'

export default class Nav extends React.Component {
render() {    
    return (
        <nav className="navbar-default" role="navigation">
            {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" /> */}
            <div className="navbar-header">
                <a className="navbar-brand" href="/">
                    <span className="glyphicon glyphicon-dashboard"><img className="glyphicon" src="/dashboard.png" alt="Bootstrap"/></span> COVID-19</ a>
            </div>
            <div>
                <ul className="navbar-nav">
                    <li><a href="./confirmed.html" id="confirmed">Confirmed Map</a></li>
                    <li><a href="./Death.html" id="death">Death Map</a></li>
                    <li><a href="./Recovered.html" id="recovered">Recovered Map</a></li>
                    <li><a href="./vaccine.html" id="vaccine">Vaccination</a></li>
                    <li><a href="/" id="vaccine_comparision">Canada Vaccination Comparision</a></li>
                    <li><a href="/detail" id="vaccine_comparision">Details</a></li>
                </ul>
            </div>
        </nav>
    );}
}