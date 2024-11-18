import React from "react";

interface Steps {
    id: number;
    description: string;
}

interface ItemProps {
    title: string;
    description: string;
    steps: Array<Steps>;
}

export const Item = ({ title, description, steps }: ItemProps) => {
    const safeId = title.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");

    return (
        <div className={`accordion-item border-start border-4 border-${safeId}`}>
            <h2 className="accordion-header" id={`heading${safeId}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${safeId}`}
                    aria-expanded="false"
                    aria-controls={`collapse${safeId}`}
                >
                    <i className={`bi bi-${safeId.toLowerCase()}`}></i> {title}
                </button>
            </h2>
            <div
                id={`collapse${safeId}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${safeId}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <h5>Description</h5>
                    {description}
                    <h6 className="mt-3">Pasos de Instalación</h6>
                    <ol>
                        {steps.map((stp: Steps) => (
                            <li key={stp.id}>{stp.description}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
