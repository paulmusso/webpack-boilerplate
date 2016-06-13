import React, { Component } from 'react';
import Dummy from './components/Dummy';

export default class App extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
					<div className="navbar-header">
						<button type="button" 
								className="navbar-toggle collapsed" 
								data-toggle="collapse" 
								data-target="#navbar" 
								aria-expanded="false" 
								aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Webpack boilerplate</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
						</div>
					</div>
				</nav>

				<div className="container">
					<div className="starter-template">
						<h1>Webpack boilerplate forever !</h1>
						<div className="picture"></div>
						<p className="lead">
							It uses :
						</p>
						<ul>
							<li>Webpack (dev and prod config)</li>
							<li>React (hot reload enabled)</li>
							<li>Bootstrap, React and jQuery packaged</li>
							<li>Less for styles (hot reload enabled)</li>
							<li>Karma, Jasmine and PhantomJS for tests</li>
						</ul>
                        <Dummy/>
					</div>
				</div>
			</div>
		);
	}
}