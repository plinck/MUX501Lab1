import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import VolumeControlCH from '../../common/sliders/VolumeControlCH';

const ThermostatWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Thermostat:
                </Typography>
                <VolumeControlCH orientation="horizontal" publishSignalName="36" subscribeSignalName="36"></VolumeControlCH>
            </CardContent>
        </Card>
    )
}

export default ThermostatWidget