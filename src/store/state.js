/*
State:状态对象
 */

/* 
说明：常规情况下定义以下数据为空即可，
      所有的数据通过发送ajax请求从后台获取，
      后台仅写了请求地址，未存储数据，
      为方便起见，直接给定数据。
*/
export default {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {
    address: "北京市昌平区337省道",
    city: "北京市",
    geohash: "40.10038,116.36867",
    latitude: "40.10038",
    longitude: "116.36867",
    name: "昌平区北七家宏福科技园(337省道北)"
  }, // 地址相关信息对象
  categorys: [
    {
      id: 1,
      is_in_serving: true,
      description: "0元早餐0起送，每天都有新花样。",
      title: "预订早餐",
      link: "",
      image_url: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
    {
      id: 65,
      is_in_serving: true,
      description: "",
      title: "土豪推荐",
      image_url: "",
      link: "",
      icon_url: "",
      title_color: "",
      __v: 0
    },
  ], // 食品分类数组
  shops: [
    {
      name: "肯德基",
      address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
      id: 1,
      latitude: 31.38098,
      longitude: 121.50146,
      location: [
        121.50146,
        31.38098
      ],
      phone: "1232313124324",
      category: "快餐便当/简餐",
      supports: [
        {
          description: "已加入“外卖保”计划，食品安全有保障",
          icon_color: "999999",
          icon_name: "保",
          id: 7,
          name: "外卖保",
          _id: "591bec73c2bbc84a6328a1e5"
        }
      ],
      status: 0,
      recent_order_num: 615,
      rating_count: 389,
      rating: 3.6,
      promotion_info: "他依然有人有人有人有人有人",
      piecewise_agent_fee: {
        tips: "配送费约¥5"
      },
      opening_hours: [
        "8:30/20:30"
      ],
      license: {
        catering_service_license_image: "",
        business_license_image: ""
      },
      is_new: true,
      is_premium: true,
      image_path: "",
      identification: {
        registered_number: "",
        registered_address: "",
        operation_period: "",
        licenses_scope: "",
        licenses_number: "",
        licenses_date: "",
        legal_person: "",
        identificate_date: null,
        identificate_agency: "",
        company_name: ""
      },
      float_minimum_order_amount: 20,
      float_delivery_fee: 5,
      distance: "19.5公里",
      order_lead_time: "40分钟",
      description: "好吃的",
      delivery_mode: {
        color: "57A9FF",
        id: 1,
        is_solid: true,
        text: "蜂鸟专送"
      },
      activities: [
        {
          icon_name: "减",
          name: "满减优惠",
          description: "满30减5，满60减8",
          icon_color: "f07373",
          id: 1,
          _id: "591bec73c2bbc84a6328a1e7"
        }
      ],
    },
    {
      name: "肯德基",
      address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
      id: 1,
      latitude: 31.38098,
      longitude: 121.50146,
      location: [
        121.50146,
        31.38098
      ],
      phone: "1232313124324",
      category: "快餐便当/简餐",
      supports: [
        {
          description: "已加入“外卖保”计划，食品安全有保障",
          icon_color: "999999",
          icon_name: "准",
          id: 7,
          name: "外卖保",
          _id: "591bec73c2bbc84a6328a1e5"
        }
      ],
      status: 0,
      recent_order_num: 615,
      rating_count: 389,
      rating: 1.6,
      promotion_info: "他依然有人有人有人有人有人",
      piecewise_agent_fee: {
        tips: "配送费约¥5"
      },
      opening_hours: [
        "8:30/20:30"
      ],
      license: {
        catering_service_license_image: "",
        business_license_image: ""
      },
      is_new: true,
      is_premium: true,
      image_path: "",
      identification: {
        registered_number: "",
        registered_address: "",
        operation_period: "",
        licenses_scope: "",
        licenses_number: "",
        licenses_date: "",
        legal_person: "",
        identificate_date: null,
        identificate_agency: "",
        company_name: ""
      },
      float_minimum_order_amount: 20,
      float_delivery_fee: 5,
      distance: "19.5公里",
      order_lead_time: "40分钟",
      description: "好吃的",
      delivery_mode: {
        color: "57A9FF",
        id: 1,
        is_solid: true,
        text: "蜂鸟专送"
      },
      activities: [
        {
          icon_name: "减",
          name: "满减优惠",
          description: "满30减5，满60减8",
          icon_color: "f07373",
          id: 1,
          _id: "591bec73c2bbc84a6328a1e7"
        }
      ],
    },
    {
      name: "肯德基",
      address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
      id: 1,
      latitude: 31.38098,
      longitude: 121.50146,
      location: [
        121.50146,
        31.38098
      ],
      phone: "1232313124324",
      category: "快餐便当/简餐",
      supports: [
        {
          description: "已加入“外卖保”计划，食品安全有保障",
          icon_color: "999999",
          icon_name: "保",
          id: 7,
          name: "外卖保",
          _id: "591bec73c2bbc84a6328a1e5"
        }
      ],
      status: 0,
      recent_order_num: 615,
      rating_count: 389,
      rating: 1.6,
      promotion_info: "他依然有人有人有人有人有人",
      piecewise_agent_fee: {
        tips: "配送费约¥5"
      },
      opening_hours: [
        "8:30/20:30"
      ],
      license: {
        catering_service_license_image: "",
        business_license_image: ""
      },
      is_new: true,
      is_premium: true,
      image_path: "",
      identification: {
        registered_number: "",
        registered_address: "",
        operation_period: "",
        licenses_scope: "",
        licenses_number: "",
        licenses_date: "",
        legal_person: "",
        identificate_date: null,
        identificate_agency: "",
        company_name: ""
      },
      float_minimum_order_amount: 20,
      float_delivery_fee: 5,
      distance: "19.5公里",
      order_lead_time: "40分钟",
      description: "好吃的",
      delivery_mode: {
        color: "57A9FF",
        id: 1,
        is_solid: true,
        text: "蜂鸟专送"
      },
      activities: [
        {
          icon_name: "减",
          name: "满减优惠",
          description: "满30减5，满60减8",
          icon_color: "f07373",
          id: 1,
          _id: "591bec73c2bbc84a6328a1e7"
        }
      ],
    },
    {
      name: "肯德基",
      address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
      id: 1,
      latitude: 31.38098,
      longitude: 121.50146,
      location: [
        121.50146,
        31.38098
      ],
      phone: "1232313124324",
      category: "快餐便当/简餐",
      supports: [
        {
          description: "已加入“外卖保”计划，食品安全有保障",
          icon_color: "999999",
          icon_name: "保",
          id: 7,
          name: "外卖保",
          _id: "591bec73c2bbc84a6328a1e5"
        }
      ],
      status: 0,
      recent_order_num: 615,
      rating_count: 389,
      rating: 1.6,
      promotion_info: "他依然有人有人有人有人有人",
      piecewise_agent_fee: {
        tips: "配送费约¥5"
      },
      opening_hours: [
        "8:30/20:30"
      ],
      license: {
        catering_service_license_image: "",
        business_license_image: ""
      },
      is_new: true,
      is_premium: true,
      image_path: "",
      identification: {
        registered_number: "",
        registered_address: "",
        operation_period: "",
        licenses_scope: "",
        licenses_number: "",
        licenses_date: "",
        legal_person: "",
        identificate_date: null,
        identificate_agency: "",
        company_name: ""
      },
      float_minimum_order_amount: 20,
      float_delivery_fee: 5,
      distance: "19.5公里",
      order_lead_time: "40分钟",
      description: "好吃的",
      delivery_mode: {
        color: "57A9FF",
        id: 1,
        is_solid: true,
        text: "蜂鸟专送"
      },
      activities: [
        {
          icon_name: "减",
          name: "满减优惠",
          description: "满30减5，满60减8",
          icon_color: "f07373",
          id: 1,
          _id: "591bec73c2bbc84a6328a1e7"
        }
      ],
    }
  ], // 商家数组
  userInfo: {}, // 用户信息
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
  cartFoods: [], // 购物车中食物的列表
  searchShops: [], // 搜索得到的商家列表
  userInfo: [], //用户信息
}
