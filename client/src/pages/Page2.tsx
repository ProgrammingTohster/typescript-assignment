
import { style } from "../components/Styles";
import { Imports } from "../components/Imports";
import { NavBar } from "../components/Navbar";
import { position_key, notification_max_key, notification_timeout } from "../storage";
import React, { useState, Dispatch } from "react";

export function Page2() {
    return (
        <div style={{ ...style.Page2, ...{ position: "relative" } }}>
            <Imports />
            <NavBar listOfLinks={["Notification task", "Main", "Settings"]} selected="Settings" />
            <Setting settingLabel="Notification count" change={notification_max_key} />
            <Setting settingLabel="Notification position" change={position_key} />
            <Setting settingLabel="Notification disappear time" change={notification_timeout} />
        </div>
    )
}

function Setting({ settingLabel, change }: { settingLabel: String, change: string }) {

    const [inputString, setInputString] = useState<string>(localStorage.getItem(change)!);
    return (<div style={style.Settings.container}>
        <p style={style.Settings.label}>{settingLabel}</p>
        <input onChange={(event) => onChangeInput(
            event,
            setInputString,
            change)}
            value={inputString} type="number" style={style.Settings.input}></input>
    </div>)
}

function onChangeInput(event: React.ChangeEvent<HTMLInputElement>, setState: Dispatch<React.SetStateAction<string>>, change: string) {
    let input = event.target.value
    setState(input)
    localStorage.setItem(change.toString(), input)
}