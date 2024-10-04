export const calculateMRP = (price, discountPercentage) => {
    return (price / (1 - discountPercentage / 100)).toFixed(2);
};