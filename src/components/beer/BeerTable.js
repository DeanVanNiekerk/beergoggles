import React from 'react';
import DefaultTable from '../DefaultTable';
import { Edit2, Trash2 } from 'react-feather';

const BeerTable = ({ beers, onEdit, onDelete }) => (
    <div>
        <DefaultTable className="mb-0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {beers.map(beer =>
                    <tr key={beer.url}>
                        <td>{beer.name}</td>
                        <td>
                            <Edit2 onClick={() => onEdit(beer.url)} className="clickable text-success" size="18" />
                        </td>
                        <td>
                            <Trash2 className="clickable text-danger" size="18" onClick={() => onDelete(beer)} />
                        </td>
                    </tr>
                )} 
            </tbody>
        </DefaultTable>
    </div>
);

export default BeerTable
