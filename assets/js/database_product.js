function getDataProduct() {
    const staticImgUrl = "/project06/assets/img/products/";
    const autoId = true;
    const fixedNumber = 2;

    const displayAs = {
        currency: "$",
        type: "Available types:",
        sweetness: "Sweetness levels:",
        extra: "Available extras:",
        free: "Free",
        staticDescription: "Product default description. Product default description. Product default description.",
        staticShortDescription: "Some short description. Some short description. ",
        categories: {
            sp: { name: "Specialty", child: { mt: "Milk Tea", ss: "Sea Salt", ft: "Fruit Tea" } },
            cf: { name: "Coffee", child: { tc: "Traditinal Coffee", cc: "Classic Coffee" } },
            bnc: { name: "Blended Non-caffein" },
            bb: { name: "Blended Beverage" },
            sm: { name: "Smoothie", child: { test: "This is for test" } },
            unknown: { name: "Unknown" },
        },
    };

    let items = [];
    /**   Import your products below
     *    Import your products below
     *    Import your products below
     */
    items.push(
        new Product({
            name: "Oolong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            description_short: "This has a lot of text to show that it will only show 3 rows of text. This has a lot of text to show that it will only show 3 rows of text.",
            category: {
                name: "sp",
                child: "mt",
            },
            imgs: {
                /**
                 * Must have all these two, if you are using your img, in your source, it will use
                 * the staticImgUrl above. For ex:
                 * staticImgUrl = "/img/product/"
                 * cover: "teaImg.jpg"
                 * ==> /img/product/teaImg.jpg
                 *
                 * Otherwise, if you do putting a link such as https://..., you should have this option enabled
                 * noStaticCover : true
                 * noStaticPng : true
                 *
                 *  */
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
                // noStaticCover : true,
                // noStaticPng : true,
            },
            type: [
                // Put at least one option, don't leave it empty
                {
                    name: "Hot",
                    short: "H",
                    // must have "short" option in "type"
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                // Can leave it empty
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                // Can leave it empty
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Longbong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "cf",
                child: "tc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Longbong Milk Tea 2",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "cf",
                child: "tc",
            },
            imgs: {
                png: "https://www.nicepng.com/png/full/115-1152454_cup-mug-coffee-png-image-coffee-png.png",
                cover: "https://www.nicepng.com/png/full/115-1152454_cup-mug-coffee-png-image-coffee-png.png",
                noStaticPng: true,
                noStaticCover: true,
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Longbong Milk Tea 3",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "cf",
                child: "cc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Longbong Milk Tea 4",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "cf",
                child: "cc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Longbong Milk Tea 5",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "cf",
                child: "tc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 23.3,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 2.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 2",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 3",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 4",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 5",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 6",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 7",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 8",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Kanglong Milk Tea 9",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bnc",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 3,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Oolong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bb",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Oolong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bb",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Oolong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bb",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Oolong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                name: "bb",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Oolong Milk Tea",
            description: "This is description for Oolong Milk Tea",
            category: {
                child: "test",
                name: "sm",
            },
            imgs: {
                cover: "Sea salt Jasmine.jpg",
                png: "Sea salt Jasmine.png",
            },
            type: [
                {
                    name: "Hot",
                    short: "H",
                    price: 4.95,
                },
                {
                    name: "Cold Regular",
                    short: "R",
                    price: 5.45,
                },
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
                {
                    name: "Longans",
                    price: 1,
                },
                {
                    name: "Lychees ",
                    price: 1,
                },
                {
                    name: "Peaches",
                    price: 1,
                },
                {
                    name: "Sea Salt",
                    price: 0.75,
                },
                {
                    name: "Tea 125%",
                    price: 0.5,
                },
            ],
        })
    );
    items.push(
        new Product({
            name: "Signature Coffee Milk Tea",
            description: "",
            category: {
                child: "test",
                name: "sm",
            },
            imgs: {
                cover: "/project06/assets/img/products/Sea salt Jasmine.jpg",
                png: "/project06/assets/img/products/Sea salt Jasmine.png",
                noStaticCover: true,
                noStaticPng: true,
            },
            type: [
                {
                    name: "Cold Large",
                    short: "L",
                    price: 5.45,
                },
            ],
            sweetness: [
                {
                    name: "Sweetness 100%",
                },
                {
                    name: "Sweetness 125%",
                },
                {
                    name: "Sweetness 50%",
                },
            ],
            extra: [
                {
                    name: "Crystal Boba",
                    price: 0.75,
                },
                {
                    name: "Flan Bits",
                    price: 1,
                },
            ],
        })
    );

    /**   Notice above only, don't mind the codes below
     *    Notice above only, don't mind the codes below
     *    Notice above only, don't mind the codes below
     */
    // _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
    var u = document.querySelector('script[src$="database_product.js"]');
    if (u) {
        u.remove();
    }
    return items;
    function Product(obj) {
        if (autoId) {
            this.id = _product_itemsAutoId++;
        }

        this.name = obj.name;

        this.noMoney = displayAs.free;

        if (!obj.description) {
            obj.description = displayAs.staticDescription;
        }
        this.des = obj.description;
        this.des_short = obj.description_short || displayAs.staticShortDescription;

        if (obj.imgs.noStaticCover) {
            this.cover = obj.imgs.cover;
        } else {
            this.cover = staticImgUrl + obj.imgs.cover;
        }
        if (obj.imgs.noStaticPng) {
            this.png = obj.imgs.png;
        } else {
            this.png = staticImgUrl + obj.imgs.png;
        }

        this.fixed = fixedNumber;

        this.type = obj.type;
        this.typeText = displayAs.type;

        if (obj.sweetness && obj.sweetness[0]) {
            this.hasSweetness = true;
            this.sweetness = obj.sweetness;
            this.sweetnessText = displayAs.sweetness;
        }

        if (obj.extra && obj.extra[0]) {
            this.hasExtra = true;
            this.extra = obj.extra;
            this.extraText = displayAs.extra;
        }

        if (obj.category && displayAs.categories[obj.category.name]) {
            this.category = displayAs.categories[obj.category.name].name;

            if (obj.category.child) {
                if (displayAs.categories[obj.category.name].child) {
                    this.category_sub = displayAs.categories[obj.category.name].child[obj.category.child];
                } else {
                    this.category_sub = displayAs.categories.unknown.name;
                }
            }
        } else {
            this.category = displayAs.categories.unknown.name;
        }

        this.unknown = displayAs.categories.unknown.name;

        this.currency = displayAs.currency;
    }
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let _product_itemsAutoId = 0;
const _product_items = getDataProduct();
