import React, {Component} from 'react';

class List extends Component {
    name = 'cent';
    render(){
        const list = this.props.list.map( (item, index) => {
            return <li style={{backgroundColor : this.props.color}} className="list-item" key={index}>{item}</li>
        })
        
        return (
            <div>
                <ul>
                    {list}
                </ul>
                <button onClick={this.props.changeName}>{this.name}</button>
            </div> 
        );
    }
    changeName = () => {
        this.name = "cent2";
        console.log('changeName', this.name)
    }
}

export default List;