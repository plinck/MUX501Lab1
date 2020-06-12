import React from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { ClassValue } from 'classnames/types';
import { StyleRules } from "@material-ui/core/styles";
import { Container, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonMST from '../buttons/ButtonMST';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import FastRewindOutlinedIcon from '@material-ui/icons/FastRewindOutlined';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import Forward30OutlinedIcon from '@material-ui/icons/Forward30Outlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(0),
            margin: "0",
            textAlign: 'center',
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            width:350,
            backgroundColor: "f2f2f2"
        },
        grid: {
            padding: theme.spacing(0),
            textAlign: 'center',
            justifyContent: "center",
            justifyItems: "center",
            margin: "0",
            backgroundColor: "transparent",
            maxWidth:"100%",
            flexBasis:"100%"
        },
        gridItem: {
            padding: theme.spacing(0),
            justifyContent: "center",
            justifyItems: "center",
            margin: "0"
        },
        paper: {
            padding: theme.spacing(0),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        button: {
            backgroundColor: "#22f",
            margin:0,
            padding: 0,
            width:"100%",
            height:"100%",
            styleOn:{
                color: "#fff",
                backgroundColor: "#22f",
            },
            styleOff: {
                color: "#aaa",
                backgroundColor: "#118",
            }
        }
    });

// Just my own custom/extended props

interface OwnProps {
    style?: ClassValue;
}
// Exposed to user's of component - not styles
type PublicProps = OwnProps;
type Props = PublicProps & WithStyles<typeof styles>;


const PlayerPadMST: React.FC<Props> = (props) => {    
    // decontruct props  - 
    // styles HOC, OwnProps, parent props passed
    const {classes,
        style,
        ...rest             // gets all the est of the props not specified above (we dont have all the names)
    } = props;

    type MyButton = {
        symbol?: string;
        alias?: string;
        icon?: JSX.Element;
        publishSignalName?: string;
        subscribeSignalName?: string;
    }

    const buttons: Array<MyButton> =
        [
            {
                icon   : <FastRewindOutlinedIcon />,
                publishSignalName: "111",
                subscribeSignalName: "111"
            },
            {
                icon   : <PlayCircleOutlineOutlinedIcon />,
                publishSignalName: "112",
                subscribeSignalName: "112"
            },
            {
                icon   : <PauseCircleOutlineOutlinedIcon />,
                publishSignalName: "113",
                subscribeSignalName: "113"
            },
            {
                icon   : <FastForwardOutlinedIcon />,
                publishSignalName: "114",
                subscribeSignalName: "114"
            },
            {
                icon   : <ReplayOutlinedIcon />,
                publishSignalName: "115",
                subscribeSignalName: "115"
            },
            {
                icon   : <Forward30OutlinedIcon />,
                publishSignalName: "115",
                subscribeSignalName: "115"
            }
        ]

        function FormButton(button: MyButton) {
            return (
                <ButtonMST {...rest}
                    style={{                        
                        alignItems: "center",                
                        borderColor: '#4d4d4d #000 #000 #4d4d4d',
                        borderRadius: "0.5rem",
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        display: "flex",
                        height: "4rem",            
                        fontSize: '15px',
                        padding: '0',
                        margin: '1px',
                        width:"100%",
                    }}

                    publishSignalName={`${button.publishSignalName}`}
                    subscribeSignalName={`${button.subscribeSignalName}`}>
                        {!!button.icon && button.icon}
                        {button.symbol}
                        <br></br>
                        {!!button.alias && button.alias}
                </ButtonMST>
            );
        }
    
        /* <Container className={classes.root} disableGutters fixed maxWidth={"xs"} > */
    return (
        <Grid container className={classes.root} justify="center">
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={3} spacing={0} >
                    {FormButton(buttons[0])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={3} spacing={0}>
                    {FormButton(buttons[1])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={3} spacing={0}>
                    {FormButton(buttons[2])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={3} spacing={0}>
                    {FormButton(buttons[3])}
                </Grid>
            </Grid>
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={6} spacing={0} >
                    {FormButton(buttons[4])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={6} spacing={0} >
                    {FormButton(buttons[5])}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(PlayerPadMST) as React.ComponentType<PublicProps>;