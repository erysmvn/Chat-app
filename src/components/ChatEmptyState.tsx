import "./ChatEmptyState.css";

function ChatEmptyState() {
  return (
    <div className="empty-state-container">
      <img src="chat-empty-state.png" alt="" />
      <p>
        Start a chat or select one from the list on the left to read its
        the detail
      </p>
    </div>
  );
}

export default ChatEmptyState;
