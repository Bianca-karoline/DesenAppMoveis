import { View, FlatList, Alert } from "react-native";
import {Avatar, ListItem} from '@rneui/themed';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default props => {
    const {state, dispatch} = useContext(UserContext)

    function getUserItem({item: user}){
        return(
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList 
                data={state.users}
                keyExtractor={ user => user.id}
                renderItem={getUserItem}
            />
        </View>
    )
}

