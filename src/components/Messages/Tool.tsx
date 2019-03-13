import React from "react";
import Delete from "@material-ui/icons/Delete";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Menu, MenuItem } from "@material-ui/core";

interface IProps {
    onDelete(): void;
}

export default class Tool extends React.Component<IProps, {}>{
    state = {
      anchorEl: null,
    };
  
    handleClick = (event: any) => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
    render(){
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="tools-wrapper">
            <IconButton
                color="primary"
                aria-label="More"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
            >
            <MenuItem onClick={this.props.onDelete}>
                <Delete /> Xóa tin nhắn
            </MenuItem>
            </Menu>
        </div>
        );
    }
}