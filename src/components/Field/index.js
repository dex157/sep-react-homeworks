import React, {Component} from 'react'
import '../Form/Form.css'

class Field extends Component{

    state = {
        textValue : ""
    }

    changeInputMessage = (event) => {
        this.setState({textValue : event.target.value})
    }

    render(){
        const {data} = this.props
        return(
            <p className="field" >
                <label className="field__label" htmlFor={data.name}>
                    <span className="field-label">{data.labelText}</span>
                </label>
                <input 
                    className={data.inputClass}
                    type={data.type}
                    name={data.name}
                    value={this.state.textValue}
                    onChange={this.changeInputMessage}
                />
                <span className={data.errorClass}>{data.errorText}</span>
            </p>);
    }
}

export default Field