import React from 'react'

export const CaracteristicsForm = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Formulario de Especificaciones del Equipo</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="processor" className="form-label">Procesador</label>
                                    <input type="text" className="form-control" id="processor" placeholder="Ej: Intel Core i7, AMD Ryzen 5" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ram" className="form-label">Memoria RAM</label>
                                    <input type="number" className="form-control" id="ram" placeholder="Cantidad en GB" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="storage" className="form-label">Almacenamiento</label>
                                    <input type="text" className="form-control" id="storage" placeholder="Ej: 500GB SSD, 1TB HDD" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gpu" className="form-label">Tarjeta Gráfica (si aplica)</label>
                                    <input type="text" className="form-control" id="gpu" placeholder="Ej: Nvidia GTX 1650, Integrada" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="usage" className="form-label">Uso del Equipo</label>
                                    <select className="form-select" id="usage" required>
                                        <option value="">Selecciona el uso del equipo</option>
                                        <option value="oficina">Oficina / Tareas diarias</option>
                                        <option value="gaming">Juegos</option>
                                        <option value="edicion">Edición de Video/Imagen</option>
                                        <option value="desarrollo">Desarrollo de Software</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
