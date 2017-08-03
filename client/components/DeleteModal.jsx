import React from 'react';

import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class DeleteModal extends React.Component{
    render(){
        return(
            <Dialog
                open={this.props.isOpen}
                onRequestClose={this.props.onClose}
            >
                <DialogTitle>
                    Confirm delete
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        raised
                        color="primary"
                        onClick={()=>{
                            this.props.deleteRecipe(this.props.selectedRecipe._id);
                            this.props.selectRecipe({});
                            this.props.onClose()
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        raised
                        color="default"
                        onClick={()=>{
                            this.props.deleteAll(this.props.selectedRecipe.recipeID);
                            this.props.selectRecipe({});
                            this.props.onClose()
                        }}
                    >
                        Delete all
                    </Button>
                    <Button
                        raised
                        color="accent"
                        onClick={()=>{this.props.onClose()}}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default DeleteModal;