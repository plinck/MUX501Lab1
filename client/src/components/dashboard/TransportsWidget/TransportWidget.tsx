import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import TransportPadMST from '../../common/controls/TransportPadMST';

const TransportWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Transport:
                </Typography>
                <TransportPadMST />
            </CardContent>
        </Card>
    )
}

export default TransportWidget