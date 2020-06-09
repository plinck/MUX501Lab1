import React from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { ClassValue } from 'classnames/types';
import { StyleRules } from "@material-ui/core/styles";
import { Container, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonCH from '../buttons/ButtonCH';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

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
            backgroundColor: theme.palette.text.hint
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


const DialPadCH: React.FC<Props> = (props) => {    
    // decontruct props  - 
    // styles HOC, OwnProps, parent props passed
    const {classes,
        style,
        ...rest             // gets all the est of the props not specified above (we dont have all the names)
    } = props;

    type MyButton = {
        symbol: string;
        alias?: string;
        icon?: JSX.Element;
        publishSignalName?: string;
        subscribeSignalName?: string;
    }
    const buttons: Array<MyButton> =
        [
            {
                symbol : '1',
                publishSignalName: "1",
                subscribeSignalName: "1"
            },
            {
                symbol : '2',
                alias  : 'abc',
                publishSignalName: "2",
                subscribeSignalName: "2"
            },
            {
                symbol : '3',
                alias  : 'def',
                publishSignalName: "3",
                subscribeSignalName: "3"
            },
            {
                symbol : '4',
                alias  : 'ghi',
                publishSignalName: "4",
                subscribeSignalName: "4"
            },
            {
                symbol : '5',
                alias  : 'jkl',
                publishSignalName: "5",
                subscribeSignalName: "5"
            },
            {
                symbol : '6',
                alias  : 'mno',
                publishSignalName: "6",
                subscribeSignalName: "6"
            },
            {
                symbol : '7',
                alias  : 'pqrs',
                publishSignalName: "7",
                subscribeSignalName: "7"
            },
            {
                symbol : '8',
                alias  : 'tuv',
                publishSignalName: "8",
                subscribeSignalName: "8"
            },
            {
                symbol : '9',
                alias  : 'wxyz',
                publishSignalName: "9",
                subscribeSignalName: "9"
            },
            {
                icon   : <Add />,
                symbol : 'chan',
                publishSignalName: "10",
                subscribeSignalName: "10"
            },
            {
                symbol : '0',
                publishSignalName: "11",
                subscribeSignalName: "11"
            },
            {
                icon   : <Remove />,
                symbol : 'chan',
                publishSignalName: "12",
                subscribeSignalName: "12"
            }
        ]

        function FormButton(button: MyButton) {
            return (
                <ButtonCH {...rest}
                    style={{                        
                        alignItems: "center",                
                        backgroundColor: "#00caf2",
                        borderColor: '#4d4d4d #000 #000 #4d4d4d',
                        borderRadius: "0.5rem",
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        color: '#fff',
                        display: "flex",
                        height:"6rem",            
                        fontSize: '15px',
                        padding: '0',
                        margin: '0',
                        width:"6rem",
                    }}
                    styleOn= {{
                        color: "white",
                        backgroundColor: "#00caf2",
                    }}
                    styleOff= {{
                        color: "black",
                        backgroundColor: "transparent",
                    }}

                    publishSignalName={`${button.publishSignalName}`}
                    subscribeSignalName={`${button.subscribeSignalName}`}>
                        {!!button.icon && button.icon}
                        {button.symbol}
                        <br></br>
                        {!!button.alias && button.alias}
                </ButtonCH>
            );
        }
    
        /* <Container className={classes.root} disableGutters fixed maxWidth={"xs"} > */
    return (
        <Grid container className={classes.root} justify="center">
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={4} spacing={0} >
                    {FormButton(buttons[0])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[1])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[2])}
                </Grid>
            </Grid>
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={4} spacing={0} >
                    {FormButton(buttons[3])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[4])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[5])}
                </Grid>
            </Grid>
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={4} spacing={0} >
                    {FormButton(buttons[6])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[7])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[8])}
                </Grid>
            </Grid>
            <Grid className={classes.grid} container xs={8} spacing={0}>
                <Grid className={classes.gridItem} container item xs={4} spacing={0} >
                    {FormButton(buttons[9])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[10])}
                </Grid>
                <Grid className={classes.gridItem} container item xs={4} spacing={0}>
                    {FormButton(buttons[11])}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(DialPadCH) as React.ComponentType<PublicProps>;