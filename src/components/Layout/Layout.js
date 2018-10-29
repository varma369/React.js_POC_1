import React from 'react';
import Footer from '../Footer/Footer';
import Aux from '../../hoc/Auxilary';
//import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <main>
            {props.children}
        </main>
        <Footer/>
    </Aux>
);

export default layout;
