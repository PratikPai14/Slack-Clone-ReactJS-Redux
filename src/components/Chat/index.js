import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatMessages,
  ChatBottom,
  LandingChat,
} from "./Chat.styled";
import ChatInput from "./ChatInput";
import { db } from "../../firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from "./Message";
import Loader from "../Loader";
function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  if (loading) {
    return (
      <ChatContainer>
        <Loader />
      </ChatContainer>
    );
  }

  return (
    <ChatContainer>
      {roomDetails && roomMessages ? (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <strong>{`#${roomDetails?.data().name}`}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <p>
                <InfoOutlinedIcon />
                Details
              </p>
            </ChatHeaderRight>
          </ChatHeader>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      ) : (
        <>
          {" "}
          <ChatHeader>
            <ChatHeaderLeft>
              <h2>Welcome to Slack Clone</h2>
            </ChatHeaderLeft>{" "}
            <ChatHeaderRight>
              <a
                href="https://www.linkedin.com/in/pratikmaheshpai"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "var(--slack-color)" }}
              >
                {" "}
                <h2>Made by @Pratik Pai</h2>
              </a>
            </ChatHeaderRight>
          </ChatHeader>
          <ChatMessages>
            <LandingChat>
              <img
                src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                alt=""
              />
              <h2>
                Click on any Channel to view messages or Add a new channel from
                Sidebar
              </h2>

              <p>
                <ul>
                  <li>Click on View Source Code to see the source code</li>
                  <li>
                    Click on LinkedIn to visit Pratik Pai's LinkedIn Profile
                  </li>
                </ul>
              </p>
              <h3>Click on Your Avatar to Logout</h3>
            </LandingChat>
          </ChatMessages>
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;
