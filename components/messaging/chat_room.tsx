import { Avatar } from "@mui/material";
import styles from "./chat_room.module.css";

interface Props {
  name: string;
  lastMessage: string;
  lastMessageDate: string;
  hasUnreadMessages: boolean;
}

export default function ChatRoom({
  name,
  lastMessage,
  lastMessageDate,
  hasUnreadMessages,
}: Props) {
  return (
    <div className={styles.chatRoomContainer}>
      <Avatar sx={{ width: "56px", height: "56px" }} />
      <div className={styles.nameAndLastMessage}>
        <span>{name}</span>
        <span>{lastMessage}</span>
      </div>
      <span>{lastMessageDate}</span>
    </div>
  );
}
