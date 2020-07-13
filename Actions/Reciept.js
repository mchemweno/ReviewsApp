const Reciept=() => {
    return {
        type: 'Reciept',
        payload:{
           businessId,
           ownerId,
           productIds,
           date,
           description
        }
    }
};

export default Reciept;

