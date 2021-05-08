import React from 'react';
import CardList from './CardList'
import SeachBox from './SearchBox';

import { robots } from './robots'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
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
        return (
            <div className='tc'>

                <h1> RoboFriends</h1>
                <SeachBox searchChange={this.onSearchChange} />

                <CardList robots={filteredRobots} />

            </div>
        );
    }
}

export default App;