import './Profile.css'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";


const Profile = () => {
    const currentUser = useSelector((state) => state.currentUser.value)
    const history = useHistory()
    const handleTransitionOnSubscribers = () => {
        history.push('/subscribers')
    }
    return (
        <section className='profile'>
            <div className='profile_wrapper'>
                <div className='profile_wrapper-image'>
                    <img className='profile_avatar' alt="Аватар пользователя"
                         src={currentUser.avatar}/>
                </div>
                <div className='profile_public-info'>
                    <ul className='profile_list'>
                        <li className='profile_item-list'>
                            <h2 className='profile_item-number'>16</h2>
                            <p className='profile_item-subtitle'>Публикации</p>
                        </li>
                        <li className='profile_item-list' onClick={handleTransitionOnSubscribers}>
                            <h2 className='profile_item-number'>107</h2>
                            <p className='profile_item-subtitle'>Подписчики</p>
                        </li>
                        <li className='profile_item-list'>
                            <h2 className='profile_item-number'>200</h2>
                            <p className='profile_item-subtitle'>Подписки</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='profile_info'>
                <h1 className='profile_name'>{currentUser.name}</h1>
                <p className='profile_signature'>Москва</p>
            </div>
            <button className='profile_button-edit'>Редактировать</button>
        </section>
    )
}

export default Profile