import React from "react";
import { useLocation } from "react-router-dom";
import { Item } from "components/Recomendations/Item";

interface Steps{
    id: number;
    description: string;
}

interface Recommendation {
    so: string;
    description: string;
    steps: Array<Steps>;
}

export const Recomendation = () => {
    const location = useLocation();
    const { recommendations } = location.state || { recommendations: [] };

    console.log("Respuesta recibida desde el formulario:", recommendations);

    if (!Array.isArray(recommendations) || recommendations.length === 0) {
        return <p>No se encontraron recomendaciones.</p>;
    }

    return (
        <div className="accordion" id="accordionExample">
            <h2>Sistemas operativos Recomendados</h2>
            {recommendations.map((rec: Recommendation, index: number) => (
                <Item key={index} title={rec.so} description={rec.description} steps={rec.steps}/>
            ))}
        </div>
    );
};
