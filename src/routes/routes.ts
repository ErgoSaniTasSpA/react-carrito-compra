import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element;

interface Route {
    name      : string,
    to        : string,
    path      : string,
    Component : LazyExoticComponent<JSXComponent> | JSXComponent
}

//Carga peresoza
const shoppingPage = lazy( ()=> import(/* webpackChunkName: "shopping" */'../patterns/pages/shopping.page'));

export const routes:Route[] = [
    {
        name      : 'Shopping',
        to        : '/shopping',
        path      : '/shopping/*',
        Component : shoppingPage
    }
] 