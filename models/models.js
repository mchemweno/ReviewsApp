export class Product {
    constructor(
        categoryId,
        businessId,
        description,
        price,
        name,
        receiptId
    ) {
        this.categoryId = categoryId;
        this.businessId = businessId;
        this.description = description;
        this.price = price;
        this.name = name;
        this.receiptId = receiptId;

    }
};

export class User {
    constructor(
        firstName,
        lastName,
        email,
        profilePicture,
        phone,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profilePicture = profilePicture;
        this.phone = phone;

    }

}


export class Receipt {
    constructor(
        businessId,
        ownerId,
        productIds,
        date,
        description
    ) {
        this.businessId = businessId;
        this.ownerId = ownerId;
        this.productsIds = productIds;
        this.date = date;
        this.description = description;
    }
}

export class Category {
    constructor(
        name
    ) {
        this.name = name;
    }
}

export class Review {
    constructor(
        reviewerId,
        message,
        rating
    ) {
        this.reviewerId = reviewerId;
        this.message = message;
        this.rating = rating;
    }
}


export class Business {
    constructor(
        name,
        description,
        receiptIds,
        reviews
    ) {
        this.name = name;
        this.description = description;
        this.receiptIds = receiptIds;
        this.reviews = reviews;
    }

}
