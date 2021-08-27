import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300, unavailable } from '../../Config/config'
import ContentModal from '../Modal/ContentModal'
import "../SingleContent/SingleContent.css"

function SingleContent({id,poster,date,title,media_type,vote_average}) {
    return (
        <ContentModal media_type={media_type} id={id} >
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary": "secondary"}/>
            <img className="poster" alt={title} src={poster ? `${img_300}/${poster}` : unavailable}/>
            <b className="title">{title}</b>
            <span className="subtitle">{media_type === "tv"?"Tv Series":"Movie" }
            <span className="subtitle">{date}</span></span>
        </ContentModal>
    )
}

export default SingleContent
