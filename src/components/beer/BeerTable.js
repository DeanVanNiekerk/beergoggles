import React from 'react';
import DefaultTable from '../DefaultTable';
import { Edit2, Trash2 } from 'react-feather';

const BeerTable = ({ beers, onEdit, onDelete, onSelect }) => (
    <div>
        <DefaultTable className="mb-0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th className="min">Edit</th>
                    <th className="min">Delete</th>
                </tr>
            </thead>
            <tbody>
                {beers.map(beer =>
                    <tr className="clickable" key={beer.id}>
                        <td onClick={() => onSelect(beer)}>{beer.id}</td>
                        <td onClick={() => onSelect(beer)}>{beer.name}</td>
                        <td className="text-center">
                            <Edit2 onClick={() => onEdit(beer.id)} className="text-success" size="18" />
                        </td>
                        <td className="text-center">
                            <Trash2 className="text-danger" size="18" onClick={() => onDelete(beer)} />
                        </td>
                    </tr>
                )} 
            </tbody>
        </DefaultTable>
    </div>
);

export default BeerTable
