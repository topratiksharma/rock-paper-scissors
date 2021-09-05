import * as React from 'react';
import { Component } from 'react';

interface HeaderProps {
    
}
 
interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    // state = { :  }
    render() { 
        return (<h1>Header Component</h1>  );
    }
}
 
export default Header;