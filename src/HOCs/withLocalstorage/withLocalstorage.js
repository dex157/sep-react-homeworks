import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, taskList) => ComponentWrap => {
    class ForvardRef extends Component {
        saveData = data => {
            save(key, data);
            this.forceUpdate();
        };
        loadData = () => {
            return load(key) || taskList;
        };
        render() {
            const { forwardRef } = this.props;
            return (
                <ComponentWrap
                    ref={forwardRef}
                    savedData={this.loadData()}
                    saveData={this.saveData}
                />
            );
        }
    }
    return React.forwardRef((props, ref) => (
        <ForvardRef {...props} forwardedRef={ref} />
    ));
};

export default withLocalstorage;
