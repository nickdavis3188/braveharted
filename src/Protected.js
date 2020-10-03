import React from 'react';
import {Redirect, Route} from "react-router-dom"
import auth from "./auth"
export const Protected = ({component:Component, ...rest}) =>{
    return (
        <Route 
        {...rest}

         render={
            props =>{
                if(auth.sureIsAuthenticated()){

                    return <Component {...props}/>
                }else{
                  return  <Redirect to="/post"/>
                }
            }
        }/>
    )
}