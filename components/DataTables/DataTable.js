import React from 'react';
// nodejs library to set properties for components
import { PropTypes } from 'prop-types';
//dashboard theme components
import { Row } from 'reactstrap';
//datatable component
import MUIDataTable from 'mui-datatables';

const DataTable = ({ title, data, columns, options }) => {
	return (
		<MUIDataTable
			title={title}
			data={data}
			columns={columns}
			options={options}
		/>
	);
};

DataTable.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(PropTypes.array).isRequired,
	columns: PropTypes.array.isRequired,
	options: PropTypes.object,
};

export default DataTable;
