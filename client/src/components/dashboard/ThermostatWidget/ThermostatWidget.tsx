import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Tooltip } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import VolumeControlMST from '../../common/sliders/VolumeControlMST';

const ThermostatWidget = (props:any) => {
    const [openThermostats, setOpenThermostats] = useState(false)

    const handleClickThermostats = () => {
        // setOpenThermostats(true)
    }
    
    return (
        <Card style={{ height: '100%' }}>
            <CardContent>
                <Box className="row" fontStyle="oblique" fontWeight="fontWeightBold">
                    <Tooltip title="Show All Thermostats">
                        <span onClick={handleClickThermostats}>
                                Thermostat:
                        </span>
                    </Tooltip>
                    <div style={{ float: 'right' }}>
                        <Tooltip title="Show All Thermostats">
                            <div onClick={handleClickThermostats}>
                                <LaunchIcon />
                            </div>
                        </Tooltip>
                    </div>
                    <VolumeControlMST orientation="horizontal" publishSignalName="36" subscribeSignalName="36"></VolumeControlMST>
                </Box>   
            </CardContent>
        </Card> 
    )
}

export default ThermostatWidget