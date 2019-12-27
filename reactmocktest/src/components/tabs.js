import React from 'react';
import Tab from './tab.js';

class Tabs extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {activeTabe : this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab:tab});
    }

    render() {
        const {
            onClickTabItem, 
            props: {
                children,
            },
            state : {
                activeTab,
            }
        } = this; 

        return (
            <div className = "tabs">
                <ol className = "tab-list">
                    {children.map((child) => {
                        const{label} = child.props;
                        return (
                            <Tab 
                                activeTab =  {activeTab}
                                key = {label}
                                label = {label}
                                onClick = {onClickTabItem} />
                        );
                    })}
                </ol>
                <div className = "tab-conent">
                    {children.map((child)=>{
                        if(child.props.label === activeTab)
                        return child.props.children;
                        return "";
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs; 