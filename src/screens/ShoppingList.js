import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
    Body,
    Container,
    Content,
    Right,
    Text,
    CheckBox,
    List,
    ListItem,
    Fab,
    Icon
} from 'native-base';

class ShoppingList extends React.Component {
    static navigationOptions = {
        title: "My Groceries List"
    };

    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Nokia Lumia 830 White' },
                { id: 2, name: 'Microsoft Surface 4' },
                { id: 3, name: 'USB 2 LAN cable' }
            ]
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        { this.state.products.map(p => {
                            return (   
                                <ListItem key={p.id}>
                                    <Body>
                                        <Text>{p.name}</Text>
                                    </Body>
                                    <Right>
                                        <CheckBox checked={p.gotten} />
                                    </Right>
                                </ListItem>
                            );
                        })}
                    </List>
                </Content>
                <Fab position="bottomRight" style={styles.fabRight}>
                    <Icon name="add" />
                </Fab>
                <Fab position="bottomLeft" style={styles.fabLeft}>
                    <Icon ios="ios-remove" android="md-remove" />
                </Fab>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    fabRight: {
        backgroundColor: '#5067FF'
    },
    fabLeft: {
        backgroundColor: 'red'
    },
})