import React from "react";
import { useState } from "react";

const Modal = ({ open, onClose, product, images, selectedImage, setSelectedImage }) => {
    if (!open) return null;
    const clickOnImage = (index) => {
        setSelectedImage(index);
    };

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
                        <div>
                            <img
                                className="modal-img"
                                src={process.env.PUBLIC_URL + images[selectedImage]}
                                alt={product?.name}
                            />
                            <div className="">
                                {images && images.length ? (
                                    images.map((image, index) => {
                                        return (
                                            <img
                                                className={`modal-img-all ${index == selectedImage ? "selected-image" : ""
                                                    }`}
                                                src={process.env.PUBLIC_URL + image}
                                                alt={product?.name}
                                                onClick={() => clickOnImage(index)}
                                            />
                                        );
                                    })
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
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
