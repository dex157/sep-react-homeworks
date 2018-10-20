import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageName, storageData) => (WrapperComponent) => {
    class StorageManager extends Component {
        static displayName = 'ForwardRef';

        saveData = (data) => {
            const dataVal = data;
            save(storageName, dataVal);
            this.forceUpdate();
        }

        loadData = () => {
            return load(storageName) || storageData;
        }

        render() {
            const { forwaredRef, ...rest } = this.props;
            return (
                <WrapperComponent 
                    {...rest}
                    ref={forwaredRef}
                    saveData = {this.saveData}
                    savedData = {this.loadData()}
                />
            )
        }
    }

    return React.forwardRef((props, ref) => (
        <StorageManager {...props} forwaredRef={ref} />
      ));

};

export default withLocalstorage;