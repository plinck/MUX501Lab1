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
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Interlock:
                </Typography>
                <TextFieldCH publishSignalName="21" subscribeSignalName="21" />
                <ButtonCH 
                    publishSignalName="21"
                    subscribeSignalName="21"
                    >A-21
                </ButtonCH>
                <ButtonCH publishSignalName="22" subscribeSignalName="22" >B-22</ButtonCH>
                <ButtonCH publishSignalName="23" subscribeSignalName="23" >C-23</ButtonCH>
                <ButtonCH publishSignalName="24" subscribeSignalName="24" >D-24</ButtonCH>
            </CardContent>
        </Card>
    )
}

export default PlayerWidget