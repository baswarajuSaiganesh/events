// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const getInitialOutPut = () => (
    <p>Click on an event, to see its registration details</p>
  )

  const getRegisteredOutPut = () => (
    <div>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for this event</h1>
    </div>
  )

  const getYetToRegisterOutPut = () => (
    <div>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance will bring so much to your relationship with dance.
        seeing dance live can often make you fall totally in love with this
        beautiful art form{' '}
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const getRegistrationsClosedOutPut = () => (
    <div>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations are closed"
      />
      <h1>Registrations are closed now!</h1>
      <p>stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const getActiveRegistrationEventDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return getYetToRegisterOutPut()

      case registrationStatus.registered:
        return getRegisteredOutPut()

      case registrationStatus.registrationsClosed:
        return getRegistrationsClosedOutPut()

      default:
        return getInitialOutPut()
    }
  }
  return <div>{getActiveRegistrationEventDetails()}</div>
}

export default ActiveEventRegistrationDetails
