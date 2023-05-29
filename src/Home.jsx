import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contentt from './components/Contentt';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <button className='Creat'> Create</button>
            <Contentt>
            </Contentt>
            <Footer></Footer>
        </div>
    );
};

export default Home;