import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateDate = () => {
    let navigate = useNavigate();

    const [inventario, setInventario] = useState({
        producto: "",
        cantidad_producto: "",
        fecha_vencimiento: "",
        id_entrada: "", 
        id_salida: "" 
    });

    const { producto, cantidad_producto, fecha_vencimiento, id_entrada, id_salida } = inventario;

    const onInputChange = (e) => {
        setInventario({ ...inventario, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8086/api/inventario/create", inventario); 
        navigate("/DashboardInventario");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="formulario-registro">
                        <h2>Crear inventario</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Producto</label>
                                <input className="form-control" onChange={onInputChange} value={producto} type="text" name="producto" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Cantidad</label>
                                <input className="form-control" onChange={onInputChange} value={cantidad_producto} type="number" name="cantidad_producto" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Fecha de Vencimiento</label>
                                <input className="form-control" onChange={onInputChange} value={fecha_vencimiento} type="date" name="fecha_vencimiento" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Entrada</label>
                                <input className="form-control" onChange={onInputChange} value={id_entrada} type="number" name="id_entrada" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Salida</label>
                                <input className="form-control" onChange={onInputChange} value={id_salida} type="number" name="id_salida" required />
                            </div>
                            <br />
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary">Registrar inventario</button>
                            </div>
                        </form>
                        <div id="mensajeError" className="mensaje-error"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
