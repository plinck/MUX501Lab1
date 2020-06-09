import React from 'react';
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { ClassValue } from 'classnames/types';
import { StyleRules } from "@material-ui/core/styles";
import ButtonCH from '../common/buttons/ButtonCH';
import VolumeControlCH from '../common/sliders/VolumeControlCH';
import TextFieldCH from '../common/strings/TextFieldCH';
import DialPadCH from '../common/controls/DialPadCH';

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: "57px",
        },
        paddingTop: "10px",
        backgroundColor: "#f2f2f2"
    },
    bubble: {
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    card: {
        height: "100%"
    },
    mobile: {
        touchAction: "auto !important"
    }
  });
interface OwnProps {
    style?: ClassValue;
}

// Exposed to user's of component - not styles
type PublicProps = OwnProps;
type Props = PublicProps & WithStyles<typeof styles>;

class Dashboard extends React.Component<Props> {
    
    public render() {
        const { classes } = this.props;
    
        return (
            <div className={classes.root}>
                <DialPadCH />
                <br />
                <div>Interlock:
                    <ButtonCH 
                        style={{height: '8rem', width: '8rem'}}
                        publishSignalName="21"
                        subscribeSignalName="21"
                        >A-21
                    </ButtonCH>
                    <ButtonCH publishSignalName="22" subscribeSignalName="22" >B-22</ButtonCH>
                    <ButtonCH publishSignalName="23" subscribeSignalName="23" >C-23</ButtonCH>
                    <ButtonCH publishSignalName="24" subscribeSignalName="24" >D-24</ButtonCH>
                    <TextFieldCH publishSignalName="21" subscribeSignalName="21" />
                </div>
                <br />
                <div>Toggle:
                    <ButtonCH publishSignalName="31" subscribeSignalName="31" >31</ButtonCH>
                    <ButtonCH publishSignalName="32" subscribeSignalName="32" >32</ButtonCH>
                </div>
                <br />
                <TextFieldCH 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem', width: '8rem'}}
                    publishSignalName="5"
                    subscribeSignalName="5" >
                </TextFieldCH>
                <TextFieldCH 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="1"
                    subscribeSignalName="1" >
                </TextFieldCH>
                <TextFieldCH 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="2"
                    subscribeSignalName="2" >
                </TextFieldCH>
                <TextFieldCH 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="3"
                    subscribeSignalName="3" >
                </TextFieldCH>
                <TextFieldCH 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="3"
                    subscribeSignalName="3" >
                </TextFieldCH>
                <br />
                <div>Slider/Analog
                    <VolumeControlCH orientation="horizontal" publishSignalName="36" subscribeSignalName="36"></VolumeControlCH>
                </div>
            </div>
        ); //return
    } // render()
}

//withStyles creates classes prop
export default withStyles(styles)((Dashboard));