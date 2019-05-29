import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
class StreamShow extends Component {
    componentDidMount() {
        console.log('stream: ', this.props.stream);
        this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        if (!this.props.stream) {
            return <h1>Loading...</h1>
        }
        const { title, description } = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = ({ streams }, ownProps) => {
    return { stream: streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);