import React, { Component } from 'react';
import axios from 'axios';
import { update, generateData, isFormValid } from '../utils/Form/formActions';
import FormField from '../utils/Form/formfield';

class ResetUser extends Component {
    state = {
        formError: false,
        formSuccess:false,
        formdata:{
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'reset_email');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'reset_email');
        let formIsValid = isFormValid(this.state.formdata,'reset_email')

        if(formIsValid){
            console.log(dataToSubmit)
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() { 
        console.log("reset user ")
        return ( 
            <div className="container">
                <h1>
                Reset User
                </h1>
                <form onSubmit={(event)=>  this.submitForm(event)}>
                    <FormField
                        id={'name'}
                        formdata={this.state.formdata.name}
                        change={(element)=> this.updateForm(element)}
                    />
                     { this.state.formError ?
                                        <div className="error_label">
                                            Please check your data
                                        </div>
                                    :null}
                                    <button onClick={(event)=> this.submitForm(event)}>
                                        Create an account
                                    </button>
                </form>
            </div>
         );
    }
}

 
export default ResetUser;