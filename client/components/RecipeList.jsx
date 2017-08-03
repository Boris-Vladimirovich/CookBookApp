import React from 'react';

import moment from 'moment';

import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

class RecipeList extends React.Component{
    render(){
        return(
            <List>
                <ListItem>
                    <TextField
                        label="Search"
                        placeholder="Enter recipe name"
                        fullWidth
                        onChange={(event) => this.props.changeSearchQuery(event.target.value)}
                    >
                        {this.props.searchQuery}
                    </TextField>
                </ListItem>
            {
                this.props.recipes.map((el) => {
                    if(el.title.toLowerCase().indexOf(this.props.searchQuery.toLocaleLowerCase()) !== -1){
                        return (
                            <ListItem button key = {el._id}
                                      onClick={() => {
                                          this.props.selectRecipe(el);
                                          this.props.closeDrawer();
                                      }}
                            >
                                <Avatar style={{height: '40px'}}>
                                    {el.title.charAt(0).toUpperCase()}
                                </Avatar>
                                <ListItemText style={{textAlign: 'left'}}
                                    primary={el.title}
                                    secondary={moment(el.date).format("HH:mm D/M/YYYY")}
                                />
                            </ListItem>
                        )
                    }
                })
            }
            </List>
        )
    }
}

export default RecipeList;