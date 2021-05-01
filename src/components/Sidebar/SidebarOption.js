import React from "react";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";
import { db } from "../../firebase";
import { SidebarOptionContainer, SidebarOptionChannel } from "./Sidebar.styled";
function SidebarOption({
  Icon,
  title,
  addChannelOption,
  collapseButton,
  id,
  ...props
}) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Enter Channel Name:");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionContainer
      onClick={() => {
        addChannelOption ? addChannel() : selectChannel();
        if (collapseButton) {
          props.showSidebarOptions
            ? props.setShowSidebarOptions(false)
            : props.setShowSidebarOptions(true);
        }
      }}
    >
      {Icon && (
        <Icon
          fontSize="small"
          style={{
            padding: 10,
            transform:
              props.showSidebarOptions === false ? "rotate(180deg)" : "",
          }}
        />
      )}
      {Icon ? (
        <p>{title}</p>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
