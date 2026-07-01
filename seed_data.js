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
  "points": {
    "1934729173": {
      "balance": 35,
      "history": [
        {
          "type": "每日打卡",
          "points": 22,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 13,
          "date": "2026-05-14T00:00:00"
        }
      ]
    },
    "1768928287": {
      "balance": 18,
      "history": [
        {
          "type": "每日打卡",
          "points": 18,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1593992863": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 15,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 26,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 18,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 11,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 11,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -164,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -12,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1368250194": {
      "balance": 2,
      "history": [
        {
          "type": "消费赠送",
          "points": 41,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 7,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 23,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 11,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -51,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -63,
          "date": "2026-06-22T00:00:00"
        }
      ]
    },
    "1360608353": {
      "balance": 146,
      "history": [
        {
          "type": "分享店铺",
          "points": 34,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 45,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 48,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 19,
          "date": "2026-05-09T00:00:00"
        }
      ]
    },
    "1947306891": {
      "balance": 148,
      "history": [
        {
          "type": "分享店铺",
          "points": 46,
          "date": "2026-05-30T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 46,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 21,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 40,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 42,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 28,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -75,
          "date": "2026-06-28T00:00:00"
        }
      ]
    },
    "1853402016": {
      "balance": 110,
      "history": [
        {
          "type": "活动赠送",
          "points": 43,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 29,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1724580865": {
      "balance": 81,
      "history": [
        {
          "type": "消费赠送",
          "points": 12,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 15,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 21,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 37,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 45,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -49,
          "date": "2026-06-06T00:00:00"
        }
      ]
    },
    "1910631072": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 28,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -71,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -155,
          "date": "2026-06-28T00:00:00"
        }
      ]
    },
    "1583727439": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 47,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 21,
          "date": "2026-05-28T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 18,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -192,
          "date": "2026-06-18T00:00:00"
        }
      ]
    },
    "1989143087": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 26,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 42,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 9,
          "date": "2026-05-16T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 19,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 26,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 22,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 18,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -195,
          "date": "2026-06-12T00:00:00"
        }
      ]
    },
    "1887937924": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 47,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 32,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -16,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -22,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -56,
          "date": "2026-06-05T00:00:00"
        }
      ]
    },
    "1316985611": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 32,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 33,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 8,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 15,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 35,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 8,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -126,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -134,
          "date": "2026-06-24T00:00:00"
        }
      ]
    },
    "1591529130": {
      "balance": 119,
      "history": [
        {
          "type": "每日打卡",
          "points": 8,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 37,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 8,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 16,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 48,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 30,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -28,
          "date": "2026-06-29T00:00:00"
        }
      ]
    },
    "1787533315": {
      "balance": 119,
      "history": [
        {
          "type": "分享店铺",
          "points": 47,
          "date": "2026-05-16T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 20,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 13,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 5,
          "date": "2026-06-01T00:00:00"
        }
      ]
    },
    "1726671818": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 9,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 28,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -88,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-04T00:00:00"
        }
      ]
    },
    "1321969137": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 40,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 23,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -101,
          "date": "2026-06-24T00:00:00"
        }
      ]
    },
    "1719247988": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 26,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -153,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -19,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -29,
          "date": "2026-06-29T00:00:00"
        }
      ]
    },
    "1540384780": {
      "balance": 28,
      "history": [
        {
          "type": "消费赠送",
          "points": 28,
          "date": "2026-05-04T00:00:00"
        }
      ]
    },
    "1865387826": {
      "balance": 32,
      "history": [
        {
          "type": "分享店铺",
          "points": 20,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 16,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 6,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 31,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 22,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 29,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 35,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -127,
          "date": "2026-06-21T00:00:00"
        }
      ]
    },
    "1320896218": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 9,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 27,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 6,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 16,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 7,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -98,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -50,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -42,
          "date": "2026-06-18T00:00:00"
        }
      ]
    },
    "1738426228": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 38,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 28,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 47,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 44,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 24,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 30,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -151,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -117,
          "date": "2026-06-18T00:00:00"
        }
      ]
    },
    "1377848611": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 23,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -158,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -30,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -17,
          "date": "2026-06-24T00:00:00"
        }
      ]
    },
    "1996733346": {
      "balance": 1,
      "history": [
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 19,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 14,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 34,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 50,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -136,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-06T00:00:00"
        }
      ]
    },
    "1899584480": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 12,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -128,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1719942340": {
      "balance": 216,
      "history": [
        {
          "type": "活动赠送",
          "points": 15,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 33,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 45,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 33,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 20,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 25,
          "date": "2026-05-04T00:00:00"
        }
      ]
    },
    "1777922144": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 9,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 26,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 31,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -117,
          "date": "2026-06-02T00:00:00"
        }
      ]
    },
    "1322484678": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 24,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -117,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -104,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -19,
          "date": "2026-06-15T00:00:00"
        }
      ]
    },
    "1759786578": {
      "balance": 121,
      "history": [
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 15,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 13,
          "date": "2026-05-22T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 30,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 13,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 16,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -13,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-20T00:00:00"
        }
      ]
    },
    "1893262272": {
      "balance": 33,
      "history": [
        {
          "type": "活动赠送",
          "points": 6,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 27,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1987964764": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 20,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -95,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-25T00:00:00"
        }
      ]
    },
    "1787510213": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 42,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 41,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 30,
          "date": "2026-05-16T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 9,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 11,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -185,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -40,
          "date": "2026-06-05T00:00:00"
        }
      ]
    },
    "1913745585": {
      "balance": 152,
      "history": [
        {
          "type": "每日打卡",
          "points": 31,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 11,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 45,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 50,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 16,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 44,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -24,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -11,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-22T00:00:00"
        }
      ]
    },
    "1869813685": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -64,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -43,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -48,
          "date": "2026-06-02T00:00:00"
        }
      ]
    },
    "1547472756": {
      "balance": 138,
      "history": [
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 36,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 49,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 33,
          "date": "2026-05-11T00:00:00"
        }
      ]
    },
    "1387380378": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 35,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 32,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 27,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -79,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -69,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -59,
          "date": "2026-06-27T00:00:00"
        }
      ]
    },
    "1882720953": {
      "balance": 142,
      "history": [
        {
          "type": "消费赠送",
          "points": 42,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 11,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 23,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 16,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 50,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 22,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 40,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -23,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -46,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -38,
          "date": "2026-06-25T00:00:00"
        }
      ]
    },
    "1899595193": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 36,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 14,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -31,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -152,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1387913846": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 24,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 24,
          "date": "2026-05-25T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 44,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 18,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 21,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 15,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 40,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 5,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -186,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-21T00:00:00"
        }
      ]
    },
    "1854143663": {
      "balance": 137,
      "history": [
        {
          "type": "消费赠送",
          "points": 45,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 32,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 46,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 14,
          "date": "2026-06-26T00:00:00"
        }
      ]
    },
    "1549277184": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 49,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -122,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -15,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -51,
          "date": "2026-06-22T00:00:00"
        }
      ]
    },
    "1990187829": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 16,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 45,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 10,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 31,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -181,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -51,
          "date": "2026-06-17T00:00:00"
        }
      ]
    },
    "1535854154": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 10,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -92,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -113,
          "date": "2026-06-04T00:00:00"
        }
      ]
    },
    "1585460810": {
      "balance": 93,
      "history": [
        {
          "type": "消费赠送",
          "points": 44,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 45,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 18,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 23,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -13,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -14,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-13T00:00:00"
        }
      ]
    },
    "1313505135": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 12,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 36,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -75,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -23,
          "date": "2026-06-15T00:00:00"
        }
      ]
    },
    "1763513320": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 22,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 26,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 5,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -85,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -11,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1789614394": {
      "balance": 77,
      "history": [
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 49,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 19,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 7,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 50,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 29,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 36,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -138,
          "date": "2026-06-20T00:00:00"
        }
      ]
    },
    "1566566867": {
      "balance": 38,
      "history": [
        {
          "type": "每日打卡",
          "points": 14,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 9,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 26,
          "date": "2026-05-22T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 46,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 48,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 39,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -68,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -121,
          "date": "2026-06-06T00:00:00"
        }
      ]
    },
    "1825352273": {
      "balance": 115,
      "history": [
        {
          "type": "每日打卡",
          "points": 7,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 23,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 32,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 38,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 15,
          "date": "2026-06-19T00:00:00"
        }
      ]
    },
    "1568336959": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 34,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 34,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -183,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -14,
          "date": "2026-06-19T00:00:00"
        }
      ]
    },
    "1813737153": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 29,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 11,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 41,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 49,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 47,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -12,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -185,
          "date": "2026-06-29T00:00:00"
        }
      ]
    },
    "1973248916": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 19,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 44,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 24,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -18,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -197,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -85,
          "date": "2026-06-07T00:00:00"
        }
      ]
    },
    "1816571286": {
      "balance": 152,
      "history": [
        {
          "type": "消费赠送",
          "points": 15,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 23,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 12,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 14,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 48,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 40,
          "date": "2026-06-07T00:00:00"
        }
      ]
    },
    "1579159057": {
      "balance": 286,
      "history": [
        {
          "type": "消费赠送",
          "points": 48,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 42,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 11,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 35,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 44,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 45,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 49,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 12,
          "date": "2026-06-22T00:00:00"
        }
      ]
    },
    "1796324090": {
      "balance": 149,
      "history": [
        {
          "type": "分享店铺",
          "points": 29,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 42,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 31,
          "date": "2026-05-20T00:00:00"
        }
      ]
    },
    "1745213745": {
      "balance": 120,
      "history": [
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 28,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 39,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 8,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 17,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 10,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -15,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1914845121": {
      "balance": 45,
      "history": [
        {
          "type": "每日打卡",
          "points": 40,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 19,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 43,
          "date": "2026-06-30T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 14,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -61,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-30T00:00:00"
        }
      ]
    },
    "1745552681": {
      "balance": 61,
      "history": [
        {
          "type": "消费赠送",
          "points": 8,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 35,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-29T00:00:00"
        }
      ]
    },
    "1723483070": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 35,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -119,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -135,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -66,
          "date": "2026-06-02T00:00:00"
        }
      ]
    },
    "1886866877": {
      "balance": 116,
      "history": [
        {
          "type": "消费赠送",
          "points": 29,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 11,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 46,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 32,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -36,
          "date": "2026-06-04T00:00:00"
        }
      ]
    },
    "1956129856": {
      "balance": 44,
      "history": [
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 14,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 9,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 28,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 40,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -100,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -37,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -14,
          "date": "2026-06-21T00:00:00"
        }
      ]
    },
    "1766226946": {
      "balance": 228,
      "history": [
        {
          "type": "分享店铺",
          "points": 11,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 12,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 41,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 40,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 43,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 6,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 49,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 26,
          "date": "2026-06-08T00:00:00"
        }
      ]
    },
    "1355444197": {
      "balance": 30,
      "history": [
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 29,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 26,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -19,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -16,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1816261217": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 22,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -72,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-17T00:00:00"
        }
      ]
    },
    "1993966611": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 19,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 5,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 18,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 21,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 12,
          "date": "2026-06-30T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -120,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -107,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -39,
          "date": "2026-06-13T00:00:00"
        }
      ]
    },
    "1963469776": {
      "balance": 6,
      "history": [
        {
          "type": "活动赠送",
          "points": 6,
          "date": "2026-06-01T00:00:00"
        }
      ]
    },
    "1328469696": {
      "balance": 59,
      "history": [
        {
          "type": "消费赠送",
          "points": 12,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 25,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 49,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 10,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 24,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -66,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -53,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1994424164": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 11,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 17,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 46,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -170,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1940359449": {
      "balance": 30,
      "history": [
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 33,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 22,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 27,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 24,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 7,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -83,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -33,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1789751293": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 41,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -92,
          "date": "2026-06-15T00:00:00"
        }
      ]
    },
    "1714479246": {
      "balance": 182,
      "history": [
        {
          "type": "每日打卡",
          "points": 37,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 7,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 33,
          "date": "2026-05-28T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 28,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 29,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 48,
          "date": "2026-05-23T00:00:00"
        }
      ]
    },
    "1853931844": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 23,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 26,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -99,
          "date": "2026-06-10T00:00:00"
        }
      ]
    },
    "1376982197": {
      "balance": 53,
      "history": [
        {
          "type": "消费赠送",
          "points": 40,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 13,
          "date": "2026-05-19T00:00:00"
        }
      ]
    },
    "1363956550": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 24,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -97,
          "date": "2026-06-24T00:00:00"
        }
      ]
    },
    "1326550589": {
      "balance": 39,
      "history": [
        {
          "type": "每日打卡",
          "points": 47,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 43,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -51,
          "date": "2026-06-04T00:00:00"
        }
      ]
    },
    "1753675110": {
      "balance": 186,
      "history": [
        {
          "type": "消费赠送",
          "points": 48,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-05-22T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 33,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 17,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 34,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 29,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -12,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-13T00:00:00"
        }
      ]
    },
    "1549704670": {
      "balance": 65,
      "history": [
        {
          "type": "消费赠送",
          "points": 33,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 32,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -11,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -22,
          "date": "2026-06-19T00:00:00"
        }
      ]
    },
    "1899327370": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 11,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -111,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-01T00:00:00"
        }
      ]
    },
    "1518211396": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 6,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -48,
          "date": "2026-06-07T00:00:00"
        }
      ]
    },
    "1994897329": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 9,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 43,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 45,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -193,
          "date": "2026-06-21T00:00:00"
        }
      ]
    },
    "1898692821": {
      "balance": 214,
      "history": [
        {
          "type": "分享店铺",
          "points": 47,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 38,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 38,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 29,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 7,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 28,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 27,
          "date": "2026-05-11T00:00:00"
        }
      ]
    },
    "1921791214": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 39,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -63,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1587326742": {
      "balance": 171,
      "history": [
        {
          "type": "每日打卡",
          "points": 23,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 17,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 25,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 37,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 21,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 23,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 46,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 12,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -23,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-20T00:00:00"
        }
      ]
    },
    "1523673681": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 32,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 43,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 39,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 11,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 47,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -124,
          "date": "2026-06-08T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -119,
          "date": "2026-06-08T00:00:00"
        }
      ]
    },
    "1950448393": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 9,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 28,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 6,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 7,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 20,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -102,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -18,
          "date": "2026-06-26T00:00:00"
        }
      ]
    },
    "1516526258": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 38,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -73,
          "date": "2026-06-30T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -57,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1799759444": {
      "balance": 143,
      "history": [
        {
          "type": "活动赠送",
          "points": 18,
          "date": "2026-05-22T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 49,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 17,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 9,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 50,
          "date": "2026-06-02T00:00:00"
        }
      ]
    },
    "1796897277": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 24,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 50,
          "date": "2026-05-16T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -102,
          "date": "2026-06-23T00:00:00"
        }
      ]
    },
    "1575875231": {
      "balance": 269,
      "history": [
        {
          "type": "每日打卡",
          "points": 28,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 44,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 9,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 50,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 41,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 25,
          "date": "2026-05-20T00:00:00"
        }
      ]
    },
    "1853555229": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 32,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 12,
          "date": "2026-05-28T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -92,
          "date": "2026-06-23T00:00:00"
        }
      ]
    },
    "1940880092": {
      "balance": 105,
      "history": [
        {
          "type": "消费赠送",
          "points": 13,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 44,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 37,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 42,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -31,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1829831678": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 7,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -176,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -156,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1785192055": {
      "balance": 13,
      "history": [
        {
          "type": "活动赠送",
          "points": 20,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 24,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 49,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 34,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -46,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -101,
          "date": "2026-06-07T00:00:00"
        }
      ]
    },
    "1366372598": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 20,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 22,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -46,
          "date": "2026-06-29T00:00:00"
        }
      ]
    },
    "1895506544": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 41,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 17,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 36,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -137,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -15,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -139,
          "date": "2026-06-23T00:00:00"
        }
      ]
    },
    "1519584622": {
      "balance": 128,
      "history": [
        {
          "type": "活动赠送",
          "points": 43,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 23,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 11,
          "date": "2026-06-03T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 21,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 30,
          "date": "2026-06-07T00:00:00"
        }
      ]
    },
    "1914212140": {
      "balance": 90,
      "history": [
        {
          "type": "每日打卡",
          "points": 29,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 40,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 13,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 28,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 40,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -60,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1563738184": {
      "balance": 52,
      "history": [
        {
          "type": "消费赠送",
          "points": 35,
          "date": "2026-05-28T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 14,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 25,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -12,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-20T00:00:00"
        }
      ]
    },
    "1751271330": {
      "balance": 26,
      "history": [
        {
          "type": "消费赠送",
          "points": 26,
          "date": "2026-05-18T00:00:00"
        }
      ]
    },
    "1599948669": {
      "balance": 48,
      "history": [
        {
          "type": "消费赠送",
          "points": 46,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 8,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 15,
          "date": "2026-05-28T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 14,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 7,
          "date": "2026-05-25T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 17,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 31,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -115,
          "date": "2026-06-06T00:00:00"
        }
      ]
    },
    "1774900442": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 40,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 16,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -149,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -194,
          "date": "2026-06-10T00:00:00"
        }
      ]
    },
    "1534454571": {
      "balance": 0,
      "history": [
        {
          "type": "消费赠送",
          "points": 40,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 50,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -153,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -83,
          "date": "2026-06-12T00:00:00"
        }
      ]
    },
    "1924204170": {
      "balance": 121,
      "history": [
        {
          "type": "分享店铺",
          "points": 23,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 50,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 33,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 35,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 39,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 13,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -72,
          "date": "2026-06-09T00:00:00"
        }
      ]
    },
    "1586717229": {
      "balance": 238,
      "history": [
        {
          "type": "消费赠送",
          "points": 50,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 48,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 5,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 31,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 35,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 23,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 46,
          "date": "2026-06-27T00:00:00"
        }
      ]
    },
    "1783584799": {
      "balance": 12,
      "history": [
        {
          "type": "分享店铺",
          "points": 31,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -19,
          "date": "2026-06-05T00:00:00"
        }
      ]
    },
    "1346237430": {
      "balance": 103,
      "history": [
        {
          "type": "每日打卡",
          "points": 26,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 46,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 13,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 26,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-09T00:00:00"
        }
      ]
    },
    "1889494573": {
      "balance": 122,
      "history": [
        {
          "type": "每日打卡",
          "points": 30,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 16,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 5,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 20,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 26,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1910554228": {
      "balance": 45,
      "history": [
        {
          "type": "活动赠送",
          "points": 24,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -13,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -14,
          "date": "2026-06-11T00:00:00"
        }
      ]
    },
    "1554608293": {
      "balance": 120,
      "history": [
        {
          "type": "消费赠送",
          "points": 31,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 39,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 20,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 38,
          "date": "2026-06-02T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 9,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 8,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 41,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 15,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -24,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -47,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1898509768": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -195,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -42,
          "date": "2026-06-07T00:00:00"
        }
      ]
    },
    "1336593837": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 39,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 35,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 31,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 46,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 28,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 33,
          "date": "2026-05-06T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -106,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -94,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -15,
          "date": "2026-06-27T00:00:00"
        }
      ]
    },
    "1374382715": {
      "balance": 77,
      "history": [
        {
          "type": "每日打卡",
          "points": 6,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 39,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 20,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -19,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -17,
          "date": "2026-06-05T00:00:00"
        }
      ]
    },
    "1543964587": {
      "balance": 86,
      "history": [
        {
          "type": "每日打卡",
          "points": 43,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 43,
          "date": "2026-05-18T00:00:00"
        }
      ]
    },
    "1780314646": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 8,
          "date": "2026-06-22T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 19,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 41,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 20,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -179,
          "date": "2026-06-23T00:00:00"
        }
      ]
    },
    "1891848918": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 40,
          "date": "2026-05-30T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 27,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -114,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -106,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -44,
          "date": "2026-06-23T00:00:00"
        }
      ]
    },
    "1937861999": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 31,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -109,
          "date": "2026-06-22T00:00:00"
        }
      ]
    },
    "1369571296": {
      "balance": 163,
      "history": [
        {
          "type": "每日打卡",
          "points": 39,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 8,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 9,
          "date": "2026-06-18T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 35,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 24,
          "date": "2026-05-03T00:00:00"
        }
      ]
    },
    "1956315321": {
      "balance": 164,
      "history": [
        {
          "type": "分享店铺",
          "points": 49,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 30,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 40,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 29,
          "date": "2026-06-01T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 24,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 37,
          "date": "2026-05-05T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 34,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -104,
          "date": "2026-06-17T00:00:00"
        }
      ]
    },
    "1738146150": {
      "balance": 117,
      "history": [
        {
          "type": "活动赠送",
          "points": 23,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 26,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 41,
          "date": "2026-05-08T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 36,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 21,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -10,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -10,
          "date": "2026-06-01T00:00:00"
        }
      ]
    },
    "1872824263": {
      "balance": 50,
      "history": [
        {
          "type": "每日打卡",
          "points": 5,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1757563459": {
      "balance": 136,
      "history": [
        {
          "type": "消费赠送",
          "points": 8,
          "date": "2026-05-22T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 47,
          "date": "2026-05-30T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 5,
          "date": "2026-05-27T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 5,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 39,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 37,
          "date": "2026-05-09T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 16,
          "date": "2026-06-24T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 38,
          "date": "2026-06-21T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -59,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1781717192": {
      "balance": 186,
      "history": [
        {
          "type": "每日打卡",
          "points": 28,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 41,
          "date": "2026-06-15T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 46,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-06-05T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 29,
          "date": "2026-05-26T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 8,
          "date": "2026-05-21T00:00:00"
        }
      ]
    },
    "1856853229": {
      "balance": 163,
      "history": [
        {
          "type": "消费赠送",
          "points": 41,
          "date": "2026-05-07T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 38,
          "date": "2026-05-03T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 19,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 48,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 39,
          "date": "2026-05-25T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 16,
          "date": "2026-05-02T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -14,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -46,
          "date": "2026-06-04T00:00:00"
        }
      ]
    },
    "1390588991": {
      "balance": 123,
      "history": [
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 29,
          "date": "2026-05-13T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 49,
          "date": "2026-05-15T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 37,
          "date": "2026-05-14T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -16,
          "date": "2026-06-17T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -24,
          "date": "2026-06-20T00:00:00"
        }
      ]
    },
    "1764102588": {
      "balance": 122,
      "history": [
        {
          "type": "活动赠送",
          "points": 36,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 40,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 16,
          "date": "2026-05-18T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 10,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 20,
          "date": "2026-05-16T00:00:00"
        }
      ]
    },
    "1719750515": {
      "balance": 0,
      "history": [
        {
          "type": "活动赠送",
          "points": 25,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-06-30T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 33,
          "date": "2026-06-07T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -36,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -57,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1331603986": {
      "balance": 46,
      "history": [
        {
          "type": "消费赠送",
          "points": 40,
          "date": "2026-06-25T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 29,
          "date": "2026-06-30T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -13,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -10,
          "date": "2026-06-02T00:00:00"
        }
      ]
    },
    "1768618019": {
      "balance": 106,
      "history": [
        {
          "type": "分享店铺",
          "points": 13,
          "date": "2026-06-13T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 22,
          "date": "2026-05-30T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 9,
          "date": "2026-06-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 22,
          "date": "2026-06-04T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 35,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 28,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-05-30T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -68,
          "date": "2026-06-26T00:00:00"
        }
      ]
    },
    "1532350493": {
      "balance": 165,
      "history": [
        {
          "type": "消费赠送",
          "points": 33,
          "date": "2026-06-09T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 46,
          "date": "2026-05-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 35,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 30,
          "date": "2026-06-10T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 49,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 41,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -93,
          "date": "2026-06-22T00:00:00"
        }
      ]
    },
    "1970498170": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 34,
          "date": "2026-05-16T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 49,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -182,
          "date": "2026-06-26T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -91,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -18,
          "date": "2026-06-26T00:00:00"
        }
      ]
    },
    "1850517657": {
      "balance": 49,
      "history": [
        {
          "type": "活动赠送",
          "points": 39,
          "date": "2026-05-29T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 39,
          "date": "2026-06-28T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 49,
          "date": "2026-05-04T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 11,
          "date": "2026-05-12T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 47,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 15,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 41,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 26,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -37,
          "date": "2026-06-27T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -76,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -105,
          "date": "2026-06-13T00:00:00"
        }
      ]
    },
    "1969777016": {
      "balance": 8,
      "history": [
        {
          "type": "活动赠送",
          "points": 48,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 27,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 11,
          "date": "2026-06-12T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 10,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 27,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 34,
          "date": "2026-05-11T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 38,
          "date": "2026-05-31T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -131,
          "date": "2026-06-16T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -56,
          "date": "2026-06-16T00:00:00"
        }
      ]
    },
    "1559350337": {
      "balance": 0,
      "history": [
        {
          "type": "每日打卡",
          "points": 26,
          "date": "2026-05-20T00:00:00"
        },
        {
          "type": "每日打卡",
          "points": 48,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "积分兑换",
          "points": -199,
          "date": "2026-06-14T00:00:00"
        }
      ]
    },
    "1385497823": {
      "balance": 219,
      "history": [
        {
          "type": "活动赠送",
          "points": 19,
          "date": "2026-05-10T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 45,
          "date": "2026-06-19T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 45,
          "date": "2026-05-19T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 30,
          "date": "2026-06-29T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 33,
          "date": "2026-05-24T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 29,
          "date": "2026-06-30T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 18,
          "date": "2026-06-13T00:00:00"
        }
      ]
    },
    "1894349273": {
      "balance": 14,
      "history": [
        {
          "type": "活动赠送",
          "points": 12,
          "date": "2026-06-14T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 38,
          "date": "2026-05-21T00:00:00"
        },
        {
          "type": "消费赠送",
          "points": 43,
          "date": "2026-06-06T00:00:00"
        },
        {
          "type": "活动赠送",
          "points": 42,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -100,
          "date": "2026-06-11T00:00:00"
        },
        {
          "type": "兑换优惠券",
          "points": -21,
          "date": "2026-06-08T00:00:00"
        }
      ]
    },
    "1561196031": {
      "balance": 0,
      "history": [
        {
          "type": "分享店铺",
          "points": 24,
          "date": "2026-06-23T00:00:00"
        },
        {
          "type": "分享店铺",
          "points": 28,
          "date": "2026-05-17T00:00:00"
        },
        {
          "type": "积分抵现",
          "points": -140,
          "date": "2026-06-17T00:00:00"
        }
      ]
    },
    "16866886688": {
      "balance": 156,
      "history": [
        {
          "type": "每日打卡",
          "points": 10,
          "date": "2026-06-30T10:00:00"
        },
        {
          "type": "分享店铺",
          "points": 5,
          "date": "2026-06-29T10:00:00"
        },
        {
          "type": "有人通过你的分享关注",
          "points": 3,
          "date": "2026-06-28T10:00:00"
        },
        {
          "type": "有人通过你的分享注册",
          "points": 5,
          "date": "2026-06-27T10:00:00"
        },
        {
          "type": "有人通过你的分享下单",
          "points": 10,
          "date": "2026-06-26T10:00:00"
        },
        {
          "type": "消费赠送",
          "points": 123,
          "date": "2026-06-25T10:00:00"
        },
        {
          "type": "积分兑换",
          "points": -50,
          "date": "2026-06-24T10:00:00"
        },
        {
          "type": "积分兑换",
          "points": -30,
          "date": "2026-06-23T10:00:00"
        },
        {
          "type": "活动消耗",
          "points": -20,
          "date": "2026-06-22T10:00:00"
        }
      ]
    }
  },
  "checkins": {
    "1934729173": "2026-06-30",
    "1768928287": "2026-06-30",
    "1593992863": "2026-06-30",
    "1368250194": "2026-06-30",
    "1360608353": "2026-06-30",
    "1947306891": "2026-06-30",
    "1853402016": "2026-06-30",
    "1724580865": "2026-06-30",
    "1910631072": "2026-06-30",
    "1583727439": "2026-06-30",
    "1989143087": "2026-06-30",
    "1887937924": "2026-06-30",
    "1316985611": "2026-06-30",
    "1591529130": "2026-06-30",
    "1787533315": "2026-06-30",
    "1726671818": "2026-06-30",
    "1321969137": "2026-06-30",
    "1719247988": "2026-06-30",
    "1540384780": "2026-06-30",
    "1865387826": "2026-06-30",
    "1320896218": "2026-06-30",
    "1738426228": "2026-06-30",
    "1377848611": "2026-06-30",
    "1996733346": "2026-06-30",
    "1899584480": "2026-06-30",
    "1719942340": "2026-06-30",
    "1777922144": "2026-06-30",
    "1322484678": "2026-06-30",
    "1759786578": "2026-06-30",
    "1893262272": "2026-06-30",
    "1987964764": "2026-06-30",
    "1787510213": "2026-06-30",
    "1913745585": "2026-06-30",
    "1869813685": "2026-06-30",
    "1547472756": "2026-06-30",
    "1387380378": "2026-06-30",
    "1882720953": "2026-06-30",
    "1899595193": "2026-06-30",
    "1387913846": "2026-06-30",
    "1854143663": "2026-06-30",
    "1549277184": "2026-06-30",
    "1990187829": "2026-06-30",
    "1535854154": "2026-06-30",
    "1585460810": "2026-06-30",
    "1313505135": "2026-06-30",
    "1763513320": "2026-06-30",
    "1789614394": "2026-06-30",
    "1566566867": "2026-06-30",
    "1825352273": "2026-06-30",
    "1568336959": "2026-06-30",
    "1813737153": "2026-06-30",
    "1973248916": "2026-06-30",
    "1816571286": "2026-06-30",
    "1579159057": "2026-06-30",
    "1796324090": "2026-06-30",
    "1745213745": "2026-06-30",
    "1914845121": "2026-06-30",
    "1745552681": "2026-06-30",
    "1723483070": "2026-06-30",
    "1886866877": "2026-06-30",
    "1956129856": "2026-06-30",
    "1766226946": "2026-06-30",
    "1355444197": "2026-06-30",
    "1816261217": "2026-06-30",
    "1993966611": "2026-06-30",
    "1963469776": "2026-06-30",
    "1328469696": "2026-06-30",
    "1994424164": "2026-06-30",
    "1940359449": "2026-06-30",
    "1789751293": "2026-06-30",
    "1714479246": "2026-06-30",
    "1853931844": "2026-06-30",
    "1376982197": "2026-06-30",
    "1363956550": "2026-06-30",
    "1326550589": "2026-06-30",
    "1753675110": "2026-06-30",
    "1549704670": "2026-06-30",
    "1899327370": "2026-06-30",
    "1518211396": "2026-06-30",
    "1994897329": "2026-06-30",
    "1898692821": "2026-06-30",
    "1921791214": "2026-06-30",
    "1587326742": "2026-06-30",
    "1523673681": "2026-06-30",
    "1950448393": "2026-06-30",
    "1516526258": "2026-06-30",
    "1799759444": "2026-06-30",
    "1796897277": "2026-06-30",
    "1575875231": "2026-06-30",
    "1853555229": "2026-06-30",
    "1940880092": "2026-06-30",
    "1829831678": "2026-06-30",
    "1785192055": "2026-06-30",
    "1366372598": "2026-06-30",
    "1895506544": "2026-06-30",
    "1519584622": "2026-06-30",
    "1914212140": "2026-06-30",
    "1563738184": "2026-06-30",
    "1751271330": "2026-06-30",
    "1599948669": "2026-06-30",
    "1774900442": "2026-06-30",
    "1534454571": "2026-06-30",
    "1924204170": "2026-06-30",
    "1586717229": "2026-06-30",
    "1783584799": "2026-06-30",
    "1346237430": "2026-06-30",
    "1889494573": "2026-06-30",
    "1910554228": "2026-06-30",
    "1554608293": "2026-06-30",
    "1898509768": "2026-06-30",
    "1336593837": "2026-06-30",
    "1374382715": "2026-06-30",
    "1543964587": "2026-06-30",
    "1780314646": "2026-06-30",
    "1891848918": "2026-06-30",
    "1937861999": "2026-06-30",
    "1369571296": "2026-06-30",
    "1956315321": "2026-06-30",
    "1738146150": "2026-06-30",
    "1872824263": "2026-06-30",
    "1757563459": "2026-06-30",
    "1781717192": "2026-06-30",
    "1856853229": "2026-06-30",
    "1390588991": "2026-06-30",
    "1764102588": "2026-06-30",
    "1719750515": "2026-06-30",
    "1331603986": "2026-06-30",
    "1768618019": "2026-06-30",
    "1532350493": "2026-06-30",
    "1970498170": "2026-06-30",
    "1850517657": "2026-06-30",
    "1969777016": "2026-06-30",
    "1559350337": "2026-06-30",
    "1385497823": "2026-06-30",
    "1894349273": "2026-06-30",
    "1561196031": "2026-06-30",
    "16866886688": "2026-06-30"
  },
  "referrals": {
    "1934729173": {
      "views": 183,
      "follows": 24,
      "registrations": 2,
      "orders": 6
    },
    "1768928287": {
      "views": 153,
      "follows": 7,
      "registrations": 13,
      "orders": 3
    },
    "1593992863": {
      "views": 147,
      "follows": 4,
      "registrations": 12,
      "orders": 1
    },
    "1368250194": {
      "views": 189,
      "follows": 30,
      "registrations": 2,
      "orders": 2
    },
    "1360608353": {
      "views": 90,
      "follows": 13,
      "registrations": 8,
      "orders": 1
    },
    "1947306891": {
      "views": 22,
      "follows": 28,
      "registrations": 3,
      "orders": 2
    },
    "1853402016": {
      "views": 184,
      "follows": 24,
      "registrations": 3,
      "orders": 8
    },
    "1724580865": {
      "views": 51,
      "follows": 18,
      "registrations": 0,
      "orders": 5
    },
    "1910631072": {
      "views": 197,
      "follows": 16,
      "registrations": 2,
      "orders": 8
    },
    "1583727439": {
      "views": 181,
      "follows": 21,
      "registrations": 11,
      "orders": 7
    },
    "1989143087": {
      "views": 131,
      "follows": 8,
      "registrations": 15,
      "orders": 6
    },
    "1887937924": {
      "views": 37,
      "follows": 8,
      "registrations": 6,
      "orders": 3
    },
    "1316985611": {
      "views": 85,
      "follows": 7,
      "registrations": 1,
      "orders": 8
    },
    "1591529130": {
      "views": 168,
      "follows": 3,
      "registrations": 13,
      "orders": 8
    },
    "1787533315": {
      "views": 28,
      "follows": 18,
      "registrations": 6,
      "orders": 8
    },
    "1726671818": {
      "views": 151,
      "follows": 10,
      "registrations": 3,
      "orders": 2
    },
    "1321969137": {
      "views": 185,
      "follows": 21,
      "registrations": 8,
      "orders": 8
    },
    "1719247988": {
      "views": 104,
      "follows": 19,
      "registrations": 4,
      "orders": 6
    },
    "1540384780": {
      "views": 101,
      "follows": 7,
      "registrations": 7,
      "orders": 1
    },
    "1865387826": {
      "views": 68,
      "follows": 8,
      "registrations": 0,
      "orders": 3
    },
    "1320896218": {
      "views": 157,
      "follows": 7,
      "registrations": 8,
      "orders": 0
    },
    "1738426228": {
      "views": 183,
      "follows": 24,
      "registrations": 5,
      "orders": 4
    },
    "1377848611": {
      "views": 140,
      "follows": 16,
      "registrations": 5,
      "orders": 1
    },
    "1996733346": {
      "views": 118,
      "follows": 8,
      "registrations": 5,
      "orders": 8
    },
    "1899584480": {
      "views": 153,
      "follows": 20,
      "registrations": 10,
      "orders": 7
    },
    "1719942340": {
      "views": 45,
      "follows": 5,
      "registrations": 7,
      "orders": 6
    },
    "1777922144": {
      "views": 159,
      "follows": 23,
      "registrations": 0,
      "orders": 6
    },
    "1322484678": {
      "views": 66,
      "follows": 9,
      "registrations": 13,
      "orders": 7
    },
    "1759786578": {
      "views": 107,
      "follows": 9,
      "registrations": 13,
      "orders": 4
    },
    "1893262272": {
      "views": 176,
      "follows": 2,
      "registrations": 0,
      "orders": 3
    },
    "1987964764": {
      "views": 165,
      "follows": 20,
      "registrations": 3,
      "orders": 2
    },
    "1787510213": {
      "views": 20,
      "follows": 12,
      "registrations": 13,
      "orders": 5
    },
    "1913745585": {
      "views": 125,
      "follows": 8,
      "registrations": 14,
      "orders": 6
    },
    "1869813685": {
      "views": 80,
      "follows": 18,
      "registrations": 0,
      "orders": 8
    },
    "1547472756": {
      "views": 33,
      "follows": 10,
      "registrations": 7,
      "orders": 6
    },
    "1387380378": {
      "views": 200,
      "follows": 18,
      "registrations": 5,
      "orders": 3
    },
    "1882720953": {
      "views": 23,
      "follows": 9,
      "registrations": 15,
      "orders": 1
    },
    "1899595193": {
      "views": 162,
      "follows": 26,
      "registrations": 7,
      "orders": 8
    },
    "1387913846": {
      "views": 189,
      "follows": 28,
      "registrations": 14,
      "orders": 1
    },
    "1854143663": {
      "views": 52,
      "follows": 26,
      "registrations": 9,
      "orders": 4
    },
    "1549277184": {
      "views": 16,
      "follows": 3,
      "registrations": 7,
      "orders": 0
    },
    "1990187829": {
      "views": 187,
      "follows": 16,
      "registrations": 9,
      "orders": 6
    },
    "1535854154": {
      "views": 10,
      "follows": 22,
      "registrations": 14,
      "orders": 6
    },
    "1585460810": {
      "views": 13,
      "follows": 18,
      "registrations": 13,
      "orders": 1
    },
    "1313505135": {
      "views": 72,
      "follows": 15,
      "registrations": 4,
      "orders": 6
    },
    "1763513320": {
      "views": 147,
      "follows": 16,
      "registrations": 11,
      "orders": 5
    },
    "1789614394": {
      "views": 35,
      "follows": 28,
      "registrations": 14,
      "orders": 1
    },
    "1566566867": {
      "views": 172,
      "follows": 23,
      "registrations": 3,
      "orders": 7
    },
    "1825352273": {
      "views": 166,
      "follows": 28,
      "registrations": 12,
      "orders": 3
    },
    "1568336959": {
      "views": 160,
      "follows": 10,
      "registrations": 13,
      "orders": 4
    },
    "1813737153": {
      "views": 165,
      "follows": 24,
      "registrations": 15,
      "orders": 4
    },
    "1973248916": {
      "views": 116,
      "follows": 6,
      "registrations": 6,
      "orders": 2
    },
    "1816571286": {
      "views": 111,
      "follows": 1,
      "registrations": 8,
      "orders": 8
    },
    "1579159057": {
      "views": 19,
      "follows": 10,
      "registrations": 15,
      "orders": 1
    },
    "1796324090": {
      "views": 135,
      "follows": 20,
      "registrations": 13,
      "orders": 4
    },
    "1745213745": {
      "views": 15,
      "follows": 2,
      "registrations": 10,
      "orders": 3
    },
    "1914845121": {
      "views": 101,
      "follows": 26,
      "registrations": 7,
      "orders": 5
    },
    "1745552681": {
      "views": 196,
      "follows": 26,
      "registrations": 9,
      "orders": 7
    },
    "1723483070": {
      "views": 30,
      "follows": 11,
      "registrations": 4,
      "orders": 1
    },
    "1886866877": {
      "views": 126,
      "follows": 13,
      "registrations": 13,
      "orders": 1
    },
    "1956129856": {
      "views": 100,
      "follows": 4,
      "registrations": 6,
      "orders": 2
    },
    "1766226946": {
      "views": 56,
      "follows": 28,
      "registrations": 4,
      "orders": 6
    },
    "1355444197": {
      "views": 31,
      "follows": 29,
      "registrations": 1,
      "orders": 2
    },
    "1816261217": {
      "views": 38,
      "follows": 10,
      "registrations": 15,
      "orders": 8
    },
    "1993966611": {
      "views": 181,
      "follows": 26,
      "registrations": 11,
      "orders": 1
    },
    "1963469776": {
      "views": 90,
      "follows": 19,
      "registrations": 13,
      "orders": 6
    },
    "1328469696": {
      "views": 172,
      "follows": 4,
      "registrations": 6,
      "orders": 5
    },
    "1994424164": {
      "views": 154,
      "follows": 25,
      "registrations": 14,
      "orders": 5
    },
    "1940359449": {
      "views": 139,
      "follows": 13,
      "registrations": 14,
      "orders": 8
    },
    "1789751293": {
      "views": 138,
      "follows": 5,
      "registrations": 1,
      "orders": 7
    },
    "1714479246": {
      "views": 171,
      "follows": 21,
      "registrations": 10,
      "orders": 1
    },
    "1853931844": {
      "views": 188,
      "follows": 22,
      "registrations": 12,
      "orders": 2
    },
    "1376982197": {
      "views": 175,
      "follows": 22,
      "registrations": 13,
      "orders": 8
    },
    "1363956550": {
      "views": 67,
      "follows": 5,
      "registrations": 4,
      "orders": 1
    },
    "1326550589": {
      "views": 187,
      "follows": 25,
      "registrations": 5,
      "orders": 7
    },
    "1753675110": {
      "views": 36,
      "follows": 23,
      "registrations": 3,
      "orders": 4
    },
    "1549704670": {
      "views": 70,
      "follows": 13,
      "registrations": 2,
      "orders": 5
    },
    "1899327370": {
      "views": 130,
      "follows": 23,
      "registrations": 4,
      "orders": 7
    },
    "1518211396": {
      "views": 165,
      "follows": 17,
      "registrations": 13,
      "orders": 1
    },
    "1994897329": {
      "views": 119,
      "follows": 1,
      "registrations": 11,
      "orders": 3
    },
    "1898692821": {
      "views": 98,
      "follows": 8,
      "registrations": 3,
      "orders": 5
    },
    "1921791214": {
      "views": 188,
      "follows": 16,
      "registrations": 5,
      "orders": 2
    },
    "1587326742": {
      "views": 57,
      "follows": 16,
      "registrations": 15,
      "orders": 5
    },
    "1523673681": {
      "views": 123,
      "follows": 12,
      "registrations": 14,
      "orders": 0
    },
    "1950448393": {
      "views": 183,
      "follows": 15,
      "registrations": 11,
      "orders": 5
    },
    "1516526258": {
      "views": 109,
      "follows": 30,
      "registrations": 3,
      "orders": 4
    },
    "1799759444": {
      "views": 184,
      "follows": 28,
      "registrations": 10,
      "orders": 5
    },
    "1796897277": {
      "views": 41,
      "follows": 7,
      "registrations": 4,
      "orders": 3
    },
    "1575875231": {
      "views": 125,
      "follows": 15,
      "registrations": 11,
      "orders": 2
    },
    "1853555229": {
      "views": 98,
      "follows": 17,
      "registrations": 9,
      "orders": 1
    },
    "1940880092": {
      "views": 194,
      "follows": 29,
      "registrations": 10,
      "orders": 0
    },
    "1829831678": {
      "views": 173,
      "follows": 1,
      "registrations": 15,
      "orders": 8
    },
    "1785192055": {
      "views": 98,
      "follows": 13,
      "registrations": 4,
      "orders": 5
    },
    "1366372598": {
      "views": 84,
      "follows": 13,
      "registrations": 13,
      "orders": 3
    },
    "1895506544": {
      "views": 65,
      "follows": 19,
      "registrations": 11,
      "orders": 0
    },
    "1519584622": {
      "views": 112,
      "follows": 2,
      "registrations": 6,
      "orders": 5
    },
    "1914212140": {
      "views": 112,
      "follows": 17,
      "registrations": 1,
      "orders": 0
    },
    "1563738184": {
      "views": 139,
      "follows": 27,
      "registrations": 15,
      "orders": 4
    },
    "1751271330": {
      "views": 116,
      "follows": 19,
      "registrations": 9,
      "orders": 0
    },
    "1599948669": {
      "views": 166,
      "follows": 30,
      "registrations": 15,
      "orders": 0
    },
    "1774900442": {
      "views": 187,
      "follows": 9,
      "registrations": 15,
      "orders": 3
    },
    "1534454571": {
      "views": 183,
      "follows": 18,
      "registrations": 12,
      "orders": 6
    },
    "1924204170": {
      "views": 145,
      "follows": 8,
      "registrations": 7,
      "orders": 0
    },
    "1586717229": {
      "views": 176,
      "follows": 19,
      "registrations": 7,
      "orders": 8
    },
    "1783584799": {
      "views": 136,
      "follows": 6,
      "registrations": 9,
      "orders": 0
    },
    "1346237430": {
      "views": 59,
      "follows": 6,
      "registrations": 12,
      "orders": 6
    },
    "1889494573": {
      "views": 76,
      "follows": 21,
      "registrations": 11,
      "orders": 3
    },
    "1910554228": {
      "views": 66,
      "follows": 8,
      "registrations": 4,
      "orders": 7
    },
    "1554608293": {
      "views": 43,
      "follows": 17,
      "registrations": 13,
      "orders": 7
    },
    "1898509768": {
      "views": 65,
      "follows": 19,
      "registrations": 2,
      "orders": 0
    },
    "1336593837": {
      "views": 55,
      "follows": 18,
      "registrations": 12,
      "orders": 8
    },
    "1374382715": {
      "views": 179,
      "follows": 14,
      "registrations": 0,
      "orders": 3
    },
    "1543964587": {
      "views": 72,
      "follows": 24,
      "registrations": 1,
      "orders": 6
    },
    "1780314646": {
      "views": 115,
      "follows": 10,
      "registrations": 8,
      "orders": 0
    },
    "1891848918": {
      "views": 67,
      "follows": 10,
      "registrations": 4,
      "orders": 7
    },
    "1937861999": {
      "views": 62,
      "follows": 11,
      "registrations": 2,
      "orders": 7
    },
    "1369571296": {
      "views": 64,
      "follows": 30,
      "registrations": 6,
      "orders": 1
    },
    "1956315321": {
      "views": 21,
      "follows": 19,
      "registrations": 7,
      "orders": 2
    },
    "1738146150": {
      "views": 148,
      "follows": 21,
      "registrations": 1,
      "orders": 8
    },
    "1872824263": {
      "views": 191,
      "follows": 5,
      "registrations": 0,
      "orders": 3
    },
    "1757563459": {
      "views": 74,
      "follows": 27,
      "registrations": 11,
      "orders": 4
    },
    "1781717192": {
      "views": 189,
      "follows": 6,
      "registrations": 2,
      "orders": 7
    },
    "1856853229": {
      "views": 111,
      "follows": 30,
      "registrations": 2,
      "orders": 4
    },
    "1390588991": {
      "views": 164,
      "follows": 25,
      "registrations": 12,
      "orders": 5
    },
    "1764102588": {
      "views": 31,
      "follows": 9,
      "registrations": 4,
      "orders": 6
    },
    "1719750515": {
      "views": 152,
      "follows": 18,
      "registrations": 13,
      "orders": 1
    },
    "1331603986": {
      "views": 153,
      "follows": 29,
      "registrations": 7,
      "orders": 8
    },
    "1768618019": {
      "views": 87,
      "follows": 1,
      "registrations": 12,
      "orders": 5
    },
    "1532350493": {
      "views": 110,
      "follows": 12,
      "registrations": 3,
      "orders": 3
    },
    "1970498170": {
      "views": 193,
      "follows": 14,
      "registrations": 12,
      "orders": 1
    },
    "1850517657": {
      "views": 158,
      "follows": 23,
      "registrations": 7,
      "orders": 7
    },
    "1969777016": {
      "views": 91,
      "follows": 3,
      "registrations": 9,
      "orders": 0
    },
    "1559350337": {
      "views": 54,
      "follows": 18,
      "registrations": 5,
      "orders": 5
    },
    "1385497823": {
      "views": 157,
      "follows": 4,
      "registrations": 5,
      "orders": 5
    },
    "1894349273": {
      "views": 86,
      "follows": 30,
      "registrations": 2,
      "orders": 2
    },
    "1561196031": {
      "views": 162,
      "follows": 5,
      "registrations": 12,
      "orders": 6
    },
    "16866886688": {
      "views": 28,
      "follows": 8,
      "registrations": 5,
      "orders": 3
    }
  },
  "users": {
    "1934729173": {
      "name": "刘志超",
      "wechatName": "",
      "registeredAt": "2026-06-08 22:00:00"
    },
    "1768928287": {
      "name": "孔启嘉",
      "wechatName": "",
      "registeredAt": "2026-06-06 13:00:00"
    },
    "1593992863": {
      "name": "刘国峰",
      "wechatName": "",
      "registeredAt": "2026-06-19 10:00:00"
    },
    "1368250194": {
      "name": "丁云智",
      "wechatName": "",
      "registeredAt": "2026-06-04 16:00:00"
    },
    "1360608353": {
      "name": "汪庆军",
      "wechatName": "",
      "registeredAt": "2026-06-13 05:00:00"
    },
    "1947306891": {
      "name": "谢阳强",
      "wechatName": "",
      "registeredAt": "2026-06-14 12:00:00"
    },
    "1853402016": {
      "name": "牛鹏军",
      "wechatName": "",
      "registeredAt": "2026-06-21 07:00:00"
    },
    "1724580865": {
      "name": "程龙强",
      "wechatName": "",
      "registeredAt": "2026-06-19 23:00:00"
    },
    "1910631072": {
      "name": "邱昌涛",
      "wechatName": "",
      "registeredAt": "2026-06-23 21:00:00"
    },
    "1583727439": {
      "name": "姚勇飞",
      "wechatName": "",
      "registeredAt": "2026-06-04 13:00:00"
    },
    "1989143087": {
      "name": "丁华盛",
      "wechatName": "",
      "registeredAt": "2026-06-04 06:00:00"
    },
    "1887937924": {
      "name": "蔡志军",
      "wechatName": "",
      "registeredAt": "2026-06-11 13:00:00"
    },
    "1316985611": {
      "name": "潘涛超",
      "wechatName": "",
      "registeredAt": "2026-06-24 12:00:00"
    },
    "1591529130": {
      "name": "黄国宁",
      "wechatName": "",
      "registeredAt": "2026-06-27 12:00:00"
    },
    "1787533315": {
      "name": "许盛飞",
      "wechatName": "",
      "registeredAt": "2026-06-07 10:00:00"
    },
    "1726671818": {
      "name": "李涛健",
      "wechatName": "",
      "registeredAt": "2026-06-30 18:00:00"
    },
    "1321969137": {
      "name": "宋尚辉",
      "wechatName": "",
      "registeredAt": "2026-06-29 08:00:00"
    },
    "1719247988": {
      "name": "邱建亮",
      "wechatName": "",
      "registeredAt": "2026-06-26 20:00:00"
    },
    "1540384780": {
      "name": "钱伟盛",
      "wechatName": "",
      "registeredAt": "2026-06-27 10:00:00"
    },
    "1865387826": {
      "name": "龚强盛",
      "wechatName": "",
      "registeredAt": "2026-06-03 01:00:00"
    },
    "1320896218": {
      "name": "张华志",
      "wechatName": "",
      "registeredAt": "2026-06-17 02:00:00"
    },
    "1738426228": {
      "name": "毛国锋",
      "wechatName": "",
      "registeredAt": "2026-06-11 06:00:00"
    },
    "1377848611": {
      "name": "陈强元",
      "wechatName": "",
      "registeredAt": "2026-06-28 13:00:00"
    },
    "1996733346": {
      "name": "傅宁飞",
      "wechatName": "",
      "registeredAt": "2026-06-09 02:00:00"
    },
    "1899584480": {
      "name": "郭凯亮",
      "wechatName": "",
      "registeredAt": "2026-06-04 09:00:00"
    },
    "1719942340": {
      "name": "吴哲宁",
      "wechatName": "",
      "registeredAt": "2026-06-18 00:00:00"
    },
    "1777922144": {
      "name": "于博昌",
      "wechatName": "",
      "registeredAt": "2026-06-14 02:00:00"
    },
    "1322484678": {
      "name": "傅华杰",
      "wechatName": "",
      "registeredAt": "2026-06-20 07:00:00"
    },
    "1759786578": {
      "name": "武明盛",
      "wechatName": "",
      "registeredAt": "2026-06-10 08:00:00"
    },
    "1893262272": {
      "name": "高锋晨",
      "wechatName": "",
      "registeredAt": "2026-06-24 22:00:00"
    },
    "1987964764": {
      "name": "崔盛强",
      "wechatName": "",
      "registeredAt": "2026-06-10 00:00:00"
    },
    "1787510213": {
      "name": "邱云博",
      "wechatName": "",
      "registeredAt": "2026-06-27 04:00:00"
    },
    "1913745585": {
      "name": "常瑞德",
      "wechatName": "",
      "registeredAt": "2026-06-17 06:00:00"
    },
    "1869813685": {
      "name": "汪安启",
      "wechatName": "",
      "registeredAt": "2026-06-27 04:00:00"
    },
    "1547472756": {
      "name": "潘凯哲",
      "wechatName": "",
      "registeredAt": "2026-06-16 01:00:00"
    },
    "1387380378": {
      "name": "杜平志",
      "wechatName": "",
      "registeredAt": "2026-06-17 11:00:00"
    },
    "1882720953": {
      "name": "彭博超",
      "wechatName": "",
      "registeredAt": "2026-06-25 15:00:00"
    },
    "1899595193": {
      "name": "刘盛嘉",
      "wechatName": "",
      "registeredAt": "2026-06-22 20:00:00"
    },
    "1387913846": {
      "name": "于明家",
      "wechatName": "",
      "registeredAt": "2026-06-02 11:00:00"
    },
    "1854143663": {
      "name": "彭飞元",
      "wechatName": "",
      "registeredAt": "2026-06-23 15:00:00"
    },
    "1549277184": {
      "name": "程宁志",
      "wechatName": "",
      "registeredAt": "2026-06-13 22:00:00"
    },
    "1990187829": {
      "name": "程尚阳",
      "wechatName": "",
      "registeredAt": "2026-06-06 20:00:00"
    },
    "1535854154": {
      "name": "郑智义",
      "wechatName": "",
      "registeredAt": "2026-06-30 13:00:00"
    },
    "1585460810": {
      "name": "郭天海",
      "wechatName": "",
      "registeredAt": "2026-06-04 18:00:00"
    },
    "1313505135": {
      "name": "廖明昌",
      "wechatName": "",
      "registeredAt": "2026-06-04 09:00:00"
    },
    "1763513320": {
      "name": "叶俊晨",
      "wechatName": "",
      "registeredAt": "2026-06-16 20:00:00"
    },
    "1789614394": {
      "name": "严健昌",
      "wechatName": "",
      "registeredAt": "2026-06-02 15:00:00"
    },
    "1566566867": {
      "name": "郑安义",
      "wechatName": "",
      "registeredAt": "2026-06-26 18:00:00"
    },
    "1825352273": {
      "name": "熊文嘉",
      "wechatName": "",
      "registeredAt": "2026-06-19 21:00:00"
    },
    "1568336959": {
      "name": "贺晨元",
      "wechatName": "",
      "registeredAt": "2026-06-26 09:00:00"
    },
    "1813737153": {
      "name": "施健良",
      "wechatName": "",
      "registeredAt": "2026-06-27 06:00:00"
    },
    "1973248916": {
      "name": "卢忠哲",
      "wechatName": "",
      "registeredAt": "2026-06-02 23:00:00"
    },
    "1816571286": {
      "name": "孟永哲",
      "wechatName": "",
      "registeredAt": "2026-06-29 17:00:00"
    },
    "1579159057": {
      "name": "钱飞嘉",
      "wechatName": "",
      "registeredAt": "2026-06-08 23:00:00"
    },
    "1796324090": {
      "name": "庄晖海",
      "wechatName": "",
      "registeredAt": "2026-06-17 23:00:00"
    },
    "1745213745": {
      "name": "余耀海",
      "wechatName": "",
      "registeredAt": "2026-06-02 00:00:00"
    },
    "1914845121": {
      "name": "吕辉义",
      "wechatName": "",
      "registeredAt": "2026-06-10 00:00:00"
    },
    "1745552681": {
      "name": "刘鹏龙",
      "wechatName": "",
      "registeredAt": "2026-06-08 23:00:00"
    },
    "1723483070": {
      "name": "丁瑞昌",
      "wechatName": "",
      "registeredAt": "2026-06-19 14:00:00"
    },
    "1886866877": {
      "name": "胡军宁",
      "wechatName": "",
      "registeredAt": "2026-06-24 07:00:00"
    },
    "1956129856": {
      "name": "吕耀杰",
      "wechatName": "",
      "registeredAt": "2026-06-22 15:00:00"
    },
    "1766226946": {
      "name": "蔡盛超",
      "wechatName": "",
      "registeredAt": "2026-06-18 22:00:00"
    },
    "1355444197": {
      "name": "薛龙辉",
      "wechatName": "",
      "registeredAt": "2026-06-10 03:00:00"
    },
    "1816261217": {
      "name": "傅德军",
      "wechatName": "",
      "registeredAt": "2026-06-13 21:00:00"
    },
    "1993966611": {
      "name": "曾毅锋",
      "wechatName": "",
      "registeredAt": "2026-06-08 14:00:00"
    },
    "1963469776": {
      "name": "罗晖铭",
      "wechatName": "",
      "registeredAt": "2026-06-07 00:00:00"
    },
    "1328469696": {
      "name": "梁浩阳",
      "wechatName": "",
      "registeredAt": "2026-06-08 12:00:00"
    },
    "1994424164": {
      "name": "康晨义",
      "wechatName": "",
      "registeredAt": "2026-06-16 22:00:00"
    },
    "1940359449": {
      "name": "戴朝义",
      "wechatName": "",
      "registeredAt": "2026-06-22 01:00:00"
    },
    "1789751293": {
      "name": "严军天",
      "wechatName": "",
      "registeredAt": "2026-06-27 10:00:00"
    },
    "1714479246": {
      "name": "吴平强",
      "wechatName": "",
      "registeredAt": "2026-06-03 04:00:00"
    },
    "1853931844": {
      "name": "唐正凯",
      "wechatName": "",
      "registeredAt": "2026-06-23 04:00:00"
    },
    "1376982197": {
      "name": "姜忠铭",
      "wechatName": "",
      "registeredAt": "2026-06-24 21:00:00"
    },
    "1363956550": {
      "name": "冯杰勇",
      "wechatName": "",
      "registeredAt": "2026-06-26 12:00:00"
    },
    "1326550589": {
      "name": "贺正宇",
      "wechatName": "",
      "registeredAt": "2026-06-10 01:00:00"
    },
    "1753675110": {
      "name": "毛家义",
      "wechatName": "",
      "registeredAt": "2026-06-17 00:00:00"
    },
    "1549704670": {
      "name": "贺鹏宇",
      "wechatName": "",
      "registeredAt": "2026-06-09 21:00:00"
    },
    "1899327370": {
      "name": "马家云",
      "wechatName": "",
      "registeredAt": "2026-06-24 08:00:00"
    },
    "1518211396": {
      "name": "姚亮瑞",
      "wechatName": "",
      "registeredAt": "2026-06-18 05:00:00"
    },
    "1994897329": {
      "name": "沈文安",
      "wechatName": "",
      "registeredAt": "2026-06-19 20:00:00"
    },
    "1898692821": {
      "name": "胡杰华",
      "wechatName": "",
      "registeredAt": "2026-06-01 06:00:00"
    },
    "1921791214": {
      "name": "孔华华",
      "wechatName": "",
      "registeredAt": "2026-06-03 14:00:00"
    },
    "1587326742": {
      "name": "龚晨庆",
      "wechatName": "",
      "registeredAt": "2026-06-28 06:00:00"
    },
    "1523673681": {
      "name": "余勇军",
      "wechatName": "",
      "registeredAt": "2026-06-28 05:00:00"
    },
    "1950448393": {
      "name": "萧耀明",
      "wechatName": "",
      "registeredAt": "2026-06-01 10:00:00"
    },
    "1516526258": {
      "name": "秦嘉华",
      "wechatName": "",
      "registeredAt": "2026-06-14 23:00:00"
    },
    "1799759444": {
      "name": "施耀铭",
      "wechatName": "",
      "registeredAt": "2026-06-24 12:00:00"
    },
    "1796897277": {
      "name": "彭俊盛",
      "wechatName": "",
      "registeredAt": "2026-06-22 23:00:00"
    },
    "1575875231": {
      "name": "袁俊浩",
      "wechatName": "",
      "registeredAt": "2026-06-17 23:00:00"
    },
    "1853555229": {
      "name": "邓飞哲",
      "wechatName": "",
      "registeredAt": "2026-06-12 02:00:00"
    },
    "1940880092": {
      "name": "李宏涛",
      "wechatName": "",
      "registeredAt": "2026-06-06 13:00:00"
    },
    "1829831678": {
      "name": "王晨启",
      "wechatName": "",
      "registeredAt": "2026-06-19 16:00:00"
    },
    "1785192055": {
      "name": "苏军宇",
      "wechatName": "",
      "registeredAt": "2026-06-04 14:00:00"
    },
    "1366372598": {
      "name": "郝瑞锋",
      "wechatName": "",
      "registeredAt": "2026-06-14 10:00:00"
    },
    "1895506544": {
      "name": "谢朝天",
      "wechatName": "",
      "registeredAt": "2026-06-08 14:00:00"
    },
    "1519584622": {
      "name": "余安峰",
      "wechatName": "",
      "registeredAt": "2026-06-21 03:00:00"
    },
    "1914212140": {
      "name": "徐庆飞",
      "wechatName": "",
      "registeredAt": "2026-06-22 09:00:00"
    },
    "1563738184": {
      "name": "周辉天",
      "wechatName": "",
      "registeredAt": "2026-06-28 22:00:00"
    },
    "1751271330": {
      "name": "宋启浩",
      "wechatName": "",
      "registeredAt": "2026-06-14 15:00:00"
    },
    "1599948669": {
      "name": "江天辉",
      "wechatName": "",
      "registeredAt": "2026-06-24 10:00:00"
    },
    "1774900442": {
      "name": "罗宇锋",
      "wechatName": "",
      "registeredAt": "2026-06-14 00:00:00"
    },
    "1534454571": {
      "name": "萧华启",
      "wechatName": "",
      "registeredAt": "2026-06-09 15:00:00"
    },
    "1924204170": {
      "name": "侯博华",
      "wechatName": "",
      "registeredAt": "2026-06-20 22:00:00"
    },
    "1586717229": {
      "name": "邱宁良",
      "wechatName": "",
      "registeredAt": "2026-06-10 16:00:00"
    },
    "1783584799": {
      "name": "董德安",
      "wechatName": "",
      "registeredAt": "2026-06-23 00:00:00"
    },
    "1346237430": {
      "name": "黄良阳",
      "wechatName": "",
      "registeredAt": "2026-06-09 11:00:00"
    },
    "1889494573": {
      "name": "曾宏天",
      "wechatName": "",
      "registeredAt": "2026-06-20 20:00:00"
    },
    "1910554228": {
      "name": "洪龙峰",
      "wechatName": "",
      "registeredAt": "2026-06-29 01:00:00"
    },
    "1554608293": {
      "name": "程凯家",
      "wechatName": "",
      "registeredAt": "2026-06-29 05:00:00"
    },
    "1898509768": {
      "name": "邹平国",
      "wechatName": "",
      "registeredAt": "2026-06-25 23:00:00"
    },
    "1336593837": {
      "name": "常阳明",
      "wechatName": "",
      "registeredAt": "2026-06-06 05:00:00"
    },
    "1374382715": {
      "name": "白斌元",
      "wechatName": "",
      "registeredAt": "2026-06-25 08:00:00"
    },
    "1543964587": {
      "name": "洪云庆",
      "wechatName": "",
      "registeredAt": "2026-06-03 11:00:00"
    },
    "1780314646": {
      "name": "唐宏志",
      "wechatName": "",
      "registeredAt": "2026-06-16 10:00:00"
    },
    "1891848918": {
      "name": "胡宁锋",
      "wechatName": "",
      "registeredAt": "2026-06-25 12:00:00"
    },
    "1937861999": {
      "name": "张盛辉",
      "wechatName": "",
      "registeredAt": "2026-06-28 18:00:00"
    },
    "1369571296": {
      "name": "薛军海",
      "wechatName": "",
      "registeredAt": "2026-06-17 08:00:00"
    },
    "1956315321": {
      "name": "马忠宁",
      "wechatName": "",
      "registeredAt": "2026-06-08 23:00:00"
    },
    "1738146150": {
      "name": "黄杰元",
      "wechatName": "",
      "registeredAt": "2026-06-07 03:00:00"
    },
    "1872824263": {
      "name": "罗平盛",
      "wechatName": "",
      "registeredAt": "2026-06-30 14:00:00"
    },
    "1757563459": {
      "name": "曾哲宇",
      "wechatName": "",
      "registeredAt": "2026-06-23 09:00:00"
    },
    "1781717192": {
      "name": "武嘉德",
      "wechatName": "",
      "registeredAt": "2026-06-15 05:00:00"
    },
    "1856853229": {
      "name": "邱良飞",
      "wechatName": "",
      "registeredAt": "2026-06-25 23:00:00"
    },
    "1390588991": {
      "name": "郑涛强",
      "wechatName": "",
      "registeredAt": "2026-06-17 06:00:00"
    },
    "1764102588": {
      "name": "胡家博",
      "wechatName": "",
      "registeredAt": "2026-06-04 18:00:00"
    },
    "1719750515": {
      "name": "沈云云",
      "wechatName": "",
      "registeredAt": "2026-06-06 23:00:00"
    },
    "1331603986": {
      "name": "胡云海",
      "wechatName": "",
      "registeredAt": "2026-06-28 07:00:00"
    },
    "1768618019": {
      "name": "蔡俊家",
      "wechatName": "",
      "registeredAt": "2026-06-23 01:00:00"
    },
    "1532350493": {
      "name": "蒋凯智",
      "wechatName": "",
      "registeredAt": "2026-06-24 12:00:00"
    },
    "1970498170": {
      "name": "潘嘉博",
      "wechatName": "",
      "registeredAt": "2026-06-11 05:00:00"
    },
    "1850517657": {
      "name": "魏耀晨",
      "wechatName": "",
      "registeredAt": "2026-06-19 17:00:00"
    },
    "1969777016": {
      "name": "苏浩龙",
      "wechatName": "",
      "registeredAt": "2026-06-13 04:00:00"
    },
    "1559350337": {
      "name": "冯宇飞",
      "wechatName": "",
      "registeredAt": "2026-06-25 04:00:00"
    },
    "1385497823": {
      "name": "刘义亮",
      "wechatName": "",
      "registeredAt": "2026-06-11 19:00:00"
    },
    "1894349273": {
      "name": "庄辉明",
      "wechatName": "",
      "registeredAt": "2026-06-12 18:00:00"
    },
    "1561196031": {
      "name": "孙义盛",
      "wechatName": "",
      "registeredAt": "2026-06-25 05:00:00"
    },
    "16866886688": {
      "name": "张大姐",
      "wechatName": "阿花🌸",
      "registeredAt": "2026-06-01T10:00:00"
    }
  },
  "categories": [
    "牛羊肉",
    "卤货",
    "鸭货",
    "面食",
    "凉菜"
  ]
}));
})();