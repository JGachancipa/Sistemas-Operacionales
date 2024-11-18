import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Recomendation } from "components/Recomendations/Recomendation"; // Asegúrate de importar tu componente Recomendation
import { useNavigate } from "react-router-dom";

// Definimos los tipos para los datos del formulario
interface FormData {
    processor: string;
    ram: number;
    storage: string;
    gpu?: string; // Campo opcional
    usage: string;
}

export const CaracteristicsForm = () => {
    const [recommendations, setRecommendations] = useState<{ title: string, content: string }[]>([]);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const apiURL = "http://localhost:8080/api/system-recommendation";
            const response = await axios.post(apiURL, data);
            setRecommendations(response.data);
            navigate("/recommendations", { state: { recommendations: response.data.choices } });
        } catch (error: any) {
            console.error("Error al enviar los datos:", error.message);
            alert("Hubo un problema al enviar el formulario");
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow border-0">
                        <div className="card-body p-5">
                            <h5 className="card-title text-center mb-4 text-primary">
                                📋 Formulario de Especificaciones del Equipo
                            </h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="processor" className="form-label">
                                        <i className="bi bi-cpu"></i> Procesador
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control rounded-pill ${errors.processor ? "is-invalid" : ""}`}
                                        id="processor"
                                        placeholder="Ej: Intel Core i7, AMD Ryzen 5"
                                        {...register("processor", { required: "El procesador es obligatorio" })}
                                    />
                                    {errors.processor && (
                                        <div className="invalid-feedback">{errors.processor.message}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ram" className="form-label">
                                        <i className="bi bi-memory"></i> Memoria RAM
                                    </label>
                                    <input
                                        type="number"
                                        className={`form-control rounded-pill ${errors.ram ? "is-invalid" : ""}`}
                                        id="ram"
                                        placeholder="Cantidad en GB"
                                        {...register("ram", {
                                            required: "La memoria RAM es obligatoria",
                                            valueAsNumber: true,
                                        })}
                                    />
                                    {errors.ram && (
                                        <div className="invalid-feedback">{errors.ram.message}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="storage" className="form-label">
                                        <i className="bi bi-hdd"></i> Almacenamiento
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control rounded-pill ${errors.storage ? "is-invalid" : ""}`}
                                        id="storage"
                                        placeholder="Ej: 500GB SSD, 1TB HDD"
                                        {...register("storage", { required: "El almacenamiento es obligatorio" })}
                                    />
                                    {errors.storage && (
                                        <div className="invalid-feedback">{errors.storage.message}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="gpu" className="form-label">
                                        <i className="bi bi-gpu-card"></i> Tarjeta Gráfica (si aplica)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        id="gpu"
                                        placeholder="Ej: Nvidia GTX 1650, Integrada"
                                        {...register("gpu")}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="usage" className="form-label">
                                        <i className="bi bi-laptop"></i> Uso del Equipo
                                    </label>
                                    <select
                                        className={`form-select rounded-pill ${errors.usage ? "is-invalid" : ""}`}
                                        id="usage"
                                        {...register("usage", { required: "Selecciona el uso del equipo" })}
                                    >
                                        <option value="">Selecciona el uso del equipo</option>
                                        <option value="oficina">Oficina / Tareas diarias</option>
                                        <option value="gaming">Juegos</option>
                                        <option value="edicion">Edición de Video/Imagen</option>
                                        <option value="desarrollo">Desarrollo de Software</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    {errors.usage && (
                                        <div className="invalid-feedback">{errors.usage.message}</div>
                                    )}
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow">
                                        🚀 Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
