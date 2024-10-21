import React, { useRef, useState, useEffect } from 'react';
import 'styles/Recomendations/Recomendations.css';

export const Recomendation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Esto ajusta el contenido para que se muestre o oculte con suavidad
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen
                ? `${contentRef.current.scrollHeight}px`
                : '0px';
        }
    }, [isOpen]); // Se ejecuta cada vez que isOpen cambia

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0 d-flex justify-content-between align-items-center">
                            Windows
                            <button
                                className="btn btn-light btn-sm"
                                onClick={toggleCollapse}
                                aria-expanded={isOpen}
                                aria-controls="collapseCard"
                            >
                                {isOpen ? 'Mostrar menos' : 'Mostrar más'}
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseCard"
                        className={`collapse ${isOpen ? 'show' : ''}`}
                        style={{
                            overflow: 'hidden',
                            transition: 'max-height 0.5s ease',
                        }}
                    >
                        <div className="card-body" ref={contentRef}>
                            <ol>
                                <li>Paso 1</li>
                                <li>Paso 2</li>
                                <li>Paso 3</li>
                                <li>Paso 4</li>
                                <li>Paso 5</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
