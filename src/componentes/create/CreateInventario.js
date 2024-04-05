import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateDate = () => {
    let navigate = useNavigate();

    const [inventario, setInventario] = useState({
        producto: "",
        cantidad_producto: "",
        fecha_vencimiento: "",
        id_entrada: "", // Asumiendo que id_entrada es el id del agendamiento
        id_salida: "" // Asumiendo que id_salida es el id del médico
    });

    const { producto, cantidad_producto, fecha_vencimiento, id_entrada, id_salida } = inventario;

    const onInputChange = (e) => {
        setInventario({ ...inventario, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8086/api/inventario/create", inventario); // Ruta para crear un inventario
        navigate("/DashboardInventario"); // Redirigir a la página de dashboard de inventario después de crear la cita
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
                                <label>Id del Agendamiento</label>
                                <input className="form-control" onChange={onInputChange} value={id_entrada} type="number" name="id_entrada" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Id del Médico</label>
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
