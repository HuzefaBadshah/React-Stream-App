import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id);
    }
    renderActions = () => (
        <React.Fragment>
            <button className="ui button negative" onClick={this.onDelete}>Delete</button>
            <button className="ui button primary" onClick={() => history.push('/')}>Cancel</button>
        </React.Fragment>
    );

    render() {
        return <Modal
            title="Delete Stream"
            content="Are u sure u want to delete this stream?"
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
        />;
    }
}

const mapStateToProps = ({ streams }, ownProps) => {
    return { stream: streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);