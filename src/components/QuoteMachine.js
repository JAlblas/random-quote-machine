import React, {Component}  from "react";

class QuoteMachine extends Component {

  newQuote() {
    console.log("HAHA");
  }

  render() {
    return(
      <div>
        <p id="text">{this.props.quote}</p>
        <p id="author">{this.props.author}</p>
        <a id="tweet-quote" href={"http://twitter.com/intent/tweet?text=" + this.props.quote}>Tweet quote</a>
        <button onClick={this.props.handler}>Random new quote</button>
      </div>
    );
  }

}

export default QuoteMachine;
