import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ConsulInventario = () => {
    const [inventarios, setInventarios] = useState([]);

    useEffect(() => {
        getInventarios();
    }, []);
    const getInventarios = () => {
        axios.get("http://localhost:8086/api/inventario/all")
            .then((response) => {
                setInventarios(response.data.data);
            })
            .catch((error) => {
                console.error('Error al obtener los inventarios:', error);
            });
    };

    return (
        <div>
            <h1>Inventario</h1>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Fecha de Vencimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {inventarios.map((inventario, index) => (
                        <tr key={index}>
                            <td>{inventario.producto}</td>
                            <td>{inventario.cantidad_producto}</td>
                            <td>{inventario.fecha_vencimiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
