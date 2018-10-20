import React, { PureComponent } from 'react';
import css from './ShowPage.module.css';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';
import { getShow, getIsLoading, getError } from '../../selectors/show';

class ShowPage extends PureComponent {
    componentDidMount() {
        const {
            showRequest,
            match: { params }
        } = this.props;
        showRequest(params.id);
    }

    render() {
        const { shows, isLoading, error } = this.props;
        const { image, name, summary, actors } = shows;

        if (isLoading) return <p>Данные загружаются...</p>;
        if (error) return <p>Произошла сетевая ошибка</p>;

        return (
            <div>
                <p>{name}</p>
                {image && <img src={image} alt={name} />}
                <div dangerouslySetInnerHTML={{ __html: summary }} />

                <div className={css.cast}>
                    {actors &&
                        actors.map(({ id, name, image }) => {
                            return (
                                <div className="t-person" key={id}>
                                    <p>{name}</p>
                                    {image && (
                                        <img src={image.medium} alt={name} />
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shows: getShow(state),
    isLoading: getIsLoading(state),
    error: getError(state)
});
const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);
