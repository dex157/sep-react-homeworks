import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getData, getIsloading, getError } from '../../reducers/shows'
import {  getShowRequest } from '../../actions'
import style from './ShowPage.module.css'

class ShowPage extends PureComponent {
    componentDidMount() {
        const { 
            getShowRequest, 
            match: { params } 
        } = this.props;
        
        getShowRequest(params.id)
    }

    renderLoading = () => <p>Идет загрузка ...</p>

    renderShow = () => {
        const { 
            data: { name, image, summary, _embedded }
          } = this.props

          return (
            <>
                <p>{name}</p>
                { image && <img src={image.medium} alt={name} /> }
                <div dangerouslySetInnerHTML={{__html: summary}} />
                <div className={style.cast}>
                    {
                        _embedded && _embedded.cast.map(({ person: { id, name, image } }) => {
                            return (
                                <div key={id} className={'t-person'}>
                                    <p>{name}</p>
                                    { image && <img src={image.medium} alt={name} /> }
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    render() {
        const { isLoading } = this.props

        return (
            <>
                { isLoading ? this.renderShow() : this.renderLoading() }
            </>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: getIsloading(state),
    data: getData(state),
    error: getError(state)
});
const mapDispatchToProps = { getShowRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)