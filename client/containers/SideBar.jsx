import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions/recipeActions';

import RecipeList from '../components/RecipeList.jsx';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

class SideBar extends React.Component{
    render(){
        return (
            <div style={{
                position: "relative",
                height: "100%",
                overflowY: "auto",
                textAlign: "right"
            }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="display1" color="inherit">
                            CookBook
                        </Typography>
                    </Toolbar>
                </AppBar>
                <RecipeList
                    recipes={this.props.recipes}
                    searchQuery={this.props.searchQuery}
                    changeSearchQuery={this.props.changeSearchQuery}
                    selectRecipe={this.props.selectRecipe}
                    closeDrawer={this.props.closeDrawer}
                />
                <Button
                    fab
                    color="primary"
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        marginLeft: '-80px'
                    }}
                    onClick={() => {
                        this.props.openAddModal();
                        this.props.closeDrawer();
                    }}
                >
                    <AddIcon />
                </Button>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    recipes: state.recipes.list,
    searchQuery: state.recipes.searchQuery
});
const mapDispatchToProps = dispatch => ({
    selectRecipe: (data) => {dispatch(Actions.selectRecipe(data))},
    changeSearchQuery: (data) => {dispatch(Actions.changeSearchQuery(data))},
    openAddModal: () => {dispatch(Actions.openAddModal())},
    closeAddModal: () => {dispatch(Actions.closeAddModal())},
    closeDrawer: () => {dispatch(Actions.closeDrawer())}
});
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);