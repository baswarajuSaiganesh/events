// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEventItem = () => {
    setActiveEventId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
