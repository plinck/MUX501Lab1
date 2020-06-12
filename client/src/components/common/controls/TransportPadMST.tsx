import React from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { ClassValue } from 'classnames/types';
import { StyleRules } from "@material-ui/core/styles";
import { Container, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonMST from '../buttons/ButtonMST';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DoneIcon from '@material-ui/icons/Done';

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


const TransportPadMST: React.FC<Props> = (props) => {    
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
                icon   : <ArrowDropUpIcon />,
                publishSignalName: "1",
                subscribeSignalName: "1"
            },
            {
                icon   : <ArrowLeftIcon />,
                publishSignalName: "2",
                subscribeSignalName: "2"
            },
            {
                icon   : <DoneIcon />,
                publishSignalName: "3",
                subscribeSignalName: "3"
            },
            {
                icon   : <ArrowRightIcon />,
                publishSignalName: "4",
                subscribeSignalName: "4"
            },
            {
                icon   : <ArrowDropDownIcon />,
                publishSignalName: "5",
                subscribeSignalName: "5"
            }
        ]

        function FormButton(button: MyButton) {
            return (
                <ButtonMST {...rest}
                    style={{                        
                        alignItems: "center",                
                        backgroundColor: "#bbdefb",
                        borderColor: '#4d4d4d #000 #000 #4d4d4d',
                        borderRadius: "0.5rem",
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        color: "grey",
                        display: "flex",
                        height: "4rem",            
                        fontSize: '15px',
                        padding: '0',
                        margin: '1px',
                        width:"100%",
                    }}
                    styleOff= {{
                        color: "grey",
                        backgroundColor: "#bbdefb",
                    }}
                    styleOn= {{
                        color: "white",
                        backgroundColor: "#1e77b4",
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
                <Grid className={classes.gridItem} container item xs={12} spacing={0} >
                    {FormButton(buttons[0])}
                </Grid>
            </Grid>
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={4} spacing={0} >
                    {FormButton(buttons[1])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[2])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[3])}
                </Grid>
            </Grid>
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={12} spacing={0} >
                    {FormButton(buttons[4])}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(TransportPadMST) as React.ComponentType<PublicProps>;