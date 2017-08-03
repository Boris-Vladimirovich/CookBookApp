import React from 'react';
import {connect} from 'react-redux';

import * as Actions from '../actions/recipeActions';

import SideBar from './SideBar.jsx';
import UpdateModal from '../components/UpdateModal.jsx';
import HistoryMenu from '../components/HistoryMenu.jsx';
import DeleteModal from "../components/DeleteModal.jsx";
import AddModal from '../components/AddModal.jsx';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import HistoryIcon from 'material-ui-icons/History';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';

class MainBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            anchorEl: undefined,
            isHistoryOpen: false,
            isDeleteModalOpen: false,
            isUpdateModalOpen: false
        }
    };

    handleHistoryOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            isHistoryOpen: true
        })
    };

    handleHistoryClose = () => {
        this.setState({
            isHistoryOpen: false
        });
    };

    handleUpdateModalOpen = () => {
        this.setState({
            isUpdateModalOpen: true
        });
    };

    handleUpdateModalClose = () => {
        this.setState({
            isUpdateModalOpen: false
        });
    };

    handleDeleteModalOpen = () => {
        this.setState({
            isDeleteModalOpen: true
        });
    };

    handleDeleteModalClose = () => {
        this.setState({
            isDeleteModalOpen: false
        });
    };

    render(){
        return(
            <div style={{overflowY: 'auto'}}>
                <AddModal
                    isOpen={this.props.isAddModalOpen}
                    addRecipe={this.props.addRecipe}
                    onClose={this.props.closeAddModal}
                />
                <DeleteModal
                    isOpen={this.state.isDeleteModalOpen}
                    onClose={this.handleDeleteModalClose}
                    deleteRecipe={this.props.deleteRecipe}
                    deleteAll={this.props.deleteAll}
                    selectedRecipe={this.props.selectedRecipe}
                    selectRecipe={this.props.selectRecipe}
                />
                <UpdateModal
                    selectedRecipe={this.props.selectedRecipe}
                    isOpen={this.state.isUpdateModalOpen}
                    onClose={this.handleUpdateModalClose}
                    updateRecipe={this.props.updateRecipe}
                />
                <Drawer
                    open={this.props.isDrawerOpen}
                    onRequestClose={this.props.closeDrawer}>
                    <SideBar/>
                </Drawer>
                <HistoryMenu
                    anchorEl={this.state.anchorEl}
                    open={this.state.isHistoryOpen}
                    onClose={this.handleHistoryClose}
                    history={this.props.history}
                    selectedRecipe={this.props.selectedRecipe}
                    selectRecipe={this.props.selectRecipe}
                />
                <AppBar position="static">
                    <Toolbar>
                        <Hidden mdUp>
                            <IconButton
                                color="contrast"
                                onClick={this.props.openDrawer}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                        <Typography type="title" color="inherit" style={{flex: 1}}>
                            {this.props.selectedRecipe.title}
                        </Typography>
                        {
                            this.props.selectedRecipe.title && (
                                <div>
                                    <IconButton
                                        color="contrast"
                                        onClick={this.handleUpdateModalOpen}
                                    >
                                        <ModeEditIcon/>
                                    </IconButton>
                                    <IconButton
                                        color="contrast"
                                        onClick={(event) => {this.handleHistoryOpen(event)}}
                                    >
                                        <HistoryIcon/>
                                    </IconButton>
                                    <IconButton
                                        color="accent"
                                        onClick={this.handleDeleteModalOpen}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            )
                        }
                    </Toolbar>
                </AppBar>
                {
                    !this.props.selectedRecipe.title && (
                        <Typography align="center" type="display1" style={{margin: "30px"}}>
                            Click on recipe to review it
                        </Typography>)
                }
                    <Typography align="justify" style={{margin: "30px"}}>
                        {this.props.selectedRecipe.text}
                    </Typography>
                </div>
        )
    }
}
const mapStateToProps = state => ({
    selectedRecipe: state.recipes.selectedRecipe,
    history: state.recipes.history,
    isAddModalOpen: state.recipes.isAddModalOpen,
    isDrawerOpen: state.recipes.isDrawerOpen
});
const mapDispatchToProps = dispatch => ({
    selectRecipe: (data) => {dispatch(Actions.selectRecipe(data))},
    deleteRecipe: (id) => {dispatch(Actions.deleteRecipe(id))},
    updateRecipe: (id, data) => {dispatch(Actions.updateRecipe(id, data))},
    deleteAll: (id) => {dispatch(Actions.deleteAll(id))},
    addRecipe: (data) => {dispatch(Actions.addRecipe(data))},
    openAddModal: () => {dispatch(Actions.openAddModal())},
    closeAddModal: () => {dispatch(Actions.closeAddModal())},
    openDrawer: () => {dispatch(Actions.openDrawer())},
    closeDrawer: () => {dispatch(Actions.closeDrawer())}
});

export default connect(mapStateToProps,mapDispatchToProps)(MainBlock);