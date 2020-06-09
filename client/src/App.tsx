import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import { Toolbar } from '@material-ui/core';

import Navigation from './components/Navigation/Navigation.jsx';
import Dashboard from './components/dashboard/dashboard';
import { ConfigureEmulatorService } from "./components/common/react-ch5/react-ch5";
import smwEmulator from "./assets/data/smw-emulator.json";

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    toolbar: {
      [theme.breakpoints.up('md')]: {
        minHeight: "95px",
      },
      minHeight: "65px"
    }
  });

  type Props = WithStyles<typeof styles>;

  const App: React.FC<Props> = (props) => {    
    const { classes } = props;

    // Use these two lines if using emulator - comment out when live or use env var
    const configureEmulatorService: ConfigureEmulatorService = new ConfigureEmulatorService();
    configureEmulatorService.initEmulator(smwEmulator);

    return (
      <Router>
        <Navigation />
        <Toolbar className={classes.toolbar} />
        <Route exact path="/" component={Dashboard} />
      </Router>
    );
}

export default withStyles(styles)(App);