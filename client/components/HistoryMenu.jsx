import React from 'react';

import moment from 'moment';

import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';

class HistoryMenu extends React.Component{

    render(){
        return(
            <Menu
                anchorEl={this.props.anchorEl}
                open={this.props.open}
                onRequestClose={this.props.onClose}
                style={{ maxHeight: 300 }}
            >
                {
                    this.props.history.map(el => {
                        return (
                            <MenuItem
                                key={el._id}
                                selected={el._id === this.props.selectedRecipe._id}
                                onClick={() => {
                                    this.props.selectRecipe(el);
                                    this.props.onClose();
                                }}
                            >
                                <Typography type="body2">
                                    {moment(el.date).format("HH:mm D/M/YYYY")}
                                </Typography>
                            </MenuItem>
                        );
                    })
                }
            </Menu>
        )
    }
}

export default HistoryMenu;