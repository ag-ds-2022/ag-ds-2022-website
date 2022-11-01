import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductType from "../assets/json/product-type.json";
import Modal from "./Modal";

function ProductList() {
    const { product_name } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("");
    const [inStock, setInStock] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState({ list: [] });
    const [selectedImage, setSelectedImage] = useState(0);
    const [allImages, setAllImage] = useState([]);

    useEffect(() => {
        setData(ProductType[product_name]);
    }, [product_name]);

    const sorted = (value) => {
        let tempData = { ...data };
        tempData.list = tempData.list.sort((a, b) => {
            const isReversed = value === "AtoZ" ? 1 : value === "ZtoA" ? -1 : "";
            return isReversed * a.name.localeCompare(b.name);
        });
        setSortType(value);
        setData(tempData);
    };

    const searchHandler = (value) => {
        let tempData = { ...data };
        tempData.list = ProductType[product_name].list
            .filter((val) => !inStock || val.inStock)
            .filter((val) => value === "" || val.name.toLowerCase().includes(value.toLowerCase()));
        setSearchTerm(value);
        setData(tempData);
    };

    const stockFilter = (checked) => {
        let tempData = { ...data };
        if (checked) {
            tempData.list = tempData.list.filter((val) => val.inStock);
        } else {
            tempData.list = ProductType[product_name].list.filter(
                (val) => searchTerm === "" || val.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setInStock(checked);
        setData(tempData);
    };

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {data && data?.bannerImage && (
                <div className="banner-area-2" style={{ marginTop: "0px" }}>
                    <div>
                        <div className="">
                            <div className="col-md-12">
                                <div className="banner-inner">
                                    <img src={process.env.PUBLIC_URL + data.bannerImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="shop-top-bar justify-content-between">
                            <div>
                                <div className="mb-res-sm-15 mx-3">
                                    <div id="dtBasicExample_filter" className="dataTables_filter">
                                        <input
                                            type="search"
                                            className="form-control form-control-sm"
                                            placeholder="Search Product"
                                            aria-controls="dtBasicExample"
                                            value={searchTerm}
                                            onChange={(e) => searchHandler(e.target.value)}
                                            style={{ minWidth: "250px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="dataTables_length bs-select mx-3" id="dtBasicExample_length">
                                    <select
                                        name="dtBasicExample_length"
                                        aria-controls="dtBasicExample"
                                        className="custom-select custom-select-sm form-control form-control-sm"
                                        value={sortType}
                                        onChange={(e) => sorted(e.target.value)}
                                        style={{ minWidth: "160px" }}
                                    >
                                        <option value="" hidden disabled>
                                            --Sort By Name--
                                        </option>
                                        <option value="AtoZ">A to Z</option>
                                        <option value="ZtoA">Z to A</option>
                                    </select>
                                </div>
                                <div className="mx-3 mt-1 d-flex">
                                    <label>InStock:&nbsp; </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        className="in-stock"
                                        onChange={(e) => stockFilter(e.target.checked)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="shop-bottom-area mt-35">
                            <div className="tab-content jump">
                                <div id="shop-1" className="tab-pane active">
                                    <div className="row">
                                        {!data?.list?.length ? (
                                            <div className="container">
                                                <div className="section-title" style={{ textAlign: "center" }}>
                                                    <h2>Product Not Available</h2>
                                                </div>
                                            </div>
                                        ) : (
                                            data.list.map((val, index) => {
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
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    );
}

export default ProductList;
