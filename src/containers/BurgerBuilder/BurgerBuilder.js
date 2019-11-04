import React, { Component } from 'react';
import Aux from '../../hoc/Aux.jsx';
import Burger from '../../components/Burger/Burger';
import BuildControl from '../../components/Burger/BuildControl/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.3,
    bacon: 0.7
}



class BurgerBuilder extends Component {


    state = {
        ingredients: {
            bacon: 0,
            meat: 0,
            cheese: 0,
            salad: 0
        },
        totalPrice: 0,
        purchasable: false,
        orderClicked: false,
        loading: false
    };

    // componentDidMount() {
    //     axios.get('https://react-my-burger-f95a5.firebaseio.com/ingredients').then(response => {
    //         this.setState({ ingredients: response.data });
    //         console.log(this.state.ingredients);

    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    updatePurchase(ingredients) {
        //  const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({ purchasable: sum > 0 });
    }
    addIngredientHandler = (type1) => {
        const oldCount = this.state.ingredients[type1];

        const updatecount = oldCount + 1;
        const updateIngrediet = {
            ...this.state.ingredients
        };

        updateIngrediet[type1] = updatecount;
        const priceAddition = INGREDIENT_PRICES[type1];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updateIngrediet });

        this.updatePurchase(updateIngrediet);

    };

    removeIngredientHandler = (type1) => {
        const oldCount = this.state.ingredients[type1];
        if (oldCount <= 0) {
            alert(`You did not add the ${type1} ingredient`);
            return;
        }
        const updatecount = oldCount - 1;
        const updateIngrediet = {
            ...this.state.ingredients
        };

        updateIngrediet[type1] = updatecount;
        const priceDeduct = INGREDIENT_PRICES[type1];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDeduct;
        this.setState({ totalPrice: newPrice, ingredients: updateIngrediet });

        this.updatePurchase(updateIngrediet);
    };


    purchaseHandler = () => {
        this.setState({ orderClicked: true });
    }
    modelClosed = () => {
        this.setState({ orderClicked: false })
    }

    modelContinue = () => {
        //alert("Your order has delivered");
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'ps',
                address: {
                    city: 'Banglore',
                    area: 'Domlur'
                }
            },
            deliveryMethod: 'fastest',
            email: 'pk@gmail.com'
        }

        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false, orderClicked: false });
        }).catch(
            error => {
                this.setState({ loading: false, orderClicked: false });
            }
        );

    }


    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
    //         const posts = response.data.slice(0, 4);
    //         this.setState({ posts: response.data });
    //         console.log(response);
    //     });
    // }


    render() {

        let orderSummary = null;


        let burger = < Spinner / > ;
        if (this.state.ingredients) {
            burger = ( < Aux > <
                Burger ingredient = { this.state.ingredients }
                />  <
                BuildControl ingredientAdded = { this.addIngredientHandler }
                ingredientRemove = { this.removeIngredientHandler }
                price = { this.state.totalPrice }
                purchasable = { this.state.purchasable }
                orderClicked = { this.purchaseHandler }
                /> < /
                Aux > );
            orderSummary = <
                OrderSummary ingredients = { this.state.ingredients }
            orderCancel = { this.modelClosed }
            orderContinue = { this.modelContinue }
            price = { this.state.totalPrice }
            /> ;


        }
        if (this.state.loading) {
            orderSummary = < Spinner / >
        }

        return ( <
            Aux >
            <
            Modal show = { this.state.orderClicked }
            closed = { this.modelClosed } > { orderSummary } <
            /
            Modal > { burger } <
            /
            Aux >
        );
    }

}


export default BurgerBuilder;