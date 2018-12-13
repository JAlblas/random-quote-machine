import React, {Component}  from "react";

class QuoteMachine extends Component {
  
  render() {
    return(
      <div id="quote-box">
        <p id="text">{this.props.quote}</p>
        <p id="author">{this.props.author}</p>
        <a id="tweet-quote" href={"http://twitter.com/intent/tweet?text=" + this.props.quote}>Tweet quote</a>
        <button id="new-quote" onClick={this.props.handler}>Random new quote</button>
      </div>
    );
  }

}

export default QuoteMachine;
