import styles from "./chat_message.module.css";

interface Message {
  message: string;
  time: string;
  isSender: boolean;
}

export default function ChatMessage({ message, time, isSender }: Message) {
  return (
    <div className={styles.messageContainer}>
      <div className={isSender ? styles.senderMessage : styles.receiverMessage}>
        {message}
      </div>
      <div className={isSender ? styles.senderTime : styles.receiverTime}>
        {time}
      </div>
    </div>
  );
}
