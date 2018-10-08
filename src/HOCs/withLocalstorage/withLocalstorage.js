import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultValue) => WrappedComponent => {
    class ForwaredRef extends Component {
        savedData = () => {
            return load(key) || defaultValue;
        }

        saveData = data => {
            save(key, data);
            this.forceUpdate();
        }

        render() {
            const { savedData, saveData } = this;
            const { forwaredRef, ...rest } = this.props;

            return (
                <WrappedComponent 
                    savedData={savedData()}
                    saveData={saveData}
                    ref={forwaredRef}
                    {...rest}
                />
            )
        };
    }

    return React.forwardRef((props, ref) => <ForwaredRef {...props} forwaredRef={ref} />)
} 

export default withLocalstorage;
