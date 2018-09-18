import React, {Component} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer/Drawer'
import Button from '@material-ui/core/Button/Button'

class MyDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showDrawer: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this)
        this.toggleSubMenu = this.toggleSubMenu.bind(this)
    }

    toggleDrawer() {
        this.setState({
            showDrawer: !this.state.showDrawer
        })
    }

    toggleSubMenu() {
        this.setState({
            showSubMenu: !this.state.showSubMenu
        })
    }

    render() {
        return <div>
            <Button variant='contained' onClick={this.toggleDrawer}>
                ----------------------- Toggle Drawer ---------------------
            </Button>
            <Drawer variant='persistent' open={this.state.showDrawer}>
                <List>
                    <ListItem button onClick={this.toggleSubMenu}>
                        <ListItemText primary='Hello'/>
                        {this.state.showSubMenu ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.showSubMenu}>
                        <ListItem>
                            <ListItemText primary='-- sub menu 1'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='-- sub menu 2'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='-- sub menu 3'/>
                        </ListItem>
                    </Collapse>
                </List>
            </Drawer>
        </div>
    }
}

export default MyDrawer
