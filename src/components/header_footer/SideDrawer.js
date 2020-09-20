import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const sideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => {
                props.onClose(false)
            }}
        >

            <List
                component="nav"
            >
                <ListItem button onClick={() => { }}>
                    Event Starts In
                </ListItem>
                <ListItem button onClick={() => { }}>
                    Venue Info
                </ListItem>
                <ListItem button onClick={() => { }}>
                    Event Hightlights
                </ListItem>
                <ListItem button onClick={() => { }}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => { }}>
                    Location
                </ListItem>

            </List>

        </Drawer >
    );
}

export default sideDrawer;
