import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ButtonMST from "../../common/buttons/ButtonMST";
import TextFieldMST from "../../common/strings/TextFieldMST";

const PlayerWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Rooms:
                </Typography>
                <TextFieldMST publishSignalName="21" subscribeSignalName="21" />
                <ButtonMST 
                    publishSignalName="21"
                    subscribeSignalName="21"
                    >Family
                </ButtonMST>
                <ButtonMST publishSignalName="22" subscribeSignalName="22" >Theater</ButtonMST>
                <ButtonMST publishSignalName="23" subscribeSignalName="23" >Dining</ButtonMST>
                <ButtonMST publishSignalName="24" subscribeSignalName="24" >Boat Dock</ButtonMST>
            </CardContent>
        </Card>
    )
}

export default PlayerWidget