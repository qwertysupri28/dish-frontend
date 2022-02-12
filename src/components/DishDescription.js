import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { setDishDetail } from '../store/action/action';

const DishDescription = ({ dishDetail, setDishDetail }) => {

    const [description, setDescription] = useState({});

    //---------------------------------------------------------------------------------------------------------------------
    // UseEffects
    useEffect(() => {

        window.onload = function () {
        try {
            var url_string = (window.location.href);
            var url = new URL(url_string);
            var id = url.searchParams.get('id');
            axios.post(`http://localhost:3002/dishDescription`, {"id": id}).then(response => { 
            setDescription(response.data.detail)
            }).catch(error => {
                console.log('error => ', error)
            }
            );

        } catch (error) {
            console.log('error in userDetailedList ', error);
        }
        }
    }, []);
    return (
        <>
            {description.length > 0 &&
                <div>
                    <h1>Dish Name: {description[0].name}</h1>
                    <h1>Ingredients: {description[0].ingredients}</h1>
                    <h1>Diet: {description[0].diet}</h1>
                    <h1>Preparation Time: {description[0].prep_time}</h1>
                    <h1>Cook Time: {description[0].cook_time}</h1>
                    <h1>Flavor Time: {description[0].flavor_profile}</h1>
                    <h1>Course: {description[0].course}</h1>
                    <h1>State: {description[0].state}</h1>
                    <h1>Region: {description[0].region}</h1>
                </div>
            }
        </>
    );
};

//---------------------------------------------------------------------------------------------------------------------
// Redux

const mapStateToProps = state => {
    return{
        dishDetail: state.dishDetail
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
        setDishDetail: (modal, info) => {
            dispatch(setDishDetail({modal: modal, info: info}));
        }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(DishDescription);
