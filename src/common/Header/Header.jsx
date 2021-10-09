import './Header.css';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = ({handleShowPopup,handleShowMenu}) => {
    const history = useHistory()

    const myUserId = useSelector((state) => state.loggedInUser.value)
    const currentUser = useSelector((state) => state.currentUser.value)

    const handleBackOnPage = () => {
        history.goBack()
    }

    return (
        <header className='header'>
            {
                history.location.pathname ===`/${myUserId}` &&
                    <>
                        <div className='header_content'>
                            <p className='header_id-profile'>{currentUser._id}</p>
                            <div className='header_button-wrapper'>
                                <button className='header_button header_button-add-card'
                                onClick={handleShowPopup}/>
                                <button className='header_button header_button-menu'
                                onClick={handleShowMenu}/>
                            </div>
                        </div>
                    </>
            }

            {
                history.location.pathname !== `/${myUserId}` &&
                <div className="header_publications-wrapper">
                    {history.location.pathname === currentUser.userId &&
                    `/${myUserId}` !== currentUser.userId &&
                    <>
                    <p className="header_subscribers-id-profile">{currentUser._id}</p>
                        <button className="header_subscribers-button"
                                onClick={handleBackOnPage}
                        />
                    </>
                    }

                    {
                        history.location.pathname ==='/subscribers' &&
                        <>
                                <p className="header_subscribers-title">Подписчики</p>
                                <button className="header_subscribers-button"
                                        onClick={handleBackOnPage}
                                />
                        </>
                    }
                    {
                        history.location.pathname ==='/publications' &&
                        <>
                                <p className='header_publications-id-profile'>{currentUser._id}</p>
                                <h1 className="header_publications-title">Публикации</h1>
                                <button className="header_publications-button"
                                        onClick={handleBackOnPage}
                                />
                        </>
                    }
                </div>
            }
        </header>
    );
}

export default Header;