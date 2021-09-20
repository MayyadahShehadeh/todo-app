import React from "react";


export const SettingsContext = React.createContext();

export default function settingProvider(props) {
    const state = {
        completedItem: false,
        numberOfItems: 4,
        sortField: 'difficulty'
    }





return (
    <>
    <SettingsContext.Provider value={state}>
        {props.children}
    </SettingsContext.Provider>
    </>
)
}
