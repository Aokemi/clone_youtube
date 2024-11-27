import React from 'react';

const TabContent = ({ activeTab }) => {

    const content = {
        "Content 1" : "Content from category 1",
        "Content 2" : "Content from category 2",
        "Content 3" : "Content from category 3"
    }

    return (
        <div>
            {content[activeTab]}
        </div>
    );
};

export default TabContent;