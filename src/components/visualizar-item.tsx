/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent } from 'react';
import axiosInstance from '../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';

interface Item {
    id: string;
    name: string;
    description: string;
}



const VisualizarItem: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const itemApi = location.state?.item as Item;
    const [item, setItem] = useState<Item>({ ...itemApi });

    return (
        <div className="container mt-5">
            <h2 className="fw-bold mb-2">Editar Item com id {itemApi.id}</h2>
            <form>
                <div className="form-outline form-white mb-3">
                    <label htmlFor="name">Id do Item:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        value={item.id}
                        disabled={true}
                    />
                </div>
                <div className="form-outline form-white mb-3">
                    <label htmlFor="name">Nome do Item:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={item.name}
                        disabled={true}
                    />
                </div>
                <div className="form-outline form-white mb-3">
                    <label htmlFor="description">Descrição do Item:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={item.description}
                        disabled={true}
                    />
                </div>
                <a className="btn btn-secondary" href="/">
                    Voltar
                </a>
            </form>
        </div>
    );
};

export default VisualizarItem;

