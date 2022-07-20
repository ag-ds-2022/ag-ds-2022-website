import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductType from '../assets/json/product-type.json'

function ProductList() {
    const { product_name } = useParams();
    const [searchTerm, setSearchTerm] = useState('')
    const [sortType, setSortType] = useState('')
    const [inStock, setInStock] = useState(false)
    const [data, setData] = useState({ list: [] })

    useEffect(() => {
        setData(ProductType[product_name])
    }, [product_name])

    const sorted = (value) => {
        let tempData = { ...data }
        tempData.list = tempData.list.sort((a, b) => {
            const isReversed = (value === 'AtoZ') ? 1 : (value === 'ZtoA') ? -1 : '';
            return isReversed * a.name.localeCompare(b.name);
        })
        setSortType(value);
        setData(tempData);
    }

    const searchHandler = (value) => {
        debugger;
        let tempData = { ...data }
        tempData.list = ProductType[product_name].list.filter((val) =>
            !inStock || val.inStock
        ).filter((val) =>
            value === "" ||
            val.name.toLowerCase().includes(value.toLowerCase())
        )
        setSearchTerm(value);
        setData(tempData);
    }

    const stockFilter = (checked) => {
        let tempData = { ...data }
        if (checked) {
            tempData.list = tempData.list.filter((val) =>
                val.inStock
            )
        }
        else {
            tempData.list = ProductType[product_name].list.filter((val) =>
                searchTerm === "" ||
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        setInStock(checked);
        setData(tempData);
    }

    return (
        <>
            <div className="banner-area-2" style={{ marginTop: "0px" }}>
                <div>
                    <div className="">
                        <div className="col-md-12">
                            <div className="banner-inner">
                                <img src="images/banner-image/cloth-heading.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">

                        <div className="shop-top-bar justify-content-end">
                            <div className="mb-res-sm-15 mx-3">
                                <div id="dtBasicExample_filter" className="dataTables_filter">
                                    <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="dtBasicExample" value={searchTerm} onChange={e => searchHandler(e.target.value)} />
                                </div>
                            </div>
                            <div className="dataTables_length bs-select mx-3" id="dtBasicExample_length">
                                <select name="dtBasicExample_length" aria-controls="dtBasicExample" className="custom-select custom-select-sm form-control form-control-sm" value={sortType} onChange={(e) => sorted(e.target.value)}>
                                    <option value="" hidden disabled>--Sort By--</option>
                                    <option value="AtoZ">A to Z</option>
                                    <option value="ZtoA">Z to A</option>
                                </select>

                            </div>
                            <div className="mx-3 mt-1 d-flex">
                                <label>InStock:&nbsp; </label><br />
                                <input type="checkbox" className="in-stock" onChange={(e) => stockFilter(e.target.checked)} />
                            </div>
                        </div>

                        <div className="shop-bottom-area mt-35">
                            <div className="tab-content jump">
                                <div id="shop-1" className="tab-pane active">
                                    <div className="row">
                                        {
                                            (!data?.list?.length) ?
                                                <div className="container">
                                                    <div className="section-title" style={{ textAlign: "center" }}>
                                                        <h2>Product Not Available</h2>
                                                    </div>
                                                </div>
                                                :
                                                data.list.map((val, index) => {
                                                    return (
                                                        <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
                                                            <article className="list-product">
                                                                <div className="img-block">
                                                                    <img className="first-img" src={val.img} alt="Wheat" />
                                                                    <div className="quick-view">
                                                                        <a className="quick_view" href="Grocery.html#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#wheatmodal">
                                                                            <i className="ion-ios-search-strong"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="product-decs">
                                                                    <h2 className="product-link">{val.name}</h2>
                                                                    <ul className="product-flag">
                                                                        {(val.inStock) ? <li className="new">In Stock</li> : <li className="out-of-stock">Out of Stock</li>}
                                                                    </ul>
                                                                    <hr />
                                                                    <p className="inner-link"><span>{val.type}</span></p>
                                                                </div>
                                                            </article>
                                                        </div>
                                                    )
                                                })
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="pro-pagination-style text-center">
                <ul>
                    <li>
                        <a className="prev" href="Grocery.html#"><i className="ion-ios-arrow-left"></i></a>
                    </li>
                    <li><a className="active" href="Grocery.html#">1</a></li>
                    <li><a href="Grocery.html#">2</a></li>
                    <li>
                        <a className="next" href="Grocery.html#"><i className="ion-ios-arrow-right"></i></a>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default ProductList