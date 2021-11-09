import React, { createContext, useState, useEffect } from 'react';

export interface GlobalProviderData {
    showMenu: boolean;
    loading: boolean;
}

export interface GlobalContextProps {
    data: GlobalProviderData;
    updateShowMenu: Function;
    updateLoading: Function;
}

export const defaultGlobalProviderData: GlobalProviderData = {
    showMenu: false,
    loading: false
};

export const GlobalContext = createContext<GlobalContextProps>({
    data: defaultGlobalProviderData,
    updateShowMenu: Function,
    updateLoading: Function
});

export const GlobalProvider: React.FC = ({ children }) => {
    const [ providerValue, setProviderValue ] = useState( defaultGlobalProviderData );

    const updateShowMenu = ( showMenu: boolean ): void => {
        setProviderValue( ( prevValues ) => {
            return { ...prevValues, showMenu };
        });
    };

    const updateLoading = ( loading: boolean ): void => {
        setProviderValue( ( prevValues ) => {
            return { ...prevValues, loading };
        });
    };

    const providerData = {
        data: providerValue,
        updateShowMenu,
        updateLoading
    };

    return (
        <GlobalContext.Provider value={ providerData }>
            { children }
        </GlobalContext.Provider>
    );
};