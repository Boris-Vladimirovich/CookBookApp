import React from 'react';

import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class AddModal extends React.Component{
    handleAddRecipe = () => {
        this.props.addRecipe({
            title: this.title.value,
            text: this.text.value
        });
        this.props.onClose();
    };
    render(){
        return(
            <Dialog open={this.props.isOpen} onRequestClose={this.props.onClose}>
                <DialogTitle>
                    Add new recipe
                </DialogTitle>
                <DialogContent>
                    <TextField
                        inputRef={(input) => {this.title = input}}
                        label="Title"
                        placeholder="Enter recipe name"
                        fullWidth
                    />
                    <TextField
                        inputRef={(input) => {this.text = input}}
                        label="Description"
                        placeholder="Enter description"
                        multiline rows={5}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" raised onClick={this.handleAddRecipe}>
                        Add
                    </Button>
                    <Button color="accent" raised onClick={this.props.onClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default AddModal;