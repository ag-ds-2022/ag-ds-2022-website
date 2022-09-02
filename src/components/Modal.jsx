import React from "react";

const Modal = ({ open, onClose, product }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className="overlay">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="modalContainer"
            >
                <div className="modal-content-container">
                    <div>
                        <p className="closeBtn" onClick={onClose}>
                            X
                        </p>
                        <div className="product-details-decs">
                            <div className="product-details-decs-header">
                                <h2 className="product-details-link">{product.name}</h2>
                            </div>
                            <p className="inner-link">
                                <span>{product.type}</span>
                                <span className="ml-2">
                                    {product.inStock ? (
                                        <span className="in-stock-btn">In Stock</span>
                                    ) : (
                                        <span className="out-of-stock">Out of Stock</span>
                                    )}
                                </span>
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="modal-img-desc-container">
                        <img className="modal-img" src={process.env.PUBLIC_URL + product?.img} alt={product?.name} />
                        <div className="modalRight">
                            <p className="content">{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
