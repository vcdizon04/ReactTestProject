import React, {Component} from 'react';
import List from './List';

class Main extends Component {
    state = {
        name: 'Cent',
        color: 'green'
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    render(){
        console.log(this.props)
        return (
            <div>
                    Hello! {this.state.name}
                    <List color={this.state.color} changeName={this.changeName('test')} list={["list1", "list2", "list3"]} />
            </div>
        );
    }

    changeName = (t) => (e) => {
        console.log(t);
        this.setState({name : t});
        this.setState({color : 'red'});

    }
}

export default Main;