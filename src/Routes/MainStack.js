import React from 'react';
import NavigationStrings from '../Components/Constants/NavigationStrings';
import TabRoutes from './TabRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={NavigationStrings.TABS}
                component={TabRoutes}
            />
        </>
    )
}