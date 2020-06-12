import React, { useState, useEffect } from "react";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

declare var CrComLib: typeof import('@crestron/ch5-crcomlib');

// withStyles HOC creates classes prop
const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    root: {
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "8rem",
        height: "4rem",
        borderRadius: "0.5rem",
    },
    on: {
        color: "#fff",
        backgroundColor: "#22f",
    },
    off: {
        color: "#aaa",
        backgroundColor: "#118",
    }
  });

// Just my own custom/extended props
interface OwnProps {
    publishSignalName: string,
    subscribeSignalName: string,
    style?: any;
    styleOn?: any;
    styleOff?: any;  
}
// Exposed to user's of component - not styles
type PublicProps = OwnProps & ButtonProps;
type Props = PublicProps & WithStyles<typeof styles>;

const ButtonMST: React.FC<Props> = (props) => {    
    // decontruct props  - 
    // styles HOC, OwnProps, parent props passed
    const {classes,
        publishSignalName,
        subscribeSignalName,
        style,
        styleOn,
        styleOff,
        ...rest             // gets all the est of the props not specified above (we dont have all the names)
    } = props;

    // State
    const [feedback, setFeedback] = useState(false);

    const onPress = (signalName: string) => {
        CrComLib.publishEvent('boolean', signalName, true);
    }
    
    // const onRelease = () => {
    //     console.log(`released signal: ${publishSignalName}`);
    //     // CrComLib.publishEvent('boolean', this.props.publishSignalName, false);
    // }
    
    useEffect(() => {
        let subscriptionId: string = "";
        if (subscribeSignalName) {
            subscriptionId = CrComLib.subscribeState('boolean', subscribeSignalName, setFeedback);
        }
        // When it ends
        return () => {
            CrComLib.unsubscribeState('boolean', subscribeSignalName, subscriptionId);
        }
    }, [subscribeSignalName]);
        
    
    const stateStyle = feedback ? classes.on : classes.off;

    const allStyles=`${classes.root} ${stateStyle}`;
      
    let passedStyles: any;
    if (styleOn) {
        passedStyles = feedback ? {...style,...styleOn} : {...style,...styleOff};
    } else {
        passedStyles = style;
    }
    // feedback is fro state, all else is from props
    return (
        <Button {...rest} 
            className={allStyles}
            style={passedStyles}
            onClick={() => onPress(publishSignalName)}
            >
            {rest.children}
        </Button>
    );
};

export default withStyles(styles)(ButtonMST) as React.ComponentType<PublicProps>;