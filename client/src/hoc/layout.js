import React, { Component } from 'react';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import DynamicScrollToTop from '../components/utils/dynamicScrollToTop';

class Layout extends Component {
    render() {
        return (
            <div>
                < DynamicScrollToTop />
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;