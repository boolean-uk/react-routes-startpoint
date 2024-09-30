function ProductsPage({ products }) {
    return (
        <main>
            <h2>Products</h2>
            <div>
                <h1>Products Data</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.type}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ProductsPage