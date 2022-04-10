exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          sku: "XLH4P7t3er",
          name: "Vanilla Scented Candle",
          model: "v1",
          description: "Vanilla-scented candle, perfect for your living room.",
          release_date: "2020-11-30T08:00:00.000Z",
          price: "48.25",
          quantity_in_stock: 1500,
          weight_in_lbs: "2.30",
          main_imageUrl:
            "https://cdn.shopify.com/s/files/1/0923/3400/products/Vanilla-Prosperity-Candle-_The-Little-Market_LR.progressive.jpg?v=1609793278",
          category_id: 2,
        },
        {
          sku: "qomgqdXlNa",
          name: "Rabbit String Lights",
          model: "v1",
          description: "Super cute Rabbit lights!",
          release_date: null,
          price: 19.5,
          quantity_in_stock: 65,
          weight_in_lbs: 2,
          category_id: 1,
        },
        {
          sku: "qKqFPSlSas",
          name: "Rose Wine Decanter",
          model: "v1",
          description:
            "Maintains the taste and smell of the wine. Comes with an elegant rose-shaped brushed steel base.",
          release_date: "2020-11-30",
          price: 199.99,
          quantity_in_stock: 100,
          weight_in_lbs: 8.5,
          category_id: 2,
        },
        {
          sku: "Zr8zQ8SQmp",
          name: "Shake You Wake You Alarm Clock",
          model: "v1",
          description:
            "Alexa-controlled notes and reminders. Choose from 40 different alarm sounds.",
          release_date: "2020-11-30",
          price: 40.0,
          quantity_in_stock: 289,
          weight_in_lbs: 1,
          category_id: 1,
        },
        {
          sku: "giUGNvnn8Q",
          name: "Reserved for the Dog Cushion",
          model: "v1",
          description:
            "Mark your dog's favorite seating area. Removable cover for an easy wash!",
          release_date: "2020-11-30",
          price: 19.99,
          quantity_in_stock: 1100,
          weight_in_lbs: 1,
          category_id: 3,
        },
        {
          sku: "A2482",
          name: "iPhone 13 mini 128GB (Blue)",
          model: "MLMT3LL/A",
          description: "The all new 2021 iPhone 13 mini",
          release_date: "2021-09-24",
          price: 699.99,
          quantity_in_stock: 2000,
          weight_in_lbs: 0.310625,
          category_id: 1,
          main_imageUrl:
            "https://www.protocol.com/media-library/the-apple-iphone-13.jpg?id=27471238&width=1245&quality=85&coordinates=0%2C101%2C0%2C102&height=700",
          image_1:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842709000",
          image_2:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842712000",
          image_3:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907844000",
          image_4:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000",
          image_5:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907846000",
        },
        {
          sku: "",
          name: "Apple AirPods (3rd generation)",
          model: "",
          description:
            "All-new design\nAirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear. The stem is 33 percent shorter than AirPods (2nd generation) and includes a force sensor to easily control music and calls.\n\nSpatial audio with dynamic head tracking\nSound is placed all around you to create an immersive, three-dimensional listening experience for music, TV shows, and movies. Gyroscopes and accelerometers in AirPods work together to track your head movements — so it sounds like you’re in the center of songs and scenes.¹\n\nAdaptive EQ\nMusic is automatically tuned to suit the shape of your ear. Inward-facing microphones detect what you’re hearing, then adjust low- and mid-range frequencies to deliver the rich details in every song.\n\nLonger battery life\nAirPods have an extra hour of battery life compared with AirPods (2nd generation) for up to 6 hours of listening time² and up to 4 hours of talk time.⁵ With just 5 minutes of charge, you’ll get around an hour of listening⁶ or talk time.⁷ And with the MagSafe Charging Case, you can enjoy up to 30 hours of total listening time and charge with compatible MagSafe and wireless chargers.⁸\n\nSweat and water resistant\nBoth AirPods and the MagSafe Charging Case are rated IPX4 water resistant — so they’ll withstand anything from rain to heavy workouts.³\n\nMagical in every way\nSetup is effortless — pull them out of the case and they’re ready to use. Automatically switch between your Apple devices. In-ear detection knows the difference between your ear and other surfaces. Announce Notifications with Siri gives you the option to have Siri read your notifications through your AirPods. And with Audio Sharing, you and a friend can easily share a song or show between any two sets of AirPods.⁴",
          release_date: "2021-10-26T07:00:00.000Z",
          price: "179.00",
          quantity_in_stock: 1600,
          weight_in_lbs: "0.09",
          main_imageUrl:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861338000",
          image_1:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000",
          image_2:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861333000",
          image_3:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861336000",
          image_4: "",
          image_5: "",
          category_id: 1,
        },
        {
          sku: "",
          name: "Playstation 5 Digital Edition",
          model: "Digital Edition",
          description:
            "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.",
          release_date: "2020-11-12T08:00:00.000Z",
          price: "399.99",
          quantity_in_stock: 100,
          weight_in_lbs: "7.94",
          main_imageUrl:
            "https://cdn.vox-cdn.com/thumbor/K-yujrt8GZ6ZtW6KrV2Pv6PphgI=/0x0:1024x683/1200x1200/filters:focal(512x342:513x343)/cdn.vox-cdn.com/uploads/chorus_asset/file/22017052/ps5_all_digital.jpg",
          category_id: 4,
        },
        {
          sku: "PS5MilesMorales",
          name: "Marvel's Spider-Man: Miles Morales",
          model: "PS5 Standard Edition",
          description:
            "Discover the complete web-slinging story with the Marvel's Spider-Man: Miles Morales Ultimate Edition. This unmissable bundle includes Marvel's Spider-Man Remastered (for PS5™) – the complete award-winning game, including all three chapters in the Marvel's Spider-Man: The City That Never Sleeps adventure – remastered and enhanced for the PS5™ system.\n\nUltimate Edition includes:\n- Marvel's Spider-Man: Miles Morales (PS4™ and PS5™)\n- Marvel's Spider-Man Remastered (PS5™)\n\nIf you already own the PS4™ version of Marvel's Spider-Man: Miles Morales, you can get the PS5™ digital version at no extra cost and you do not need to purchase this product. Owners of a PS4™ disc copy must insert it into the PS5™ every time they want to download or play the PS5™ digital version. PS4™ game disc owners who buy the PS5™ Digital Edition disc-free console will not be able to get the PS5™ version at no extra cost.",
          release_date: "2022-02-18T08:00:00.000Z",
          price: "49.99",
          quantity_in_stock: 750,
          weight_in_lbs: "0.24",
          main_imageUrl:
            "https://cdn.vox-cdn.com/thumbor/q-qo_aSUhfWVLUiFzd3JJyeSN4s=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/20075139/50094555187_7f5e4b4325_o.jpg",
          category_id: 4,
        },
        {
          sku: "SAN37001",
          name: "Sharpie - Ultra Fine Point",
          model: "",
          description:
            "Proudly permanent ink marks on paper, plastic, metal and most other surfaces\nIntensely brilliant colors create eye-popping, vibrant impressions\nRemarkably resilient ink dries quickly and resists both fading and water; AP certified\nEndlessly versatile, ultra-fine point has a precise, narrow tip for extreme control",
          release_date: "2022-02-18T08:00:00.000Z",
          price: "12.99",
          quantity_in_stock: 250,
          weight_in_lbs: "0.10",
          main_imageUrl: "https://content.etilize.com/500/11969525.jpg",
          category_id: 5,
        },
        {
          sku: "SAN30001",
          name: "Sharpie - Fine Point",
          model: "",
          description:
            "Proudly permanent ink marks on paper, plastic, metal and most other surfaces\nIntensely brilliant colors create eye-popping, vibrant impressions\nRemarkably resilient ink dries quickly and resists fading and water; AP certified\nEndlessly versatile fine tip makes impressively bold, detailed marks\n\nhttps://shop.aaasolutions.com/Product/SAN/30001/11969433",
          release_date: "2022-02-18T08:00:00.000Z",
          price: "12.99",
          quantity_in_stock: 250,
          weight_in_lbs: "0.10",
          main_imageUrl: "https://content.etilize.com/500/11969433.jpg",
          category_id: 5,
        },
        {
          sku: "SAN80078",
          name: "ExpoDry-erase 8-Color Marker Set",
          model: "",
          description:
            "Consistent, skip-free marking and brilliant color options\nLow-odor ink formula erases cleanly and is ideal for classrooms, offices and home offices\nVersatile chisel tip allows broad or fine writing\nFor optimal results, use on nonporous surfaces such as porcelain or melamine whiteboards and glass\nColors: black, blue, red, green, orange, purple, pink and brown",
          release_date: "2022-02-18T08:00:00.000Z",
          price: "9.99",
          quantity_in_stock: 180,
          weight_in_lbs: "0.10",
          main_imageUrl: "https://content.etilize.com/500/11969730.jpg",
          category_id: 5,
        },
        {
          sku: "HAM86700",
          name: '8.5" x 11" Copy Paper - Laser, Inkjet',
          model: "",
          description:
            "Made with 30% post-consumer waste\nIdeal for copies, forms, faxes, memos, reports, price sheets, bulletins and legal briefs\nSFI Certified\nAcid-free for added archival quality",
          release_date: "2022-02-18T08:00:00.000Z",
          price: "45.00",
          quantity_in_stock: 20,
          weight_in_lbs: "20.00",
          main_imageUrl: "https://content.etilize.com/500/1010128671.jpg",
          category_id: 5,
        },
      ]);
    });
};
