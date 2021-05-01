import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgray;
    outline: 1px solid slategray;
    width: 5px;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  margin-bottom: 15px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }

  :hover {
    background-color: var(--slack-color-dark);
    cursor: pointer;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h1 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

export const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  opacity: 0.7;

  :hover {
    background-color: var(--slack-color-dark);
  }

  > p {
    font-size: 16px;
  }
`;

export const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
  margin-left: 15px;
`;

export const SidebarUpperOptions = styled.div``;
