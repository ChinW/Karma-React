import React from "react"

export default class App extends React.Component{
	constructor(props){
		super(props)
	}

	getNumber(){
		return 3
	}

	render(){
		return (
			<div>
				<h1>Hi, Karma</h1>
				<h1>Hi, React</h1>
			</div>
		)
	}
} 