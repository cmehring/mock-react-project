import React from 'react';

class Tab extends React.Component {
    
    //sets the functionality when clicking the tab
    onClick = () => {
        const {label, onClick} = this.props;
        onClick(label); 
    }

    render() {
        
        const {
            onClick, 
            props : {
                activeTab,
                label,
            },
        } = this;
        
        let className = 'tab-list-item';
        if(activeTab === label){
            className += ' tab-list-active';
        }

        return (
            <li className = {className} onClick = {onClick}>
                   {label}
            </li>
        );
    }
    
}

export default Tab;