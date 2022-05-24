import PropTypes from "prop-types";
import AddMessage from "./AddMessage";
import MessageHistory from "./MessageHistory";

const ChatWindow = ({user, messages, addMessage}) => {


    return (<div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>

          <MessageHistory user={user} messages={messages} />
          <AddMessage user={user} addMessage={addMessage}/>

        </div>)
    }

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired

}

export default ChatWindow;