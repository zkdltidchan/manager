import PropTypes from 'prop-types';
import Checkbox from '../CheckBox/CheckBox';

/**
 * @param { import('react-table').Hooks } hooks
 */
export default function rowSelectPlugin(hooks) {
    hooks.visibleColumns.push(columns => [
        { id: 'checkbox', Header, Cell, maxWidth: '40px' },
        ...columns,
    ]);
}

function Header(props) {
    const { getToggleAllRowsSelectedProps, rows, onSelect } = props;
    const { indeterminate, checked, onChange, ...restProps } = getToggleAllRowsSelectedProps({ title: undefined });

    function handleChange(e) {
        const checked = e.target.checked;

        if (checked) {
            onSelect(rows.map(({ id }) => id));
        }
        else {
            onSelect([]);
        }

        onChange(e);
    }

    return (
        <Checkbox isIndeterminate={ indeterminate } isChecked={ checked } onChange={ handleChange } { ...restProps } />
    );
}

Header.propTypes = {
    getToggleAllRowsSelectedProps: PropTypes.func,
    rows: PropTypes.arrayOf(PropTypes.shape()),
    onSelect: PropTypes.func.isRequired,
};

Header.defaultProps = {
    getToggleAllRowsSelectedProps: undefined,
    rows: {},
};

function Cell(props) {
    const { row: { getToggleRowSelectedProps, id: rowId }, selectedFlatRows, onSelect } = props;
    const { indeterminate, checked, onChange, ...restProps } = getToggleRowSelectedProps({ title: undefined });
    const selectedRowIds = selectedFlatRows.map(({ id }) => id);

    function handleChange(e) {

        if (selectedFlatRows.some(({ id }) => id === rowId)) {
            onSelect(selectedRowIds.filter(id => id !== rowId));
        }
        else {
            onSelect([...selectedRowIds, rowId]);
        }

        onChange(e);
    }

    return (
        <Checkbox isIndeterminate={ indeterminate } isChecked={ checked } onChange={ handleChange } { ...restProps } />
    );
}

Cell.propTypes = {
    row: PropTypes.shape({
        getToggleRowSelectedProps: PropTypes.func,
        original: PropTypes.shape(),
        id: PropTypes.string,
    }).isRequired,
    selectedFlatRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onSelect: PropTypes.func.isRequired,
};