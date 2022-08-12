import React from 'react'
import { Link } from 'react-router-dom'
import ProductType from '../assets/json/product-type.json'


function OurProducts() {
    if (Object.keys(ProductType).length > 0) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title" style={{ textAlign: 'center' }}>
                                <h2>Our Products</h2>
                            </div>
                        </div>
                    </div>

                    <div className="banner-3-area mt-30px mb-50px">
                        <div className="container">
                            <div className="row">
                                {Object.entries(ProductType).map((val, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30" key={index}>
                                            <div className="banner-wrapper banner-box">
                                                <Link to={`/products/${val[0]}`}>
                                                    <img src={process.env.PUBLIC_URL + val[1].img} alt="" />
                                                </Link>
                                                <div className="desc-listcategoreis">
                                                    <div className="name_categories">
                                                        <h4>{val[0]}</h4>
                                                    </div>
                                                    <span className="number_product">{val[1].list.length} Products</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OurProducts