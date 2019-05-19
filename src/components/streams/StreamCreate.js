import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import {createStream} from '../../actions';
import { connect } from 'react-redux';

class StreamCreate extends Component {
    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }       
    }
    renderInput = ({input, label, meta}) => {
        // console.log(meta);
        const className = `field ${(meta.error && meta.touched) ? 'error' : ''}`;
        return (
            <div className={className}>
            <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        
        )}
    handleSubmit = (formValues) => {
        console.log('onSubmit: ', formValues);
        this.props.createStream(formValues);
    }
    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <Field name="title" component={ this.renderInput } label="Enter Title" />
                <Field  name="description" component={ this.renderInput } label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    let errors = {};
    
    if(!formValues.title) {
        errors.title = "Please enter a title";
    }

    if(!formValues.description) {
        errors.description = "Please enter a description";
    }

    return errors;
}

 const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate); 


export default connect(null, {createStream})(formWrapped);