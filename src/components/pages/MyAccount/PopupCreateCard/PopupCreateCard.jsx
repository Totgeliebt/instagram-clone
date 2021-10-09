import './PopupCreateCard.css'
import {useState} from "react";

const PopupCreateCard = ({isOpenPopupCreateCard, handleShowPopup, handleAddCard}) => {

    const [link, setLink] = useState('')
    const [textLocation, setTextLocation] = useState('')
    const [textDescription, setTextDescription] = useState('')

    const handleChangeUrlImage = event => setLink(event.target.value)
    const handleChangeTextLocation = event => setTextLocation(event.target.value)
    const handleChangeTextDescription = event => setTextDescription(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        handleAddCard({
            link, textLocation, textDescription
            })
    }

    return(
        <div className={`popup popup_type_create-card ${isOpenPopupCreateCard ? 'popup_visible' : ''}`}
        onClick={handleShowPopup}
        >
            <div className="popup_content popup_content_type_create-card "
            onClick={event => event.stopPropagation()}
            >
            <h1 className="popup_title">Добавить новое фото</h1>
            <form onSubmit={handleSubmit}
                className="popup_form popup_type_create-card">
                <input
                    value={link}
                    type="url"
                    name="url-image"
                    className="popup_input"
                    placeholder="Введите ссылку на фото"
                    onChange={handleChangeUrlImage}
                />
                <input
                    value={textLocation}
                    type="text"
                    name="text-location"
                    className="popup_input"
                    placeholder="Введите место"
                    onChange={handleChangeTextLocation}
                />
                <input
                    value={textDescription}
                    type="text"
                    name="text-description"
                    className="popup_input"
                    placeholder="Введите описание фото"
                    onChange={handleChangeTextDescription}
                />

                <button className="popup_button"

                >Добавить</button>
            </form>
               </div>
        </div>
    )
}

export default PopupCreateCard