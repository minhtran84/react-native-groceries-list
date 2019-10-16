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

    //event handler: press on item OR its checkbox
    _handleProductPress(product) {
        this.state.products.forEach(p => {
            if (product.id === p.id) {
                p.gotten = !p.gotten;
            }
            return p;
        });

        //update state
        this.setState({
            products: this.state.products
        });
    }

    //event handler: press on Fab right to navigate to AddProduct screen
    _handleAddProductPress() {
        this.props.navigation.navigate('AddProduct', {
            addProduct: product => {
                this.setState({
                  products: this.state.products.concat(product)
                });
              },
            deleteProduct: product => {
            this.setState({
                products: this.state.products.filter(p => p.id !== product.id)
            });
            },
            productsInList: this.state.products
        });
    }

    //event handler: press on Fab left to remove all items in the shopping list
    _handleClearPress() {
        Alert.alert('Clear all items?', null, [
            { text: 'Cancel' },
            { text: 'Ok', onPress: () => this.setState({ products: [] }) }
        ]);
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        { this.state.products.map(p => {
                            return (   
                                <ListItem key={p.id} onPress={this._handleProductPress.bind(this, p)} >
                                    <Body>
                                        <Text>{p.name}</Text>
                                    </Body>
                                    <Right>
                                        <CheckBox 
                                            checked={p.gotten} 
                                            onPress={this._handleProductPress.bind(this, p)} 
                                        />
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