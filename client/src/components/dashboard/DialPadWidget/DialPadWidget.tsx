import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import DialPadMST from '../../common/controls/DialPadMST';

const DialPadWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    DialPad:
                </Typography>
                <DialPadMST />
            </CardContent>
        </Card>
    )
}

export default DialPadWidget