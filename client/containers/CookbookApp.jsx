import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions/recipeActions';

import SideBar from './SideBar.jsx';
import MainBlock from './MainBlock.jsx';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';


class CookbookApp extends React.Component{

    componentWillMount(){
        this.props.getRecipes();
    }

    render(){
        return(
            <Grid container justify="center" align="stretch" style={{flexGrow: 1}}>
                <Grid item xs={12} md={10} lg={8}><Paper>
                    <Grid container align="stretch" gutter={0}>
                        <Hidden smDown>
                            <Grid item xs={4}>
                                <SideBar/>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={8}>
                            <MainBlock/>
                        </Grid>
                    </Grid></Paper>
                </Grid>
            </Grid>
        );
    };
}

const mapStateToProps = state => ({recipes: state.recipes.list});
const mapDispatchToProps = dispatch => {
  return {
      getRecipes: () => {
          dispatch(Actions.getRecipes());
      }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CookbookApp);

