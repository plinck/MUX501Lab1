import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ButtonCH from "../../common/buttons/ButtonMST";
import TextFieldMST from "../../common/strings/TextFieldMST";

const DialPadWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Interlock:
                </Typography>
                    <ButtonCH 
                        style={{height: '8rem', width: '8rem'}}
                        publishSignalName="21"
                        subscribeSignalName="21"
                        >A-21
                    </ButtonCH>
                    <ButtonCH publishSignalName="22" subscribeSignalName="22" >B-22</ButtonCH>
                    <ButtonCH publishSignalName="23" subscribeSignalName="23" >C-23</ButtonCH>
                    <ButtonCH publishSignalName="24" subscribeSignalName="24" >D-24</ButtonCH>
                    <TextFieldMST publishSignalName="21" subscribeSignalName="21" />
            </CardContent>
        </Card>
    )
}

export default DialPadWidget