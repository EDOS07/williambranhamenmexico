import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    setLoading(true);
    fetch("/api/endpoint") 
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los datos");
        setLoading(false);
      });
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        <AiOutlineClose
          size={24}
          className="absolute top-3 right-3 cursor-pointer hover:text-red-500"
          onClick={closeModal}
        />
        <h2 className="text-xl font-semibold mb-4">Datos del API</h2>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <div>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Nombre:</strong> {data.nombre}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
