import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import PlayerPadMST from "../../common/controls/PlayerPadMST";

const PlayerWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Player:
                </Typography>
                <PlayerPadMST />
            </CardContent>
        </Card>

    )
}

export default PlayerWidget