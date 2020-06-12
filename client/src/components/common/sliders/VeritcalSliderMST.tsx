import React, { useState, useEffect } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { ClassValue } from 'classnames/types';
import { StyleRules } from "@material-ui/core/styles";
import Slider, { SliderProps } from '@material-ui/core/Slider';

declare var CrComLib: typeof import('@crestron/ch5-crcomlib');
const HEIGHT = "200px";
const MINPERCENT = 0;
const MAXPERCENT = 100;
const MINVALUE = 0;
const MAXVALUE = 65535;

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    root: {
        height: HEIGHT,
        width: "100%",
        margin: "2px",
        padding: "2px"
      }
  });

  function valuetext(sliderValue: number) {
    return `${sliderValue}°F`;
  }

  const marks = [
    {
      value: 0,
      label: '0°F',
    },
    {
      value: 32,
      label: '32°F',
    },
    {
      value: 68,
      label: '68°F',
    },
    {
      value: 77,
      label: '77°F',
    },
    {
      value: 100,
      label: '100°F',
    },
  ];  
// Just my own custom/extended props

interface OwnProps {
    publishSignalName: string,
    subscribeSignalName: string,
    style?: ClassValue;
}
// Exposed to user's of component - not styles
type PublicProps = OwnProps & SliderProps;
type Props = PublicProps & WithStyles<typeof styles>;


const VerticalSliderMST: React.FC<Props> = (props) => {    
    // decontruct props  - 
    // styles HOC, OwnProps, parent props passed
    const {classes,
        publishSignalName,
        subscribeSignalName,
        style,
        ...rest             // gets all the est of the props not specified above (we dont have all the names)
    } = props;

    // State
    const [sliderValue, setSliderValue] = useState(71);

    // Keep range 0-100%
    const setRangeSlider = (value: number) => {
        let newValue = value;
        let newPercentValue = Math.round((newValue / (MAXVALUE-MINVALUE)) * 100);

        if (newPercentValue < MINPERCENT) {
            newPercentValue = MINPERCENT;
        } else if (newPercentValue > MAXPERCENT) {
            newPercentValue = MAXPERCENT;
        }
        
        // console.log(`setRangeSlider: value ${newValue}. percent value ${newPercentValue}`);
        setSliderValue(newPercentValue);
    }
      
    // const handleChange = (event: React.ChangeEvent<{}>, signalName: string, newValue: number) => {
    const handleChange = (event: React.ChangeEvent<{}>, signalName: string, percent: number) => {
        // convert to MINPERCENT MAXPERCENT range for crestron
        let newPercentValue = percent;
        if (newPercentValue < MINPERCENT) {
            newPercentValue = MINPERCENT;
        } else if (newPercentValue > MAXPERCENT) {
            newPercentValue = MAXPERCENT;
        }
        let newValue = Math.round((newPercentValue /100)*(MAXVALUE-MINVALUE));
        // console.log(`handleChange: ${signalName}, value ${newValue}. percent value ${newPercentValue}`);

        setSliderValue(percent);
        CrComLib.publishEvent('number', signalName, newValue);
    };

    const handleRawChange = ( event: React.ChangeEvent<{}>, signalName: string, newValue: number) => {
        // console.log(`handleRawChange: value ${newValue}`);
        setSliderValue(newValue);
    };
    
    useEffect(() => {
        let subscriptionId: string = "";
        if (subscribeSignalName) {
            subscriptionId = CrComLib.subscribeState('number', subscribeSignalName, setRangeSlider);
        }
        // When it ends
        return () => {
            CrComLib.unsubscribeState('number', subscribeSignalName, subscriptionId);
        }
    }, [subscribeSignalName]);
        
    return (
        <Slider {...rest} style={{ height: "200px", margin: "10px 20px 10px 20px" }} className={` ${style}`} value={sliderValue}
            orientation="vertical"
            min={MINPERCENT}
            max={MAXPERCENT}
            onChange={(e, val) => handleRawChange(e, publishSignalName, val as number)} 
            onChangeCommitted={(e, val) => handleChange(e, publishSignalName, val as number)}
            aria-labelledby="vertical-slider" 
            getAriaValueText={valuetext}
            marks={marks}
        >
            {rest.children}
        </Slider>         
    );
}

export default withStyles(styles)(VerticalSliderMST) as React.ComponentType<PublicProps>;
