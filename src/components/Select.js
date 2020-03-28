import React from 'react'

const Select = (props) => {

    const optionItems = props.countries.map((item) =>
        item === "Monde" ? <option defaultValue key={item}>{item}</option> : <option key={item}>{item}</option>
    )

    return (
        <div className="field has-addons has-addons-centered">
            <div className="control">
                <div className="select is-primary custom-select">
                    <select onChange={props.handleChange}>
                        {optionItems}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Select
