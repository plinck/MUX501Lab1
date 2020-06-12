import React from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Tooltip } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import VerticalSliderMST from '../../common/sliders/VeritcalSliderMST';

const ThermostatWidget = (props:any) => {
    // const [openThermostats, setOpenThermostats] = useState(false)

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
                    <div>
                        <VerticalSliderMST orientation="vertical" publishSignalName="39" subscribeSignalName="39"></VerticalSliderMST>
                        <VerticalSliderMST orientation="vertical" publishSignalName="42" subscribeSignalName="42"></VerticalSliderMST>
                        <VerticalSliderMST orientation="vertical" publishSignalName="45" subscribeSignalName="45"></VerticalSliderMST>
                        <VerticalSliderMST orientation="vertical" publishSignalName="48" subscribeSignalName="48"></VerticalSliderMST>
                        <VerticalSliderMST orientation="vertical" publishSignalName="48" subscribeSignalName="48"></VerticalSliderMST>
                        <VerticalSliderMST orientation="vertical" publishSignalName="51" subscribeSignalName="51"></VerticalSliderMST>
                    </div>
                </Box>   
            </CardContent>
        </Card> 
    )
}

export default ThermostatWidget