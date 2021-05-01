import React, { useState } from "react";

import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarInfo,
  SidebarUpperOptions,
} from "./Sidebar.styled";
import { useAuthState } from "react-firebase-hooks/auth";
function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  const [showSidebarOptions, setShowSidebarOptions] = useState(false);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h1>
            ASB <ExpandMoreIcon />
          </h1>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>{" "}
      <a
        href="https://www.linkedin.com/in/pratikmaheshpai/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <SidebarOption Icon={GitHubIcon} title="View Source Code" />
      </a>
      <a
        href="https://www.linkedin.com/in/pratikmaheshpai/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <SidebarOption Icon={LinkedInIcon} title="My LinkedIn" />
      </a>
      <SidebarUpperOptions
        style={{ display: showSidebarOptions ? "" : "none" }}
      >
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved Items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      </SidebarUpperOptions>
      <SidebarOption
        collapseButton
        showSidebarOptions={showSidebarOptions}
        setShowSidebarOptions={setShowSidebarOptions}
        Icon={ExpandLessIcon}
        title={showSidebarOptions ? "Show Less" : "Show More"}
      />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
      {channels?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
}

export default Sidebar;
