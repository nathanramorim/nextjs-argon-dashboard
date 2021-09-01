import React from 'react';

// reactstrap components
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
} from 'reactstrap';
// layout for this page
import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';
// core components
import Header from 'components/Headers/Header.js';
import DataTable from '../components/DataTables/DataTable';

const columns = [
	{ name: 'name', label: 'Nome' },
	{ name: 'company', label: 'Empresa' },
	{ name: 'city', label: 'Cidade' },
	{ name: 'state', label: 'Estado' },
];

const data = [
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Jefferson', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
	{ name: 'Nathan', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
];

const options = {
	filterType: 'checkbox',
};
const title = 'Employed DataTables';
function Sayonara() {
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<DataTable
							title={title}
							data={data}
							columns={columns}
							options={options}
						/>
					</div>
				</Row>
			</Container>
		</>
	);
}

Sayonara.layout = Auth;

export default Sayonara;
