import React, { Fragment, useEffect, useState } from 'react'
import { GET } from '../../Services/ApiController/ApiController';
import ProductList from '../../Components/Molecules/ProductList';

const Homepage = () => {

    let url = "https://dummyjson.com/products?skip=0&limit=200"

    const [Productdata, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchinput, setSearchInput] = useState("")
    const [loading, setLoading] = useState(true)

    const GetAllProductList = async () => {
        let params = {
            skip: 0,
            limit: 200
        }
        try {
            const response = await GET(url, params)
            setProductData(response?.products)
            setFilteredProducts(response?.products)
            setLoading(false)
        } catch (error) {
            console.log("Error :", error);
            setLoading(false)
        }
    }

    const HandleSearch = (searchtext) => {
        setSearchInput(searchtext)

        if (searchtext) {
            let filteredSearchInput = Productdata?.filter((item) => {
                return Object.values(item).some((value) =>
                    String(value).toLowerCase().includes(searchtext.toLowerCase())
                );
            });
            setFilteredProducts(filteredSearchInput)
        } else {
            setFilteredProducts(Productdata)
        }

    }

    useEffect(() => {
        GetAllProductList()
    }, [])

    console.log(loading);

    return (
        <>
            <div className='display-flex space-between'>
                <h1>Product List</h1>
                <div>
                    <input className='SearchInput' placeholder='Search...' value={searchinput} onChange={(e) => { HandleSearch(e.target.value) }} />
                </div>
            </div>
            {
                loading ? (
                    <div style={{ height: '300px', width: '100%', textAlign: 'center', alignContent: 'center' }}>
                        Loading ....
                    </div>
                ) : (
                    filteredProducts?.length > 0 ? (
                        <div className='grid-container'>
                            {
                                filteredProducts?.map((item, index) => {
                                    return (
                                        <Fragment key={item?.id}>
                                            <ProductList Product={item} />
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div style={{ height: '300px', width: '100%', textAlign: 'center', alignContent: 'center' }}>
                            No Products found
                        </div>
                    )
                )
            }
        </>
    )
}

export default Homepage