import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ButtonCH from "../../common/buttons/ButtonCH";
import TextFieldCH from "../../common/strings/TextFieldCH";

const PlayerWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Rooms:
                </Typography>
                <TextFieldCH publishSignalName="21" subscribeSignalName="21" />
                <ButtonCH 
                    publishSignalName="21"
                    subscribeSignalName="21"
                    >Family
                </ButtonCH>
                <ButtonCH publishSignalName="22" subscribeSignalName="22" >Theater</ButtonCH>
                <ButtonCH publishSignalName="23" subscribeSignalName="23" >Dining</ButtonCH>
                <ButtonCH publishSignalName="24" subscribeSignalName="24" >Boat Dock</ButtonCH>
            </CardContent>
        </Card>
    )
}

export default PlayerWidget