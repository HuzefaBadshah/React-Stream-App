import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
    console.log('Selected Strream: ', props.stream);
    return (
        <div>StreamEdit</div>
    );
}

const mapStateToProps = ({ streams }, ownProps) => {
    return { stream: streams[ownProps.match.params.id] };
}
export default connect(mapStateToProps)(StreamEdit);