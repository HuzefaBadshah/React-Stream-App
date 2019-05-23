import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from 'react-router-dom';
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  }

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary" >
            Create Stream
                </Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.streams.map(item => {
      return (
        <div className="item" key={item.id}>
          {this.renderAdmin(item)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {item.title}
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    // console.log('render streams: ', this.props.streams);
    return (
      <div>
        <h2>Badshah's Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateTOProps = ({ streams, auth }) => {
  // console.log('mapStateTOProps streams: ', streams);
  return { streams: Object.values(streams), currentUserId: auth.userId, isSignedIn: auth.isSignedIn };
};
export default connect(
  mapStateTOProps,
  { fetchStreams }
)(StreamList);
