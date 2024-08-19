/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent } from 'react';
import axiosInstance from '../api/axios';

interface Item {
  name: string;
  description: string;
}

const InserirItem: React.FC = () => {
  const [item, setItem] = useState<Item>({ name: '', description: '' });
  const [isValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/items', item);
      setMessage('Item inserido com sucesso!');
      alert(message);
      console.log('Resposta da API:', response.data);
    } catch (error) {
      setMessage('Erro ao inserir o item.');
      alert(message);
      console.error('Erro:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-2">Inserir novo Item</h2>
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

export default InserirItem;

