import React from 'react';
import { Table } from 'reactstrap';

const DefaultTable = ({ children }) => (
    <div>
        <Table size="sm" className="mb-0">
            {children}
        </Table>
    </div>
);

export default DefaultTable
