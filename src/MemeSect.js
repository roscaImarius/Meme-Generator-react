import React, { Component } from "react";

class MemeSect extends Component {
  constructor() {
    super();
    this.state = {
      topInput: "",
      bottomInput: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemes: [],
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const BASE_URL = "https://api.imgflip.com/get_memes";
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((resp) => {
        const memeArr = resp.data;
        this.setState({
          allMemes: memeArr,
        });
      });
  }

  handlerChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const randNum = Math.floor(Math.random()*this.state.allMemes.memes.length)
    const randMeme = this.state.allMemes.memes[randNum].url
    this.setState({
        randomImg: randMeme
    })
    
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topInput"
            value={this.state.topInput}
            placeholder="Top text"
            className="topInput"
            onChange={this.handlerChange}
          />
          <input
            type="text"
            name="bottomInput"
            value={this.state.bottomInput}
            placeholder="Bottom text"
            className="bottomInput"
            onChange={this.handlerChange}
          />
          <button className="genBtn" onClick={this.handleClick}>
            Generate
          </button>
        </form>
        <div className="meme">
          <h2 className='toph2'>{this.state.topInput}</h2>
          <img src={this.state.randomImg} alt="problem?" />
          <h2 className='bottomh2'>{this.state.bottomInput}</h2>
        </div>
      </div>
    );
  }
}

export default MemeSect;
