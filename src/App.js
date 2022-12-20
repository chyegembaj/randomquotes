
import React, {Component} from "react";
import "./App.css"

class  App extends Component {
	constructor() {
		super();

		this.state = {
			quotes: [],
			newQuote: '',
			quote: '',
			author: ''
		}

	}

	async componentDidMount() {
		
		const response = await fetch("https://type.fit/api/quotes");
		const data = await response.json();
		
		this.setState({
			quotes: data
			
		})
		
		//const quotetext = document.getElementById("text");
		//quotetext.innerText = this.state.quotes[0].text; 
		this.newQuote();

	}

	newQuote = () => {
		let quoteIndex = Math.floor(Math.random() * this.state.quotes.length)
		let randomQuote = this.state.quotes[quoteIndex];
		
		this.setState({newQuote: randomQuote.text, author: randomQuote.author})
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




