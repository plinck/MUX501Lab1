import React from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { ClassValue } from 'classnames/types';
import { StyleRules } from "@material-ui/core/styles";
import { Container } from '@material-ui/core'

import DialPadWidget from "./DialPadWidget/DialPadWidget";
import PlayerWidget from './PlayerWidget/PlayerWidget';
import RoomWidget from './RoomWidget/RoomWidget';
import StockWidget from './StockWidget/StockWidget';
import TextWidget from './TextWidget/TextWidget';
import ThermostatWidget from './ThermostatWidget/ThermostatWidget';
import TransportWidget from './TransportsWidget/TransportWidget';

const globalAny:any = global;

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

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

interface myState {
    layouts?: ReactGridLayout.Layouts;
}

// Exposed to user's of component - not styles
type PublicProps = OwnProps & myState;
type Props = PublicProps & WithStyles<typeof styles> & any;

class Dashboard extends React.Component<Props> {
    state: myState = {
        layouts: JSON.parse(JSON.stringify(originalLayouts)),
    };

    constructor(props:any) {
        super(props);

        this.state = {
            layouts: JSON.parse(JSON.stringify(originalLayouts)),
        };
    }

    static get defaultProps() {
        return {
            className: "layout",
            cols: { lg: 12, md: 12, sm: 4, xs: 4, xxs: 2 },
            rowHeight: 50
        };
    }
    onChildChanged() {
        this.setState({ isDraggable: false })
    }

    resetLayout() {
        this.setState({ layouts: {} })
    }

    onLayoutChange(layout: ReactGridLayout.Layout[], layouts: ReactGridLayout.Layouts) {
        saveToLS("layouts", layouts);
        this.setState({ layouts });
    }
    
    componentDidMount() {
        let layouts: ReactGridLayout.Layouts = getFromLS("layouts") || {};
        this.setState({ layouts: JSON.parse(JSON.stringify(layouts)) });
    }

    public render() {
        const { classes } = this.props;
    
        return (
            <div style={{ backgroundColor: "#f2f2f2" }} className={classes.root}>
                <Container maxWidth="xl">
                    {/* <button onClick={() => this.resetLayout()}>Reset Layout</button> */}
                    <ResponsiveReactGridLayout
                        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                        className="layout"
                        rowHeight={50}
                        layouts={this.state.layouts}
                        isDraggable={this.props.width <= 600 ? false : true}
                        isResizable={this.props.width <= 600 ? false : true}
                        onLayoutChange={(layout: ReactGridLayout.Layout[], layouts: ReactGridLayout.Layouts) =>
                            this.onLayoutChange(layout, layouts)
                        }
                    >
                        <div key="1" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 0, y: 0, minW: 4, minH: 6, maxW: 6 }}>
                            <DialPadWidget />
                        </div>
                        
                        <div key="2" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 4, y: 0, minW: 4, minH: 6, maxW: 6 }}>
                            <TransportWidget />
                        </div>

                        <div key="3" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 8, y: 0, minW: 4, minH: 6, maxW: 6 }}>
                            <ThermostatWidget />
                        </div>

                        <div key="4" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 0, y: 6, minW: 4, minH: 6, maxW: 6 }}>
                            <RoomWidget />
                        </div>

                        <div key="5" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 4, y: 6, minW: 4, minH: 6, maxW: 6 }}>
                            <StockWidget />
                        </div>

                        <div key="6" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 8, y: 6, minW: 4, minH: 6, maxW: 6 }}>
                            <PlayerWidget />
                        </div>

                        <div key="7" className={this.props.width <= 600 ? classes.mobile : null} data-grid={{ w: 4, h: 6, x: 0, y: 12, minW: 4, minH: 6, maxW: 6 }}>
                            <TextWidget />
                        </div>

                    </ResponsiveReactGridLayout>
                </Container>
            </div>
        ); //return
    } // render()
}

function getFromLS(key: any) {
    let ls:any = {};
    if (globalAny.localStorage) {
        try {
            ls = JSON.parse(globalAny.localStorage.getItem("rgl-8")) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}

function saveToLS(key: any, value: any) {
    if (globalAny.localStorage) {
        globalAny.localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key]: value
            })
        );
    }
}

export default withStyles(styles)(WidthProvider((Dashboard)));