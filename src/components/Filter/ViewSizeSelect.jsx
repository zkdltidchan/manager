import React, { Component } from 'react';

import Filter from "./index";

const options = [
    {
        id: "small",
        name: "small",
        value: "50%",
    }, {
        id: "middle",
        name: "middle",
        value: "80%",
    }, {
        id: "large",
        name: "large",
        value: "100%",
    },
]

const ViewSizeSelect = ({ onChange, defaultChecked }) => {
    return (
        <div className="filter-container">
            <Filter
                name="view-size-select"
                options={options}
                onChange={onChange}
                defaultChecked={defaultChecked}
            />
        </div>
    );
}

export default ViewSizeSelect;