import styled from "styled-components";

export const ChatHeader = styled.div`
  display: flex;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  background-color: white;
`;
export const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    font-size: 16px;
  }

  > h4 .MuiSvgIcon-root {
    margin-left: 15px;
    font-size: 20px;
    opacity: 0.8;
  }
`;
export const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p .MuiSvgIcon-root {
    margin-right: 10px;
    opacity: 0.7;
  }
`;

export const ChatContainer = styled.div`
  flex: 0.6;
  flex-grow: 1;
  /* overflow-y: scroll; */
  margin-top: 60px;
`;

export const ChatMessages = styled.div`
  height: 72%;
  overflow-y: scroll;
`;

export const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

export const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 30px;
      width: 67vw;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }
    > button {
      display: none !important;
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
export const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 12px;
  }
`;

export const LandingChat = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
  width: 100%;
  > img {
    height: 100px;
  }

  > p > ul {
    list-style-type: none;
    > li {
      margin-bottom: 5px;
      font-weight: bold;
    }
  }
`;
