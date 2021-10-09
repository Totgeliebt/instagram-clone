import './CardItem.css'

const CardItem = ({card, onOpenCard}) => {

    const handleOpenImage = () => {
        onOpenCard("/publications")
    }
    return (
        <li className='photo-cards_item-list'>
            <img src={card.link}
                 alt="Изображение"
                 className='photo-cards_item-image'
                onClick={handleOpenImage}
            />
        </li>

    )
}

export default CardItem