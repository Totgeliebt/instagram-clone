import './PublicationsItem.css'
import {useSelector, useDispatch } from "react-redux";
import * as api from '../../../../utils/api'
import {updateLikeOfCard} from '../../../../features/currentUser/currentUserSlice'
const PublicationsItem = ({card}) => {

    const currentUser = useSelector((state) => state.currentUser.value)
    const dispatch = useDispatch()
    const handleLikesChange = async () => {
        console.log(currentUser.userId)
        await api.updateNumberOfLikes(card, currentUser.userId, card.likes + 1)
        dispatch(updateLikeOfCard(card))
    }

    return (
        <li className="publications_item-list">
            <div className="publications_wrapper-top">
                <div className="publications_wrapper-image">
                    <img className="publications_avatar-image"
                         src={currentUser.avatar}
                         alt="Изображение аватара"/>
                </div>

                <div className="publications_wrapper-text">
                    <p className="publications_id-profile">{currentUser._id}</p>
                    <a href="#1" className="publications_link-location">Москва</a>
                </div>

                <button className='publications_button publications_button-action-menu'/>
            </div>
            <img className="publications_item-image"
                 alt="Изображение"
                 src={card.link}
            />
            <div className="publications_wrapper-bottom">
                <div className="publications_wrapper-button">
                    <div className="publications_wrapper-left-button">
                        <button className="publications_button publications_button-like" onClick={handleLikesChange}/>
                        <button className="publications_button publications_button-comment"/>
                        <button className="publications_button publications_button-send"/>
                    </div>
                    <button className="publications_button publications_button-notes"/>
                </div>

                <p className="publications_likes">Нравится<span className="publications_likes-number">{card.likes}</span></p>
            </div>
        </li>
    )
}

export default PublicationsItem