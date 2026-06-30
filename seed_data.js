(function() {
    const key = 'eshopData';
    localStorage.setItem(key, JSON.stringify({
  "products": [
    {
      "name": "酱牛肉",
      "price": 68,
      "unit": "斤",
      "category": "牛羊肉",
      "image": "🥩",
      "id": "prod_5ea20d64",
      "stock": 96,
      "isActive": true
    },
    {
      "name": "卤牛腱",
      "price": 78,
      "unit": "斤",
      "category": "牛羊肉",
      "image": "🥓",
      "id": "prod_9574decb",
      "stock": 29,
      "isActive": true
    },
    {
      "name": "羊肉卷",
      "price": 58,
      "unit": "斤",
      "category": "牛羊肉",
      "image": "🐑",
      "id": "prod_10d63bd1",
      "stock": 18,
      "isActive": true
    },
    {
      "name": "卤猪蹄",
      "price": 35,
      "unit": "只",
      "category": "卤货",
      "image": "🍖",
      "id": "prod_06440d00",
      "stock": 50,
      "isActive": true
    },
    {
      "name": "卤鸡爪",
      "price": 28,
      "unit": "份",
      "category": "卤货",
      "image": "🐔",
      "id": "prod_4a4d8309",
      "stock": 46,
      "isActive": true
    },
    {
      "name": "卤肥肠",
      "price": 45,
      "unit": "斤",
      "category": "卤货",
      "image": "🥘",
      "id": "prod_55786334",
      "stock": 43,
      "isActive": true
    },
    {
      "name": "鸭脖",
      "price": 32,
      "unit": "份",
      "category": "鸭货",
      "image": "🦆",
      "id": "prod_5af1bfd1",
      "stock": 32,
      "isActive": true
    },
    {
      "name": "鸭翅",
      "price": 25,
      "unit": "份",
      "category": "鸭货",
      "image": "🍗",
      "id": "prod_ffa194d8",
      "stock": 28,
      "isActive": true
    },
    {
      "name": "鸭锁骨",
      "price": 22,
      "unit": "份",
      "category": "鸭货",
      "image": "🦴",
      "id": "prod_0d320880",
      "stock": 84,
      "isActive": true
    },
    {
      "name": "酱香饼",
      "price": 10,
      "unit": "份",
      "category": "面食",
      "image": "🫓",
      "id": "prod_1d26f8b1",
      "stock": 26,
      "isActive": true
    },
    {
      "name": "卤蛋",
      "price": 3,
      "unit": "个",
      "category": "卤货",
      "image": "🥚",
      "id": "prod_828a47a7",
      "stock": 90,
      "isActive": true
    },
    {
      "name": "凉拌皮蛋",
      "price": 18,
      "unit": "份",
      "category": "凉菜",
      "image": "🥗",
      "id": "prod_a6795f10",
      "stock": 69,
      "isActive": true
    },
    {
      "name": "凉拌海带丝",
      "price": 12,
      "unit": "份",
      "category": "凉菜",
      "image": "🌿",
      "id": "prod_64141f7a",
      "stock": 19,
      "isActive": true
    },
    {
      "name": "卤豆干",
      "price": 8,
      "unit": "份",
      "category": "卤货",
      "image": "🧈",
      "id": "prod_1a41ac64",
      "stock": 18,
      "isActive": true
    },
    {
      "name": "酸辣凤爪",
      "price": 30,
      "unit": "份",
      "category": "凉菜",
      "image": "🐓",
      "id": "prod_2ac10be5",
      "stock": 26,
      "isActive": true
    }
  ],
  "orders": [
    {
      "id": "ORD1000",
      "customerName": "唐宏志",
      "customerPhone": "1780314646",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        }
      ],
      "total": 122,
      "actualPay": 122,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9618",
      "note": "",
      "createdAt": "2026-06-16 10:00:00",
      "paidAt": "2026-06-16 10:25:00"
    },
    {
      "id": "ORD1001",
      "customerName": "洪龙峰",
      "customerPhone": "1910554228",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        }
      ],
      "total": 147,
      "actualPay": 147,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "6447",
      "note": "",
      "createdAt": "2026-06-29 01:00:00",
      "paidAt": "2026-06-29 01:03:00"
    },
    {
      "id": "ORD1002",
      "customerName": "唐宏志",
      "customerPhone": "1780314646",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 5
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 180,
      "actualPay": 180,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2033",
      "note": "",
      "createdAt": "2026-06-08 19:00:00",
      "paidAt": "2026-06-08 19:03:00"
    },
    {
      "id": "ORD1003",
      "customerName": "谢阳强",
      "customerPhone": "1947306891",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 4
        }
      ],
      "total": 140,
      "actualPay": 140,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "9444",
      "note": "不要香菜",
      "createdAt": "2026-06-14 12:00:00",
      "paidAt": "2026-06-14 12:53:00"
    },
    {
      "id": "ORD1004",
      "customerName": "龚强盛",
      "customerPhone": "1865387826",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 15,
      "actualPay": 15,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5476",
      "note": "",
      "createdAt": "2026-06-03 01:00:00",
      "paidAt": "2026-06-03 01:52:00"
    },
    {
      "id": "ORD1005",
      "customerName": "唐正凯",
      "customerPhone": "1853931844",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 5
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 4
        }
      ],
      "total": 384,
      "actualPay": 384,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "2353",
      "note": "不要香菜",
      "createdAt": "2026-06-23 04:00:00",
      "paidAt": "2026-06-23 04:06:00"
    },
    {
      "id": "ORD1006",
      "customerName": "于博昌",
      "customerPhone": "1777922144",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        }
      ],
      "total": 201,
      "actualPay": 201,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7981",
      "note": "",
      "createdAt": "2026-06-14 02:00:00",
      "paidAt": "2026-06-14 02:45:00"
    },
    {
      "id": "ORD1007",
      "customerName": "丁瑞昌",
      "customerPhone": "1723483070",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 4
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 88,
      "actualPay": 88,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1939",
      "note": "",
      "createdAt": "2026-06-19 14:00:00",
      "paidAt": "2026-06-19 14:43:00"
    },
    {
      "id": "ORD1008",
      "customerName": "黄杰元",
      "customerPhone": "1738146150",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 4
        }
      ],
      "total": 96,
      "actualPay": 96,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1570",
      "note": "",
      "createdAt": "2026-06-07 03:00:00",
      "paidAt": "2026-06-07 03:05:00"
    },
    {
      "id": "ORD1009",
      "customerName": "叶俊晨",
      "customerPhone": "1763513320",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        }
      ],
      "total": 156,
      "actualPay": 156,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8273",
      "note": "",
      "createdAt": "2026-06-16 20:00:00",
      "paidAt": "2026-06-16 20:37:00"
    },
    {
      "id": "ORD1010",
      "customerName": "钱飞嘉",
      "customerPhone": "1579159057",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 31,
      "actualPay": 31,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9482",
      "note": "不要香菜",
      "createdAt": "2026-06-08 23:00:00",
      "paidAt": "2026-06-08 23:59:00"
    },
    {
      "id": "ORD1011",
      "customerName": "汪庆军",
      "customerPhone": "1360608353",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 5
        }
      ],
      "total": 146,
      "actualPay": 146,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "4279",
      "note": "",
      "createdAt": "2026-06-13 05:00:00",
      "paidAt": "2026-06-13 05:09:00"
    },
    {
      "id": "ORD1012",
      "customerName": "郭天海",
      "customerPhone": "1585460810",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 36,
      "actualPay": 36,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6692",
      "note": "",
      "createdAt": "2026-06-04 18:00:00",
      "paidAt": "2026-06-04 18:36:00"
    },
    {
      "id": "ORD1013",
      "customerName": "常阳明",
      "customerPhone": "1336593837",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 4
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 226,
      "actualPay": 226,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3275",
      "note": "",
      "createdAt": "2026-06-06 05:00:00",
      "paidAt": "2026-06-06 05:51:00"
    },
    {
      "id": "ORD1014",
      "customerName": "孔启嘉",
      "customerPhone": "1768928287",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 5
        }
      ],
      "total": 245,
      "actualPay": 245,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2077",
      "note": "多加辣",
      "createdAt": "2026-06-06 13:00:00",
      "paidAt": "2026-06-06 13:26:00"
    },
    {
      "id": "ORD1015",
      "customerName": "侯博华",
      "customerPhone": "1924204170",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 96,
      "actualPay": 96,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3102",
      "note": "",
      "createdAt": "2026-06-20 22:00:00",
      "paidAt": "2026-06-20 22:50:00"
    },
    {
      "id": "ORD1016",
      "customerName": "罗宇锋",
      "customerPhone": "1774900442",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        }
      ],
      "total": 160,
      "actualPay": 160,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3653",
      "note": "少放盐",
      "createdAt": "2026-06-14 00:00:00",
      "paidAt": "2026-06-14 01:00:00"
    },
    {
      "id": "ORD1017",
      "customerName": "施健良",
      "customerPhone": "1813737153",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 4
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 228,
      "actualPay": 228,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "9234",
      "note": "",
      "createdAt": "2026-06-27 06:00:00",
      "paidAt": "2026-06-27 06:38:00"
    },
    {
      "id": "ORD1018",
      "customerName": "邱建亮",
      "customerPhone": "1719247988",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1674",
      "note": "",
      "createdAt": "2026-06-26 20:00:00",
      "paidAt": "2026-06-26 20:06:00"
    },
    {
      "id": "ORD1019",
      "customerName": "胡军宁",
      "customerPhone": "1886866877",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 4
        }
      ],
      "total": 162,
      "actualPay": 162,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5949",
      "note": "",
      "createdAt": "2026-06-24 07:00:00",
      "paidAt": "2026-06-24 07:16:00"
    },
    {
      "id": "ORD1020",
      "customerName": "曾宏天",
      "customerPhone": "1889494573",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        }
      ],
      "total": 154,
      "actualPay": 154,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "6573",
      "note": "",
      "createdAt": "2026-06-20 20:00:00",
      "paidAt": "2026-06-20 20:21:00"
    },
    {
      "id": "ORD1021",
      "customerName": "吴平强",
      "customerPhone": "1714479246",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        }
      ],
      "total": 177,
      "actualPay": 177,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "7293",
      "note": "不要香菜",
      "createdAt": "2026-06-03 04:00:00",
      "paidAt": "2026-06-03 04:16:00"
    },
    {
      "id": "ORD1022",
      "customerName": "余耀海",
      "customerPhone": "1745213745",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 254,
      "actualPay": 254,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "7442",
      "note": "",
      "createdAt": "2026-06-02 00:00:00",
      "paidAt": "2026-06-02 00:16:00"
    },
    {
      "id": "ORD1023",
      "customerName": "周辉天",
      "customerPhone": "1563738184",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        }
      ],
      "total": 56,
      "actualPay": 56,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5681",
      "note": "",
      "createdAt": "2026-06-28 22:00:00",
      "paidAt": "2026-06-28 22:55:00"
    },
    {
      "id": "ORD1024",
      "customerName": "姚亮瑞",
      "customerPhone": "1518211396",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        }
      ],
      "total": 84,
      "actualPay": 84,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1741",
      "note": "不要香菜",
      "createdAt": "2026-06-18 05:00:00",
      "paidAt": "2026-06-18 05:04:00"
    },
    {
      "id": "ORD1025",
      "customerName": "蒋凯智",
      "customerPhone": "1532350493",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        }
      ],
      "total": 184,
      "actualPay": 184,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "2946",
      "note": "",
      "createdAt": "2026-06-24 12:00:00",
      "paidAt": "2026-06-24 12:07:00"
    },
    {
      "id": "ORD1026",
      "customerName": "徐庆飞",
      "customerPhone": "1914212140",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 3
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        }
      ],
      "total": 217,
      "actualPay": 217,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "1742",
      "note": "",
      "createdAt": "2026-06-22 09:00:00",
      "paidAt": "2026-06-22 09:09:00"
    },
    {
      "id": "ORD1027",
      "customerName": "邱云博",
      "customerPhone": "1787510213",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 4
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 242,
      "actualPay": 242,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3662",
      "note": "不要香菜",
      "createdAt": "2026-06-27 04:00:00",
      "paidAt": "2026-06-27 04:40:00"
    },
    {
      "id": "ORD1028",
      "customerName": "牛鹏军",
      "customerPhone": "1853402016",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        }
      ],
      "total": 104,
      "actualPay": 104,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "7035",
      "note": "少放盐",
      "createdAt": "2026-06-21 07:00:00",
      "paidAt": "2026-06-21 07:44:00"
    },
    {
      "id": "ORD1029",
      "customerName": "冯杰勇",
      "customerPhone": "1363956550",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 72,
      "actualPay": 72,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5350",
      "note": "",
      "createdAt": "2026-06-26 12:00:00",
      "paidAt": "2026-06-26 12:47:00"
    },
    {
      "id": "ORD1030",
      "customerName": "郑涛强",
      "customerPhone": "1390588991",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        }
      ],
      "total": 9,
      "actualPay": 9,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "4968",
      "note": "",
      "createdAt": "2026-06-17 06:00:00",
      "paidAt": "2026-06-17 06:37:00"
    },
    {
      "id": "ORD1031",
      "customerName": "冯杰勇",
      "customerPhone": "1363956550",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        }
      ],
      "total": 90,
      "actualPay": 90,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7723",
      "note": "",
      "createdAt": "2026-06-18 15:00:00",
      "paidAt": "2026-06-18 15:56:00"
    },
    {
      "id": "ORD1032",
      "customerName": "张华志",
      "customerPhone": "1320896218",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 5
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        }
      ],
      "total": 200,
      "actualPay": 200,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3837",
      "note": "",
      "createdAt": "2026-06-17 02:00:00",
      "paidAt": "2026-06-17 02:59:00"
    },
    {
      "id": "ORD1033",
      "customerName": "罗平盛",
      "customerPhone": "1872824263",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 33,
      "actualPay": 33,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8932",
      "note": "",
      "createdAt": "2026-06-30 14:00:00",
      "paidAt": "2026-06-30 14:16:00"
    },
    {
      "id": "ORD1034",
      "customerName": "贺鹏宇",
      "customerPhone": "1549704670",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        }
      ],
      "total": 84,
      "actualPay": 84,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6194",
      "note": "",
      "createdAt": "2026-06-09 21:00:00",
      "paidAt": "2026-06-09 21:23:00"
    },
    {
      "id": "ORD1035",
      "customerName": "汪庆军",
      "customerPhone": "1360608353",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 4
        }
      ],
      "total": 32,
      "actualPay": 32,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3399",
      "note": "多加辣",
      "createdAt": "2026-06-17 21:00:00",
      "paidAt": "2026-06-17 21:03:00"
    },
    {
      "id": "ORD1036",
      "customerName": "萧华启",
      "customerPhone": "1534454571",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        }
      ],
      "total": 31,
      "actualPay": 31,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5450",
      "note": "",
      "createdAt": "2026-06-09 15:00:00",
      "paidAt": "2026-06-09 15:07:00"
    },
    {
      "id": "ORD1037",
      "customerName": "邱宁良",
      "customerPhone": "1586717229",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 4
        }
      ],
      "total": 12,
      "actualPay": 12,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "1860",
      "note": "",
      "createdAt": "2026-06-10 16:00:00",
      "paidAt": "2026-06-10 16:27:00"
    },
    {
      "id": "ORD1038",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 12,
      "actualPay": 12,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "7666",
      "note": "",
      "createdAt": "2026-06-24 12:00:00",
      "paidAt": "2026-06-24 12:31:00"
    },
    {
      "id": "ORD1039",
      "customerName": "胡宁锋",
      "customerPhone": "1891848918",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 4
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 266,
      "actualPay": 266,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9767",
      "note": "",
      "createdAt": "2026-06-25 12:00:00",
      "paidAt": "2026-06-25 12:59:00"
    },
    {
      "id": "ORD1040",
      "customerName": "严健昌",
      "customerPhone": "1789614394",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        }
      ],
      "total": 383,
      "actualPay": 383,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5888",
      "note": "",
      "createdAt": "2026-06-02 15:00:00",
      "paidAt": "2026-06-02 16:00:00"
    },
    {
      "id": "ORD1041",
      "customerName": "邱云博",
      "customerPhone": "1787510213",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 4
        }
      ],
      "total": 94,
      "actualPay": 94,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5470",
      "note": "",
      "createdAt": "2026-06-06 18:00:00",
      "paidAt": "2026-06-06 18:52:00"
    },
    {
      "id": "ORD1042",
      "customerName": "冯杰勇",
      "customerPhone": "1363956550",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 50,
      "actualPay": 50,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "6523",
      "note": "多加辣",
      "createdAt": "2026-06-08 23:00:00",
      "paidAt": "2026-06-08 23:37:00"
    },
    {
      "id": "ORD1043",
      "customerName": "刘志超",
      "customerPhone": "1934729173",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 54,
      "actualPay": 54,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8822",
      "note": "少放盐",
      "createdAt": "2026-06-08 22:00:00",
      "paidAt": "2026-06-08 23:00:00"
    },
    {
      "id": "ORD1044",
      "customerName": "程宁志",
      "customerPhone": "1549277184",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 4
        }
      ],
      "total": 205,
      "actualPay": 205,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5285",
      "note": "少放盐",
      "createdAt": "2026-06-13 22:00:00",
      "paidAt": "2026-06-13 22:45:00"
    },
    {
      "id": "ORD1045",
      "customerName": "叶俊晨",
      "customerPhone": "1763513320",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 4
        }
      ],
      "total": 338,
      "actualPay": 338,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5833",
      "note": "少放盐",
      "createdAt": "2026-06-14 07:00:00",
      "paidAt": "2026-06-14 07:40:00"
    },
    {
      "id": "ORD1046",
      "customerName": "武明盛",
      "customerPhone": "1759786578",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 3
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 4
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 403,
      "actualPay": 403,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2341",
      "note": "",
      "createdAt": "2026-06-10 08:00:00",
      "paidAt": "2026-06-10 08:34:00"
    },
    {
      "id": "ORD1047",
      "customerName": "熊文嘉",
      "customerPhone": "1825352273",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        }
      ],
      "total": 272,
      "actualPay": 272,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4365",
      "note": "",
      "createdAt": "2026-06-19 21:00:00",
      "paidAt": "2026-06-19 21:06:00"
    },
    {
      "id": "ORD1048",
      "customerName": "孟永哲",
      "customerPhone": "1816571286",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 210,
      "actualPay": 210,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1356",
      "note": "不要香菜",
      "createdAt": "2026-06-29 17:00:00",
      "paidAt": "2026-06-29 17:17:00"
    },
    {
      "id": "ORD1049",
      "customerName": "孔华华",
      "customerPhone": "1921791214",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        }
      ],
      "total": 100,
      "actualPay": 100,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8734",
      "note": "",
      "createdAt": "2026-06-03 14:00:00",
      "paidAt": "2026-06-03 14:19:00"
    },
    {
      "id": "ORD1050",
      "customerName": "薛军海",
      "customerPhone": "1369571296",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 5
        }
      ],
      "total": 120,
      "actualPay": 120,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7184",
      "note": "不要香菜",
      "createdAt": "2026-06-17 08:00:00",
      "paidAt": "2026-06-17 08:06:00"
    },
    {
      "id": "ORD1051",
      "customerName": "常阳明",
      "customerPhone": "1336593837",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 5
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 361,
      "actualPay": 361,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "1372",
      "note": "多加辣",
      "createdAt": "2026-06-10 13:00:00",
      "paidAt": "2026-06-10 13:30:00"
    },
    {
      "id": "ORD1052",
      "customerName": "龚强盛",
      "customerPhone": "1865387826",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 43,
      "actualPay": 43,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2848",
      "note": "",
      "createdAt": "2026-06-12 19:00:00",
      "paidAt": "2026-06-12 19:52:00"
    },
    {
      "id": "ORD1053",
      "customerName": "于明家",
      "customerPhone": "1387913846",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 78,
      "actualPay": 78,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1797",
      "note": "",
      "createdAt": "2026-06-02 11:00:00",
      "paidAt": "2026-06-02 11:48:00"
    },
    {
      "id": "ORD1054",
      "customerName": "胡军宁",
      "customerPhone": "1886866877",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        }
      ],
      "total": 171,
      "actualPay": 171,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4836",
      "note": "少放盐",
      "createdAt": "2026-06-07 00:00:00",
      "paidAt": "2026-06-07 00:37:00"
    },
    {
      "id": "ORD1055",
      "customerName": "程凯家",
      "customerPhone": "1554608293",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "7775",
      "note": "多加辣",
      "createdAt": "2026-06-29 05:00:00",
      "paidAt": "2026-06-29 05:18:00"
    },
    {
      "id": "ORD1056",
      "customerName": "张华志",
      "customerPhone": "1320896218",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 104,
      "actualPay": 104,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7821",
      "note": "不要香菜",
      "createdAt": "2026-06-17 07:00:00",
      "paidAt": "2026-06-17 07:10:00"
    },
    {
      "id": "ORD1057",
      "customerName": "牛鹏军",
      "customerPhone": "1853402016",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 44,
      "actualPay": 44,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3365",
      "note": "",
      "createdAt": "2026-06-10 15:00:00",
      "paidAt": "2026-06-10 15:59:00"
    },
    {
      "id": "ORD1058",
      "customerName": "邱昌涛",
      "customerPhone": "1910631072",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 209,
      "actualPay": 209,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "1844",
      "note": "多加辣",
      "createdAt": "2026-06-23 21:00:00",
      "paidAt": "2026-06-23 21:25:00"
    },
    {
      "id": "ORD1059",
      "customerName": "武嘉德",
      "customerPhone": "1781717192",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 175,
      "actualPay": 175,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1251",
      "note": "",
      "createdAt": "2026-06-15 05:00:00",
      "paidAt": "2026-06-15 06:00:00"
    },
    {
      "id": "ORD1060",
      "customerName": "毛国锋",
      "customerPhone": "1738426228",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 134,
      "actualPay": 134,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5637",
      "note": "不要香菜",
      "createdAt": "2026-06-11 06:00:00",
      "paidAt": "2026-06-11 06:30:00"
    },
    {
      "id": "ORD1061",
      "customerName": "罗平盛",
      "customerPhone": "1872824263",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 4
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 224,
      "actualPay": 224,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4328",
      "note": "少放盐",
      "createdAt": "2026-06-21 01:00:00",
      "paidAt": "2026-06-21 01:21:00"
    },
    {
      "id": "ORD1062",
      "customerName": "邹平国",
      "customerPhone": "1898509768",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        }
      ],
      "total": 53,
      "actualPay": 53,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5836",
      "note": "",
      "createdAt": "2026-06-25 23:00:00",
      "paidAt": "2026-06-25 23:13:00"
    },
    {
      "id": "ORD1063",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        }
      ],
      "total": 86,
      "actualPay": 86,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5216",
      "note": "",
      "createdAt": "2026-06-30 06:00:00",
      "paidAt": "2026-06-30 06:47:00"
    },
    {
      "id": "ORD1064",
      "customerName": "马家云",
      "customerPhone": "1899327370",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4015",
      "note": "",
      "createdAt": "2026-06-24 08:00:00",
      "paidAt": "2026-06-24 08:34:00"
    },
    {
      "id": "ORD1065",
      "customerName": "萧耀明",
      "customerPhone": "1950448393",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        }
      ],
      "total": 246,
      "actualPay": 246,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9285",
      "note": "",
      "createdAt": "2026-06-01 10:00:00",
      "paidAt": "2026-06-01 10:24:00"
    },
    {
      "id": "ORD1066",
      "customerName": "张华志",
      "customerPhone": "1320896218",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 210,
      "actualPay": 210,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1280",
      "note": "不要香菜",
      "createdAt": "2026-06-12 18:00:00",
      "paidAt": "2026-06-12 18:52:00"
    },
    {
      "id": "ORD1067",
      "customerName": "郭凯亮",
      "customerPhone": "1899584480",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        }
      ],
      "total": 173,
      "actualPay": 173,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7652",
      "note": "",
      "createdAt": "2026-06-04 09:00:00",
      "paidAt": "2026-06-04 09:37:00"
    },
    {
      "id": "ORD1068",
      "customerName": "张盛辉",
      "customerPhone": "1937861999",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 5
        }
      ],
      "total": 158,
      "actualPay": 158,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2531",
      "note": "不要香菜",
      "createdAt": "2026-06-28 18:00:00",
      "paidAt": "2026-06-28 18:25:00"
    },
    {
      "id": "ORD1069",
      "customerName": "姚勇飞",
      "customerPhone": "1583727439",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        }
      ],
      "total": 204,
      "actualPay": 204,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8109",
      "note": "少放盐",
      "createdAt": "2026-06-04 13:00:00",
      "paidAt": "2026-06-04 13:37:00"
    },
    {
      "id": "ORD1070",
      "customerName": "孙义盛",
      "customerPhone": "1561196031",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 90,
      "actualPay": 90,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5441",
      "note": "",
      "createdAt": "2026-06-25 05:00:00",
      "paidAt": "2026-06-25 06:00:00"
    },
    {
      "id": "ORD1071",
      "customerName": "吴哲宁",
      "customerPhone": "1719942340",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 4
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 5
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        }
      ],
      "total": 499,
      "actualPay": 499,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5903",
      "note": "",
      "createdAt": "2026-06-18 00:00:00",
      "paidAt": "2026-06-18 00:37:00"
    },
    {
      "id": "ORD1072",
      "customerName": "廖明昌",
      "customerPhone": "1313505135",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 5
        }
      ],
      "total": 271,
      "actualPay": 271,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1879",
      "note": "",
      "createdAt": "2026-06-04 09:00:00",
      "paidAt": "2026-06-04 09:28:00"
    },
    {
      "id": "ORD1073",
      "customerName": "秦嘉华",
      "customerPhone": "1516526258",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 4
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 58,
      "actualPay": 58,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5478",
      "note": "",
      "createdAt": "2026-06-14 23:00:00",
      "paidAt": "2026-06-14 23:32:00"
    },
    {
      "id": "ORD1074",
      "customerName": "常瑞德",
      "customerPhone": "1913745585",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        }
      ],
      "total": 92,
      "actualPay": 92,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5839",
      "note": "",
      "createdAt": "2026-06-17 06:00:00",
      "paidAt": "2026-06-17 06:46:00"
    },
    {
      "id": "ORD1075",
      "customerName": "郭天海",
      "customerPhone": "1585460810",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        }
      ],
      "total": 114,
      "actualPay": 114,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6909",
      "note": "",
      "createdAt": "2026-06-17 15:00:00",
      "paidAt": "2026-06-17 15:06:00"
    },
    {
      "id": "ORD1076",
      "customerName": "刘国峰",
      "customerPhone": "1593992863",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 40,
      "actualPay": 40,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9395",
      "note": "不要香菜",
      "createdAt": "2026-06-19 10:00:00",
      "paidAt": "2026-06-19 10:07:00"
    },
    {
      "id": "ORD1077",
      "customerName": "杜平志",
      "customerPhone": "1387380378",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 166,
      "actualPay": 166,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5781",
      "note": "不要香菜",
      "createdAt": "2026-06-17 11:00:00",
      "paidAt": "2026-06-17 11:25:00"
    },
    {
      "id": "ORD1078",
      "customerName": "傅德军",
      "customerPhone": "1816261217",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 61,
      "actualPay": 61,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "9079",
      "note": "",
      "createdAt": "2026-06-13 21:00:00",
      "paidAt": "2026-06-13 21:05:00"
    },
    {
      "id": "ORD1079",
      "customerName": "蔡志军",
      "customerPhone": "1887937924",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        }
      ],
      "total": 109,
      "actualPay": 109,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4203",
      "note": "",
      "createdAt": "2026-06-11 13:00:00",
      "paidAt": "2026-06-11 13:07:00"
    },
    {
      "id": "ORD1080",
      "customerName": "黄国宁",
      "customerPhone": "1591529130",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        }
      ],
      "total": 32,
      "actualPay": 32,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6399",
      "note": "",
      "createdAt": "2026-06-27 12:00:00",
      "paidAt": "2026-06-27 12:22:00"
    },
    {
      "id": "ORD1081",
      "customerName": "于博昌",
      "customerPhone": "1777922144",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        }
      ],
      "total": 28,
      "actualPay": 28,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5775",
      "note": "",
      "createdAt": "2026-06-18 00:00:00",
      "paidAt": "2026-06-18 00:37:00"
    },
    {
      "id": "ORD1082",
      "customerName": "张盛辉",
      "customerPhone": "1937861999",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 20,
      "actualPay": 20,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "9939",
      "note": "",
      "createdAt": "2026-06-25 02:00:00",
      "paidAt": "2026-06-25 02:44:00"
    },
    {
      "id": "ORD1083",
      "customerName": "沈云云",
      "customerPhone": "1719750515",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        }
      ],
      "total": 344,
      "actualPay": 344,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "4965",
      "note": "多加辣",
      "createdAt": "2026-06-06 23:00:00",
      "paidAt": "2026-06-06 23:43:00"
    },
    {
      "id": "ORD1084",
      "customerName": "郑智义",
      "customerPhone": "1535854154",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        }
      ],
      "total": 226,
      "actualPay": 226,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9907",
      "note": "",
      "createdAt": "2026-06-30 13:00:00",
      "paidAt": "2026-06-30 13:51:00"
    },
    {
      "id": "ORD1085",
      "customerName": "熊文嘉",
      "customerPhone": "1825352273",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        }
      ],
      "total": 70,
      "actualPay": 70,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "1725",
      "note": "不要香菜",
      "createdAt": "2026-06-16 04:00:00",
      "paidAt": "2026-06-16 04:49:00"
    },
    {
      "id": "ORD1086",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 78,
      "actualPay": 78,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "8303",
      "note": "少放盐",
      "createdAt": "2026-06-22 19:00:00",
      "paidAt": "2026-06-22 19:26:00"
    },
    {
      "id": "ORD1087",
      "customerName": "丁云智",
      "customerPhone": "1368250194",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 118,
      "actualPay": 118,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3321",
      "note": "少放盐",
      "createdAt": "2026-06-04 16:00:00",
      "paidAt": "2026-06-04 16:20:00"
    },
    {
      "id": "ORD1088",
      "customerName": "宋启浩",
      "customerPhone": "1751271330",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        }
      ],
      "total": 184,
      "actualPay": 184,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5919",
      "note": "",
      "createdAt": "2026-06-14 15:00:00",
      "paidAt": "2026-06-14 15:52:00"
    },
    {
      "id": "ORD1089",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 4
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 411,
      "actualPay": 411,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3623",
      "note": "少放盐",
      "createdAt": "2026-06-23 01:00:00",
      "paidAt": "2026-06-23 01:36:00"
    },
    {
      "id": "ORD1090",
      "customerName": "马忠宁",
      "customerPhone": "1956315321",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 64,
      "actualPay": 64,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "7481",
      "note": "",
      "createdAt": "2026-06-08 23:00:00",
      "paidAt": "2026-06-08 23:48:00"
    },
    {
      "id": "ORD1091",
      "customerName": "邱宁良",
      "customerPhone": "1586717229",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 62,
      "actualPay": 62,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2667",
      "note": "",
      "createdAt": "2026-06-12 22:00:00",
      "paidAt": "2026-06-12 22:24:00"
    },
    {
      "id": "ORD1092",
      "customerName": "胡云海",
      "customerPhone": "1331603986",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        }
      ],
      "total": 90,
      "actualPay": 90,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7367",
      "note": "不要香菜",
      "createdAt": "2026-06-28 07:00:00",
      "paidAt": "2026-06-28 07:38:00"
    },
    {
      "id": "ORD1093",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        }
      ],
      "total": 45,
      "actualPay": 45,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3194",
      "note": "少放盐",
      "createdAt": "2026-06-13 17:00:00",
      "paidAt": "2026-06-13 17:08:00"
    },
    {
      "id": "ORD1094",
      "customerName": "廖明昌",
      "customerPhone": "1313505135",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        }
      ],
      "total": 90,
      "actualPay": 90,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "7852",
      "note": "",
      "createdAt": "2026-06-22 20:00:00",
      "paidAt": "2026-06-22 20:37:00"
    },
    {
      "id": "ORD1095",
      "customerName": "陈强元",
      "customerPhone": "1377848611",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        }
      ],
      "total": 6,
      "actualPay": 6,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3733",
      "note": "",
      "createdAt": "2026-06-28 13:00:00",
      "paidAt": "2026-06-28 13:19:00"
    },
    {
      "id": "ORD1096",
      "customerName": "钱飞嘉",
      "customerPhone": "1579159057",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 35,
      "actualPay": 35,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3236",
      "note": "",
      "createdAt": "2026-06-01 10:00:00",
      "paidAt": "2026-06-01 10:53:00"
    },
    {
      "id": "ORD1097",
      "customerName": "陈强元",
      "customerPhone": "1377848611",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 139,
      "actualPay": 139,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "1505",
      "note": "",
      "createdAt": "2026-06-08 04:00:00",
      "paidAt": "2026-06-08 04:19:00"
    },
    {
      "id": "ORD1098",
      "customerName": "萧耀明",
      "customerPhone": "1950448393",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 28,
      "actualPay": 28,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9369",
      "note": "",
      "createdAt": "2026-06-20 13:00:00",
      "paidAt": "2026-06-20 13:37:00"
    },
    {
      "id": "ORD1099",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        }
      ],
      "total": 135,
      "actualPay": 135,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "7965",
      "note": "",
      "createdAt": "2026-06-24 08:00:00",
      "paidAt": "2026-06-24 08:48:00"
    },
    {
      "id": "ORD1100",
      "customerName": "胡家博",
      "customerPhone": "1764102588",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        }
      ],
      "total": 143,
      "actualPay": 143,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "2923",
      "note": "",
      "createdAt": "2026-06-04 18:00:00",
      "paidAt": "2026-06-04 18:14:00"
    },
    {
      "id": "ORD1101",
      "customerName": "白斌元",
      "customerPhone": "1374382715",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 3
        }
      ],
      "total": 299,
      "actualPay": 299,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9720",
      "note": "多加辣",
      "createdAt": "2026-06-25 08:00:00",
      "paidAt": "2026-06-25 08:39:00"
    },
    {
      "id": "ORD1102",
      "customerName": "彭俊盛",
      "customerPhone": "1796897277",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 46,
      "actualPay": 46,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3221",
      "note": "不要香菜",
      "createdAt": "2026-06-22 23:00:00",
      "paidAt": "2026-06-22 23:59:00"
    },
    {
      "id": "ORD1103",
      "customerName": "张华志",
      "customerPhone": "1320896218",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        }
      ],
      "total": 211,
      "actualPay": 211,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3329",
      "note": "多加辣",
      "createdAt": "2026-06-17 19:00:00",
      "paidAt": "2026-06-17 19:41:00"
    },
    {
      "id": "ORD1104",
      "customerName": "董德安",
      "customerPhone": "1783584799",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 4
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 24,
      "actualPay": 24,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "7046",
      "note": "",
      "createdAt": "2026-06-23 00:00:00",
      "paidAt": "2026-06-23 00:32:00"
    },
    {
      "id": "ORD1105",
      "customerName": "胡云海",
      "customerPhone": "1331603986",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 5
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 322,
      "actualPay": 322,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "4568",
      "note": "不要香菜",
      "createdAt": "2026-06-23 20:00:00",
      "paidAt": "2026-06-23 20:53:00"
    },
    {
      "id": "ORD1106",
      "customerName": "冯宇飞",
      "customerPhone": "1559350337",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        }
      ],
      "total": 64,
      "actualPay": 64,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6631",
      "note": "",
      "createdAt": "2026-06-25 04:00:00",
      "paidAt": "2026-06-25 04:03:00"
    },
    {
      "id": "ORD1107",
      "customerName": "沈文安",
      "customerPhone": "1994897329",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 90,
      "actualPay": 90,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1011",
      "note": "不要香菜",
      "createdAt": "2026-06-19 20:00:00",
      "paidAt": "2026-06-19 20:13:00"
    },
    {
      "id": "ORD1108",
      "customerName": "罗宇锋",
      "customerPhone": "1774900442",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 90,
      "actualPay": 90,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5102",
      "note": "",
      "createdAt": "2026-06-05 00:00:00",
      "paidAt": "2026-06-05 00:24:00"
    },
    {
      "id": "ORD1109",
      "customerName": "胡宁锋",
      "customerPhone": "1891848918",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 3,
      "actualPay": 3,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8032",
      "note": "",
      "createdAt": "2026-06-30 21:00:00",
      "paidAt": "2026-06-30 21:46:00"
    },
    {
      "id": "ORD1110",
      "customerName": "孙义盛",
      "customerPhone": "1561196031",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 78,
      "actualPay": 78,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1152",
      "note": "",
      "createdAt": "2026-06-10 16:00:00",
      "paidAt": "2026-06-10 16:45:00"
    },
    {
      "id": "ORD1111",
      "customerName": "宋启浩",
      "customerPhone": "1751271330",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 327,
      "actualPay": 327,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7270",
      "note": "",
      "createdAt": "2026-06-13 19:00:00",
      "paidAt": "2026-06-13 19:42:00"
    },
    {
      "id": "ORD1112",
      "customerName": "薛龙辉",
      "customerPhone": "1355444197",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        }
      ],
      "total": 156,
      "actualPay": 156,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7745",
      "note": "",
      "createdAt": "2026-06-10 03:00:00",
      "paidAt": "2026-06-10 03:56:00"
    },
    {
      "id": "ORD1113",
      "customerName": "周辉天",
      "customerPhone": "1563738184",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 372,
      "actualPay": 372,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "2380",
      "note": "",
      "createdAt": "2026-06-11 14:00:00",
      "paidAt": "2026-06-11 14:36:00"
    },
    {
      "id": "ORD1114",
      "customerName": "程凯家",
      "customerPhone": "1554608293",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        }
      ],
      "total": 128,
      "actualPay": 128,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5842",
      "note": "",
      "createdAt": "2026-06-09 02:00:00",
      "paidAt": "2026-06-09 02:51:00"
    },
    {
      "id": "ORD1115",
      "customerName": "廖明昌",
      "customerPhone": "1313505135",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        }
      ],
      "total": 95,
      "actualPay": 95,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6185",
      "note": "",
      "createdAt": "2026-06-01 13:00:00",
      "paidAt": "2026-06-01 13:25:00"
    },
    {
      "id": "ORD1116",
      "customerName": "蒋凯智",
      "customerPhone": "1532350493",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 4
        }
      ],
      "total": 241,
      "actualPay": 241,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2106",
      "note": "",
      "createdAt": "2026-06-04 03:00:00",
      "paidAt": "2026-06-04 03:17:00"
    },
    {
      "id": "ORD1117",
      "customerName": "周辉天",
      "customerPhone": "1563738184",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        }
      ],
      "total": 216,
      "actualPay": 216,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5546",
      "note": "",
      "createdAt": "2026-06-04 13:00:00",
      "paidAt": "2026-06-04 13:20:00"
    },
    {
      "id": "ORD1118",
      "customerName": "潘嘉博",
      "customerPhone": "1970498170",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        }
      ],
      "total": 324,
      "actualPay": 324,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5005",
      "note": "",
      "createdAt": "2026-06-11 05:00:00",
      "paidAt": "2026-06-11 06:00:00"
    },
    {
      "id": "ORD1119",
      "customerName": "梁浩阳",
      "customerPhone": "1328469696",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        }
      ],
      "total": 214,
      "actualPay": 214,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "1207",
      "note": "",
      "createdAt": "2026-06-08 12:00:00",
      "paidAt": "2026-06-08 12:45:00"
    },
    {
      "id": "ORD1120",
      "customerName": "邓飞哲",
      "customerPhone": "1853555229",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        }
      ],
      "total": 156,
      "actualPay": 156,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7092",
      "note": "",
      "createdAt": "2026-06-12 02:00:00",
      "paidAt": "2026-06-12 02:48:00"
    },
    {
      "id": "ORD1121",
      "customerName": "彭博超",
      "customerPhone": "1882720953",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 238,
      "actualPay": 238,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9128",
      "note": "",
      "createdAt": "2026-06-25 15:00:00",
      "paidAt": "2026-06-25 15:33:00"
    },
    {
      "id": "ORD1122",
      "customerName": "熊文嘉",
      "customerPhone": "1825352273",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 68,
      "actualPay": 68,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4742",
      "note": "",
      "createdAt": "2026-06-05 10:00:00",
      "paidAt": "2026-06-05 10:03:00"
    },
    {
      "id": "ORD1123",
      "customerName": "许盛飞",
      "customerPhone": "1787533315",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        }
      ],
      "total": 45,
      "actualPay": 45,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "1579",
      "note": "不要香菜",
      "createdAt": "2026-06-07 10:00:00",
      "paidAt": "2026-06-07 10:15:00"
    },
    {
      "id": "ORD1124",
      "customerName": "康晨义",
      "customerPhone": "1994424164",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        }
      ],
      "total": 63,
      "actualPay": 63,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9225",
      "note": "",
      "createdAt": "2026-06-16 22:00:00",
      "paidAt": "2026-06-16 22:12:00"
    },
    {
      "id": "ORD1125",
      "customerName": "施健良",
      "customerPhone": "1813737153",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 3
        }
      ],
      "total": 303,
      "actualPay": 303,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8600",
      "note": "少放盐",
      "createdAt": "2026-06-27 14:00:00",
      "paidAt": "2026-06-27 14:38:00"
    },
    {
      "id": "ORD1126",
      "customerName": "孔启嘉",
      "customerPhone": "1768928287",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 50,
      "actualPay": 50,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1157",
      "note": "少放盐",
      "createdAt": "2026-06-10 23:00:00",
      "paidAt": "2026-06-10 23:01:00"
    },
    {
      "id": "ORD1127",
      "customerName": "姚勇飞",
      "customerPhone": "1583727439",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 5
        }
      ],
      "total": 110,
      "actualPay": 110,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1981",
      "note": "",
      "createdAt": "2026-06-18 22:00:00",
      "paidAt": "2026-06-18 22:46:00"
    },
    {
      "id": "ORD1128",
      "customerName": "贺鹏宇",
      "customerPhone": "1549704670",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 4
        }
      ],
      "total": 140,
      "actualPay": 140,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7102",
      "note": "",
      "createdAt": "2026-06-23 05:00:00",
      "paidAt": "2026-06-23 05:48:00"
    },
    {
      "id": "ORD1129",
      "customerName": "傅德军",
      "customerPhone": "1816261217",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 19,
      "actualPay": 19,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3141",
      "note": "",
      "createdAt": "2026-06-03 16:00:00",
      "paidAt": "2026-06-03 16:19:00"
    },
    {
      "id": "ORD1130",
      "customerName": "邱良飞",
      "customerPhone": "1856853229",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        }
      ],
      "total": 103,
      "actualPay": 103,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3546",
      "note": "",
      "createdAt": "2026-06-25 23:00:00",
      "paidAt": "2026-06-25 23:11:00"
    },
    {
      "id": "ORD1131",
      "customerName": "傅华杰",
      "customerPhone": "1322484678",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        }
      ],
      "total": 144,
      "actualPay": 144,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8591",
      "note": "多加辣",
      "createdAt": "2026-06-20 07:00:00",
      "paidAt": "2026-06-20 07:55:00"
    },
    {
      "id": "ORD1132",
      "customerName": "李涛健",
      "customerPhone": "1726671818",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 3,
      "actualPay": 3,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4522",
      "note": "少放盐",
      "createdAt": "2026-06-30 18:00:00",
      "paidAt": "2026-06-30 18:10:00"
    },
    {
      "id": "ORD1133",
      "customerName": "潘涛超",
      "customerPhone": "1316985611",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 5
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        }
      ],
      "total": 272,
      "actualPay": 272,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2551",
      "note": "",
      "createdAt": "2026-06-24 12:00:00",
      "paidAt": "2026-06-24 12:07:00"
    },
    {
      "id": "ORD1134",
      "customerName": "钱飞嘉",
      "customerPhone": "1579159057",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        }
      ],
      "total": 24,
      "actualPay": 24,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4246",
      "note": "不要香菜",
      "createdAt": "2026-06-10 12:00:00",
      "paidAt": "2026-06-10 12:24:00"
    },
    {
      "id": "ORD1135",
      "customerName": "黄良阳",
      "customerPhone": "1346237430",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 5
        }
      ],
      "total": 68,
      "actualPay": 68,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3110",
      "note": "",
      "createdAt": "2026-06-09 11:00:00",
      "paidAt": "2026-06-09 11:58:00"
    },
    {
      "id": "ORD1136",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        }
      ],
      "total": 25,
      "actualPay": 25,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7471",
      "note": "",
      "createdAt": "2026-06-25 12:00:00",
      "paidAt": "2026-06-25 12:02:00"
    },
    {
      "id": "ORD1137",
      "customerName": "庄辉明",
      "customerPhone": "1894349273",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 4
        }
      ],
      "total": 140,
      "actualPay": 140,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8307",
      "note": "",
      "createdAt": "2026-06-12 18:00:00",
      "paidAt": "2026-06-12 18:03:00"
    },
    {
      "id": "ORD1138",
      "customerName": "邱宁良",
      "customerPhone": "1586717229",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        }
      ],
      "total": 104,
      "actualPay": 104,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9614",
      "note": "",
      "createdAt": "2026-06-18 22:00:00",
      "paidAt": "2026-06-18 22:41:00"
    },
    {
      "id": "ORD1139",
      "customerName": "龚强盛",
      "customerPhone": "1865387826",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        }
      ],
      "total": 191,
      "actualPay": 191,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "4588",
      "note": "",
      "createdAt": "2026-06-02 03:00:00",
      "paidAt": "2026-06-02 03:58:00"
    },
    {
      "id": "ORD1140",
      "customerName": "贺鹏宇",
      "customerPhone": "1549704670",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 5
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 5
        }
      ],
      "total": 410,
      "actualPay": 410,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4951",
      "note": "多加辣",
      "createdAt": "2026-06-05 07:00:00",
      "paidAt": "2026-06-05 07:35:00"
    },
    {
      "id": "ORD1141",
      "customerName": "邱昌涛",
      "customerPhone": "1910631072",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        }
      ],
      "total": 108,
      "actualPay": 108,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4875",
      "note": "少放盐",
      "createdAt": "2026-06-08 10:00:00",
      "paidAt": "2026-06-08 10:52:00"
    },
    {
      "id": "ORD1142",
      "customerName": "戴朝义",
      "customerPhone": "1940359449",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 4
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        }
      ],
      "total": 109,
      "actualPay": 109,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3876",
      "note": "",
      "createdAt": "2026-06-22 01:00:00",
      "paidAt": "2026-06-22 01:03:00"
    },
    {
      "id": "ORD1143",
      "customerName": "潘涛超",
      "customerPhone": "1316985611",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 35,
      "actualPay": 35,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "6435",
      "note": "",
      "createdAt": "2026-06-21 10:00:00",
      "paidAt": "2026-06-21 10:52:00"
    },
    {
      "id": "ORD1144",
      "customerName": "罗宇锋",
      "customerPhone": "1774900442",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 3
        }
      ],
      "total": 177,
      "actualPay": 177,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "9622",
      "note": "少放盐",
      "createdAt": "2026-06-07 02:00:00",
      "paidAt": "2026-06-07 02:05:00"
    },
    {
      "id": "ORD1145",
      "customerName": "王晨启",
      "customerPhone": "1829831678",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 5
        }
      ],
      "total": 185,
      "actualPay": 185,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6198",
      "note": "",
      "createdAt": "2026-06-19 16:00:00",
      "paidAt": "2026-06-19 16:46:00"
    },
    {
      "id": "ORD1146",
      "customerName": "汪庆军",
      "customerPhone": "1360608353",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5825",
      "note": "",
      "createdAt": "2026-06-17 04:00:00",
      "paidAt": "2026-06-17 04:12:00"
    },
    {
      "id": "ORD1147",
      "customerName": "孔华华",
      "customerPhone": "1921791214",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 4
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 5
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 462,
      "actualPay": 462,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "9129",
      "note": "",
      "createdAt": "2026-06-25 04:00:00",
      "paidAt": "2026-06-25 04:22:00"
    },
    {
      "id": "ORD1148",
      "customerName": "吴哲宁",
      "customerPhone": "1719942340",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 5
        }
      ],
      "total": 380,
      "actualPay": 380,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "8317",
      "note": "",
      "createdAt": "2026-06-29 15:00:00",
      "paidAt": "2026-06-29 15:17:00"
    },
    {
      "id": "ORD1149",
      "customerName": "蔡盛超",
      "customerPhone": "1766226946",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 85,
      "actualPay": 85,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7783",
      "note": "",
      "createdAt": "2026-06-18 22:00:00",
      "paidAt": "2026-06-18 22:57:00"
    },
    {
      "id": "ORD1150",
      "customerName": "姚勇飞",
      "customerPhone": "1583727439",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        }
      ],
      "total": 180,
      "actualPay": 180,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3664",
      "note": "",
      "createdAt": "2026-06-28 19:00:00",
      "paidAt": "2026-06-28 19:05:00"
    },
    {
      "id": "ORD1151",
      "customerName": "萧耀明",
      "customerPhone": "1950448393",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 4
        }
      ],
      "total": 112,
      "actualPay": 112,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3787",
      "note": "不要香菜",
      "createdAt": "2026-06-04 04:00:00",
      "paidAt": "2026-06-04 04:11:00"
    },
    {
      "id": "ORD1152",
      "customerName": "吴哲宁",
      "customerPhone": "1719942340",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 80,
      "actualPay": 80,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8113",
      "note": "",
      "createdAt": "2026-06-28 22:00:00",
      "paidAt": "2026-06-28 22:04:00"
    },
    {
      "id": "ORD1153",
      "customerName": "沈文安",
      "customerPhone": "1994897329",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        }
      ],
      "total": 70,
      "actualPay": 70,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5612",
      "note": "多加辣",
      "createdAt": "2026-06-24 16:00:00",
      "paidAt": "2026-06-24 16:16:00"
    },
    {
      "id": "ORD1154",
      "customerName": "孙义盛",
      "customerPhone": "1561196031",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        }
      ],
      "total": 52,
      "actualPay": 52,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "2435",
      "note": "多加辣",
      "createdAt": "2026-06-01 04:00:00",
      "paidAt": "2026-06-01 04:53:00"
    },
    {
      "id": "ORD1155",
      "customerName": "龚晨庆",
      "customerPhone": "1587326742",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        }
      ],
      "total": 68,
      "actualPay": 68,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "2342",
      "note": "",
      "createdAt": "2026-06-28 06:00:00",
      "paidAt": "2026-06-28 06:55:00"
    },
    {
      "id": "ORD1156",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 88,
      "actualPay": 88,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "7052",
      "note": "",
      "createdAt": "2026-06-16 20:00:00",
      "paidAt": "2026-06-16 20:29:00"
    },
    {
      "id": "ORD1157",
      "customerName": "胡军宁",
      "customerPhone": "1886866877",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        }
      ],
      "total": 154,
      "actualPay": 154,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2404",
      "note": "少放盐",
      "createdAt": "2026-06-07 11:00:00",
      "paidAt": "2026-06-07 11:52:00"
    },
    {
      "id": "ORD1158",
      "customerName": "常阳明",
      "customerPhone": "1336593837",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 412,
      "actualPay": 412,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5896",
      "note": "",
      "createdAt": "2026-06-11 02:00:00",
      "paidAt": "2026-06-11 02:26:00"
    },
    {
      "id": "ORD1159",
      "customerName": "萧耀明",
      "customerPhone": "1950448393",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 24,
      "actualPay": 24,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4157",
      "note": "",
      "createdAt": "2026-06-08 04:00:00",
      "paidAt": "2026-06-08 04:03:00"
    },
    {
      "id": "ORD1160",
      "customerName": "庄晖海",
      "customerPhone": "1796324090",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 4
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 4
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 252,
      "actualPay": 252,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "5525",
      "note": "",
      "createdAt": "2026-06-17 23:00:00",
      "paidAt": "2026-06-17 23:59:00"
    },
    {
      "id": "ORD1161",
      "customerName": "许盛飞",
      "customerPhone": "1787533315",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 58,
      "actualPay": 58,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2730",
      "note": "",
      "createdAt": "2026-06-26 03:00:00",
      "paidAt": "2026-06-26 03:51:00"
    },
    {
      "id": "ORD1162",
      "customerName": "萧华启",
      "customerPhone": "1534454571",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 173,
      "actualPay": 173,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "1635",
      "note": "不要香菜",
      "createdAt": "2026-06-27 10:00:00",
      "paidAt": "2026-06-27 10:57:00"
    },
    {
      "id": "ORD1163",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 4
        }
      ],
      "total": 100,
      "actualPay": 100,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "6535",
      "note": "多加辣",
      "createdAt": "2026-06-16 22:00:00",
      "paidAt": "2026-06-16 22:20:00"
    },
    {
      "id": "ORD1164",
      "customerName": "贺鹏宇",
      "customerPhone": "1549704670",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 400,
      "actualPay": 400,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "4079",
      "note": "",
      "createdAt": "2026-06-18 19:00:00",
      "paidAt": "2026-06-18 19:14:00"
    },
    {
      "id": "ORD1165",
      "customerName": "薛军海",
      "customerPhone": "1369571296",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        }
      ],
      "total": 129,
      "actualPay": 129,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3222",
      "note": "",
      "createdAt": "2026-06-22 15:00:00",
      "paidAt": "2026-06-22 15:12:00"
    },
    {
      "id": "ORD1166",
      "customerName": "刘志超",
      "customerPhone": "1934729173",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        }
      ],
      "total": 128,
      "actualPay": 128,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "9275",
      "note": "不要香菜",
      "createdAt": "2026-06-16 18:00:00",
      "paidAt": "2026-06-16 18:41:00"
    },
    {
      "id": "ORD1167",
      "customerName": "曾毅锋",
      "customerPhone": "1993966611",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 50,
      "actualPay": 50,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6730",
      "note": "少放盐",
      "createdAt": "2026-06-08 14:00:00",
      "paidAt": "2026-06-08 14:11:00"
    },
    {
      "id": "ORD1168",
      "customerName": "邱良飞",
      "customerPhone": "1856853229",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        }
      ],
      "total": 168,
      "actualPay": 168,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4688",
      "note": "",
      "createdAt": "2026-06-10 04:00:00",
      "paidAt": "2026-06-10 04:18:00"
    },
    {
      "id": "ORD1169",
      "customerName": "胡宁锋",
      "customerPhone": "1891848918",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 5
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 64,
      "actualPay": 64,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3837",
      "note": "",
      "createdAt": "2026-06-21 06:00:00",
      "paidAt": "2026-06-21 06:15:00"
    },
    {
      "id": "ORD1170",
      "customerName": "刘义亮",
      "customerPhone": "1385497823",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 67,
      "actualPay": 67,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "8646",
      "note": "多加辣",
      "createdAt": "2026-06-11 19:00:00",
      "paidAt": "2026-06-11 19:44:00"
    },
    {
      "id": "ORD1171",
      "customerName": "毛家义",
      "customerPhone": "1753675110",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 5
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 5
        }
      ],
      "total": 450,
      "actualPay": 450,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5890",
      "note": "",
      "createdAt": "2026-06-17 00:00:00",
      "paidAt": "2026-06-17 00:31:00"
    },
    {
      "id": "ORD1172",
      "customerName": "洪云庆",
      "customerPhone": "1543964587",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 4
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 319,
      "actualPay": 319,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6236",
      "note": "",
      "createdAt": "2026-06-03 11:00:00",
      "paidAt": "2026-06-03 11:47:00"
    },
    {
      "id": "ORD1173",
      "customerName": "杜平志",
      "customerPhone": "1387380378",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 5
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        }
      ],
      "total": 456,
      "actualPay": 456,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6873",
      "note": "多加辣",
      "createdAt": "2026-06-30 07:00:00",
      "paidAt": "2026-06-30 07:55:00"
    },
    {
      "id": "ORD1174",
      "customerName": "姜忠铭",
      "customerPhone": "1376982197",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 3
        }
      ],
      "total": 249,
      "actualPay": 249,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "6499",
      "note": "",
      "createdAt": "2026-06-24 21:00:00",
      "paidAt": "2026-06-24 21:15:00"
    },
    {
      "id": "ORD1175",
      "customerName": "唐宏志",
      "customerPhone": "1780314646",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 4
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 168,
      "actualPay": 168,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8709",
      "note": "",
      "createdAt": "2026-06-20 19:00:00",
      "paidAt": "2026-06-20 19:56:00"
    },
    {
      "id": "ORD1176",
      "customerName": "彭飞元",
      "customerPhone": "1854143663",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 79,
      "actualPay": 79,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7768",
      "note": "",
      "createdAt": "2026-06-23 15:00:00",
      "paidAt": "2026-06-23 15:56:00"
    },
    {
      "id": "ORD1177",
      "customerName": "谢朝天",
      "customerPhone": "1895506544",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        }
      ],
      "total": 337,
      "actualPay": 337,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1950",
      "note": "",
      "createdAt": "2026-06-08 14:00:00",
      "paidAt": "2026-06-08 14:29:00"
    },
    {
      "id": "ORD1178",
      "customerName": "李宏涛",
      "customerPhone": "1940880092",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        }
      ],
      "total": 124,
      "actualPay": 124,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "8035",
      "note": "不要香菜",
      "createdAt": "2026-06-06 13:00:00",
      "paidAt": "2026-06-06 13:28:00"
    },
    {
      "id": "ORD1179",
      "customerName": "侯博华",
      "customerPhone": "1924204170",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        }
      ],
      "total": 22,
      "actualPay": 22,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "6279",
      "note": "",
      "createdAt": "2026-06-16 23:00:00",
      "paidAt": "2026-06-16 23:02:00"
    },
    {
      "id": "ORD1180",
      "customerName": "刘国峰",
      "customerPhone": "1593992863",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7284",
      "note": "多加辣",
      "createdAt": "2026-06-06 13:00:00",
      "paidAt": "2026-06-06 13:11:00"
    },
    {
      "id": "ORD1181",
      "customerName": "洪云庆",
      "customerPhone": "1543964587",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 134,
      "actualPay": 134,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3192",
      "note": "少放盐",
      "createdAt": "2026-06-15 10:00:00",
      "paidAt": "2026-06-15 10:58:00"
    },
    {
      "id": "ORD1182",
      "customerName": "贺正宇",
      "customerPhone": "1326550589",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 5
        }
      ],
      "total": 230,
      "actualPay": 230,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "9267",
      "note": "",
      "createdAt": "2026-06-10 01:00:00",
      "paidAt": "2026-06-10 01:08:00"
    },
    {
      "id": "ORD1183",
      "customerName": "贺晨元",
      "customerPhone": "1568336959",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        }
      ],
      "total": 65,
      "actualPay": 65,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2771",
      "note": "",
      "createdAt": "2026-06-26 09:00:00",
      "paidAt": "2026-06-26 09:04:00"
    },
    {
      "id": "ORD1184",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        }
      ],
      "total": 144,
      "actualPay": 144,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5933",
      "note": "不要香菜",
      "createdAt": "2026-06-09 19:00:00",
      "paidAt": "2026-06-09 19:43:00"
    },
    {
      "id": "ORD1185",
      "customerName": "沈文安",
      "customerPhone": "1994897329",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        }
      ],
      "total": 208,
      "actualPay": 208,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "2867",
      "note": "",
      "createdAt": "2026-06-06 01:00:00",
      "paidAt": "2026-06-06 01:32:00"
    },
    {
      "id": "ORD1186",
      "customerName": "江天辉",
      "customerPhone": "1599948669",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 87,
      "actualPay": 87,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "4402",
      "note": "",
      "createdAt": "2026-06-24 10:00:00",
      "paidAt": "2026-06-24 10:22:00"
    },
    {
      "id": "ORD1187",
      "customerName": "叶俊晨",
      "customerPhone": "1763513320",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 4
        }
      ],
      "total": 312,
      "actualPay": 312,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3443",
      "note": "",
      "createdAt": "2026-06-25 12:00:00",
      "paidAt": "2026-06-25 12:50:00"
    },
    {
      "id": "ORD1188",
      "customerName": "孟永哲",
      "customerPhone": "1816571286",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 5
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 221,
      "actualPay": 221,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2635",
      "note": "",
      "createdAt": "2026-06-20 20:00:00",
      "paidAt": "2026-06-20 20:56:00"
    },
    {
      "id": "ORD1189",
      "customerName": "卢忠哲",
      "customerPhone": "1973248916",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        }
      ],
      "total": 51,
      "actualPay": 51,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3267",
      "note": "",
      "createdAt": "2026-06-02 23:00:00",
      "paidAt": "2026-06-02 23:22:00"
    },
    {
      "id": "ORD1190",
      "customerName": "戴朝义",
      "customerPhone": "1940359449",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 5
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        }
      ],
      "total": 507,
      "actualPay": 507,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3732",
      "note": "",
      "createdAt": "2026-06-21 10:00:00",
      "paidAt": "2026-06-21 10:09:00"
    },
    {
      "id": "ORD1191",
      "customerName": "张华志",
      "customerPhone": "1320896218",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        }
      ],
      "total": 60,
      "actualPay": 60,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3969",
      "note": "不要香菜",
      "createdAt": "2026-06-25 07:00:00",
      "paidAt": "2026-06-25 07:50:00"
    },
    {
      "id": "ORD1192",
      "customerName": "戴朝义",
      "customerPhone": "1940359449",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 4
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        }
      ],
      "total": 264,
      "actualPay": 264,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6148",
      "note": "",
      "createdAt": "2026-06-03 17:00:00",
      "paidAt": "2026-06-03 17:46:00"
    },
    {
      "id": "ORD1193",
      "customerName": "宋尚辉",
      "customerPhone": "1321969137",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 214,
      "actualPay": 214,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3435",
      "note": "",
      "createdAt": "2026-06-29 08:00:00",
      "paidAt": "2026-06-29 08:01:00"
    },
    {
      "id": "ORD1194",
      "customerName": "马家云",
      "customerPhone": "1899327370",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        }
      ],
      "total": 58,
      "actualPay": 58,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "4946",
      "note": "少放盐",
      "createdAt": "2026-06-22 00:00:00",
      "paidAt": "2026-06-22 00:18:00"
    },
    {
      "id": "ORD1195",
      "customerName": "程龙强",
      "customerPhone": "1724580865",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 126,
      "actualPay": 126,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "2442",
      "note": "",
      "createdAt": "2026-06-19 23:00:00",
      "paidAt": "2026-06-19 23:29:00"
    },
    {
      "id": "ORD1196",
      "customerName": "钱伟盛",
      "customerPhone": "1540384780",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 252,
      "actualPay": 252,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "9328",
      "note": "",
      "createdAt": "2026-06-27 10:00:00",
      "paidAt": "2026-06-27 10:42:00"
    },
    {
      "id": "ORD1197",
      "customerName": "高锋晨",
      "customerPhone": "1893262272",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 84,
      "actualPay": 84,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6952",
      "note": "",
      "createdAt": "2026-06-24 22:00:00",
      "paidAt": "2026-06-24 22:08:00"
    },
    {
      "id": "ORD1198",
      "customerName": "孙义盛",
      "customerPhone": "1561196031",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 3
        }
      ],
      "total": 135,
      "actualPay": 135,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "2741",
      "note": "",
      "createdAt": "2026-06-13 11:00:00",
      "paidAt": "2026-06-13 11:58:00"
    },
    {
      "id": "ORD1199",
      "customerName": "蔡志军",
      "customerPhone": "1887937924",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        }
      ],
      "total": 54,
      "actualPay": 54,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5166",
      "note": "",
      "createdAt": "2026-06-18 12:00:00",
      "paidAt": "2026-06-18 12:13:00"
    },
    {
      "id": "ORD1200",
      "customerName": "李涛健",
      "customerPhone": "1726671818",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        }
      ],
      "total": 24,
      "actualPay": 24,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "7790",
      "note": "",
      "createdAt": "2026-06-15 11:00:00",
      "paidAt": "2026-06-15 12:00:00"
    },
    {
      "id": "ORD1201",
      "customerName": "彭飞元",
      "customerPhone": "1854143663",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 5
        }
      ],
      "total": 125,
      "actualPay": 125,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8091",
      "note": "",
      "createdAt": "2026-06-01 05:00:00",
      "paidAt": "2026-06-01 06:00:00"
    },
    {
      "id": "ORD1202",
      "customerName": "孟永哲",
      "customerPhone": "1816571286",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        }
      ],
      "total": 154,
      "actualPay": 154,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7859",
      "note": "",
      "createdAt": "2026-06-14 18:00:00",
      "paidAt": "2026-06-14 18:18:00"
    },
    {
      "id": "ORD1203",
      "customerName": "郝瑞锋",
      "customerPhone": "1366372598",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 4
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 302,
      "actualPay": 302,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "4291",
      "note": "",
      "createdAt": "2026-06-14 10:00:00",
      "paidAt": "2026-06-14 10:40:00"
    },
    {
      "id": "ORD1204",
      "customerName": "潘凯哲",
      "customerPhone": "1547472756",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 185,
      "actualPay": 185,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "7839",
      "note": "多加辣",
      "createdAt": "2026-06-16 01:00:00",
      "paidAt": "2026-06-16 01:57:00"
    },
    {
      "id": "ORD1205",
      "customerName": "庄晖海",
      "customerPhone": "1796324090",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 132,
      "actualPay": 132,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3636",
      "note": "多加辣",
      "createdAt": "2026-06-09 13:00:00",
      "paidAt": "2026-06-09 13:44:00"
    },
    {
      "id": "ORD1206",
      "customerName": "刘义亮",
      "customerPhone": "1385497823",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 70,
      "actualPay": 70,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4675",
      "note": "不要香菜",
      "createdAt": "2026-06-20 08:00:00",
      "paidAt": "2026-06-20 08:16:00"
    },
    {
      "id": "ORD1207",
      "customerName": "孟永哲",
      "customerPhone": "1816571286",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 248,
      "actualPay": 248,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "1212",
      "note": "多加辣",
      "createdAt": "2026-06-24 14:00:00",
      "paidAt": "2026-06-24 14:13:00"
    },
    {
      "id": "ORD1208",
      "customerName": "郑安义",
      "customerPhone": "1566566867",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 129,
      "actualPay": 129,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "4170",
      "note": "多加辣",
      "createdAt": "2026-06-26 18:00:00",
      "paidAt": "2026-06-26 18:29:00"
    },
    {
      "id": "ORD1209",
      "customerName": "郭凯亮",
      "customerPhone": "1899584480",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 3
        }
      ],
      "total": 174,
      "actualPay": 174,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1665",
      "note": "不要香菜",
      "createdAt": "2026-06-06 03:00:00",
      "paidAt": "2026-06-06 03:18:00"
    },
    {
      "id": "ORD1210",
      "customerName": "胡杰华",
      "customerPhone": "1898692821",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8640",
      "note": "",
      "createdAt": "2026-06-01 06:00:00",
      "paidAt": "2026-06-01 06:03:00"
    },
    {
      "id": "ORD1211",
      "customerName": "郑智义",
      "customerPhone": "1535854154",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "2194",
      "note": "少放盐",
      "createdAt": "2026-06-21 23:00:00",
      "paidAt": "2026-06-21 23:34:00"
    },
    {
      "id": "ORD1212",
      "customerName": "武明盛",
      "customerPhone": "1759786578",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 56,
      "actualPay": 56,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "6724",
      "note": "",
      "createdAt": "2026-06-18 06:00:00",
      "paidAt": "2026-06-18 06:57:00"
    },
    {
      "id": "ORD1213",
      "customerName": "冯宇飞",
      "customerPhone": "1559350337",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 4
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        }
      ],
      "total": 182,
      "actualPay": 182,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2879",
      "note": "少放盐",
      "createdAt": "2026-06-21 07:00:00",
      "paidAt": "2026-06-21 07:29:00"
    },
    {
      "id": "ORD1214",
      "customerName": "廖明昌",
      "customerPhone": "1313505135",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 3
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        }
      ],
      "total": 362,
      "actualPay": 362,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "8975",
      "note": "",
      "createdAt": "2026-06-22 23:00:00",
      "paidAt": "2026-06-22 23:19:00"
    },
    {
      "id": "ORD1215",
      "customerName": "胡宁锋",
      "customerPhone": "1891848918",
      "items": [
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 4
        }
      ],
      "total": 198,
      "actualPay": 198,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2072",
      "note": "",
      "createdAt": "2026-06-23 23:00:00",
      "paidAt": "2026-06-23 23:43:00"
    },
    {
      "id": "ORD1216",
      "customerName": "黄良阳",
      "customerPhone": "1346237430",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 5
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        }
      ],
      "total": 583,
      "actualPay": 583,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3519",
      "note": "",
      "createdAt": "2026-06-28 15:00:00",
      "paidAt": "2026-06-28 15:30:00"
    },
    {
      "id": "ORD1217",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        }
      ],
      "total": 68,
      "actualPay": 68,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "4729",
      "note": "多加辣",
      "createdAt": "2026-06-11 18:00:00",
      "paidAt": "2026-06-11 18:27:00"
    },
    {
      "id": "ORD1218",
      "customerName": "严军天",
      "customerPhone": "1789751293",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        }
      ],
      "total": 145,
      "actualPay": 145,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "1745",
      "note": "",
      "createdAt": "2026-06-27 10:00:00",
      "paidAt": "2026-06-27 10:23:00"
    },
    {
      "id": "ORD1219",
      "customerName": "魏耀晨",
      "customerPhone": "1850517657",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 34,
      "actualPay": 34,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7473",
      "note": "",
      "createdAt": "2026-06-19 17:00:00",
      "paidAt": "2026-06-19 17:31:00"
    },
    {
      "id": "ORD1220",
      "customerName": "余耀海",
      "customerPhone": "1745213745",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        }
      ],
      "total": 96,
      "actualPay": 96,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "3360",
      "note": "多加辣",
      "createdAt": "2026-06-24 07:00:00",
      "paidAt": "2026-06-24 07:44:00"
    },
    {
      "id": "ORD1221",
      "customerName": "崔盛强",
      "customerPhone": "1987964764",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 314,
      "actualPay": 314,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4469",
      "note": "不要香菜",
      "createdAt": "2026-06-10 00:00:00",
      "paidAt": "2026-06-10 00:58:00"
    },
    {
      "id": "ORD1222",
      "customerName": "崔盛强",
      "customerPhone": "1987964764",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        }
      ],
      "total": 70,
      "actualPay": 70,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2877",
      "note": "",
      "createdAt": "2026-06-11 19:00:00",
      "paidAt": "2026-06-11 19:43:00"
    },
    {
      "id": "ORD1223",
      "customerName": "蒋凯智",
      "customerPhone": "1532350493",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 110,
      "actualPay": 110,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6420",
      "note": "少放盐",
      "createdAt": "2026-06-25 19:00:00",
      "paidAt": "2026-06-25 19:09:00"
    },
    {
      "id": "ORD1224",
      "customerName": "胡家博",
      "customerPhone": "1764102588",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 10,
      "actualPay": 10,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "8960",
      "note": "",
      "createdAt": "2026-06-09 07:00:00",
      "paidAt": "2026-06-09 07:22:00"
    },
    {
      "id": "ORD1225",
      "customerName": "邱宁良",
      "customerPhone": "1586717229",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        }
      ],
      "total": 84,
      "actualPay": 84,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5033",
      "note": "",
      "createdAt": "2026-06-01 05:00:00",
      "paidAt": "2026-06-01 05:46:00"
    },
    {
      "id": "ORD1226",
      "customerName": "马家云",
      "customerPhone": "1899327370",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        }
      ],
      "total": 148,
      "actualPay": 148,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8296",
      "note": "少放盐",
      "createdAt": "2026-06-21 12:00:00",
      "paidAt": "2026-06-21 12:50:00"
    },
    {
      "id": "ORD1227",
      "customerName": "罗晖铭",
      "customerPhone": "1963469776",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        }
      ],
      "total": 125,
      "actualPay": 125,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "5312",
      "note": "",
      "createdAt": "2026-06-07 00:00:00",
      "paidAt": "2026-06-07 00:47:00"
    },
    {
      "id": "ORD1228",
      "customerName": "吴哲宁",
      "customerPhone": "1719942340",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 3
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 220,
      "actualPay": 220,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "9904",
      "note": "",
      "createdAt": "2026-06-02 14:00:00",
      "paidAt": "2026-06-02 14:42:00"
    },
    {
      "id": "ORD1229",
      "customerName": "谢朝天",
      "customerPhone": "1895506544",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        }
      ],
      "total": 96,
      "actualPay": 96,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9210",
      "note": "",
      "createdAt": "2026-06-06 18:00:00",
      "paidAt": "2026-06-06 18:26:00"
    },
    {
      "id": "ORD1230",
      "customerName": "贺晨元",
      "customerPhone": "1568336959",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 3
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 62,
      "actualPay": 62,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3395",
      "note": "",
      "createdAt": "2026-06-07 20:00:00",
      "paidAt": "2026-06-07 20:23:00"
    },
    {
      "id": "ORD1231",
      "customerName": "卢忠哲",
      "customerPhone": "1973248916",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 141,
      "actualPay": 141,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "8695",
      "note": "",
      "createdAt": "2026-06-16 10:00:00",
      "paidAt": "2026-06-16 10:57:00"
    },
    {
      "id": "ORD1232",
      "customerName": "胡军宁",
      "customerPhone": "1886866877",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 3
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 3
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 434,
      "actualPay": 434,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6985",
      "note": "",
      "createdAt": "2026-06-28 22:00:00",
      "paidAt": "2026-06-28 22:34:00"
    },
    {
      "id": "ORD1233",
      "customerName": "刘义亮",
      "customerPhone": "1385497823",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        }
      ],
      "total": 286,
      "actualPay": 286,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "2263",
      "note": "多加辣",
      "createdAt": "2026-06-08 02:00:00",
      "paidAt": "2026-06-08 02:14:00"
    },
    {
      "id": "ORD1234",
      "customerName": "谢朝天",
      "customerPhone": "1895506544",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        }
      ],
      "total": 30,
      "actualPay": 30,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7793",
      "note": "少放盐",
      "createdAt": "2026-06-06 02:00:00",
      "paidAt": "2026-06-06 02:47:00"
    },
    {
      "id": "ORD1235",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 140,
      "actualPay": 140,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3639",
      "note": "",
      "createdAt": "2026-06-02 21:00:00",
      "paidAt": "2026-06-02 21:41:00"
    },
    {
      "id": "ORD1236",
      "customerName": "余勇军",
      "customerPhone": "1523673681",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 4
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 5
        }
      ],
      "total": 568,
      "actualPay": 568,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "5644",
      "note": "",
      "createdAt": "2026-06-28 05:00:00",
      "paidAt": "2026-06-28 05:14:00"
    },
    {
      "id": "ORD1237",
      "customerName": "刘盛嘉",
      "customerPhone": "1899595193",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        }
      ],
      "total": 244,
      "actualPay": 244,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3747",
      "note": "少放盐",
      "createdAt": "2026-06-22 20:00:00",
      "paidAt": "2026-06-22 21:00:00"
    },
    {
      "id": "ORD1238",
      "customerName": "高锋晨",
      "customerPhone": "1893262272",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        }
      ],
      "total": 32,
      "actualPay": 32,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "9564",
      "note": "不要香菜",
      "createdAt": "2026-06-01 17:00:00",
      "paidAt": "2026-06-01 17:53:00"
    },
    {
      "id": "ORD1239",
      "customerName": "谢朝天",
      "customerPhone": "1895506544",
      "items": [
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 2
        }
      ],
      "total": 60,
      "actualPay": 60,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2526",
      "note": "",
      "createdAt": "2026-06-02 16:00:00",
      "paidAt": "2026-06-02 16:43:00"
    },
    {
      "id": "ORD1240",
      "customerName": "罗宇锋",
      "customerPhone": "1774900442",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        }
      ],
      "total": 99,
      "actualPay": 99,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7246",
      "note": "少放盐",
      "createdAt": "2026-06-10 19:00:00",
      "paidAt": "2026-06-10 19:38:00"
    },
    {
      "id": "ORD1241",
      "customerName": "苏军宇",
      "customerPhone": "1785192055",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 4
        }
      ],
      "total": 184,
      "actualPay": 184,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "9908",
      "note": "不要香菜",
      "createdAt": "2026-06-04 14:00:00",
      "paidAt": "2026-06-04 14:17:00"
    },
    {
      "id": "ORD1242",
      "customerName": "毛国锋",
      "customerPhone": "1738426228",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 170,
      "actualPay": 170,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "7698",
      "note": "少放盐",
      "createdAt": "2026-06-09 19:00:00",
      "paidAt": "2026-06-09 19:07:00"
    },
    {
      "id": "ORD1243",
      "customerName": "郑智义",
      "customerPhone": "1535854154",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        }
      ],
      "total": 108,
      "actualPay": 108,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4337",
      "note": "不要香菜",
      "createdAt": "2026-06-30 01:00:00",
      "paidAt": "2026-06-30 01:36:00"
    },
    {
      "id": "ORD1244",
      "customerName": "胡杰华",
      "customerPhone": "1898692821",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        }
      ],
      "total": 44,
      "actualPay": 44,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6641",
      "note": "不要香菜",
      "createdAt": "2026-06-11 20:00:00",
      "paidAt": "2026-06-11 20:48:00"
    },
    {
      "id": "ORD1245",
      "customerName": "钱飞嘉",
      "customerPhone": "1579159057",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 4
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 148,
      "actualPay": 148,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3633",
      "note": "不要香菜",
      "createdAt": "2026-06-15 11:00:00",
      "paidAt": "2026-06-15 11:41:00"
    },
    {
      "id": "ORD1246",
      "customerName": "刘国峰",
      "customerPhone": "1593992863",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        }
      ],
      "total": 67,
      "actualPay": 67,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "7296",
      "note": "不要香菜",
      "createdAt": "2026-06-27 00:00:00",
      "paidAt": "2026-06-27 00:40:00"
    },
    {
      "id": "ORD1247",
      "customerName": "胡家博",
      "customerPhone": "1764102588",
      "items": [
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 3
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 190,
      "actualPay": 190,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4190",
      "note": "",
      "createdAt": "2026-06-09 15:00:00",
      "paidAt": "2026-06-09 15:51:00"
    },
    {
      "id": "ORD1248",
      "customerName": "程凯家",
      "customerPhone": "1554608293",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        }
      ],
      "total": 116,
      "actualPay": 116,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6785",
      "note": "不要香菜",
      "createdAt": "2026-06-12 19:00:00",
      "paidAt": "2026-06-12 19:26:00"
    },
    {
      "id": "ORD1249",
      "customerName": "白斌元",
      "customerPhone": "1374382715",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 1
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        }
      ],
      "total": 48,
      "actualPay": 48,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6693",
      "note": "多加辣",
      "createdAt": "2026-06-13 04:00:00",
      "paidAt": "2026-06-13 04:15:00"
    },
    {
      "id": "ORD1250",
      "customerName": "吕耀杰",
      "customerPhone": "1956129856",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        }
      ],
      "total": 42,
      "actualPay": 42,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "2185",
      "note": "多加辣",
      "createdAt": "2026-06-22 15:00:00",
      "paidAt": "2026-06-22 15:22:00"
    },
    {
      "id": "ORD1251",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 5
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        }
      ],
      "total": 180,
      "actualPay": 180,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "8548",
      "note": "",
      "createdAt": "2026-06-15 12:00:00",
      "paidAt": "2026-06-15 12:31:00"
    },
    {
      "id": "ORD1252",
      "customerName": "蔡俊家",
      "customerPhone": "1768618019",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 3
        }
      ],
      "total": 9,
      "actualPay": 9,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "6172",
      "note": "不要香菜",
      "createdAt": "2026-06-10 10:00:00",
      "paidAt": "2026-06-10 10:23:00"
    },
    {
      "id": "ORD1253",
      "customerName": "丁华盛",
      "customerPhone": "1989143087",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 3
        }
      ],
      "total": 188,
      "actualPay": 188,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "8807",
      "note": "少放盐",
      "createdAt": "2026-06-04 06:00:00",
      "paidAt": "2026-06-04 06:23:00"
    },
    {
      "id": "ORD1254",
      "customerName": "周辉天",
      "customerPhone": "1563738184",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 36,
      "actualPay": 36,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "4271",
      "note": "",
      "createdAt": "2026-06-09 03:00:00",
      "paidAt": "2026-06-09 03:48:00"
    },
    {
      "id": "ORD1255",
      "customerName": "廖明昌",
      "customerPhone": "1313505135",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        }
      ],
      "total": 105,
      "actualPay": 105,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "3555",
      "note": "",
      "createdAt": "2026-06-27 10:00:00",
      "paidAt": "2026-06-27 10:08:00"
    },
    {
      "id": "ORD1256",
      "customerName": "潘嘉博",
      "customerPhone": "1970498170",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 4
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        }
      ],
      "total": 94,
      "actualPay": 94,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "5501",
      "note": "",
      "createdAt": "2026-06-14 11:00:00",
      "paidAt": "2026-06-14 11:12:00"
    },
    {
      "id": "ORD1257",
      "customerName": "孟永哲",
      "customerPhone": "1816571286",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 2
        }
      ],
      "total": 32,
      "actualPay": 32,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "9859",
      "note": "",
      "createdAt": "2026-06-19 02:00:00",
      "paidAt": "2026-06-19 02:33:00"
    },
    {
      "id": "ORD1258",
      "customerName": "吕辉义",
      "customerPhone": "1914845121",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        },
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        },
        {
          "name": "卤牛腱",
          "productId": "prod_9574decb",
          "price": 78,
          "quantity": 1
        }
      ],
      "total": 268,
      "actualPay": 268,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "2650",
      "note": "少放盐",
      "createdAt": "2026-06-10 00:00:00",
      "paidAt": "2026-06-10 00:24:00"
    },
    {
      "id": "ORD1259",
      "customerName": "余安峰",
      "customerPhone": "1519584622",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        }
      ],
      "total": 28,
      "actualPay": 28,
      "status": "已完成",
      "payMethod": "支付宝",
      "pickupCode": "6995",
      "note": "",
      "createdAt": "2026-06-21 03:00:00",
      "paidAt": "2026-06-21 03:32:00"
    },
    {
      "id": "ORD1260",
      "customerName": "庄晖海",
      "customerPhone": "1796324090",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        }
      ],
      "total": 102,
      "actualPay": 102,
      "status": "已支付",
      "payMethod": "微信支付",
      "pickupCode": "3148",
      "note": "",
      "createdAt": "2026-06-20 06:00:00",
      "paidAt": "2026-06-20 06:53:00"
    },
    {
      "id": "ORD1261",
      "customerName": "沈文安",
      "customerPhone": "1994897329",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 3
        }
      ],
      "total": 142,
      "actualPay": 142,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "3893",
      "note": "不要香菜",
      "createdAt": "2026-06-21 05:00:00",
      "paidAt": "2026-06-21 05:32:00"
    },
    {
      "id": "ORD1262",
      "customerName": "黄国宁",
      "customerPhone": "1591529130",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 1
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 1
        }
      ],
      "total": 136,
      "actualPay": 136,
      "status": "已完成",
      "payMethod": "微信支付",
      "pickupCode": "4530",
      "note": "多加辣",
      "createdAt": "2026-06-08 00:00:00",
      "paidAt": "2026-06-08 00:31:00"
    },
    {
      "id": "ORD1263",
      "customerName": "黄良阳",
      "customerPhone": "1346237430",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        }
      ],
      "total": 101,
      "actualPay": 101,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "1324",
      "note": "不要香菜",
      "createdAt": "2026-06-12 00:00:00",
      "paidAt": "2026-06-12 00:08:00"
    },
    {
      "id": "ORD1264",
      "customerName": "苏浩龙",
      "customerPhone": "1969777016",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "酸辣凤爪",
          "productId": "prod_2ac10be5",
          "price": 30,
          "quantity": 5
        }
      ],
      "total": 156,
      "actualPay": 156,
      "status": "已支付",
      "payMethod": "支付宝",
      "pickupCode": "6326",
      "note": "",
      "createdAt": "2026-06-13 04:00:00",
      "paidAt": "2026-06-13 04:50:00"
    },
    {
      "id": "ORD1265",
      "customerName": "刘盛嘉",
      "customerPhone": "1899595193",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 2
        },
        {
          "name": "酱香饼",
          "productId": "prod_1d26f8b1",
          "price": 10,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        }
      ],
      "total": 177,
      "actualPay": 177,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "7911",
      "note": "不要香菜",
      "createdAt": "2026-06-15 10:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1266",
      "customerName": "郭天海",
      "customerPhone": "1585460810",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        }
      ],
      "total": 45,
      "actualPay": 45,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "5773",
      "note": "多加辣",
      "createdAt": "2026-06-14 13:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1267",
      "customerName": "武嘉德",
      "customerPhone": "1781717192",
      "items": [
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 3
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 133,
      "actualPay": 133,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "7782",
      "note": "",
      "createdAt": "2026-06-20 06:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1268",
      "customerName": "袁俊浩",
      "customerPhone": "1575875231",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 1
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 3
        },
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 220,
      "actualPay": 220,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "2687",
      "note": "",
      "createdAt": "2026-06-17 23:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1269",
      "customerName": "洪云庆",
      "customerPhone": "1543964587",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 2
        },
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 5
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 471,
      "actualPay": 471,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "3544",
      "note": "",
      "createdAt": "2026-06-27 09:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1270",
      "customerName": "胡家博",
      "customerPhone": "1764102588",
      "items": [
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 2
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 211,
      "actualPay": 211,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "1468",
      "note": "",
      "createdAt": "2026-06-08 07:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1271",
      "customerName": "戴朝义",
      "customerPhone": "1940359449",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 5
        },
        {
          "name": "卤豆干",
          "productId": "prod_1a41ac64",
          "price": 8,
          "quantity": 2
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 2
        }
      ],
      "total": 290,
      "actualPay": 290,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "9835",
      "note": "",
      "createdAt": "2026-06-30 19:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1272",
      "customerName": "曾哲宇",
      "customerPhone": "1757563459",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 2
        },
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 2
        }
      ],
      "total": 42,
      "actualPay": 42,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "9745",
      "note": "多加辣",
      "createdAt": "2026-06-23 09:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1273",
      "customerName": "吕辉义",
      "customerPhone": "1914845121",
      "items": [
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        }
      ],
      "total": 47,
      "actualPay": 47,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "5256",
      "note": "",
      "createdAt": "2026-06-18 15:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1274",
      "customerName": "程尚阳",
      "customerPhone": "1990187829",
      "items": [
        {
          "name": "鸭锁骨",
          "productId": "prod_0d320880",
          "price": 22,
          "quantity": 3
        }
      ],
      "total": 66,
      "actualPay": 66,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "6634",
      "note": "多加辣",
      "createdAt": "2026-06-06 20:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1275",
      "customerName": "洪龙峰",
      "customerPhone": "1910554228",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 4
        },
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 2
        }
      ],
      "total": 122,
      "actualPay": 122,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "8052",
      "note": "多加辣",
      "createdAt": "2026-06-01 10:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1276",
      "customerName": "傅宁飞",
      "customerPhone": "1996733346",
      "items": [
        {
          "name": "酱牛肉",
          "productId": "prod_5ea20d64",
          "price": 68,
          "quantity": 2
        }
      ],
      "total": 136,
      "actualPay": 136,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "7745",
      "note": "不要香菜",
      "createdAt": "2026-06-09 02:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1277",
      "customerName": "郝瑞锋",
      "customerPhone": "1366372598",
      "items": [
        {
          "name": "凉拌皮蛋",
          "productId": "prod_a6795f10",
          "price": 18,
          "quantity": 3
        }
      ],
      "total": 54,
      "actualPay": 54,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "7199",
      "note": "",
      "createdAt": "2026-06-17 16:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1278",
      "customerName": "汪安启",
      "customerPhone": "1869813685",
      "items": [
        {
          "name": "卤蛋",
          "productId": "prod_828a47a7",
          "price": 3,
          "quantity": 1
        }
      ],
      "total": 3,
      "actualPay": 3,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "5454",
      "note": "多加辣",
      "createdAt": "2026-06-27 04:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1279",
      "customerName": "胡宁锋",
      "customerPhone": "1891848918",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 1
        },
        {
          "name": "卤鸡爪",
          "productId": "prod_4a4d8309",
          "price": 28,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 1
        }
      ],
      "total": 72,
      "actualPay": 72,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "8460",
      "note": "",
      "createdAt": "2026-06-05 18:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1280",
      "customerName": "刘鹏龙",
      "customerPhone": "1745552681",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 1
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        },
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 2
        }
      ],
      "total": 150,
      "actualPay": 150,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "2675",
      "note": "多加辣",
      "createdAt": "2026-06-08 23:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1281",
      "customerName": "彭博超",
      "customerPhone": "1882720953",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        }
      ],
      "total": 75,
      "actualPay": 75,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "2477",
      "note": "",
      "createdAt": "2026-06-10 23:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1282",
      "customerName": "许盛飞",
      "customerPhone": "1787533315",
      "items": [
        {
          "name": "卤肥肠",
          "productId": "prod_55786334",
          "price": 45,
          "quantity": 1
        },
        {
          "name": "鸭脖",
          "productId": "prod_5af1bfd1",
          "price": 32,
          "quantity": 3
        }
      ],
      "total": 141,
      "actualPay": 141,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "8597",
      "note": "",
      "createdAt": "2026-06-16 21:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1283",
      "customerName": "施耀铭",
      "customerPhone": "1799759444",
      "items": [
        {
          "name": "凉拌海带丝",
          "productId": "prod_64141f7a",
          "price": 12,
          "quantity": 4
        }
      ],
      "total": 48,
      "actualPay": 48,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "5366",
      "note": "不要香菜",
      "createdAt": "2026-06-03 10:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1284",
      "customerName": "郭天海",
      "customerPhone": "1585460810",
      "items": [
        {
          "name": "羊肉卷",
          "productId": "prod_10d63bd1",
          "price": 58,
          "quantity": 4
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 267,
      "actualPay": 267,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "1206",
      "note": "",
      "createdAt": "2026-06-17 07:00:00",
      "paidAt": ""
    },
    {
      "id": "ORD1285",
      "customerName": "程宁志",
      "customerPhone": "1549277184",
      "items": [
        {
          "name": "鸭翅",
          "productId": "prod_ffa194d8",
          "price": 25,
          "quantity": 3
        },
        {
          "name": "卤猪蹄",
          "productId": "prod_06440d00",
          "price": 35,
          "quantity": 1
        }
      ],
      "total": 110,
      "actualPay": 110,
      "status": "待支付",
      "payMethod": "",
      "pickupCode": "2539",
      "note": "",
      "createdAt": "2026-06-20 16:00:00",
      "paidAt": ""
    }
  ],
  "points": [
    {
      "userId": "U0001",
      "balance": 204,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "分享奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "签到奖励",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "新用户奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "分享奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "分享奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "消费积分",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 38,
          "reason": "积分兑换商品",
          "date": "2026-05-11 00:00:00"
        }
      ]
    },
    {
      "userId": "U0002",
      "balance": 117,
      "history": [
        {
          "type": "earn",
          "amount": 5,
          "reason": "签到奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "新用户奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "签到奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "新用户奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "活动赠送",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 105,
          "reason": "积分兑换商品",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0003",
      "balance": -3,
      "history": [
        {
          "type": "earn",
          "amount": 10,
          "reason": "新用户奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "消费积分",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "签到奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "消费积分",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "签到奖励",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 55,
          "reason": "兑换优惠券",
          "date": "2026-05-27 00:00:00"
        },
        {
          "type": "spend",
          "amount": 18,
          "reason": "积分兑换商品",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0004",
      "balance": 146,
      "history": [
        {
          "type": "earn",
          "amount": 17,
          "reason": "新用户奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "分享奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "分享奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "新用户奖励",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "分享奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "新用户奖励",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 107,
          "reason": "兑换优惠券",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 14,
          "reason": "兑换优惠券",
          "date": "2026-05-04 00:00:00"
        }
      ]
    },
    {
      "userId": "U0005",
      "balance": 131,
      "history": [
        {
          "type": "earn",
          "amount": 20,
          "reason": "分享奖励",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "签到奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "活动赠送",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "签到奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "分享奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "分享奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "消费积分",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 55,
          "reason": "积分兑换商品",
          "date": "2026-05-25 00:00:00"
        }
      ]
    },
    {
      "userId": "U0006",
      "balance": 54,
      "history": [
        {
          "type": "earn",
          "amount": 17,
          "reason": "消费积分",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "活动赠送",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "新用户奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "新用户奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "分享奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "消费积分",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0007",
      "balance": 87,
      "history": [
        {
          "type": "earn",
          "amount": 8,
          "reason": "分享奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "分享奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "消费积分",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "分享奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "消费积分",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "消费积分",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "消费积分",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "新用户奖励",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "签到奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "签到奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 152,
          "reason": "兑换优惠券",
          "date": "2026-05-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0008",
      "balance": 2,
      "history": [
        {
          "type": "earn",
          "amount": 45,
          "reason": "新用户奖励",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 189,
          "reason": "兑换优惠券",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "积分兑换商品",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-19 00:00:00"
        }
      ]
    },
    {
      "userId": "U0009",
      "balance": 14,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "签到奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "分享奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "分享奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "活动赠送",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 165,
          "reason": "积分兑换商品",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 79,
          "reason": "积分兑换商品",
          "date": "2026-05-19 00:00:00"
        }
      ]
    },
    {
      "userId": "U0010",
      "balance": 358,
      "history": [
        {
          "type": "earn",
          "amount": 21,
          "reason": "分享奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "活动赠送",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "分享奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "新用户奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "消费积分",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "签到奖励",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "分享奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "spend",
          "amount": 34,
          "reason": "积分兑换商品",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0011",
      "balance": 35,
      "history": [
        {
          "type": "earn",
          "amount": 13,
          "reason": "分享奖励",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "签到奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 86,
          "reason": "积分兑换商品",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 61,
          "reason": "兑换优惠券",
          "date": "2026-05-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0012",
      "balance": -7,
      "history": [
        {
          "type": "earn",
          "amount": 25,
          "reason": "活动赠送",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 98,
          "reason": "兑换优惠券",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0013",
      "balance": 364,
      "history": [
        {
          "type": "earn",
          "amount": 29,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "分享奖励",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "签到奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "新用户奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "活动赠送",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "新用户奖励",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "分享奖励",
          "date": "2026-04-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 49,
          "reason": "积分兑换商品",
          "date": "2026-05-10 00:00:00"
        }
      ]
    },
    {
      "userId": "U0014",
      "balance": 116,
      "history": [
        {
          "type": "earn",
          "amount": 33,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "消费积分",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "分享奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "签到奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "消费积分",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "消费积分",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 77,
          "reason": "积分兑换商品",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 138,
          "reason": "积分抵现",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 43,
          "reason": "积分兑换商品",
          "date": "2026-05-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0015",
      "balance": 258,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "签到奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "新用户奖励",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 28,
          "reason": "积分抵现",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0016",
      "balance": 44,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "活动赠送",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "分享奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "分享奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 53,
          "reason": "积分抵现",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 123,
          "reason": "兑换优惠券",
          "date": "2026-05-27 00:00:00"
        }
      ]
    },
    {
      "userId": "U0017",
      "balance": 164,
      "history": [
        {
          "type": "spend",
          "amount": 61,
          "reason": "兑换优惠券",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0018",
      "balance": 33,
      "history": [
        {
          "type": "earn",
          "amount": 12,
          "reason": "消费积分",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 46,
          "reason": "积分兑换商品",
          "date": "2026-05-21 00:00:00"
        }
      ]
    },
    {
      "userId": "U0019",
      "balance": 355,
      "history": [
        {
          "type": "earn",
          "amount": 24,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        }
      ]
    },
    {
      "userId": "U0020",
      "balance": 155,
      "history": [
        {
          "type": "earn",
          "amount": 39,
          "reason": "签到奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "新用户奖励",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "新用户奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "spend",
          "amount": 14,
          "reason": "积分抵现",
          "date": "2026-05-13 00:00:00"
        }
      ]
    },
    {
      "userId": "U0021",
      "balance": 463,
      "history": [
        {
          "type": "earn",
          "amount": 38,
          "reason": "消费积分",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "新用户奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "活动赠送",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "消费积分",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "分享奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "分享奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "活动赠送",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "新用户奖励",
          "date": "2026-04-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0022",
      "balance": 277,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "签到奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "活动赠送",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "消费积分",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 135,
          "reason": "积分抵现",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 50,
          "reason": "积分兑换商品",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0023",
      "balance": 208,
      "history": [
        {
          "type": "earn",
          "amount": 27,
          "reason": "分享奖励",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "分享奖励",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "消费积分",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "签到奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 110,
          "reason": "兑换优惠券",
          "date": "2026-05-27 00:00:00"
        },
        {
          "type": "spend",
          "amount": 32,
          "reason": "兑换优惠券",
          "date": "2026-05-19 00:00:00"
        }
      ]
    },
    {
      "userId": "U0024",
      "balance": 89,
      "history": [
        {
          "type": "earn",
          "amount": 44,
          "reason": "签到奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "分享奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "分享奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "签到奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "签到奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "签到奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "分享奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "新用户奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "活动赠送",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "spend",
          "amount": 177,
          "reason": "兑换优惠券",
          "date": "2026-05-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0025",
      "balance": 33,
      "history": [
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "签到奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "消费积分",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "活动赠送",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "活动赠送",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "spend",
          "amount": 29,
          "reason": "积分兑换商品",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 18,
          "reason": "积分兑换商品",
          "date": "2026-05-31 00:00:00"
        }
      ]
    },
    {
      "userId": "U0026",
      "balance": 372,
      "history": [
        {
          "type": "earn",
          "amount": 44,
          "reason": "分享奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "签到奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "活动赠送",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "新用户奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "签到奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 18,
          "reason": "积分抵现",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0027",
      "balance": 200,
      "history": [
        {
          "type": "spend",
          "amount": 115,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 181,
          "reason": "积分兑换商品",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0028",
      "balance": -14,
      "history": [
        {
          "type": "earn",
          "amount": 16,
          "reason": "活动赠送",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 98,
          "reason": "积分抵现",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分兑换商品",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分兑换商品",
          "date": "2026-05-12 00:00:00"
        }
      ]
    },
    {
      "userId": "U0029",
      "balance": 376,
      "history": [
        {
          "type": "earn",
          "amount": 25,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "消费积分",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "签到奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "活动赠送",
          "date": "2026-04-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0030",
      "balance": 55,
      "history": [
        {
          "type": "earn",
          "amount": 38,
          "reason": "消费积分",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "活动赠送",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "分享奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "活动赠送",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "消费积分",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "签到奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "spend",
          "amount": 33,
          "reason": "兑换优惠券",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 38,
          "reason": "积分兑换商品",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 159,
          "reason": "兑换优惠券",
          "date": "2026-05-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0031",
      "balance": -9,
      "history": [
        {
          "type": "earn",
          "amount": 31,
          "reason": "分享奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "签到奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "签到奖励",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "消费积分",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "签到奖励",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "消费积分",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 50,
          "reason": "积分抵现",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 18,
          "reason": "兑换优惠券",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0032",
      "balance": 99,
      "history": [
        {
          "type": "spend",
          "amount": 95,
          "reason": "兑换优惠券",
          "date": "2026-05-04 00:00:00"
        }
      ]
    },
    {
      "userId": "U0033",
      "balance": 124,
      "history": [
        {
          "type": "earn",
          "amount": 15,
          "reason": "签到奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "消费积分",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 89,
          "reason": "兑换优惠券",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 124,
          "reason": "积分抵现",
          "date": "2026-05-11 00:00:00"
        }
      ]
    },
    {
      "userId": "U0034",
      "balance": 8,
      "history": [
        {
          "type": "earn",
          "amount": 13,
          "reason": "签到奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "积分抵现",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 73,
          "reason": "兑换优惠券",
          "date": "2026-05-06 00:00:00"
        }
      ]
    },
    {
      "userId": "U0035",
      "balance": 2,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "新用户奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "新用户奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "消费积分",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "消费积分",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0036",
      "balance": 34,
      "history": [
        {
          "type": "earn",
          "amount": 43,
          "reason": "分享奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "消费积分",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "签到奖励",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "分享奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "签到奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "分享奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "分享奖励",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 27,
          "reason": "积分抵现",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 150,
          "reason": "积分兑换商品",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 130,
          "reason": "积分兑换商品",
          "date": "2026-05-28 00:00:00"
        }
      ]
    },
    {
      "userId": "U0037",
      "balance": 355,
      "history": [
        {
          "type": "earn",
          "amount": 26,
          "reason": "新用户奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "签到奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "新用户奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-04-15 00:00:00"
        }
      ]
    },
    {
      "userId": "U0038",
      "balance": 5,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "分享奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "新用户奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "签到奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "活动赠送",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "消费积分",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 170,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 36,
          "reason": "兑换优惠券",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 36,
          "reason": "积分兑换商品",
          "date": "2026-05-21 00:00:00"
        }
      ]
    },
    {
      "userId": "U0039",
      "balance": 120,
      "history": [
        {
          "type": "earn",
          "amount": 45,
          "reason": "签到奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "签到奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "分享奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "分享奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "新用户奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "消费积分",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "分享奖励",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "新用户奖励",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 59,
          "reason": "积分抵现",
          "date": "2026-05-05 00:00:00"
        }
      ]
    },
    {
      "userId": "U0040",
      "balance": 10,
      "history": [
        {
          "type": "earn",
          "amount": 35,
          "reason": "活动赠送",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "签到奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "分享奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "消费积分",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "分享奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "分享奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "消费积分",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 17,
          "reason": "积分抵现",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 146,
          "reason": "积分兑换商品",
          "date": "2026-05-13 00:00:00"
        }
      ]
    },
    {
      "userId": "U0041",
      "balance": 237,
      "history": [
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "分享奖励",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "分享奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "活动赠送",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "分享奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "签到奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 54,
          "reason": "积分兑换商品",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 19,
          "reason": "积分兑换商品",
          "date": "2026-05-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0042",
      "balance": 47,
      "history": [
        {
          "type": "earn",
          "amount": 37,
          "reason": "消费积分",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "新用户奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "分享奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "新用户奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "签到奖励",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "签到奖励",
          "date": "2026-04-15 00:00:00"
        }
      ]
    },
    {
      "userId": "U0043",
      "balance": 40,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "新用户奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "分享奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "新用户奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "分享奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "消费积分",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "分享奖励",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 173,
          "reason": "积分兑换商品",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 22,
          "reason": "积分兑换商品",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0044",
      "balance": 88,
      "history": [
        {
          "type": "earn",
          "amount": 25,
          "reason": "活动赠送",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "分享奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "分享奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "新用户奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "消费积分",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "分享奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "分享奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 53,
          "reason": "积分兑换商品",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0045",
      "balance": 7,
      "history": [
        {
          "type": "earn",
          "amount": 39,
          "reason": "活动赠送",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "消费积分",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "消费积分",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "活动赠送",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 167,
          "reason": "积分抵现",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 95,
          "reason": "积分兑换商品",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 44,
          "reason": "积分兑换商品",
          "date": "2026-05-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0046",
      "balance": 276,
      "history": [
        {
          "type": "earn",
          "amount": 41,
          "reason": "签到奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "活动赠送",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "分享奖励",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "签到奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "分享奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "活动赠送",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 93,
          "reason": "积分抵现",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 17,
          "reason": "积分兑换商品",
          "date": "2026-05-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0047",
      "balance": 57,
      "history": [
        {
          "type": "earn",
          "amount": 35,
          "reason": "活动赠送",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "分享奖励",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "新用户奖励",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "消费积分",
          "date": "2026-05-11 00:00:00"
        }
      ]
    },
    {
      "userId": "U0048",
      "balance": 405,
      "history": [
        {
          "type": "earn",
          "amount": 39,
          "reason": "活动赠送",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "活动赠送",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "签到奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "活动赠送",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0049",
      "balance": 120,
      "history": [
        {
          "type": "earn",
          "amount": 49,
          "reason": "新用户奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "新用户奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "新用户奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 54,
          "reason": "兑换优惠券",
          "date": "2026-05-10 00:00:00"
        }
      ]
    },
    {
      "userId": "U0050",
      "balance": 39,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "活动赠送",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "消费积分",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "签到奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "消费积分",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "分享奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "消费积分",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "签到奖励",
          "date": "2026-04-05 00:00:00"
        }
      ]
    },
    {
      "userId": "U0051",
      "balance": 53,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "签到奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "分享奖励",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 60,
          "reason": "积分兑换商品",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 91,
          "reason": "积分抵现",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 183,
          "reason": "积分抵现",
          "date": "2026-05-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0052",
      "balance": 427,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "消费积分",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "活动赠送",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "分享奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "新用户奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "新用户奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 38,
          "reason": "积分抵现",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 17,
          "reason": "积分兑换商品",
          "date": "2026-05-18 00:00:00"
        }
      ]
    },
    {
      "userId": "U0053",
      "balance": 359,
      "history": [
        {
          "type": "earn",
          "amount": 30,
          "reason": "分享奖励",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "活动赠送",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "新用户奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "签到奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "签到奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "分享奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "签到奖励",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "签到奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "消费积分",
          "date": "2026-04-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0054",
      "balance": 6,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "活动赠送",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "签到奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "新用户奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "新用户奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "新用户奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "活动赠送",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 38,
          "reason": "积分兑换商品",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 29,
          "reason": "积分兑换商品",
          "date": "2026-05-13 00:00:00"
        }
      ]
    },
    {
      "userId": "U0055",
      "balance": 7,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "新用户奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "消费积分",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 190,
          "reason": "积分抵现",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 47,
          "reason": "积分抵现",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0056",
      "balance": 54,
      "history": [
        {
          "type": "earn",
          "amount": 22,
          "reason": "活动赠送",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "新用户奖励",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "消费积分",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "消费积分",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "新用户奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "分享奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "分享奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "spend",
          "amount": 156,
          "reason": "兑换优惠券",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 117,
          "reason": "积分抵现",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 47,
          "reason": "积分抵现",
          "date": "2026-05-26 00:00:00"
        }
      ]
    },
    {
      "userId": "U0057",
      "balance": -2,
      "history": [
        {
          "type": "earn",
          "amount": 24,
          "reason": "新用户奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "活动赠送",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "消费积分",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "分享奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "分享奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0058",
      "balance": 3,
      "history": [
        {
          "type": "earn",
          "amount": 33,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "分享奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "签到奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "分享奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "新用户奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "活动赠送",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "签到奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 16,
          "reason": "兑换优惠券",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 58,
          "reason": "积分兑换商品",
          "date": "2026-05-30 00:00:00"
        }
      ]
    },
    {
      "userId": "U0059",
      "balance": 85,
      "history": [
        {
          "type": "earn",
          "amount": 30,
          "reason": "活动赠送",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "签到奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "活动赠送",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "新用户奖励",
          "date": "2026-04-18 00:00:00"
        }
      ]
    },
    {
      "userId": "U0060",
      "balance": 6,
      "history": [
        {
          "type": "earn",
          "amount": 45,
          "reason": "分享奖励",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "新用户奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "分享奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "分享奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "签到奖励",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 43,
          "reason": "积分抵现",
          "date": "2026-05-10 00:00:00"
        }
      ]
    },
    {
      "userId": "U0061",
      "balance": 353,
      "history": [
        {
          "type": "earn",
          "amount": 25,
          "reason": "新用户奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-04-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0062",
      "balance": 6,
      "history": [
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "活动赠送",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "分享奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "消费积分",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "消费积分",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "签到奖励",
          "date": "2026-04-23 00:00:00"
        }
      ]
    },
    {
      "userId": "U0063",
      "balance": 94,
      "history": [
        {
          "type": "earn",
          "amount": 10,
          "reason": "新用户奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 178,
          "reason": "兑换优惠券",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 57,
          "reason": "积分兑换商品",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 33,
          "reason": "积分抵现",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0064",
      "balance": 91,
      "history": [
        {
          "type": "earn",
          "amount": 9,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "活动赠送",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "分享奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "活动赠送",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "消费积分",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "签到奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "新用户奖励",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "活动赠送",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 148,
          "reason": "积分抵现",
          "date": "2026-05-25 00:00:00"
        }
      ]
    },
    {
      "userId": "U0065",
      "balance": 164,
      "history": [
        {
          "type": "earn",
          "amount": 11,
          "reason": "活动赠送",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "消费积分",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "消费积分",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "活动赠送",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "消费积分",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "活动赠送",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "分享奖励",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "新用户奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "spend",
          "amount": 113,
          "reason": "兑换优惠券",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 27,
          "reason": "兑换优惠券",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-09 00:00:00"
        }
      ]
    },
    {
      "userId": "U0066",
      "balance": 418,
      "history": [
        {
          "type": "earn",
          "amount": 12,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "分享奖励",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "活动赠送",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "消费积分",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "分享奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "分享奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "签到奖励",
          "date": "2026-04-26 00:00:00"
        }
      ]
    },
    {
      "userId": "U0067",
      "balance": 360,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "签到奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "活动赠送",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "分享奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "活动赠送",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "签到奖励",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "消费积分",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 135,
          "reason": "积分抵现",
          "date": "2026-05-29 00:00:00"
        }
      ]
    },
    {
      "userId": "U0068",
      "balance": 405,
      "history": [
        {
          "type": "earn",
          "amount": 46,
          "reason": "分享奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "活动赠送",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "分享奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "消费积分",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "签到奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "新用户奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "签到奖励",
          "date": "2026-04-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0069",
      "balance": 8,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "消费积分",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分兑换商品",
          "date": "2026-05-11 00:00:00"
        }
      ]
    },
    {
      "userId": "U0070",
      "balance": 25,
      "history": [
        {
          "type": "earn",
          "amount": 11,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-05-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "消费积分",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0071",
      "balance": 319,
      "history": [
        {
          "type": "earn",
          "amount": 32,
          "reason": "分享奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "活动赠送",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "spend",
          "amount": 92,
          "reason": "积分兑换商品",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0072",
      "balance": 23,
      "history": [
        {
          "type": "earn",
          "amount": 16,
          "reason": "分享奖励",
          "date": "2026-05-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "分享奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "签到奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "新用户奖励",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "签到奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "消费积分",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-05-31 00:00:00"
        }
      ]
    },
    {
      "userId": "U0073",
      "balance": 3,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "新用户奖励",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 63,
          "reason": "兑换优惠券",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 25,
          "reason": "兑换优惠券",
          "date": "2026-05-27 00:00:00"
        }
      ]
    },
    {
      "userId": "U0074",
      "balance": 17,
      "history": [
        {
          "type": "earn",
          "amount": 45,
          "reason": "分享奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "活动赠送",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 88,
          "reason": "兑换优惠券",
          "date": "2026-05-30 00:00:00"
        }
      ]
    },
    {
      "userId": "U0075",
      "balance": 201,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "分享奖励",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "兑换优惠券",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 59,
          "reason": "积分兑换商品",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 34,
          "reason": "兑换优惠券",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0076",
      "balance": 347,
      "history": [
        {
          "type": "earn",
          "amount": 37,
          "reason": "签到奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "签到奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "签到奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "签到奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "消费积分",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "分享奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "分享奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 21,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 23,
          "reason": "兑换优惠券",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 50,
          "reason": "积分兑换商品",
          "date": "2026-05-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0077",
      "balance": 8,
      "history": [
        {
          "type": "earn",
          "amount": 9,
          "reason": "签到奖励",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 161,
          "reason": "兑换优惠券",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 63,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 31,
          "reason": "积分抵现",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0078",
      "balance": 200,
      "history": [
        {
          "type": "earn",
          "amount": 25,
          "reason": "签到奖励",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 198,
          "reason": "积分抵现",
          "date": "2026-05-04 00:00:00"
        }
      ]
    },
    {
      "userId": "U0079",
      "balance": 40,
      "history": [
        {
          "type": "earn",
          "amount": 19,
          "reason": "消费积分",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "活动赠送",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "签到奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "活动赠送",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "分享奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "签到奖励",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 44,
          "reason": "积分兑换商品",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 18,
          "reason": "积分兑换商品",
          "date": "2026-05-09 00:00:00"
        }
      ]
    },
    {
      "userId": "U0080",
      "balance": 118,
      "history": [
        {
          "type": "spend",
          "amount": 44,
          "reason": "积分兑换商品",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 129,
          "reason": "积分抵现",
          "date": "2026-05-18 00:00:00"
        }
      ]
    },
    {
      "userId": "U0081",
      "balance": 2,
      "history": [
        {
          "type": "earn",
          "amount": 19,
          "reason": "分享奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "消费积分",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "活动赠送",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 85,
          "reason": "积分抵现",
          "date": "2026-05-05 00:00:00"
        }
      ]
    },
    {
      "userId": "U0082",
      "balance": 236,
      "history": [
        {
          "type": "earn",
          "amount": 5,
          "reason": "活动赠送",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "签到奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "签到奖励",
          "date": "2026-04-03 00:00:00"
        }
      ]
    },
    {
      "userId": "U0083",
      "balance": 213,
      "history": []
    },
    {
      "userId": "U0084",
      "balance": -6,
      "history": [
        {
          "type": "earn",
          "amount": 7,
          "reason": "活动赠送",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "活动赠送",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "消费积分",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "消费积分",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "签到奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "分享奖励",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "消费积分",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 181,
          "reason": "积分抵现",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 55,
          "reason": "积分抵现",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0085",
      "balance": 395,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "活动赠送",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "活动赠送",
          "date": "2026-04-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0086",
      "balance": 440,
      "history": [
        {
          "type": "earn",
          "amount": 9,
          "reason": "活动赠送",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "分享奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "分享奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "签到奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "消费积分",
          "date": "2026-04-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "分享奖励",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "消费积分",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0087",
      "balance": 120,
      "history": [
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "签到奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "活动赠送",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "spend",
          "amount": 67,
          "reason": "积分抵现",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0088",
      "balance": 459,
      "history": [
        {
          "type": "earn",
          "amount": 37,
          "reason": "活动赠送",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "消费积分",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "新用户奖励",
          "date": "2026-04-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0089",
      "balance": 97,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "消费积分",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "消费积分",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "签到奖励",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "消费积分",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "消费积分",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 143,
          "reason": "兑换优惠券",
          "date": "2026-05-31 00:00:00"
        }
      ]
    },
    {
      "userId": "U0090",
      "balance": 5,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "活动赠送",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "消费积分",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "新用户奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 115,
          "reason": "兑换优惠券",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 30,
          "reason": "兑换优惠券",
          "date": "2026-05-06 00:00:00"
        }
      ]
    },
    {
      "userId": "U0091",
      "balance": 21,
      "history": [
        {
          "type": "earn",
          "amount": 42,
          "reason": "新用户奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "新用户奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "签到奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "签到奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "分享奖励",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "签到奖励",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 126,
          "reason": "积分兑换商品",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 20,
          "reason": "兑换优惠券",
          "date": "2026-05-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0092",
      "balance": 47,
      "history": [
        {
          "type": "earn",
          "amount": 16,
          "reason": "签到奖励",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "消费积分",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 42,
          "reason": "积分抵现",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 57,
          "reason": "积分兑换商品",
          "date": "2026-05-25 00:00:00"
        }
      ]
    },
    {
      "userId": "U0093",
      "balance": 65,
      "history": [
        {
          "type": "spend",
          "amount": 98,
          "reason": "积分兑换商品",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 124,
          "reason": "兑换优惠券",
          "date": "2026-05-26 00:00:00"
        }
      ]
    },
    {
      "userId": "U0094",
      "balance": 95,
      "history": [
        {
          "type": "earn",
          "amount": 12,
          "reason": "消费积分",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "签到奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "新用户奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 131,
          "reason": "积分抵现",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 47,
          "reason": "兑换优惠券",
          "date": "2026-05-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0095",
      "balance": 305,
      "history": [
        {
          "type": "earn",
          "amount": 26,
          "reason": "消费积分",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "消费积分",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "消费积分",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "签到奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "新用户奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 159,
          "reason": "兑换优惠券",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0096",
      "balance": 212,
      "history": [
        {
          "type": "earn",
          "amount": 17,
          "reason": "消费积分",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "活动赠送",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "消费积分",
          "date": "2026-04-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "签到奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 164,
          "reason": "兑换优惠券",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 24,
          "reason": "兑换优惠券",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0097",
      "balance": 38,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "活动赠送",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "分享奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "spend",
          "amount": 98,
          "reason": "积分抵现",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 67,
          "reason": "兑换优惠券",
          "date": "2026-05-29 00:00:00"
        }
      ]
    },
    {
      "userId": "U0098",
      "balance": 0,
      "history": [
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "活动赠送",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "签到奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "新用户奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "签到奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "新用户奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 21,
          "reason": "积分兑换商品",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 44,
          "reason": "积分抵现",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 45,
          "reason": "积分抵现",
          "date": "2026-05-09 00:00:00"
        }
      ]
    },
    {
      "userId": "U0099",
      "balance": 30,
      "history": [
        {
          "type": "earn",
          "amount": 17,
          "reason": "签到奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "分享奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 20,
          "reason": "积分抵现",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 159,
          "reason": "积分抵现",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 81,
          "reason": "兑换优惠券",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0100",
      "balance": 114,
      "history": []
    },
    {
      "userId": "U0101",
      "balance": 78,
      "history": [
        {
          "type": "earn",
          "amount": 24,
          "reason": "活动赠送",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "分享奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "活动赠送",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "签到奖励",
          "date": "2026-05-30 00:00:00"
        }
      ]
    },
    {
      "userId": "U0102",
      "balance": 391,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "新用户奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "活动赠送",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "活动赠送",
          "date": "2026-04-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0103",
      "balance": 191,
      "history": [
        {
          "type": "earn",
          "amount": 41,
          "reason": "消费积分",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "签到奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "签到奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "签到奖励",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "活动赠送",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "新用户奖励",
          "date": "2026-04-21 00:00:00"
        }
      ]
    },
    {
      "userId": "U0104",
      "balance": 22,
      "history": [
        {
          "type": "earn",
          "amount": 45,
          "reason": "签到奖励",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "新用户奖励",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "spend",
          "amount": 185,
          "reason": "积分抵现",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 56,
          "reason": "积分兑换商品",
          "date": "2026-05-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0105",
      "balance": 143,
      "history": [
        {
          "type": "earn",
          "amount": 14,
          "reason": "消费积分",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "分享奖励",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 153,
          "reason": "兑换优惠券",
          "date": "2026-05-09 00:00:00"
        }
      ]
    },
    {
      "userId": "U0106",
      "balance": 368,
      "history": [
        {
          "type": "earn",
          "amount": 39,
          "reason": "新用户奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "消费积分",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "消费积分",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "分享奖励",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "签到奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "新用户奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "签到奖励",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 17,
          "reason": "兑换优惠券",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 40,
          "reason": "积分兑换商品",
          "date": "2026-05-27 00:00:00"
        }
      ]
    },
    {
      "userId": "U0107",
      "balance": 438,
      "history": [
        {
          "type": "earn",
          "amount": 49,
          "reason": "签到奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "签到奖励",
          "date": "2026-05-23 00:00:00"
        }
      ]
    },
    {
      "userId": "U0108",
      "balance": 57,
      "history": [
        {
          "type": "earn",
          "amount": 9,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 120,
          "reason": "积分兑换商品",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 23,
          "reason": "积分兑换商品",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 17,
          "reason": "积分抵现",
          "date": "2026-05-28 00:00:00"
        }
      ]
    },
    {
      "userId": "U0109",
      "balance": 408,
      "history": [
        {
          "type": "earn",
          "amount": 7,
          "reason": "消费积分",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "消费积分",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "消费积分",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "签到奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 57,
          "reason": "兑换优惠券",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0110",
      "balance": -8,
      "history": [
        {
          "type": "earn",
          "amount": 14,
          "reason": "分享奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 12,
          "reason": "积分兑换商品",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-13 00:00:00"
        }
      ]
    },
    {
      "userId": "U0111",
      "balance": 2,
      "history": [
        {
          "type": "earn",
          "amount": 42,
          "reason": "消费积分",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 32,
          "reason": "积分兑换商品",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0112",
      "balance": 19,
      "history": [
        {
          "type": "earn",
          "amount": 5,
          "reason": "消费积分",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "新用户奖励",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "活动赠送",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "新用户奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "消费积分",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "活动赠送",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "消费积分",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 25,
          "reason": "积分抵现",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 43,
          "reason": "积分兑换商品",
          "date": "2026-05-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0113",
      "balance": 175,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "消费积分",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "活动赠送",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "活动赠送",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 84,
          "reason": "积分抵现",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 27,
          "reason": "积分抵现",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 104,
          "reason": "积分兑换商品",
          "date": "2026-05-31 00:00:00"
        }
      ]
    },
    {
      "userId": "U0114",
      "balance": 105,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 33,
          "reason": "新用户奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "新用户奖励",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "分享奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 41,
          "reason": "积分兑换商品",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 118,
          "reason": "兑换优惠券",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 81,
          "reason": "兑换优惠券",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0115",
      "balance": 15,
      "history": [
        {
          "type": "earn",
          "amount": 22,
          "reason": "活动赠送",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "新用户奖励",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "新用户奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "分享奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "消费积分",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "消费积分",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 164,
          "reason": "兑换优惠券",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 29,
          "reason": "积分抵现",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 89,
          "reason": "积分兑换商品",
          "date": "2026-05-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0116",
      "balance": -9,
      "history": [
        {
          "type": "earn",
          "amount": 38,
          "reason": "活动赠送",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "签到奖励",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "分享奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "消费积分",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "活动赠送",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "活动赠送",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "消费积分",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 38,
          "reason": "兑换优惠券",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-27 00:00:00"
        }
      ]
    },
    {
      "userId": "U0117",
      "balance": 34,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "活动赠送",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "活动赠送",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "分享奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 100,
          "reason": "积分抵现",
          "date": "2026-05-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 13,
          "reason": "积分兑换商品",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 12,
          "reason": "积分兑换商品",
          "date": "2026-05-05 00:00:00"
        }
      ]
    },
    {
      "userId": "U0118",
      "balance": 12,
      "history": [
        {
          "type": "earn",
          "amount": 42,
          "reason": "消费积分",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "分享奖励",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "活动赠送",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "活动赠送",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "签到奖励",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "spend",
          "amount": 175,
          "reason": "积分抵现",
          "date": "2026-05-13 00:00:00"
        }
      ]
    },
    {
      "userId": "U0119",
      "balance": 32,
      "history": [
        {
          "type": "earn",
          "amount": 24,
          "reason": "消费积分",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "兑换优惠券",
          "date": "2026-05-21 00:00:00"
        }
      ]
    },
    {
      "userId": "U0120",
      "balance": 4,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "活动赠送",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "活动赠送",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "活动赠送",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "分享奖励",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "活动赠送",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "消费积分",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 15,
          "reason": "积分抵现",
          "date": "2026-05-15 00:00:00"
        }
      ]
    },
    {
      "userId": "U0121",
      "balance": 180,
      "history": [
        {
          "type": "earn",
          "amount": 26,
          "reason": "签到奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "分享奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "活动赠送",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "分享奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "新用户奖励",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "新用户奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "新用户奖励",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "分享奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "新用户奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 119,
          "reason": "积分兑换商品",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 29,
          "reason": "兑换优惠券",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 87,
          "reason": "兑换优惠券",
          "date": "2026-05-06 00:00:00"
        }
      ]
    },
    {
      "userId": "U0122",
      "balance": 24,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "新用户奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "活动赠送",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "新用户奖励",
          "date": "2026-04-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "新用户奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "新用户奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 129,
          "reason": "积分抵现",
          "date": "2026-05-02 00:00:00"
        }
      ]
    },
    {
      "userId": "U0123",
      "balance": 81,
      "history": [
        {
          "type": "earn",
          "amount": 44,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "消费积分",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "分享奖励",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "签到奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "分享奖励",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "活动赠送",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "签到奖励",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "分享奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 175,
          "reason": "积分兑换商品",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 70,
          "reason": "积分抵现",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0124",
      "balance": 0,
      "history": [
        {
          "type": "earn",
          "amount": 17,
          "reason": "消费积分",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 37,
          "reason": "兑换优惠券",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分兑换商品",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "积分兑换商品",
          "date": "2026-05-31 00:00:00"
        }
      ]
    },
    {
      "userId": "U0125",
      "balance": 1,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "新用户奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "消费积分",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "分享奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 120,
          "reason": "积分兑换商品",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "积分抵现",
          "date": "2026-05-10 00:00:00"
        }
      ]
    },
    {
      "userId": "U0126",
      "balance": 336,
      "history": [
        {
          "type": "earn",
          "amount": 30,
          "reason": "签到奖励",
          "date": "2026-05-16 00:00:00"
        }
      ]
    },
    {
      "userId": "U0127",
      "balance": 212,
      "history": [
        {
          "type": "earn",
          "amount": 12,
          "reason": "新用户奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "新用户奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "消费积分",
          "date": "2026-05-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "分享奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "活动赠送",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "活动赠送",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "消费积分",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "spend",
          "amount": 80,
          "reason": "积分抵现",
          "date": "2026-05-18 00:00:00"
        }
      ]
    },
    {
      "userId": "U0128",
      "balance": 88,
      "history": [
        {
          "type": "earn",
          "amount": 8,
          "reason": "活动赠送",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "消费积分",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "签到奖励",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "分享奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "分享奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "消费积分",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "消费积分",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "消费积分",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 42,
          "reason": "兑换优惠券",
          "date": "2026-05-19 00:00:00"
        }
      ]
    },
    {
      "userId": "U0129",
      "balance": -9,
      "history": [
        {
          "type": "earn",
          "amount": 49,
          "reason": "分享奖励",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "活动赠送",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "活动赠送",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "分享奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "分享奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "活动赠送",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "活动赠送",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "分享奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "活动赠送",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "spend",
          "amount": 95,
          "reason": "兑换优惠券",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 62,
          "reason": "积分兑换商品",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "兑换优惠券",
          "date": "2026-05-23 00:00:00"
        }
      ]
    },
    {
      "userId": "U0130",
      "balance": 26,
      "history": [
        {
          "type": "earn",
          "amount": 27,
          "reason": "活动赠送",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 126,
          "reason": "兑换优惠券",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "spend",
          "amount": 107,
          "reason": "积分兑换商品",
          "date": "2026-05-11 00:00:00"
        }
      ]
    },
    {
      "userId": "U0131",
      "balance": 139,
      "history": [
        {
          "type": "earn",
          "amount": 45,
          "reason": "活动赠送",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "签到奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "spend",
          "amount": 61,
          "reason": "兑换优惠券",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "spend",
          "amount": 90,
          "reason": "兑换优惠券",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 38,
          "reason": "积分兑换商品",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0132",
      "balance": 232,
      "history": [
        {
          "type": "earn",
          "amount": 13,
          "reason": "新用户奖励",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "分享奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "签到奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "新用户奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "分享奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "活动赠送",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "活动赠送",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "消费积分",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "新用户奖励",
          "date": "2026-04-21 00:00:00"
        },
        {
          "type": "spend",
          "amount": 32,
          "reason": "积分抵现",
          "date": "2026-05-25 00:00:00"
        }
      ]
    },
    {
      "userId": "U0133",
      "balance": 113,
      "history": [
        {
          "type": "earn",
          "amount": 8,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "新用户奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 21,
          "reason": "积分抵现",
          "date": "2026-05-26 00:00:00"
        }
      ]
    },
    {
      "userId": "U0134",
      "balance": 370,
      "history": [
        {
          "type": "earn",
          "amount": 12,
          "reason": "消费积分",
          "date": "2026-04-16 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "活动赠送",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "活动赠送",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "签到奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "分享奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "签到奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "分享奖励",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "签到奖励",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 114,
          "reason": "积分兑换商品",
          "date": "2026-05-31 00:00:00"
        }
      ]
    },
    {
      "userId": "U0135",
      "balance": 5,
      "history": [
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "分享奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "活动赠送",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "活动赠送",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 111,
          "reason": "兑换优惠券",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 32,
          "reason": "积分抵现",
          "date": "2026-05-09 00:00:00"
        }
      ]
    },
    {
      "userId": "U0136",
      "balance": 140,
      "history": [
        {
          "type": "earn",
          "amount": 21,
          "reason": "消费积分",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "消费积分",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "签到奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "新用户奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "消费积分",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "新用户奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "分享奖励",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "分享奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "消费积分",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 76,
          "reason": "积分兑换商品",
          "date": "2026-05-15 00:00:00"
        }
      ]
    },
    {
      "userId": "U0137",
      "balance": 10,
      "history": [
        {
          "type": "earn",
          "amount": 34,
          "reason": "签到奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "新用户奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "分享奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 25,
          "reason": "消费积分",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "分享奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "spend",
          "amount": 120,
          "reason": "积分抵现",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "spend",
          "amount": 122,
          "reason": "积分抵现",
          "date": "2026-05-12 00:00:00"
        }
      ]
    },
    {
      "userId": "U0138",
      "balance": 376,
      "history": [
        {
          "type": "earn",
          "amount": 38,
          "reason": "分享奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "分享奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "签到奖励",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "活动赠送",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 48,
          "reason": "积分兑换商品",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0139",
      "balance": 0,
      "history": [
        {
          "type": "spend",
          "amount": 43,
          "reason": "积分兑换商品",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 39,
          "reason": "积分抵现",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 11,
          "reason": "积分兑换商品",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0140",
      "balance": 66,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "签到奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "签到奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "新用户奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "新用户奖励",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 47,
          "reason": "新用户奖励",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "消费积分",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 116,
          "reason": "积分兑换商品",
          "date": "2026-05-24 00:00:00"
        }
      ]
    },
    {
      "userId": "U0141",
      "balance": 137,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 26,
          "reason": "消费积分",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "新用户奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "分享奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "消费积分",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "spend",
          "amount": 162,
          "reason": "兑换优惠券",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "spend",
          "amount": 94,
          "reason": "积分兑换商品",
          "date": "2026-05-11 00:00:00"
        }
      ]
    },
    {
      "userId": "U0142",
      "balance": 318,
      "history": [
        {
          "type": "earn",
          "amount": 25,
          "reason": "新用户奖励",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 18,
          "reason": "消费积分",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "分享奖励",
          "date": "2026-05-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 8,
          "reason": "消费积分",
          "date": "2026-04-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "活动赠送",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "分享奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "活动赠送",
          "date": "2026-05-26 00:00:00"
        }
      ]
    },
    {
      "userId": "U0143",
      "balance": 212,
      "history": [
        {
          "type": "earn",
          "amount": 15,
          "reason": "活动赠送",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "分享奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "签到奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 135,
          "reason": "积分抵现",
          "date": "2026-05-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 89,
          "reason": "兑换优惠券",
          "date": "2026-05-12 00:00:00"
        }
      ]
    },
    {
      "userId": "U0144",
      "balance": 67,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "消费积分",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "新用户奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 29,
          "reason": "活动赠送",
          "date": "2026-05-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 41,
          "reason": "新用户奖励",
          "date": "2026-05-04 00:00:00"
        }
      ]
    },
    {
      "userId": "U0145",
      "balance": 387,
      "history": [
        {
          "type": "earn",
          "amount": 28,
          "reason": "新用户奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "活动赠送",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "新用户奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "签到奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "签到奖励",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "新用户奖励",
          "date": "2026-04-21 00:00:00"
        }
      ]
    },
    {
      "userId": "U0146",
      "balance": -8,
      "history": [
        {
          "type": "earn",
          "amount": 32,
          "reason": "消费积分",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "分享奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "分享奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "新用户奖励",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "消费积分",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "新用户奖励",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 115,
          "reason": "积分兑换商品",
          "date": "2026-05-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 31,
          "reason": "兑换优惠券",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-23 00:00:00"
        }
      ]
    },
    {
      "userId": "U0147",
      "balance": 71,
      "history": [
        {
          "type": "earn",
          "amount": 37,
          "reason": "消费积分",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 55,
          "reason": "积分兑换商品",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 110,
          "reason": "积分兑换商品",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 63,
          "reason": "兑换优惠券",
          "date": "2026-05-22 00:00:00"
        }
      ]
    },
    {
      "userId": "U0148",
      "balance": 1,
      "history": [
        {
          "type": "earn",
          "amount": 34,
          "reason": "活动赠送",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "分享奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 16,
          "reason": "签到奖励",
          "date": "2026-05-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "新用户奖励",
          "date": "2026-05-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "消费积分",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "消费积分",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "消费积分",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "活动赠送",
          "date": "2026-05-02 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "活动赠送",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 87,
          "reason": "兑换优惠券",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 56,
          "reason": "兑换优惠券",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "spend",
          "amount": 16,
          "reason": "积分抵现",
          "date": "2026-05-29 00:00:00"
        }
      ]
    },
    {
      "userId": "U0149",
      "balance": 64,
      "history": [
        {
          "type": "earn",
          "amount": 5,
          "reason": "签到奖励",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "签到奖励",
          "date": "2026-04-07 00:00:00"
        }
      ]
    },
    {
      "userId": "U0150",
      "balance": 1,
      "history": [
        {
          "type": "earn",
          "amount": 46,
          "reason": "签到奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "活动赠送",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "新用户奖励",
          "date": "2026-05-19 00:00:00"
        },
        {
          "type": "earn",
          "amount": 10,
          "reason": "分享奖励",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 34,
          "reason": "签到奖励",
          "date": "2026-05-01 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "消费积分",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "签到奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "spend",
          "amount": 72,
          "reason": "积分抵现",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "spend",
          "amount": 24,
          "reason": "兑换优惠券",
          "date": "2026-05-24 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-13 00:00:00"
        }
      ]
    },
    {
      "userId": "U0151",
      "balance": 53,
      "history": [
        {
          "type": "earn",
          "amount": 8,
          "reason": "分享奖励",
          "date": "2026-05-31 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "活动赠送",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "新用户奖励",
          "date": "2026-04-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "分享奖励",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "新用户奖励",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 69,
          "reason": "兑换优惠券",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 145,
          "reason": "积分兑换商品",
          "date": "2026-05-18 00:00:00"
        },
        {
          "type": "spend",
          "amount": 157,
          "reason": "积分抵现",
          "date": "2026-05-14 00:00:00"
        }
      ]
    },
    {
      "userId": "U0152",
      "balance": 13,
      "history": [
        {
          "type": "earn",
          "amount": 46,
          "reason": "活动赠送",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "消费积分",
          "date": "2026-04-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "分享奖励",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "活动赠送",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 19,
          "reason": "兑换优惠券",
          "date": "2026-05-25 00:00:00"
        }
      ]
    },
    {
      "userId": "U0153",
      "balance": 74,
      "history": [
        {
          "type": "earn",
          "amount": 33,
          "reason": "签到奖励",
          "date": "2026-04-29 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "新用户奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "分享奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "活动赠送",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "活动赠送",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "spend",
          "amount": 130,
          "reason": "积分兑换商品",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 36,
          "reason": "积分抵现",
          "date": "2026-05-09 00:00:00"
        }
      ]
    },
    {
      "userId": "U0154",
      "balance": 322,
      "history": [
        {
          "type": "earn",
          "amount": 47,
          "reason": "活动赠送",
          "date": "2026-05-23 00:00:00"
        },
        {
          "type": "spend",
          "amount": 61,
          "reason": "积分兑换商品",
          "date": "2026-05-12 00:00:00"
        }
      ]
    },
    {
      "userId": "U0155",
      "balance": 188,
      "history": [
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "spend",
          "amount": 63,
          "reason": "兑换优惠券",
          "date": "2026-05-30 00:00:00"
        }
      ]
    },
    {
      "userId": "U0156",
      "balance": 9,
      "history": [
        {
          "type": "earn",
          "amount": 21,
          "reason": "分享奖励",
          "date": "2026-04-18 00:00:00"
        },
        {
          "type": "earn",
          "amount": 15,
          "reason": "签到奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "消费积分",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 9,
          "reason": "分享奖励",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "earn",
          "amount": 12,
          "reason": "新用户奖励",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0157",
      "balance": 101,
      "history": [
        {
          "type": "earn",
          "amount": 36,
          "reason": "分享奖励",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-04-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 40,
          "reason": "分享奖励",
          "date": "2026-04-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 186,
          "reason": "兑换优惠券",
          "date": "2026-05-12 00:00:00"
        }
      ]
    },
    {
      "userId": "U0158",
      "balance": 33,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "消费积分",
          "date": "2026-04-02 00:00:00"
        },
        {
          "type": "spend",
          "amount": 127,
          "reason": "积分兑换商品",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 166,
          "reason": "兑换优惠券",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 16,
          "reason": "兑换优惠券",
          "date": "2026-05-30 00:00:00"
        }
      ]
    },
    {
      "userId": "U0159",
      "balance": 157,
      "history": [
        {
          "type": "earn",
          "amount": 15,
          "reason": "消费积分",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "spend",
          "amount": 102,
          "reason": "积分兑换商品",
          "date": "2026-05-08 00:00:00"
        }
      ]
    },
    {
      "userId": "U0160",
      "balance": 118,
      "history": [
        {
          "type": "earn",
          "amount": 37,
          "reason": "活动赠送",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 11,
          "reason": "签到奖励",
          "date": "2026-04-20 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "分享奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "消费积分",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 17,
          "reason": "活动赠送",
          "date": "2026-05-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "签到奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "earn",
          "amount": 35,
          "reason": "分享奖励",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "spend",
          "amount": 31,
          "reason": "积分抵现",
          "date": "2026-05-20 00:00:00"
        }
      ]
    },
    {
      "userId": "U0161",
      "balance": 81,
      "history": [
        {
          "type": "earn",
          "amount": 28,
          "reason": "签到奖励",
          "date": "2026-05-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "活动赠送",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 19,
          "reason": "签到奖励",
          "date": "2026-04-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 32,
          "reason": "活动赠送",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "分享奖励",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "spend",
          "amount": 47,
          "reason": "积分兑换商品",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 142,
          "reason": "积分兑换商品",
          "date": "2026-05-29 00:00:00"
        },
        {
          "type": "spend",
          "amount": 96,
          "reason": "积分抵现",
          "date": "2026-05-19 00:00:00"
        }
      ]
    },
    {
      "userId": "U0162",
      "balance": 395,
      "history": [
        {
          "type": "earn",
          "amount": 32,
          "reason": "消费积分",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 7,
          "reason": "签到奖励",
          "date": "2026-04-04 00:00:00"
        }
      ]
    },
    {
      "userId": "U0163",
      "balance": 264,
      "history": [
        {
          "type": "earn",
          "amount": 50,
          "reason": "新用户奖励",
          "date": "2026-05-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 31,
          "reason": "活动赠送",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-04-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "分享奖励",
          "date": "2026-04-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 22,
          "reason": "新用户奖励",
          "date": "2026-04-22 00:00:00"
        },
        {
          "type": "earn",
          "amount": 14,
          "reason": "活动赠送",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "签到奖励",
          "date": "2026-04-05 00:00:00"
        },
        {
          "type": "earn",
          "amount": 39,
          "reason": "新用户奖励",
          "date": "2026-04-11 00:00:00"
        },
        {
          "type": "earn",
          "amount": 44,
          "reason": "活动赠送",
          "date": "2026-04-17 00:00:00"
        },
        {
          "type": "spend",
          "amount": 176,
          "reason": "积分抵现",
          "date": "2026-05-07 00:00:00"
        },
        {
          "type": "spend",
          "amount": 60,
          "reason": "积分抵现",
          "date": "2026-05-29 00:00:00"
        }
      ]
    },
    {
      "userId": "U0164",
      "balance": -8,
      "history": [
        {
          "type": "earn",
          "amount": 26,
          "reason": "活动赠送",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "earn",
          "amount": 13,
          "reason": "新用户奖励",
          "date": "2026-04-27 00:00:00"
        },
        {
          "type": "earn",
          "amount": 23,
          "reason": "签到奖励",
          "date": "2026-05-26 00:00:00"
        },
        {
          "type": "earn",
          "amount": 37,
          "reason": "新用户奖励",
          "date": "2026-05-12 00:00:00"
        },
        {
          "type": "earn",
          "amount": 38,
          "reason": "分享奖励",
          "date": "2026-04-13 00:00:00"
        },
        {
          "type": "earn",
          "amount": 45,
          "reason": "签到奖励",
          "date": "2026-05-30 00:00:00"
        },
        {
          "type": "earn",
          "amount": 6,
          "reason": "新用户奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 21,
          "reason": "签到奖励",
          "date": "2026-04-08 00:00:00"
        },
        {
          "type": "spend",
          "amount": 16,
          "reason": "兑换优惠券",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-23 00:00:00"
        }
      ]
    },
    {
      "userId": "U0165",
      "balance": 129,
      "history": [
        {
          "type": "earn",
          "amount": 27,
          "reason": "消费积分",
          "date": "2026-05-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 46,
          "reason": "消费积分",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "新用户奖励",
          "date": "2026-04-14 00:00:00"
        },
        {
          "type": "earn",
          "amount": 5,
          "reason": "活动赠送",
          "date": "2026-05-10 00:00:00"
        },
        {
          "type": "earn",
          "amount": 20,
          "reason": "新用户奖励",
          "date": "2026-04-25 00:00:00"
        },
        {
          "type": "earn",
          "amount": 50,
          "reason": "新用户奖励",
          "date": "2026-04-07 00:00:00"
        },
        {
          "type": "earn",
          "amount": 43,
          "reason": "签到奖励",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 24,
          "reason": "分享奖励",
          "date": "2026-04-19 00:00:00"
        },
        {
          "type": "spend",
          "amount": 192,
          "reason": "积分抵现",
          "date": "2026-05-15 00:00:00"
        }
      ]
    },
    {
      "userId": "U0166",
      "balance": 185,
      "history": [
        {
          "type": "earn",
          "amount": 11,
          "reason": "分享奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "签到奖励",
          "date": "2026-04-09 00:00:00"
        },
        {
          "type": "earn",
          "amount": 28,
          "reason": "活动赠送",
          "date": "2026-05-25 00:00:00"
        },
        {
          "type": "spend",
          "amount": 192,
          "reason": "积分抵现",
          "date": "2026-05-05 00:00:00"
        }
      ]
    },
    {
      "userId": "U0167",
      "balance": 79,
      "history": [
        {
          "type": "earn",
          "amount": 10,
          "reason": "消费积分",
          "date": "2026-05-04 00:00:00"
        },
        {
          "type": "spend",
          "amount": 131,
          "reason": "积分兑换商品",
          "date": "2026-05-17 00:00:00"
        }
      ]
    },
    {
      "userId": "U0168",
      "balance": -17,
      "history": [
        {
          "type": "earn",
          "amount": 48,
          "reason": "新用户奖励",
          "date": "2026-05-06 00:00:00"
        },
        {
          "type": "earn",
          "amount": 42,
          "reason": "新用户奖励",
          "date": "2026-04-28 00:00:00"
        },
        {
          "type": "earn",
          "amount": 30,
          "reason": "分享奖励",
          "date": "2026-04-24 00:00:00"
        },
        {
          "type": "earn",
          "amount": 36,
          "reason": "活动赠送",
          "date": "2026-05-03 00:00:00"
        },
        {
          "type": "earn",
          "amount": 49,
          "reason": "活动赠送",
          "date": "2026-04-15 00:00:00"
        },
        {
          "type": "spend",
          "amount": 36,
          "reason": "积分兑换商品",
          "date": "2026-05-27 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分抵现",
          "date": "2026-05-09 00:00:00"
        },
        {
          "type": "spend",
          "amount": 10,
          "reason": "积分兑换商品",
          "date": "2026-05-09 00:00:00"
        }
      ]
    }
  ],
  "checkins": [
    {
      "userId": "U0001",
      "totalDays": 33,
      "currentStreak": 17,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0002",
      "totalDays": 10,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0003",
      "totalDays": 30,
      "currentStreak": 15,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0004",
      "totalDays": 7,
      "currentStreak": 2,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0005",
      "totalDays": 29,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0006",
      "totalDays": 33,
      "currentStreak": 30,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0007",
      "totalDays": 33,
      "currentStreak": 20,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0008",
      "totalDays": 7,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0009",
      "totalDays": 30,
      "currentStreak": 12,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0010",
      "totalDays": 11,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0011",
      "totalDays": 21,
      "currentStreak": 17,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0012",
      "totalDays": 15,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0013",
      "totalDays": 21,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0014",
      "totalDays": 19,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0015",
      "totalDays": 16,
      "currentStreak": 16,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0016",
      "totalDays": 30,
      "currentStreak": 26,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0017",
      "totalDays": 23,
      "currentStreak": 5,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0018",
      "totalDays": 15,
      "currentStreak": 14,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0019",
      "totalDays": 39,
      "currentStreak": 30,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0020",
      "totalDays": 38,
      "currentStreak": 29,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0021",
      "totalDays": 12,
      "currentStreak": 7,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0022",
      "totalDays": 42,
      "currentStreak": 27,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0023",
      "totalDays": 4,
      "currentStreak": 1,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0024",
      "totalDays": 29,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0025",
      "totalDays": 4,
      "currentStreak": 3,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0026",
      "totalDays": 29,
      "currentStreak": 14,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0027",
      "totalDays": 28,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0028",
      "totalDays": 33,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0029",
      "totalDays": 39,
      "currentStreak": 29,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0030",
      "totalDays": 38,
      "currentStreak": 26,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0031",
      "totalDays": 35,
      "currentStreak": 16,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0032",
      "totalDays": 9,
      "currentStreak": 5,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0033",
      "totalDays": 37,
      "currentStreak": 17,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0034",
      "totalDays": 29,
      "currentStreak": 15,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0035",
      "totalDays": 36,
      "currentStreak": 22,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0036",
      "totalDays": 15,
      "currentStreak": 5,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0037",
      "totalDays": 22,
      "currentStreak": 3,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0038",
      "totalDays": 41,
      "currentStreak": 22,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0039",
      "totalDays": 26,
      "currentStreak": 14,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0040",
      "totalDays": 20,
      "currentStreak": 8,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0041",
      "totalDays": 28,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0042",
      "totalDays": 16,
      "currentStreak": 2,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0043",
      "totalDays": 32,
      "currentStreak": 24,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0044",
      "totalDays": 23,
      "currentStreak": 21,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0045",
      "totalDays": 33,
      "currentStreak": 28,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0046",
      "totalDays": 23,
      "currentStreak": 23,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0047",
      "totalDays": 39,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0048",
      "totalDays": 35,
      "currentStreak": 26,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0049",
      "totalDays": 38,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0050",
      "totalDays": 24,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0051",
      "totalDays": 20,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0052",
      "totalDays": 26,
      "currentStreak": 7,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0053",
      "totalDays": 36,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0054",
      "totalDays": 26,
      "currentStreak": 25,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0055",
      "totalDays": 35,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0056",
      "totalDays": 22,
      "currentStreak": 7,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0057",
      "totalDays": 17,
      "currentStreak": 17,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0058",
      "totalDays": 21,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0059",
      "totalDays": 6,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0060",
      "totalDays": 15,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0061",
      "totalDays": 26,
      "currentStreak": 8,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0062",
      "totalDays": 17,
      "currentStreak": 15,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0063",
      "totalDays": 43,
      "currentStreak": 26,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0064",
      "totalDays": 30,
      "currentStreak": 20,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0065",
      "totalDays": 31,
      "currentStreak": 13,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0066",
      "totalDays": 17,
      "currentStreak": 2,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0067",
      "totalDays": 28,
      "currentStreak": 28,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0068",
      "totalDays": 24,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0069",
      "totalDays": 19,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0070",
      "totalDays": 17,
      "currentStreak": 1,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0071",
      "totalDays": 23,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0072",
      "totalDays": 11,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0073",
      "totalDays": 7,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0074",
      "totalDays": 23,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0075",
      "totalDays": 14,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0076",
      "totalDays": 14,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0077",
      "totalDays": 27,
      "currentStreak": 25,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0078",
      "totalDays": 14,
      "currentStreak": 5,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0079",
      "totalDays": 19,
      "currentStreak": 14,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0080",
      "totalDays": 21,
      "currentStreak": 2,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0081",
      "totalDays": 16,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0082",
      "totalDays": 2,
      "currentStreak": 1,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0083",
      "totalDays": 22,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0084",
      "totalDays": 14,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0085",
      "totalDays": 18,
      "currentStreak": 5,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0086",
      "totalDays": 39,
      "currentStreak": 29,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0087",
      "totalDays": 21,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0088",
      "totalDays": 30,
      "currentStreak": 27,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0089",
      "totalDays": 8,
      "currentStreak": 2,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0090",
      "totalDays": 27,
      "currentStreak": 8,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0091",
      "totalDays": 26,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0092",
      "totalDays": 32,
      "currentStreak": 16,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0093",
      "totalDays": 41,
      "currentStreak": 25,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0094",
      "totalDays": 16,
      "currentStreak": 13,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0095",
      "totalDays": 10,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0096",
      "totalDays": 25,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0097",
      "totalDays": 31,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0098",
      "totalDays": 18,
      "currentStreak": 3,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0099",
      "totalDays": 14,
      "currentStreak": 1,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0100",
      "totalDays": 28,
      "currentStreak": 21,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0101",
      "totalDays": 30,
      "currentStreak": 30,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0102",
      "totalDays": 26,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0103",
      "totalDays": 22,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0104",
      "totalDays": 25,
      "currentStreak": 8,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0105",
      "totalDays": 25,
      "currentStreak": 21,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0106",
      "totalDays": 28,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0107",
      "totalDays": 28,
      "currentStreak": 14,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0108",
      "totalDays": 23,
      "currentStreak": 3,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0109",
      "totalDays": 23,
      "currentStreak": 17,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0110",
      "totalDays": 30,
      "currentStreak": 26,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0111",
      "totalDays": 29,
      "currentStreak": 12,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0112",
      "totalDays": 13,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0113",
      "totalDays": 31,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0114",
      "totalDays": 47,
      "currentStreak": 30,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0115",
      "totalDays": 16,
      "currentStreak": 15,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0116",
      "totalDays": 15,
      "currentStreak": 1,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0117",
      "totalDays": 46,
      "currentStreak": 27,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0118",
      "totalDays": 30,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0119",
      "totalDays": 6,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0120",
      "totalDays": 17,
      "currentStreak": 2,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0121",
      "totalDays": 28,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0122",
      "totalDays": 21,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0123",
      "totalDays": 32,
      "currentStreak": 12,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0124",
      "totalDays": 25,
      "currentStreak": 7,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0125",
      "totalDays": 43,
      "currentStreak": 27,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0126",
      "totalDays": 11,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0127",
      "totalDays": 23,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0128",
      "totalDays": 21,
      "currentStreak": 19,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0129",
      "totalDays": 12,
      "currentStreak": 10,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0130",
      "totalDays": 16,
      "currentStreak": 13,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0131",
      "totalDays": 31,
      "currentStreak": 27,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0132",
      "totalDays": 41,
      "currentStreak": 24,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0133",
      "totalDays": 22,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0134",
      "totalDays": 26,
      "currentStreak": 7,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0135",
      "totalDays": 27,
      "currentStreak": 17,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0136",
      "totalDays": 39,
      "currentStreak": 29,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0137",
      "totalDays": 29,
      "currentStreak": 21,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0138",
      "totalDays": 39,
      "currentStreak": 25,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0139",
      "totalDays": 16,
      "currentStreak": 9,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0140",
      "totalDays": 32,
      "currentStreak": 22,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0141",
      "totalDays": 17,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0142",
      "totalDays": 34,
      "currentStreak": 15,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0143",
      "totalDays": 11,
      "currentStreak": 11,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0144",
      "totalDays": 34,
      "currentStreak": 30,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0145",
      "totalDays": 21,
      "currentStreak": 21,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0146",
      "totalDays": 35,
      "currentStreak": 20,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0147",
      "totalDays": 1,
      "currentStreak": 1,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0148",
      "totalDays": 27,
      "currentStreak": 22,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0149",
      "totalDays": 31,
      "currentStreak": 14,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0150",
      "totalDays": 44,
      "currentStreak": 29,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0151",
      "totalDays": 37,
      "currentStreak": 25,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0152",
      "totalDays": 20,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0153",
      "totalDays": 46,
      "currentStreak": 26,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0154",
      "totalDays": 23,
      "currentStreak": 21,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0155",
      "totalDays": 18,
      "currentStreak": 18,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0156",
      "totalDays": 43,
      "currentStreak": 29,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0157",
      "totalDays": 25,
      "currentStreak": 22,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0158",
      "totalDays": 24,
      "currentStreak": 12,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0159",
      "totalDays": 46,
      "currentStreak": 27,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0160",
      "totalDays": 24,
      "currentStreak": 12,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0161",
      "totalDays": 6,
      "currentStreak": 6,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0162",
      "totalDays": 18,
      "currentStreak": 4,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0163",
      "totalDays": 18,
      "currentStreak": 12,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0164",
      "totalDays": 15,
      "currentStreak": 15,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0165",
      "totalDays": 8,
      "currentStreak": 8,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0166",
      "totalDays": 33,
      "currentStreak": 25,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0167",
      "totalDays": 33,
      "currentStreak": 22,
      "lastCheckin": "2026-06-30"
    },
    {
      "userId": "U0168",
      "totalDays": 9,
      "currentStreak": 7,
      "lastCheckin": "2026-06-30"
    }
  ],
  "referrals": [
    {
      "userId": "U0001",
      "views": 2533,
      "follows": 123,
      "registrations": 34,
      "orders": 32
    },
    {
      "userId": "U0002",
      "views": 3023,
      "follows": 28,
      "registrations": 40,
      "orders": 32
    },
    {
      "userId": "U0003",
      "views": 1762,
      "follows": 13,
      "registrations": 30,
      "orders": 26
    },
    {
      "userId": "U0004",
      "views": 958,
      "follows": 152,
      "registrations": 77,
      "orders": 33
    },
    {
      "userId": "U0005",
      "views": 4096,
      "follows": 97,
      "registrations": 75,
      "orders": 13
    },
    {
      "userId": "U0006",
      "views": 4684,
      "follows": 299,
      "registrations": 27,
      "orders": 5
    },
    {
      "userId": "U0007",
      "views": 4868,
      "follows": 75,
      "registrations": 13,
      "orders": 9
    },
    {
      "userId": "U0008",
      "views": 2176,
      "follows": 126,
      "registrations": 71,
      "orders": 18
    },
    {
      "userId": "U0009",
      "views": 1621,
      "follows": 21,
      "registrations": 73,
      "orders": 40
    },
    {
      "userId": "U0010",
      "views": 2121,
      "follows": 296,
      "registrations": 63,
      "orders": 1
    },
    {
      "userId": "U0011",
      "views": 3548,
      "follows": 36,
      "registrations": 46,
      "orders": 28
    },
    {
      "userId": "U0012",
      "views": 3383,
      "follows": 150,
      "registrations": 20,
      "orders": 34
    },
    {
      "userId": "U0013",
      "views": 3872,
      "follows": 263,
      "registrations": 51,
      "orders": 34
    },
    {
      "userId": "U0014",
      "views": 406,
      "follows": 124,
      "registrations": 11,
      "orders": 18
    },
    {
      "userId": "U0015",
      "views": 3491,
      "follows": 282,
      "registrations": 62,
      "orders": 21
    },
    {
      "userId": "U0016",
      "views": 92,
      "follows": 210,
      "registrations": 29,
      "orders": 22
    },
    {
      "userId": "U0017",
      "views": 720,
      "follows": 22,
      "registrations": 33,
      "orders": 28
    },
    {
      "userId": "U0018",
      "views": 659,
      "follows": 137,
      "registrations": 30,
      "orders": 11
    },
    {
      "userId": "U0019",
      "views": 2747,
      "follows": 169,
      "registrations": 13,
      "orders": 7
    },
    {
      "userId": "U0020",
      "views": 278,
      "follows": 255,
      "registrations": 60,
      "orders": 2
    },
    {
      "userId": "U0021",
      "views": 4904,
      "follows": 181,
      "registrations": 37,
      "orders": 16
    },
    {
      "userId": "U0022",
      "views": 933,
      "follows": 252,
      "registrations": 35,
      "orders": 22
    },
    {
      "userId": "U0023",
      "views": 495,
      "follows": 180,
      "registrations": 71,
      "orders": 16
    },
    {
      "userId": "U0024",
      "views": 647,
      "follows": 234,
      "registrations": 17,
      "orders": 29
    },
    {
      "userId": "U0025",
      "views": 4792,
      "follows": 73,
      "registrations": 15,
      "orders": 4
    },
    {
      "userId": "U0026",
      "views": 323,
      "follows": 203,
      "registrations": 45,
      "orders": 5
    },
    {
      "userId": "U0027",
      "views": 1094,
      "follows": 41,
      "registrations": 61,
      "orders": 4
    },
    {
      "userId": "U0028",
      "views": 2519,
      "follows": 231,
      "registrations": 13,
      "orders": 7
    },
    {
      "userId": "U0029",
      "views": 507,
      "follows": 296,
      "registrations": 11,
      "orders": 19
    },
    {
      "userId": "U0030",
      "views": 3174,
      "follows": 215,
      "registrations": 17,
      "orders": 40
    },
    {
      "userId": "U0031",
      "views": 3417,
      "follows": 129,
      "registrations": 6,
      "orders": 30
    },
    {
      "userId": "U0032",
      "views": 3195,
      "follows": 247,
      "registrations": 59,
      "orders": 40
    },
    {
      "userId": "U0033",
      "views": 879,
      "follows": 183,
      "registrations": 8,
      "orders": 30
    },
    {
      "userId": "U0034",
      "views": 4287,
      "follows": 178,
      "registrations": 80,
      "orders": 13
    },
    {
      "userId": "U0035",
      "views": 934,
      "follows": 62,
      "registrations": 6,
      "orders": 39
    },
    {
      "userId": "U0036",
      "views": 603,
      "follows": 109,
      "registrations": 78,
      "orders": 9
    },
    {
      "userId": "U0037",
      "views": 4218,
      "follows": 141,
      "registrations": 50,
      "orders": 27
    },
    {
      "userId": "U0038",
      "views": 3993,
      "follows": 237,
      "registrations": 28,
      "orders": 16
    },
    {
      "userId": "U0039",
      "views": 1177,
      "follows": 32,
      "registrations": 12,
      "orders": 9
    },
    {
      "userId": "U0040",
      "views": 2603,
      "follows": 233,
      "registrations": 70,
      "orders": 23
    },
    {
      "userId": "U0041",
      "views": 2599,
      "follows": 287,
      "registrations": 23,
      "orders": 10
    },
    {
      "userId": "U0042",
      "views": 3896,
      "follows": 168,
      "registrations": 48,
      "orders": 19
    },
    {
      "userId": "U0043",
      "views": 3071,
      "follows": 14,
      "registrations": 71,
      "orders": 38
    },
    {
      "userId": "U0044",
      "views": 1234,
      "follows": 39,
      "registrations": 35,
      "orders": 33
    },
    {
      "userId": "U0045",
      "views": 4633,
      "follows": 37,
      "registrations": 59,
      "orders": 23
    },
    {
      "userId": "U0046",
      "views": 1650,
      "follows": 112,
      "registrations": 30,
      "orders": 5
    },
    {
      "userId": "U0047",
      "views": 2847,
      "follows": 106,
      "registrations": 65,
      "orders": 30
    },
    {
      "userId": "U0048",
      "views": 4963,
      "follows": 179,
      "registrations": 79,
      "orders": 37
    },
    {
      "userId": "U0049",
      "views": 2799,
      "follows": 163,
      "registrations": 58,
      "orders": 22
    },
    {
      "userId": "U0050",
      "views": 1379,
      "follows": 63,
      "registrations": 63,
      "orders": 3
    },
    {
      "userId": "U0051",
      "views": 4112,
      "follows": 122,
      "registrations": 5,
      "orders": 15
    },
    {
      "userId": "U0052",
      "views": 1936,
      "follows": 248,
      "registrations": 32,
      "orders": 16
    },
    {
      "userId": "U0053",
      "views": 3988,
      "follows": 179,
      "registrations": 53,
      "orders": 14
    },
    {
      "userId": "U0054",
      "views": 3329,
      "follows": 104,
      "registrations": 5,
      "orders": 24
    },
    {
      "userId": "U0055",
      "views": 131,
      "follows": 47,
      "registrations": 50,
      "orders": 2
    },
    {
      "userId": "U0056",
      "views": 4594,
      "follows": 68,
      "registrations": 23,
      "orders": 19
    },
    {
      "userId": "U0057",
      "views": 3657,
      "follows": 109,
      "registrations": 79,
      "orders": 24
    },
    {
      "userId": "U0058",
      "views": 409,
      "follows": 25,
      "registrations": 30,
      "orders": 13
    },
    {
      "userId": "U0059",
      "views": 2377,
      "follows": 99,
      "registrations": 33,
      "orders": 17
    },
    {
      "userId": "U0060",
      "views": 1477,
      "follows": 183,
      "registrations": 75,
      "orders": 16
    },
    {
      "userId": "U0061",
      "views": 1512,
      "follows": 110,
      "registrations": 7,
      "orders": 12
    },
    {
      "userId": "U0062",
      "views": 2194,
      "follows": 61,
      "registrations": 7,
      "orders": 9
    },
    {
      "userId": "U0063",
      "views": 3154,
      "follows": 66,
      "registrations": 48,
      "orders": 14
    },
    {
      "userId": "U0064",
      "views": 2549,
      "follows": 243,
      "registrations": 35,
      "orders": 24
    },
    {
      "userId": "U0065",
      "views": 3100,
      "follows": 97,
      "registrations": 72,
      "orders": 40
    },
    {
      "userId": "U0066",
      "views": 3603,
      "follows": 43,
      "registrations": 20,
      "orders": 10
    },
    {
      "userId": "U0067",
      "views": 1121,
      "follows": 107,
      "registrations": 29,
      "orders": 35
    },
    {
      "userId": "U0068",
      "views": 3148,
      "follows": 201,
      "registrations": 45,
      "orders": 39
    },
    {
      "userId": "U0069",
      "views": 3568,
      "follows": 135,
      "registrations": 10,
      "orders": 40
    },
    {
      "userId": "U0070",
      "views": 4861,
      "follows": 106,
      "registrations": 73,
      "orders": 19
    },
    {
      "userId": "U0071",
      "views": 1267,
      "follows": 177,
      "registrations": 36,
      "orders": 4
    },
    {
      "userId": "U0072",
      "views": 2344,
      "follows": 74,
      "registrations": 70,
      "orders": 38
    },
    {
      "userId": "U0073",
      "views": 4055,
      "follows": 117,
      "registrations": 15,
      "orders": 31
    },
    {
      "userId": "U0074",
      "views": 581,
      "follows": 95,
      "registrations": 70,
      "orders": 25
    },
    {
      "userId": "U0075",
      "views": 4221,
      "follows": 201,
      "registrations": 68,
      "orders": 34
    },
    {
      "userId": "U0076",
      "views": 3853,
      "follows": 101,
      "registrations": 46,
      "orders": 24
    },
    {
      "userId": "U0077",
      "views": 4354,
      "follows": 257,
      "registrations": 68,
      "orders": 31
    },
    {
      "userId": "U0078",
      "views": 2248,
      "follows": 215,
      "registrations": 79,
      "orders": 3
    },
    {
      "userId": "U0079",
      "views": 1747,
      "follows": 122,
      "registrations": 30,
      "orders": 29
    },
    {
      "userId": "U0080",
      "views": 1970,
      "follows": 212,
      "registrations": 32,
      "orders": 20
    },
    {
      "userId": "U0081",
      "views": 3531,
      "follows": 203,
      "registrations": 78,
      "orders": 11
    },
    {
      "userId": "U0082",
      "views": 3114,
      "follows": 140,
      "registrations": 75,
      "orders": 6
    },
    {
      "userId": "U0083",
      "views": 1150,
      "follows": 53,
      "registrations": 42,
      "orders": 29
    },
    {
      "userId": "U0084",
      "views": 4300,
      "follows": 190,
      "registrations": 34,
      "orders": 38
    },
    {
      "userId": "U0085",
      "views": 387,
      "follows": 248,
      "registrations": 70,
      "orders": 40
    }
  ],
  "users": [
    {
      "id": "U0001",
      "name": "孔华华",
      "wechatName": "香飘华华",
      "registeredAt": "2026-06-17 00:00:00",
      "phone": "1921791214"
    },
    {
      "id": "U0002",
      "name": "刘国峰",
      "wechatName": "尝鲜8280",
      "registeredAt": "2026-04-20 00:00:00",
      "phone": "1593992863"
    },
    {
      "id": "U0003",
      "name": "邓飞哲",
      "wechatName": "香飘107",
      "registeredAt": "2026-06-10 00:00:00",
      "phone": "1853555229"
    },
    {
      "id": "U0004",
      "name": "许盛飞",
      "wechatName": "肉食者1520",
      "registeredAt": "2026-05-16 00:00:00",
      "phone": "1787533315"
    },
    {
      "id": "U0005",
      "name": "尹涛良",
      "wechatName": "深夜食堂涛良",
      "registeredAt": "2026-05-24 00:00:00",
      "phone": "1956415018"
    },
    {
      "id": "U0006",
      "name": "杨嘉海",
      "wechatName": "满桌香1308",
      "registeredAt": "2026-06-18 00:00:00",
      "phone": "1845842891"
    },
    {
      "id": "U0007",
      "name": "杜平志",
      "wechatName": "卤味达人3433",
      "registeredAt": "2026-04-02 00:00:00",
      "phone": "1387380378"
    },
    {
      "id": "U0008",
      "name": "尹天斌",
      "wechatName": "好天斌",
      "registeredAt": "2026-04-10 00:00:00",
      "phone": "1938631317"
    },
    {
      "id": "U0009",
      "name": "萧耀明",
      "wechatName": "厨神耀明",
      "registeredAt": "2026-06-03 00:00:00",
      "phone": "1950448393"
    },
    {
      "id": "U0010",
      "name": "金杰智",
      "wechatName": "好杰智",
      "registeredAt": "2026-05-30 00:00:00",
      "phone": "1978530484"
    },
    {
      "id": "U0011",
      "name": "卢忠哲",
      "wechatName": "大忠哲",
      "registeredAt": "2026-06-13 00:00:00",
      "phone": "1973248916"
    },
    {
      "id": "U0012",
      "name": "胡军宁",
      "wechatName": "馋嘴6917",
      "registeredAt": "2026-05-12 00:00:00",
      "phone": "1886866877"
    },
    {
      "id": "U0013",
      "name": "程龙强",
      "wechatName": "深夜食堂8798",
      "registeredAt": "2026-04-09 00:00:00",
      "phone": "1724580865"
    },
    {
      "id": "U0014",
      "name": "郑涛强",
      "wechatName": "味道8202",
      "registeredAt": "2026-04-27 00:00:00",
      "phone": "1390588991"
    },
    {
      "id": "U0015",
      "name": "邱昌涛",
      "wechatName": "老饕6127",
      "registeredAt": "2026-04-22 00:00:00",
      "phone": "1910631072"
    },
    {
      "id": "U0016",
      "name": "张华志",
      "wechatName": "家常味华志",
      "registeredAt": "2026-04-19 00:00:00",
      "phone": "1320896218"
    },
    {
      "id": "U0017",
      "name": "洪云庆",
      "wechatName": "吃遍天下2104",
      "registeredAt": "2026-04-21 00:00:00",
      "phone": "1543964587"
    },
    {
      "id": "U0018",
      "name": "卢俊良",
      "wechatName": "品味5108",
      "registeredAt": "2026-04-06 00:00:00",
      "phone": "1766947967"
    },
    {
      "id": "U0019",
      "name": "郭天海",
      "wechatName": "馋猫天海",
      "registeredAt": "2026-04-21 00:00:00",
      "phone": "1585460810"
    },
    {
      "id": "U0020",
      "name": "吴哲宁",
      "wechatName": "味蕾哲宁",
      "registeredAt": "2026-06-26 00:00:00",
      "phone": "1719942340"
    },
    {
      "id": "U0021",
      "name": "潘嘉博",
      "wechatName": "寻味嘉博",
      "registeredAt": "2026-04-18 00:00:00",
      "phone": "1970498170"
    },
    {
      "id": "U0022",
      "name": "傅德军",
      "wechatName": "肉食者7063",
      "registeredAt": "2026-05-09 00:00:00",
      "phone": "1816261217"
    },
    {
      "id": "U0023",
      "name": "江凯飞",
      "wechatName": "肉食者凯飞",
      "registeredAt": "2026-04-23 00:00:00",
      "phone": "1827791233"
    },
    {
      "id": "U0024",
      "name": "潘涛超",
      "wechatName": "馋猫7261",
      "registeredAt": "2026-04-21 00:00:00",
      "phone": "1316985611"
    },
    {
      "id": "U0025",
      "name": "孙义盛",
      "wechatName": "舌尖2725",
      "registeredAt": "2026-04-30 00:00:00",
      "phone": "1561196031"
    },
    {
      "id": "U0026",
      "name": "沈文安",
      "wechatName": "味道文安",
      "registeredAt": "2026-04-02 00:00:00",
      "phone": "1994897329"
    },
    {
      "id": "U0027",
      "name": "唐晨峰",
      "wechatName": "味蕾9490",
      "registeredAt": "2026-06-23 00:00:00",
      "phone": "1717182184"
    },
    {
      "id": "U0028",
      "name": "姚亮瑞",
      "wechatName": "馋嘴932",
      "registeredAt": "2026-06-20 00:00:00",
      "phone": "1518211396"
    },
    {
      "id": "U0029",
      "name": "冯杰勇",
      "wechatName": "舌尖9486",
      "registeredAt": "2026-04-12 00:00:00",
      "phone": "1363956550"
    },
    {
      "id": "U0030",
      "name": "蔡俊家",
      "wechatName": "厨神俊家",
      "registeredAt": "2026-06-14 00:00:00",
      "phone": "1768618019"
    },
    {
      "id": "U0031",
      "name": "李涛健",
      "wechatName": "肉食者1201",
      "registeredAt": "2026-04-27 00:00:00",
      "phone": "1726671818"
    },
    {
      "id": "U0032",
      "name": "曾毅锋",
      "wechatName": "馋嘴7180",
      "registeredAt": "2026-05-23 00:00:00",
      "phone": "1993966611"
    },
    {
      "id": "U0033",
      "name": "常耀嘉",
      "wechatName": "家常味1698",
      "registeredAt": "2026-06-13 00:00:00",
      "phone": "1724275380"
    },
    {
      "id": "U0034",
      "name": "罗宇锋",
      "wechatName": "寻味宇锋",
      "registeredAt": "2026-04-10 00:00:00",
      "phone": "1774900442"
    },
    {
      "id": "U0035",
      "name": "黄国宁",
      "wechatName": "真国宁",
      "registeredAt": "2026-05-19 00:00:00",
      "phone": "1591529130"
    },
    {
      "id": "U0036",
      "name": "钱飞嘉",
      "wechatName": "真飞嘉",
      "registeredAt": "2026-06-21 00:00:00",
      "phone": "1579159057"
    },
    {
      "id": "U0037",
      "name": "薛龙辉",
      "wechatName": "真龙辉",
      "registeredAt": "2026-05-15 00:00:00",
      "phone": "1355444197"
    },
    {
      "id": "U0038",
      "name": "曾嘉军",
      "wechatName": "卤味达人9174",
      "registeredAt": "2026-05-09 00:00:00",
      "phone": "1929487830"
    },
    {
      "id": "U0039",
      "name": "谢朝天",
      "wechatName": "美食家2939",
      "registeredAt": "2026-05-19 00:00:00",
      "phone": "1895506544"
    },
    {
      "id": "U0040",
      "name": "郑智义",
      "wechatName": "肉食者6268",
      "registeredAt": "2026-05-01 00:00:00",
      "phone": "1535854154"
    },
    {
      "id": "U0041",
      "name": "余耀海",
      "wechatName": "尝鲜388",
      "registeredAt": "2026-05-10 00:00:00",
      "phone": "1745213745"
    },
    {
      "id": "U0042",
      "name": "蒋良元",
      "wechatName": "大8786",
      "registeredAt": "2026-06-27 00:00:00",
      "phone": "1343392584"
    },
    {
      "id": "U0043",
      "name": "蔡志军",
      "wechatName": "真5664",
      "registeredAt": "2026-05-21 00:00:00",
      "phone": "1887937924"
    },
    {
      "id": "U0044",
      "name": "姜忠铭",
      "wechatName": "品味忠铭",
      "registeredAt": "2026-05-06 00:00:00",
      "phone": "1376982197"
    },
    {
      "id": "U0045",
      "name": "严健昌",
      "wechatName": "品味5968",
      "registeredAt": "2026-04-06 00:00:00",
      "phone": "1789614394"
    },
    {
      "id": "U0046",
      "name": "郭凯亮",
      "wechatName": "尝5068",
      "registeredAt": "2026-05-20 00:00:00",
      "phone": "1899584480"
    },
    {
      "id": "U0047",
      "name": "何德天",
      "wechatName": "小2852",
      "registeredAt": "2026-05-23 00:00:00",
      "phone": "1880100648"
    },
    {
      "id": "U0048",
      "name": "袁俊浩",
      "wechatName": "厨神7619",
      "registeredAt": "2026-04-05 00:00:00",
      "phone": "1575875231"
    },
    {
      "id": "U0049",
      "name": "毛国锋",
      "wechatName": "尝国锋",
      "registeredAt": "2026-05-31 00:00:00",
      "phone": "1738426228"
    },
    {
      "id": "U0050",
      "name": "刘志超",
      "wechatName": "美1194",
      "registeredAt": "2026-04-11 00:00:00",
      "phone": "1934729173"
    },
    {
      "id": "U0051",
      "name": "江天辉",
      "wechatName": "小吃货1747",
      "registeredAt": "2026-06-02 00:00:00",
      "phone": "1599948669"
    },
    {
      "id": "U0052",
      "name": "黄龙超",
      "wechatName": "深夜食堂龙超",
      "registeredAt": "2026-05-02 00:00:00",
      "phone": "1981619866"
    },
    {
      "id": "U0053",
      "name": "龙耀启",
      "wechatName": "尝6992",
      "registeredAt": "2026-04-21 00:00:00",
      "phone": "1830877767"
    },
    {
      "id": "U0054",
      "name": "蔡盛超",
      "wechatName": "香飘8541",
      "registeredAt": "2026-05-31 00:00:00",
      "phone": "1766226946"
    },
    {
      "id": "U0055",
      "name": "冯宇飞",
      "wechatName": "厨神宇飞",
      "registeredAt": "2026-06-11 00:00:00",
      "phone": "1559350337"
    },
    {
      "id": "U0056",
      "name": "周辉天",
      "wechatName": "美食猎人8891",
      "registeredAt": "2026-06-23 00:00:00",
      "phone": "1563738184"
    },
    {
      "id": "U0057",
      "name": "武明盛",
      "wechatName": "小明盛",
      "registeredAt": "2026-05-16 00:00:00",
      "phone": "1759786578"
    },
    {
      "id": "U0058",
      "name": "施健良",
      "wechatName": "尝鲜健良",
      "registeredAt": "2026-05-06 00:00:00",
      "phone": "1813737153"
    },
    {
      "id": "U0059",
      "name": "常瑞德",
      "wechatName": "馋嘴7658",
      "registeredAt": "2026-04-12 00:00:00",
      "phone": "1913745585"
    },
    {
      "id": "U0060",
      "name": "秦嘉华",
      "wechatName": "卤味控嘉华",
      "registeredAt": "2026-05-02 00:00:00",
      "phone": "1516526258"
    },
    {
      "id": "U0061",
      "name": "叶俊晨",
      "wechatName": "厨神5530",
      "registeredAt": "2026-05-13 00:00:00",
      "phone": "1763513320"
    },
    {
      "id": "U0062",
      "name": "廖明昌",
      "wechatName": "味蕾明昌",
      "registeredAt": "2026-06-22 00:00:00",
      "phone": "1313505135"
    },
    {
      "id": "U0063",
      "name": "张盛辉",
      "wechatName": "舌尖2069",
      "registeredAt": "2026-06-16 00:00:00",
      "phone": "1937861999"
    },
    {
      "id": "U0064",
      "name": "程宁志",
      "wechatName": "馋嘴9927",
      "registeredAt": "2026-06-16 00:00:00",
      "phone": "1549277184"
    },
    {
      "id": "U0065",
      "name": "刘义亮",
      "wechatName": "小6499",
      "registeredAt": "2026-06-05 00:00:00",
      "phone": "1385497823"
    },
    {
      "id": "U0066",
      "name": "武宁亮",
      "wechatName": "深夜食堂9273",
      "registeredAt": "2026-05-17 00:00:00",
      "phone": "1964707118"
    },
    {
      "id": "U0067",
      "name": "邱良飞",
      "wechatName": "小吃货6883",
      "registeredAt": "2026-06-17 00:00:00",
      "phone": "1856853229"
    },
    {
      "id": "U0068",
      "name": "汪安启",
      "wechatName": "香4426",
      "registeredAt": "2026-04-23 00:00:00",
      "phone": "1869813685"
    },
    {
      "id": "U0069",
      "name": "彭博超",
      "wechatName": "卤味控4570",
      "registeredAt": "2026-05-30 00:00:00",
      "phone": "1882720953"
    },
    {
      "id": "U0070",
      "name": "刘鹏龙",
      "wechatName": "知味鹏龙",
      "registeredAt": "2026-05-28 00:00:00",
      "phone": "1745552681"
    },
    {
      "id": "U0071",
      "name": "李宏涛",
      "wechatName": "卤味控3955",
      "registeredAt": "2026-04-29 00:00:00",
      "phone": "1940880092"
    },
    {
      "id": "U0072",
      "name": "贺鹏宇",
      "wechatName": "美食家鹏宇",
      "registeredAt": "2026-05-10 00:00:00",
      "phone": "1549704670"
    },
    {
      "id": "U0073",
      "name": "熊宏文",
      "wechatName": "真9018",
      "registeredAt": "2026-04-02 00:00:00",
      "phone": "1844602342"
    },
    {
      "id": "U0074",
      "name": "萧华启",
      "wechatName": "品味华启",
      "registeredAt": "2026-04-23 00:00:00",
      "phone": "1534454571"
    },
    {
      "id": "U0075",
      "name": "潘凯哲",
      "wechatName": "香凯哲",
      "registeredAt": "2026-06-18 00:00:00",
      "phone": "1547472756"
    },
    {
      "id": "U0076",
      "name": "谢阳强",
      "wechatName": "吃遍天下阳强",
      "registeredAt": "2026-06-24 00:00:00",
      "phone": "1947306891"
    },
    {
      "id": "U0077",
      "name": "牛鹏军",
      "wechatName": "小吃货鹏军",
      "registeredAt": "2026-04-30 00:00:00",
      "phone": "1853402016"
    },
    {
      "id": "U0078",
      "name": "程尚阳",
      "wechatName": "深夜食堂1071",
      "registeredAt": "2026-06-21 00:00:00",
      "phone": "1990187829"
    },
    {
      "id": "U0079",
      "name": "罗晖铭",
      "wechatName": "家常味1396",
      "registeredAt": "2026-06-15 00:00:00",
      "phone": "1963469776"
    },
    {
      "id": "U0080",
      "name": "沈飞宇",
      "wechatName": "家常味9643",
      "registeredAt": "2026-05-22 00:00:00",
      "phone": "1989198688"
    },
    {
      "id": "U0081",
      "name": "钱伟盛",
      "wechatName": "寻味伟盛",
      "registeredAt": "2026-06-20 00:00:00",
      "phone": "1540384780"
    },
    {
      "id": "U0082",
      "name": "吴平强",
      "wechatName": "老7382",
      "registeredAt": "2026-05-01 00:00:00",
      "phone": "1714479246"
    },
    {
      "id": "U0083",
      "name": "康晨义",
      "wechatName": "好1167",
      "registeredAt": "2026-05-28 00:00:00",
      "phone": "1994424164"
    },
    {
      "id": "U0084",
      "name": "胡云海",
      "wechatName": "老饕4353",
      "registeredAt": "2026-06-21 00:00:00",
      "phone": "1331603986"
    },
    {
      "id": "U0085",
      "name": "施耀铭",
      "wechatName": "满桌香耀铭",
      "registeredAt": "2026-04-03 00:00:00",
      "phone": "1799759444"
    },
    {
      "id": "U0086",
      "name": "邱云博",
      "wechatName": "绝1318",
      "registeredAt": "2026-05-06 00:00:00",
      "phone": "1787510213"
    },
    {
      "id": "U0087",
      "name": "孙海忠",
      "wechatName": "美食家4416",
      "registeredAt": "2026-06-08 00:00:00",
      "phone": "1876824545"
    },
    {
      "id": "U0088",
      "name": "宋启浩",
      "wechatName": "品1495",
      "registeredAt": "2026-05-09 00:00:00",
      "phone": "1751271330"
    },
    {
      "id": "U0089",
      "name": "吕辉义",
      "wechatName": "品4723",
      "registeredAt": "2026-05-10 00:00:00",
      "phone": "1914845121"
    },
    {
      "id": "U0090",
      "name": "苏浩龙",
      "wechatName": "深夜食堂6623",
      "registeredAt": "2026-06-30 00:00:00",
      "phone": "1969777016"
    },
    {
      "id": "U0091",
      "name": "唐宏志",
      "wechatName": "品7243",
      "registeredAt": "2026-06-04 00:00:00",
      "phone": "1780314646"
    },
    {
      "id": "U0092",
      "name": "戴朝义",
      "wechatName": "品朝义",
      "registeredAt": "2026-04-11 00:00:00",
      "phone": "1940359449"
    },
    {
      "id": "U0093",
      "name": "熊文嘉",
      "wechatName": "老文嘉",
      "registeredAt": "2026-06-16 00:00:00",
      "phone": "1825352273"
    },
    {
      "id": "U0094",
      "name": "贺晨元",
      "wechatName": "香飘6808",
      "registeredAt": "2026-05-01 00:00:00",
      "phone": "1568336959"
    },
    {
      "id": "U0095",
      "name": "唐正凯",
      "wechatName": "尝2237",
      "registeredAt": "2026-05-26 00:00:00",
      "phone": "1853931844"
    },
    {
      "id": "U0096",
      "name": "王晨启",
      "wechatName": "家常味9617",
      "registeredAt": "2026-04-07 00:00:00",
      "phone": "1829831678"
    },
    {
      "id": "U0097",
      "name": "姚勇飞",
      "wechatName": "小7461",
      "registeredAt": "2026-06-06 00:00:00",
      "phone": "1583727439"
    },
    {
      "id": "U0098",
      "name": "庄辉明",
      "wechatName": "厨神7750",
      "registeredAt": "2026-05-13 00:00:00",
      "phone": "1894349273"
    },
    {
      "id": "U0099",
      "name": "陈强元",
      "wechatName": "美食猎人1645",
      "registeredAt": "2026-05-05 00:00:00",
      "phone": "1377848611"
    },
    {
      "id": "U0100",
      "name": "严军天",
      "wechatName": "老饕1226",
      "registeredAt": "2026-05-28 00:00:00",
      "phone": "1789751293"
    },
    {
      "id": "U0101",
      "name": "徐庆飞",
      "wechatName": "小5189",
      "registeredAt": "2026-04-29 00:00:00",
      "phone": "1914212140"
    },
    {
      "id": "U0102",
      "name": "郝瑞锋",
      "wechatName": "尝鲜1481",
      "registeredAt": "2026-06-18 00:00:00",
      "phone": "1366372598"
    },
    {
      "id": "U0103",
      "name": "董忠华",
      "wechatName": "吃货5315",
      "registeredAt": "2026-05-24 00:00:00",
      "phone": "1757805628"
    },
    {
      "id": "U0104",
      "name": "曾宏天",
      "wechatName": "知味宏天",
      "registeredAt": "2026-04-13 00:00:00",
      "phone": "1889494573"
    },
    {
      "id": "U0105",
      "name": "薛军海",
      "wechatName": "好4162",
      "registeredAt": "2026-04-06 00:00:00",
      "phone": "1369571296"
    },
    {
      "id": "U0106",
      "name": "邹平国",
      "wechatName": "绝5662",
      "registeredAt": "2026-05-23 00:00:00",
      "phone": "1898509768"
    },
    {
      "id": "U0107",
      "name": "董德安",
      "wechatName": "美德安",
      "registeredAt": "2026-04-18 00:00:00",
      "phone": "1783584799"
    },
    {
      "id": "U0108",
      "name": "于明家",
      "wechatName": "大明家",
      "registeredAt": "2026-04-04 00:00:00",
      "phone": "1387913846"
    },
    {
      "id": "U0109",
      "name": "庄晖海",
      "wechatName": "卤味达人3589",
      "registeredAt": "2026-04-12 00:00:00",
      "phone": "1796324090"
    },
    {
      "id": "U0110",
      "name": "马忠宁",
      "wechatName": "吃货5062",
      "registeredAt": "2026-06-26 00:00:00",
      "phone": "1956315321"
    },
    {
      "id": "U0111",
      "name": "于博昌",
      "wechatName": "老博昌",
      "registeredAt": "2026-04-22 00:00:00",
      "phone": "1777922144"
    },
    {
      "id": "U0112",
      "name": "梁浩阳",
      "wechatName": "满桌香5550",
      "registeredAt": "2026-05-02 00:00:00",
      "phone": "1328469696"
    },
    {
      "id": "U0113",
      "name": "严瑞德",
      "wechatName": "阿1480",
      "registeredAt": "2026-06-29 00:00:00",
      "phone": "1778302468"
    },
    {
      "id": "U0114",
      "name": "丁瑞昌",
      "wechatName": "味道9578",
      "registeredAt": "2026-04-10 00:00:00",
      "phone": "1723483070"
    },
    {
      "id": "U0115",
      "name": "刘盛嘉",
      "wechatName": "厨神盛嘉",
      "registeredAt": "2026-06-22 00:00:00",
      "phone": "1899595193"
    },
    {
      "id": "U0116",
      "name": "傅华杰",
      "wechatName": "吃货610",
      "registeredAt": "2026-04-28 00:00:00",
      "phone": "1322484678"
    },
    {
      "id": "U0117",
      "name": "高锋晨",
      "wechatName": "阿8851",
      "registeredAt": "2026-06-11 00:00:00",
      "phone": "1893262272"
    },
    {
      "id": "U0118",
      "name": "龙辉毅",
      "wechatName": "吃货辉毅",
      "registeredAt": "2026-05-05 00:00:00",
      "phone": "1556262797"
    },
    {
      "id": "U0119",
      "name": "丁云智",
      "wechatName": "卤味达人993",
      "registeredAt": "2026-06-06 00:00:00",
      "phone": "1368250194"
    },
    {
      "id": "U0120",
      "name": "许良宁",
      "wechatName": "美食家829",
      "registeredAt": "2026-05-30 00:00:00",
      "phone": "1582436218"
    },
    {
      "id": "U0121",
      "name": "洪龙峰",
      "wechatName": "寻味3818",
      "registeredAt": "2026-06-12 00:00:00",
      "phone": "1910554228"
    },
    {
      "id": "U0122",
      "name": "何云俊",
      "wechatName": "知味1802",
      "registeredAt": "2026-06-27 00:00:00",
      "phone": "1511686940"
    },
    {
      "id": "U0123",
      "name": "侯博华",
      "wechatName": "知味博华",
      "registeredAt": "2026-05-08 00:00:00",
      "phone": "1924204170"
    },
    {
      "id": "U0124",
      "name": "崔宁志",
      "wechatName": "尝宁志",
      "registeredAt": "2026-04-27 00:00:00",
      "phone": "1588171094"
    },
    {
      "id": "U0125",
      "name": "谭阳晨",
      "wechatName": "美食家997",
      "registeredAt": "2026-05-10 00:00:00",
      "phone": "1897276872"
    },
    {
      "id": "U0126",
      "name": "贺正宇",
      "wechatName": "馋猫1324",
      "registeredAt": "2026-06-12 00:00:00",
      "phone": "1326550589"
    },
    {
      "id": "U0127",
      "name": "孔启嘉",
      "wechatName": "厨神6241",
      "registeredAt": "2026-04-24 00:00:00",
      "phone": "1768928287"
    },
    {
      "id": "U0128",
      "name": "汪伟义",
      "wechatName": "深夜食堂9034",
      "registeredAt": "2026-06-03 00:00:00",
      "phone": "1867474362"
    },
    {
      "id": "U0129",
      "name": "魏耀晨",
      "wechatName": "大6816",
      "registeredAt": "2026-05-21 00:00:00",
      "phone": "1850517657"
    },
    {
      "id": "U0130",
      "name": "罗瑞阳",
      "wechatName": "馋猫1495",
      "registeredAt": "2026-06-19 00:00:00",
      "phone": "1822710526"
    },
    {
      "id": "U0131",
      "name": "孟永哲",
      "wechatName": "美食猎人2003",
      "registeredAt": "2026-04-06 00:00:00",
      "phone": "1816571286"
    },
    {
      "id": "U0132",
      "name": "余勇军",
      "wechatName": "尝勇军",
      "registeredAt": "2026-04-30 00:00:00",
      "phone": "1523673681"
    },
    {
      "id": "U0133",
      "name": "丁华盛",
      "wechatName": "香飘华盛",
      "registeredAt": "2026-05-07 00:00:00",
      "phone": "1989143087"
    },
    {
      "id": "U0134",
      "name": "毛家义",
      "wechatName": "香飘家义",
      "registeredAt": "2026-04-02 00:00:00",
      "phone": "1753675110"
    },
    {
      "id": "U0135",
      "name": "宋尚辉",
      "wechatName": "大尚辉",
      "registeredAt": "2026-04-10 00:00:00",
      "phone": "1321969137"
    },
    {
      "id": "U0136",
      "name": "沈辉晨",
      "wechatName": "美食猎人2579",
      "registeredAt": "2026-05-20 00:00:00",
      "phone": "1986239116"
    },
    {
      "id": "U0137",
      "name": "罗平盛",
      "wechatName": "味蕾平盛",
      "registeredAt": "2026-04-07 00:00:00",
      "phone": "1872824263"
    },
    {
      "id": "U0138",
      "name": "彭俊盛",
      "wechatName": "尝1865",
      "registeredAt": "2026-06-16 00:00:00",
      "phone": "1796897277"
    },
    {
      "id": "U0139",
      "name": "常阳明",
      "wechatName": "尝鲜6476",
      "registeredAt": "2026-06-23 00:00:00",
      "phone": "1336593837"
    },
    {
      "id": "U0140",
      "name": "龚强盛",
      "wechatName": "味道4743",
      "registeredAt": "2026-06-30 00:00:00",
      "phone": "1865387826"
    },
    {
      "id": "U0141",
      "name": "沈云云",
      "wechatName": "尝鲜8197",
      "registeredAt": "2026-04-06 00:00:00",
      "phone": "1719750515"
    },
    {
      "id": "U0142",
      "name": "汪明晨",
      "wechatName": "馋猫5130",
      "registeredAt": "2026-04-18 00:00:00",
      "phone": "1891784347"
    },
    {
      "id": "U0143",
      "name": "胡杰华",
      "wechatName": "厨神2816",
      "registeredAt": "2026-04-12 00:00:00",
      "phone": "1898692821"
    },
    {
      "id": "U0144",
      "name": "汪庆军",
      "wechatName": "舌尖7139",
      "registeredAt": "2026-04-24 00:00:00",
      "phone": "1360608353"
    },
    {
      "id": "U0145",
      "name": "邓超庆",
      "wechatName": "馋嘴1252",
      "registeredAt": "2026-06-16 00:00:00",
      "phone": "1975417654"
    },
    {
      "id": "U0146",
      "name": "蒋凯智",
      "wechatName": "老饕凯智",
      "registeredAt": "2026-05-29 00:00:00",
      "phone": "1532350493"
    },
    {
      "id": "U0147",
      "name": "吴安庆",
      "wechatName": "品7602",
      "registeredAt": "2026-04-17 00:00:00",
      "phone": "1897629590"
    },
    {
      "id": "U0148",
      "name": "苏军宇",
      "wechatName": "馋猫7683",
      "registeredAt": "2026-05-23 00:00:00",
      "phone": "1785192055"
    },
    {
      "id": "U0149",
      "name": "邱建亮",
      "wechatName": "好建亮",
      "registeredAt": "2026-05-14 00:00:00",
      "phone": "1719247988"
    },
    {
      "id": "U0150",
      "name": "雷亮安",
      "wechatName": "好9509",
      "registeredAt": "2026-06-25 00:00:00",
      "phone": "1883408451"
    },
    {
      "id": "U0151",
      "name": "白斌元",
      "wechatName": "老饕1014",
      "registeredAt": "2026-05-18 00:00:00",
      "phone": "1374382715"
    },
    {
      "id": "U0152",
      "name": "曾哲宇",
      "wechatName": "绝8587",
      "registeredAt": "2026-06-10 00:00:00",
      "phone": "1757563459"
    },
    {
      "id": "U0153",
      "name": "傅宁飞",
      "wechatName": "味蕾宁飞",
      "registeredAt": "2026-06-18 00:00:00",
      "phone": "1996733346"
    },
    {
      "id": "U0154",
      "name": "程凯家",
      "wechatName": "老饕凯家",
      "registeredAt": "2026-04-07 00:00:00",
      "phone": "1554608293"
    },
    {
      "id": "U0155",
      "name": "武嘉德",
      "wechatName": "吃遍天下9750",
      "registeredAt": "2026-06-20 00:00:00",
      "phone": "1781717192"
    },
    {
      "id": "U0156",
      "name": "吕耀杰",
      "wechatName": "香1532",
      "registeredAt": "2026-05-07 00:00:00",
      "phone": "1956129856"
    },
    {
      "id": "U0157",
      "name": "余安峰",
      "wechatName": "美食猎人安峰",
      "registeredAt": "2026-06-13 00:00:00",
      "phone": "1519584622"
    },
    {
      "id": "U0158",
      "name": "邱宁良",
      "wechatName": "香619",
      "registeredAt": "2026-04-12 00:00:00",
      "phone": "1586717229"
    },
    {
      "id": "U0159",
      "name": "郑安义",
      "wechatName": "馋嘴安义",
      "registeredAt": "2026-05-15 00:00:00",
      "phone": "1566566867"
    },
    {
      "id": "U0160",
      "name": "萧云超",
      "wechatName": "家常味7685",
      "registeredAt": "2026-06-06 00:00:00",
      "phone": "1796821869"
    },
    {
      "id": "U0161",
      "name": "龚晨庆",
      "wechatName": "小8240",
      "registeredAt": "2026-06-10 00:00:00",
      "phone": "1587326742"
    },
    {
      "id": "U0162",
      "name": "黄良阳",
      "wechatName": "阿9086",
      "registeredAt": "2026-04-25 00:00:00",
      "phone": "1346237430"
    },
    {
      "id": "U0163",
      "name": "彭飞元",
      "wechatName": "老饕飞元",
      "registeredAt": "2026-06-02 00:00:00",
      "phone": "1854143663"
    },
    {
      "id": "U0164",
      "name": "黄杰元",
      "wechatName": "阿3863",
      "registeredAt": "2026-06-20 00:00:00",
      "phone": "1738146150"
    },
    {
      "id": "U0165",
      "name": "马家云",
      "wechatName": "美食猎人家云",
      "registeredAt": "2026-05-25 00:00:00",
      "phone": "1899327370"
    },
    {
      "id": "U0166",
      "name": "崔盛强",
      "wechatName": "卤味控盛强",
      "registeredAt": "2026-06-11 00:00:00",
      "phone": "1987964764"
    },
    {
      "id": "U0167",
      "name": "胡宁锋",
      "wechatName": "舌尖宁锋",
      "registeredAt": "2026-05-31 00:00:00",
      "phone": "1891848918"
    },
    {
      "id": "U0168",
      "name": "胡家博",
      "wechatName": "美食家8444",
      "registeredAt": "2026-06-12 00:00:00",
      "phone": "1764102588"
    }
  ],
  "categories": [
    "牛羊肉",
    "卤货",
    "鸭货",
    "面食",
    "凉菜"
  ]
}));
})();