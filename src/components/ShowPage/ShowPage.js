import React, { Component } from 'react';
import styles from './ShowPage.module.css';
import { connect } from 'react-redux';
import { 
    getIsLoading, 
    getError, 
    getShowElements, 
    showRequest 
} from '../../modules/show';

class ShowPage extends Component {
    componentDidMount() {
        const { 
            match: { params: { id } }, 
            showRequest 
        } = this.props;

        showRequest(id);
    }

    renderPersons = (cast) => {
        return (
            cast !== undefined 
            ? cast.map(element => (
                <div className='t-person' key={element.person.id}>
                    <p>{element.person.name}</p>
                    { element.person.image
                        ? <img 
                            src={element.person.image.medium} 
                            alt={element.person.name} />
                        : null
                    }
                </div>
            ))                
            : null 
        );
    }

    render() {
        const { elements, error, isLoading } = this.props;

        if (elements.length === 0 && isLoading) {
            return <p>Загрузка...</p>
        } else if (error) {
            return <p>Произошла ошибка: {error}</p>
        } else {
            const {name, image, summary, cast} = elements;

            return (
                <div>
                    <p> {name} </p>
                    { image
                        ? <img src={image.medium} alt={name} />
                        : null 
                    }
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                    <div className={styles.cast}>
                        {this.renderPersons(cast)}
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    elements: getShowElements(state),
    isLoading: getIsLoading(state),
    error: getError(state),
});

const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);