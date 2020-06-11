import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Tooltip } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import VolumeControlCH from '../../common/sliders/VolumeControlCH';

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
                    <VolumeControlCH orientation="horizontal" publishSignalName="36" subscribeSignalName="36"></VolumeControlCH>
                </Box>   
            </CardContent>
        </Card> 
    )
}

export default ThermostatWidget