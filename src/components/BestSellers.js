import React from 'react';
import BestSellersProduct from '../assets/json/best-sellers.json';

function BestSellers() {
    return (
        <>
            {
                (BestSellersProduct && BestSellersProduct?.bestSeller && BestSellersProduct?.bestSeller?.length) ?
                    <section className="best-sells-area mb-30px">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-title py-3" style={{ textAlign: 'center' }}>
                                        <h2>Best Sellers</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-bottom-area mt-35">
                                <div className="tab-content jump">
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                            {
                                                BestSellersProduct.bestSeller.map((val, index) => {
                                                    return (
                                                        <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
                                                            <article className="list-product">
                                                                <div className="img-block">
                                                                    <img className="first-img" src={process.env.PUBLIC_URL + val.img} alt="Wheat" />
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
                    </section>
                    :
                    <></>

            }



        </>
    )
}

export default BestSellers