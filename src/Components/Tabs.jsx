import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("Content 1")

    const handleTabClick = (tab) => {

        setActiveTab(tab)

    }


    return (
        <div>
            <div className='tabs'>
                <Tab label="Content 1" activeTab={activeTab} onClick={handleTabClick} />
                <Tab label="Content 2" activeTab={activeTab} onClick={handleTabClick} />
                <Tab label="Content 3" activeTab={activeTab} onClick={handleTabClick} />
            </div>

            <div className='tab-content'>
                <TabContent activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Tabs;