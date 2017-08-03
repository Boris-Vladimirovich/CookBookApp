import React from 'react';

import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class UpdateModal extends React.Component{
    handleUpdateRecipe = () => {
        if(this.title.value !== this.props.selectedRecipe.title || this.text.value !== this.props.selectedRecipe.text){
            this.props.updateRecipe(this.props.selectedRecipe.recipeID ,{
                title: this.title.value,
                text: this.text.value
            });
        }
        this.props.onClose();
    };
    render(){
        return(
            <Dialog open={this.props.isOpen} onRequestClose={this.props.onClose}>
                <DialogTitle>
                    Edit recipe
                </DialogTitle>
                <DialogContent>
                    <TextField
                        inputRef={(input) => {this.title = input}}
                        label="Title"
                        placeholder="Enter recipe name"
                        fullWidth
                        defaultValue={this.props.selectedRecipe.title}
                    />
                    <TextField
                        inputRef={(input) => {this.text = input}}
                        label="Description"
                        placeholder="Enter description"
                        multiline rows={5}
                        fullWidth
                        defaultValue={this.props.selectedRecipe.text}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" raised onClick={this.handleUpdateRecipe}>
                        OK
                    </Button>
                    <Button color="accent" raised onClick={this.props.onClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default UpdateModal;