import React from 'react';
import CardList from './CardList'
import SeachBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';

import { robots } from './robots'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            seachfield: '',
        }
    }

    onSearchChange = (event) => {

        this.setState({seachfield: event.target.value})
        console.log(event);

    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.seachfield.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else{
        return (
            <div className='tc'>

                <h1> RoboFriends</h1>
                <SeachBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>

            </div>
        );
        }
    }

    componentDidMount() {
        console.log("Check");
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then( users => {
            this.setState({robots: users});
        });
        //this.setState({robots: robots});
    }
}

export default App;