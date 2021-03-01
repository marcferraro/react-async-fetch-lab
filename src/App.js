// create your App component here
import React from 'react'

export default class App extends React.Component {

    render(){
        
        return(
            <div>Hello world</div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(astros => console.log(astros))
    }
}