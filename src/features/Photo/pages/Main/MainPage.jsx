import Banner from 'components/Banner/Banner'
import images from 'constants/images'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'

export default function MainPage() {
    const match = useRouteMatch()
    const photos = useSelector(state => state.photos)
    console.log(photos)
    return (
        <div>
            <Banner title='Picture is yours feture' backGroundUrl={images.banner_1}></Banner>

            <Link to={`${match.url}/add`}>Add photo</Link>
       
        </div>
    )
}
