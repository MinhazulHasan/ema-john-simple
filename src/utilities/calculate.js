const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
};

const getShipping = products => {
    const reducer = (previous, current) => previous + current.shipping;
    const total = products.reduce(reducer, 0);
    return total;
};

export {
    getTotalPrice as getTotal,
    getShipping
};