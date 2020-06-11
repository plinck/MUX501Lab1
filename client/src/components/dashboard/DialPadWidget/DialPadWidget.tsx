import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import DialPadCH from '../../common/controls/DialPadCH';

const DialPadWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    DialPad:
                </Typography>
                <DialPadCH />
            </CardContent>
        </Card>
    )
}

export default DialPadWidget