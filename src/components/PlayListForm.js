import React, {Component} from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }


    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);


  }
    handleNameChange(event) {
      event.preventDefault()
      this.setState({userName: event.target.value})
    }

    handleArtistChange(event) {
      event.preventDefault()
      this.setState({songArtist: event.target.value})
    }

    handleTitleChange(event) {
      event.preventDefault()
      this.setState({songTitle: event.target.value})
    }

    handleNotesChange(event) {
      event.preventDefault()
      this.setState({songNotes: event.target.value})
    }


addToList = (event) => {
    event.preventDefault();
    this.setState({userName: event.target.value, songTitle: event.target.value,
      songArtist: event.target.value, songNotes: event.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    .then(res => {
      console.log(res, "works!");
    })

    .catch(err => {
      console.log(err, "error");
    });

    this.setState({
      userName: '',

      songNotes: '',

      songArtist: '',

      songTitle:''
  });
  }

  render() {
    return (
      <form className="cardblock-group" id="addForm" onSubmit={this.addToList}>
        <label>Username: </label>
        <input className="form-control" onChange={this.handleNameChange} name="userName" type="text" row = "1" placeholder='Enter Username' value={this.state.userName} />

        <label>Artist/Band: </label>
        <input className="form-control" onChange={this.handleArtistChange} name="songArtist" type="text" row = "1" placeholder='Enter name of Artist or Band' value={this.state.songArtist} />

        <label>Song Title: </label>
        <input className="form-control" onChange={this.handleTitleChange} name="songTitle" type="text" row = "1" placeholder='Enter Song Title' value={this.state.songTitle} />

        <label>Notes About Song: </label>
        <textarea className="form-control" onChange={this.handleNotesChange} name="songNote" type="text" rows="8" value={this.state.songNotes} />

        <button className="btn btn-primary" type="submit" id="formSubmitButton">Submit</button>
      </form>
    )
  }
}

export default PlayListForm;
