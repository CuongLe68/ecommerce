const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 150,
    },
    image: {
      type: Array,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 1 && v.length <= 8; // giới hạn số lượng phần tử trong mảng từ 1 đến 8
        },
      },
    },
    color: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    brand: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    category: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 1000000000,
    },
    numView: {
      type: Number,
      required: true,
      min: 0,
      max: 10000000000,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 1000000000,
    },
    percent: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    wareHouse: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 150,
    },
    fromAddress: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 150,
    },
    origin: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 150,
    },
    companyAddress: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 150,
    },
    description: {
      type: Object,
      infoPoduct: {
        type: Array,
        required: true,
        validate: {
          validator: function (v) {
            return v.length >= 0 && v.length <= 15;
          },
        },
      },
      commitShop: {
        type: Array,
        required: true,
        validate: {
          validator: function (v) {
            return v.length >= 0 && v.length <= 15;
          },
        },
      },
      hashtags: {
        type: Array,
        required: true,
        validate: {
          validator: function (v) {
            return v.length >= 0 && v.length <= 15;
          },
        },
      },
      required: true,
    },
    detail: {
      type: Array,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 1 && v.length <= 25;
        },
      },
    },
    countInSold: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 50000,
    },
    countPromotional: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 50000,
    },
    countInStock: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 50000,
    },
    countInStockTemp: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 50000,
    },
    hidden: {
      status: {
        type: Boolean,
        default: false,
        required: true,
      },
      time: {
        timeStart: Date,
        timeEnd: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

/* VD1: ví dụ 1 sản phẩm áo
  //Dùng chung
  name: "Áo dài tay"
  brand: "gucci" //Thương hiệu sản phẩm
  category: "Áo", (tương tự cho các danh mục quần,laptop,dien thoai,do gia dung, do choi,...)
  image: ["http://database/imgs/ao-dai-tay-1",
          "http://database/imgs/ao-dai-tay-2",
          "http://database/imgs/ao-dai-tay-3"
        ],
  color: "vàng",
  price: 100000,
  discount: 90000,
  percent: 10,
  numView: 100,
  countInStockTemp: 100, //Số lượng sản phẩm đã bán
  countInStock: 4900 //Số lượng sản phẩm thực tế còn lại
  countInSold: 4800, //Số lượng sản phẩm tạm thời còn lại
  countPromotional: 100, // Số lượng khuyến mãi còn lại
  wareHouse: "Đà Nẵng", //Kho hàng
  fromAddress: "Hà nội", //Gửi từ
  origin: "Việt Nam", //Xuất xứ
  companyAddress: "KDC Cityland , P10, Gò Vấp",

  description: {
    infoPoduct: [ //THÔNG TIN SẢN PHẨM: 
      "Chất thun poly 2 da cao cấp",
      "Đường chỉ may chi tiết và chắc chắn",
      "Logo thêu cực đẹp",
      "Chất vải không xù lông hay ra màu",
      "Kiểu dáng formfit mặc cực đẹp",
    ],
    commitShop: [ //CAM KẾT CỦA SHOP
      "Giá rẻ nhất thị trường",
      "Hình sao hàng vậy",
      "Bao đổi trả nếu không hài lòng về sản phẩm",
    ],
    hashtags: [
      "aokhoacthethao",
      "aokhoacnam",
      "aokhoacthun",
      "bothethao",
      "aokhoac",
      "aothunnam",
      "aokhoac3soc",
      "aokhoachanghieu",
      "aokhoacdep",
    ]
  },

  hidden: {
    status: false
    time: {
      timeStart: "Wed Apr 12 2023 10:07:58 GMT+0700 (Giờ Đông Dương)",
      timeEnd: "Wed Apr 15 2023 10:07:58 GMT+0700 (Giờ Đông Dương),"
    },
  }

  //Các thuộc tính đặc biệt cho từng danh mục sản phẩm
  detail: [ // ví dụ cho áo, giới hạn 15 object và phải theo không {key: value}
    {"Phong cách": "trẻ"},
    {"Chiều dài tay áo": "25cm"},
    {"Mẫu": "không"},
    {"Chất liệu": "len"},
    {"Kiểu nút": "dây kéo"},
    {"Thông tin Size": [
        "M dười 63kg",
        "L từ 64 - 67kg",
        "XL từ 68 - 73kg",
        "XXL từ 74- 80kg",
        "XXXL trên 80kg"
      ]
    },
  ], 

  VD2: ví dụ 1 sản phẩm Laptop
  //Dùng chung
  name: "Máy tính bảng HP mới 10.8inch Lewee Tab P11 HD nguyên bản toàn màn hình Máy tính bảng Android học COD"
  brand: "HP" //Thương hiệu sản phẩm
  category: "laptop", (tương tự cho các danh mục quần,laptop,dien thoai,do gia dung, do choi,...)
  image: "http://database/imgs/ao-dai-tay-1",
  color: "bạch kim",
  price: 1500000,
  discount: 1350000,
  percent: 10,
  numView: 100, //Số lượng đã xem
  countInStockTemp: 100, //Số lượng sản phẩm đã bán
  countInStock: 4900 //Số lượng sản phẩm thực tế còn lại
  countInSold: 4800, //Số lượng sản phẩm tạm thời còn lại
  countPromotional: 100, // Số lượng khuyến mãi còn lại
  wareHouse: "Đà Nẵng", //Kho hàng
  fromAddress: "Hà nội", //Gửi từ
  origin: "Việt Nam", //Xuất xứ
  companyAddress: "KDC Cityland , P10, Gò Vấp",

  description: {
    infoPoduct: [ //THÔNG TIN SẢN PHẨM: 
      "Chào mừng bạn đến với cửa hàng của chúng tôi",
      "Lưu ý: Tất cả các sản phẩm trong cửa hàng này có thể được kiểm tra trước khi thanh toán",
    ],
    commitShop: [ //CAM KẾT CỦA SHOP
      "Giá rẻ nhất thị trường",
      "Hình sao hàng vậy",
      "Bao đổi trả nếu không hài lòng về sản phẩm",
    ],
    hashtags: [
      "laptop",
      "hp",
    ]
  },

  hidden: {
    status: false
    time: {
      timeStart: Wed Apr 12 2023 10:07:58 GMT+0700 (Giờ Đông Dương),
      timeEnd: Wed Apr 15 2023 10:07:58 GMT+0700 (Giờ Đông Dương),
    },
  }

  //Các thuộc tính đặc biệt cho từng danh mục sản phẩm
  //click vào danh mục -> trả về đúng detail của danh mục đang chọn -> show các thông tin ra -> người dùng nhập thông tin vào các form -> 
  khi click vào thêm mới -> lấy thông tin sản phẩm + detail của danh mục gửi lên server -> lưu vào db
  detail: [ // ví dụ cho áo, giới hạn 15 object và phải theo không {key: value}
    {"Loại sản phẩm": "Máy tính bảng"},
    {"Hệ điều hành": "hệ thống Android mạnh nhất"},
    {"Chất liệu vỏ": "kim loại+nhựa"},
    {"Bộ vi xử lý": "MTK6797"},
    {"Card đồ họa": "Mali-400"},
    {"Bộ nhớ chạy (RAM)": "12GB"},
    {"Chế độ mạng": "4G/5G/WiFi"},
    {"Độ phân giải màn hình": "1960x1080"},
  ],  
*/

/*
  ### DOCS

  Trong đoạn mã trên, chúng ta đã định nghĩa một schema Mongoose cho đối tượng Product, bao gồm các trường sau:

  - name: Tên sản phẩm (String). (1-150 ký tự)
  - image: Đường dẫn tới hình ảnh sản phẩm (1-8 phần tử)
  - color: màu sản phẩm (1-50 ký tự)
  - brand: Thương hiệu sản phẩm (String). (1-100 ký tự)
  - category: Danh mục sản phẩm (String). (1-50 ký tự)
  - price: Giá sản phẩm (Number). (0 - 1.000.000.000đ)
  - discount: số tiền còn lại sau khi giảm (0 - 1.000.000.000đ)
  - percent : phần trăm giảm (0 - 100)
  - numView: số lượt xem sản phẩm khi người dùng click chọn sản phẩm thì tăng lên 1 (0 - 10.000.000.000)
  - wareHouse: Địa chỉ kho hàng (1-150 ký tự)
  - fromAddress: Gửi từ (1-150 ký tự)
  - origin: Xuất xứ (1-150 ký tự)
  - companyAddress: Địa chỉ tổ chức chức chịu trách nhiệm sản xuất (1-150 ký tự)
  - description: Mô tả sản phẩm (String).
  - infoPoduct: thông tin sản phẩm (1 - 15 phần tử)
  - commitShop: cam kết của shop (1 - 15 phần tử)
  - hashtags: hashtags (vd: #Ao,#laptop) (1 - 15 phần tử)
  - countInStock: Số lượng Thực tế sản phẩm còn lại trong kho (Number). (0 - 50.000)
  - countInStockTemp: Số lượng tạm thời sản phẩm còn lại trong kho: khi người dùng thêm vào giỏ hàng mà chưa thanh toán,số lượng sản phẩm tạm
    thời còn trong kho sẽ giảm,sau 15p mà người dùng chưa thanh toán thì khôi phục lại với giá trị ban đầu là countInStock (0 - 50.000)
  - countInSold: Số lượng sản phẩm đã bán (Number). (0 - 50.000)
  - countPromotional: Số lượng sản phẩm khuyến mãi (Number). (0 - 50.000)
  - detail: Chi tiết của sản phẩm (1 - 25 phần tử)
  - hidden: Ẩn sản phẩm đi (cho chức năng chuyển vào thùng rác,..)
  - status: trạng thái ẩn hoặc hiện sản phẩm
  - time: thời gian bắt đầu và kết thúc ẩn

  Để thuận tiện cho việc quản lý, chúng ta cũng sử dụng thuộc tính timestamps của Mongoose để tự động thêm các trường createdAt và updatedAt cho 
  mỗi bản ghi trong cơ sở dữ liệu.

  Cuối cùng, chúng ta đã tạo một model Product bằng cách sử dụng schema đã định nghĩa và export model để có thể sử dụng trong các tệp khác của 
  ứng dụng.
*/
