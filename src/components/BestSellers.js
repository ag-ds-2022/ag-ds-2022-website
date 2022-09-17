import React, { useState } from "react";
import BestSellersProduct from "../assets/json/best-sellers.json";
import Modal from "./Modal";

function BestSellers() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [selectedImage, setSelectedImage] = useState(0);
    const [allImages, setAllImage] = useState([]);

    const openProductDetailsModal = (product) => {
        setSelectedImage(0);
        let images = [];
        if (product?.img) {
            images.push(product?.img);
        }
        if (product?.imageList) {
            images = [...images, ...product?.imageList];
        }
        setAllImage(images);
        setSelectedProduct(product);
        setOpenModal(true);
    };

    return (
        <>
            {BestSellersProduct && BestSellersProduct?.bestSeller && BestSellersProduct?.bestSeller?.length ? (
                <>
                    <section className="best-sells-area">
                        <div className="container">
                            <div className="row mb-30px">
                                <div className="col-md-12">
                                    <div className="section-title py-5" style={{ textAlign: "center" }}>
                                        <h2 className="section-title-text">
                                            Best Selling <span>Products</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-bottom-area ">
                                <div className="tab-content jump">
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                            {BestSellersProduct.bestSeller.map((val, index) => {
                                                return (
                                                    <div
                                                        className="col-xl-3 col-md-4 col-sm-6"
                                                        key={index}
                                                        onClick={() => openProductDetailsModal(val)}
                                                    >
                                                        <article className="list-product">
                                                            <div className="img-block">
                                                                <img
                                                                    className="first-img"
                                                                    src={process.env.PUBLIC_URL + val.img}
                                                                    alt={val.name}
                                                                />
                                                            </div>
                                                            <div className="product-decs">
                                                                <h2 className="product-link">{val.name}</h2>
                                                                <ul className="product-flag">
                                                                    {val.inStock ? (
                                                                        <li className="new">In Stock</li>
                                                                    ) : (
                                                                        <li className="out-of-stock">Out of Stock</li>
                                                                    )}
                                                                </ul>
                                                                <hr />
                                                                <p className="inner-link">
                                                                    <span>{val.type}</span>
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {openModal && (
                        <Modal
                            open={openModal}
                            onClose={() => {
                                setSelectedProduct(null);
                                setOpenModal(false);
                            }}
                            images={allImages}
                            selectedImage={selectedImage}
                            setSelectedImage={setSelectedImage}
                            product={selectedProduct}
                        />
                    )}
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default BestSellers;
