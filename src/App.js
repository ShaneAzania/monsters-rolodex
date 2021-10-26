import React, { Component } from 'react'; //Gives accesses to classes. Classes give access to State
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
	//extend Component for Classes and other React tools

	constructor(props) {
		super(props);

		this.state = {
			monsters: [],
			searchField: '',
		};

		//this.handleChange = this.handleChange.bind(this); or arrow function method
	}

	componentDidMount() {
		//this retreaves and turns the API data into JSON format using promises
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (event) => {
		this.setState({ searchField: event.target.value } /*, () => console.log(this.state.searchField)*/);

		/* //Using an arrow function instead of an object
		this.setState(
			(prevState, prevProps) => ({ searchField: event.target.value }),
			() => console.log(this.state.searchField)
		);*/
	};

	render() {
		//render is needed for react classes to work

		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBar placeholder='Search by name' handleChange={this.handleChange} />
				<Cardlist className='.cardlist' monsters={filteredMonsters}></Cardlist>
			</div>
		);
	}
}

export default App;
