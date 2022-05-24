import PropTypes from 'prop-types';
import { useState } from 'react';

const AddMessage = ({user, addMessage}) => {
    const [message, setMessage] = useState("");

    const changeMessage = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        addMessage(message, user);
        setMessage("");
    }

    const isDisabled = () => {
        return message==="";
      };

    return (
        <div>
            <form className="input-group">
              <input
                type="text"
                value={message}
                className="form-control"
                placeholder="Enter your message..."
                onChange={changeMessage}
              />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={isDisabled()} onClick={sendMessage}>
                  SEND
                </button>
              </div>
            </form>
          </div>
    );
}

AddMessage.propTypes = {
    user: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}

export default AddMessage;