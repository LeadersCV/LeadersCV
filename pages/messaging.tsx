import { Avatar, IconButton } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";
import UserOrCompanyHeader from "../components/headers and footers/user_or_company_header";
import ChatRoom from "../components/messaging/chat_room";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../styles/messaging/messaging.module.css";
import ChatMessage from "../components/messaging/chat_message";
import MessagingSettings from "../components/messaging/messaging_settings";

export default function MessagingPage() {
  return (
    <Fragment>
      <Head>
        <title>Messaging</title>
      </Head>
      <UserOrCompanyHeader />
      <section className={styles.messagingSection}>
        <div className={styles.chatContainer}>
          <div className={styles.chatRooms}>
            <ChatRoom
              name="Mohammed Khalil"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="this is the last message between usdsdsdsd dasdsdsds "
            />
            <ChatRoom
              name="Hatim Mohammed"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="Abdullah"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="saas"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="saas"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="saas"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="saas"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="saas"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
            <ChatRoom
              name="saas"
              hasUnreadMessages
              lastMessageDate="46s"
              lastMessage="ds"
            />
          </div>
          <div className={styles.chat}>
            <div className={styles.selectedChatProfile}>
              <Avatar />
              <div className={styles.selectedChatName}>Mohammed</div>
              <IconButton aria-label="more" sx={{ marginLeft: "auto" }}>
                <MoreVertIcon color="primary" />
              </IconButton>
            </div>
            <div className={styles.chatMessages}>
              <ChatMessage
                message="helllo this is a long message"
                time="22 Jul"
                isSender
              />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="Just now" isSender />
              <ChatMessage message="asasasa" time="1 min" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
              <ChatMessage message="asasasa" time="22 Jul" isSender={false} />
            </div>
            <div className={styles.inputFieldAndSend}>
              <input
                placeholder="Type your message here"
                spellCheck={false}
                className={styles.messageTextField}
              />
              <IconButton aria-label="send">
                <SendIcon color="primary" />
              </IconButton>
            </div>
          </div>
          <MessagingSettings />
        </div>
      </section>
    </Fragment>
  );
}
