import React from "react";
import "../styles/settings/settings.scss";
import PageTitle from "../components/common/page-title";
import SettingsTeams from "../components/settings/settings-teams";

export default function Settings() {
  return (
    <div className="settings__container">
      <PageTitle styles={{ alignSelf: "flex-start" }}>Settings</PageTitle>
      <SettingsTeams />
    </div>
  );
}
