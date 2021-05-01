import React from "react";
import { AppLoading, AppLoadingContents } from "./Loader.styled";
import Spinner from "react-spinkit";
function Loader() {
  return (
    <AppLoading>
      <AppLoadingContents>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </AppLoadingContents>
    </AppLoading>
  );
}

export default Loader;
