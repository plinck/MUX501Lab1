import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ButtonCH from '../../common/buttons/ButtonCH';

const TransportWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Toggle:
                </Typography>
                <ButtonCH publishSignalName="31" subscribeSignalName="31" >31</ButtonCH>
                <ButtonCH publishSignalName="32" subscribeSignalName="32" >32</ButtonCH>
            </CardContent>
        </Card>
    )
}

export default TransportWidget