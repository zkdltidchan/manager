import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Filter = ({ className, name, defaultChecked, options, onChange }) => {
    const cls = classNames({
        'choice-type': true,
        [`choice-type-${ name }`]: !!name,
        [className]: !!className,
    });
    return(
        <>
        {
            options.map(({ id, name, value }) => (
                <label key={ id } className={cls}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={cls}
                        value={ value }
                        defaultChecked={ id === defaultChecked }
                        onChange={ onChange }
                    />
                    <span className="choice-type-text">{ name }</span>
                </label>
            ))
        }
        
    </>
    )
};

Filter.propTypes = {
    // `defaultChecked` has to be one of ids
    defaultChecked: PropTypes.node.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.node.isRequired,
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]).isRequired,
        value: PropTypes.node.isRequired,
    })).isRequired,
    onChange: PropTypes.func,
};

Filter.defaultProps = {
    onChange: () => {},
};

export default Filter;



// const Cell = ({ children, className, name, ...props }) => {
//     const cls = classNames({
//         'cell': true,
//         [`cell-${ name }`]: !!name,
//         [className]: !!className,
//     });

//     return (
//         <div className={ cls } { ...props }>
//             <div className="cell-content">
//                 { children }
//             </div>
//         </div>
//     );
// };