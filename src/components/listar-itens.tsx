// src/components/HomeAdministrador.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Item {
  id: number;
  name: string;
  description: string;
}

const ListarItens: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Substitua pela URL da sua API
    axios.get('http://localhost:3000/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens:', error);
      });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`);
      setItems(prevItems => prevItems.filter(item => item.id !== id));
      alert('Item deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      alert('Erro ao deletar o item.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border bg-dark rounded-4 p-4" style={{ width: '50%' }}>
        <h2 className="fw-bold text-white">Lista de Itens</h2>
        <Link to="/inserir-item" className="btn btn-primary">Inserir Item</Link>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Visualizar</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><Link to="/visualizar-item" state={{ item }}><i className="bi bi-eye" style={{ color: 'white' }}/></Link></td>
                <td><Link to="/editar-item" state={{ item }}><i className="bi bi-pencil-fill" style={{ color: 'blue' }}/></Link></td>
                <td>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    className="btn btn-danger"
                  >
                    <i className="bi bi-x-octagon" style={{ color: 'white' }}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarItens;

