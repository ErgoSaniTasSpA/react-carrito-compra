
/************************  Link Docs ***************************************** 
* * https://reactrouter.com/en/main/upgrading/v5#upgrade-to-react-router-v6
* * npm install react-router-dom@6
* ****************************************************************************/
import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink } from 'react-router-dom';
import { Routes, Route  } from 'react-router-dom';
import logo from '../assets/react.svg';
import {routes} from './routes';

export const Navigation = () => {

    return (
        <Suspense
            fallback = { <div> Loading... </div> }
        >
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src= { logo } alt='React Logo' />
                        <ul>
                        {
                            routes.map( ({to,name}) => {
                                return (
                                    <li key={to}>
                                        <NavLink 
                                            className={ ( { isActive } ) => isActive? 'nav-active':'' }
                                            to={to} > { name } 
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </nav>   

                    <Routes>
                    {
                       routes.map( ({ path, Component  }) => (
                        <Route 
                            key={ path }
                            path={ path }
                            element={ <Component /> } 
                        />
                    ))
                    }    
                    <Route path='/*' element={ <Navigate to ={ routes[0].to }  replace /> } />  
                    </Routes>    

                </div>
            </BrowserRouter>
        </Suspense>    
    )
}

