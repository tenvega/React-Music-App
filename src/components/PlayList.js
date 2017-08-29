import React, {Component} from 'react';
import PlayListItem from './PlayListItem.js'

export default  class PlayList extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
        this.state = {songs: []};
      }

      fetchData(event) {
       event.preventDefault();
       fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')

       .then(results => {
         return results.json();
       })

       .then(data => {
         this.setState({songs: data});
       })
      }


      componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')

        .then(results => {
          return results.json();
        })

        .then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        });
      }


      render() {

        let songs = this.state.songs.map((song) => {
          return (
            <PlayListItem key={song._id} song={song} />
          )
        });

        return (
          <div className = "card listItem bg-info">
            <button id="updateButton" onClick={this.fetchData} className="btn btn-md card-block">Update</button>
            <div className="songList">
              {songs}
            </div>
          </div>
        )
      }
    }
