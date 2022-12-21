
import React, {Component} from "react";
import "./App.css"

class  App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			newQuote: '',
			author: ''
		}
	}

	componentDidMount() {
		this.newQuote();
			
	}

	newQuote = async () => {
		const response = await fetch("https://type.fit/api/quotes");
		const data = await response.json();
		let index = Math.floor(Math.random() * data.length);
		const {text, author} = data[index];
	
		this.setState({newQuote: text, author: author})
	}

	getRandomQuotes = (event) => {
		const quoteButton = document.getElementById("quote");
		quoteButton.addEventListener("click", this.newQuote());
		
		event.preventDefault();
	}

  render() {

  	
    return (
    <div className="container"> 
       <h1>Random Quotes Generator</h1>
       <div id="grid-box">
       	<div id="box-content">
       
     	<p id="text">{this.state.newQuote}</p>
     	<p>{this.state.author}</p>
       
       <button id="quote" name="btn-quote" onClick={this.getRandomQuotes}>New Quote</button>
    </div>
     </div>
    </div>
  );

  }
  
}

export default App;




