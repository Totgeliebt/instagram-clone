import './SubscribersItem.css'
import {useHistory} from "react-router-dom";

const SubscribersItem =({id, userData}) => {

    const history = useHistory()

    const handleTransitionAnotherProfile = () => {
        history.push(`/${id}`)
    }
    return (
        <li className="subscribers_item-list" onClick={handleTransitionAnotherProfile}>
            <div className="subscribers_user-wrapper">
                <img className="subscribers_user-avatar" alt="Аватар пользователя"
                src={userData.avatar}/>
            </div>
            <p className="subscribers_user-name">{userData.name}</p>
        </li>
    )
}

export default SubscribersItem
