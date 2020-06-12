import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import TextFieldMST from "../../common/strings/TextFieldMST";

const PlayerWidget = (props:any) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Text:
                </Typography>
                <TextFieldMST 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem', width: '8rem'}}
                    publishSignalName="5"
                    subscribeSignalName="5" >
                </TextFieldMST>
                <TextFieldMST 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="1"
                    subscribeSignalName="1" >
                </TextFieldMST>
                <TextFieldMST 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="2"
                    subscribeSignalName="2" >
                </TextFieldMST>
                <TextFieldMST 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="3"
                    subscribeSignalName="3" >
                </TextFieldMST>
                <TextFieldMST 
                    label="Text Field"
                    placeholder="Field Value"
                    variant="outlined"
                    autoComplete="text"
                    margin="normal"    
                    inputProps={{style: { padding: 18 }}}
                    style={{height: '8rem'}}
                    publishSignalName="3"
                    subscribeSignalName="3" >
                </TextFieldMST>
            </CardContent>
        </Card>
    )
}

export default PlayerWidget