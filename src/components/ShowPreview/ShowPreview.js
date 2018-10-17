import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ShowPreview.module.css'
import cn from 'classnames'

const ShowPreview = ({ id, name, image , summary }) => {
    return (
        <div key={id} className={cn(style.container, 't-preview')}>
            <div className={style.containerTop}>
                <NavLink className={'t-link'} to={`/shows/${id}`} children={name} />
                { image && <img src={image} alt={name} /> }
            </div>
            <div dangerouslySetInnerHTML={{__html: summary}} />
        </div>
    )
}

export default ShowPreview