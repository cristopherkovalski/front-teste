/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent } from 'react';
import axiosInstance from '../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';

interface Item {
  id: string;
  name: string;
  description: string;
}



const EditarItem: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itemApi = location.state?.item as Item;
  const [item, setItem] = useState<Item>({ ...itemApi });
  const [isValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axiosInstance.put(`/items/${item.id}`, item); 
        setMessage('Item atualizado com sucesso!');
        alert(message);
        console.log('Resposta da API:', response.data);
        navigate('/'); 
      } catch (error) {
        setMessage('Erro ao atualizar o item.');
        alert(message);
        console.error('Erro:', error);
      }
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-2">Editar Item com id {itemApi.id}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-outline form-white mb-3">
          <label htmlFor="name">Nome do Item:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={item.name}
            onChange={handleInputChange}
            required
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
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={!isValid}
        >
          Inserir
        </button>
        <a className="btn btn-secondary" href="/">
          Voltar
        </a>
      </form>
    </div>
  );
};

export default EditarItem;

