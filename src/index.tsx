import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AddInvitee from "./views/AddInvitee";
import AllInvitees from "./views/AllInvitees";
import Home from "./views/Home";
import Story from './views/Story';
import People from './views/People';
import City from './views/City';
import RSVP from './views/RSVP';
import Details from './views/Details';
import './styles/globals.scss';

const App:React.FC = () => {
	return (
		<div id="App" className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={() => (
						<Home/>
					)}/>
					<Route exact path="/details" render={() => (
						<Details/>
					)}/>
					<Route exact path="/story" render={() => (
						<Story/>
					)}/>
					<Route exact path="/people" render={() =>  (
						<People/>
					)}/>
					<Route exact path="/city" render={() =>  (
						<City/>
					)}/>
					<Route exact path="/invitee" render={() => (
						<AddInvitee hasPlusOne={false}/>
					)}/>
					<Route exact path="/invitees" render={() => (
						<AddInvitee hasPlusOne={true}/>
					)}/>
					{
					<Route exact path="/rsvp" render={() => (
						<RSVP/>
					)}/>}
					<Route exact path="/allInvitees" render={() => (
						<AllInvitees/>
					)}/>
					<Route path="*" render={() => (
						<Redirect to="/"/>
					)}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));
