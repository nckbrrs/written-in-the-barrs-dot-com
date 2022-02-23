import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AddInvitee from "./views/AddInvitee";
import AllInvitees from "./views/AllInvitees";
import { WindowSizes } from './types/types';
import { WindowSizeContext } from './assets/windowSizeContext';
import useWindowSize from './assets/useWindowSize';
import './styles/globals.scss';

const App:React.FC = () => {
	const windowSize: WindowSizes = useWindowSize();``

	return (
		<div id="App" className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/invitee" render={() => (
						<WindowSizeContext.Provider value={windowSize}>
							<AddInvitee hasPlusOne={false}/>
						</WindowSizeContext.Provider>
					)}/>
					<Route exact path="/invitees" render={() => (
						<WindowSizeContext.Provider value={windowSize}>
							<AddInvitee hasPlusOne={true}/>
						</WindowSizeContext.Provider>
					)}/>
					<Route exact path="/allInvitees" render={() => (
						<WindowSizeContext.Provider value={windowSize}>
							<AllInvitees/>
						</WindowSizeContext.Provider>
					)}/>
					<Route path="*" render={() => (
						<WindowSizeContext.Provider value={windowSize}>
							<Redirect to="/invitee"/>
						</WindowSizeContext.Provider>
					)}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));
