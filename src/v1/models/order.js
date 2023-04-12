const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);


/*
  ###DOCS

    - user: Đối tượng user tạo ra đơn hàng (ObjectId)
        + type: mongoose.Schema.Types.ObjectId cho biết kiểu dữ liệu của trường là ObjectId. ObjectId là một kiểu dữ liệu đặc biệt của MongoDB, 
        được sử dụng để lưu trữ định danh duy nhất của một bản ghi trong cơ sở dữ liệu MongoDB.
        + required: true cho biết trường user là bắt buộc phải có khi tạo đơn hàng mới.
        + ref: "User" cho biết collection mà đối tượng user thuộc về. Trong trường hợp này, collection User trong cơ sở dữ liệu MongoDB. Khi tạo các 
        truy vấn liên quan đến đối tượng user, ta có thể sử dụng phương thức populate() của Mongoose để lấy thông tin đầy đủ của user từ collection
        User
    - orderItems: Danh sách các sản phẩm được đặt hàng (Array)
        + name: Tên sản phẩm được đặt hàng (kiểu String, bắt buộc)
        + quantity: Số lượng sản phẩm được đặt hàng (kiểu Number, bắt buộc)
        + image: Đường dẫn đến hình ảnh của sản phẩm được đặt hàng (kiểu String, bắt buộc)
        + price: Giá của mỗi sản phẩm được đặt hàng (kiểu Number, bắt buộc)
        + product: ObjectId của sản phẩm được đặt hàng trong collection Product (kiểu ObjectId, bắt buộc). Trường ref được sử dụng để liên kết với 
        collection Product.
    - shippingAddress: Thông tin vận chuyển (Object)       
        + address: địa chỉ giao hàng, có kiểu dữ liệu là String và bắt buộc phải có.
        + city: thành phố nơi giao hàng, có kiểu dữ liệu là String và bắt buộc phải có.
        + postalCode: mã bưu điện, có kiểu dữ liệu là String và bắt buộc phải có.
        + country: quốc gia nơi giao hàng, có kiểu dữ liệu là String và bắt buộc phải có. 
    - paymentMethod: Phương thức thanh toán (String) và có thể chứa các giá trị như "Paypal", "Credit Card", "Cash on delivery", "Bank transfer"
    - paymentResult: Kết quả thanh toán (Object)
        + id: mã định danh thanh toán của hệ thống thanh toán bên thứ ba (ví dụ: PayPal)
        + status: trạng thái thanh toán của đơn hàng (ví dụ: COMPLETED, PENDING, ...)
        + update_time: thời gian cập nhật trạng thái thanh toán gần nhất
        + email_address: địa chỉ email được liên kết với tài khoản thanh toán (ví dụ: PayPal) được sử dụng để thanh toán đơn hàng.
    - itemsPrice: Tổng giá trị các sản phẩm được đặt hàng (Number)
    - taxPrice: Thuế (Number)
    - shippingPrice: Phí vận chuyển (Number)
    - totalPrice: Tổng giá trị của đơn hàng (Number)
    - isPaid: Trạng thái thanh toán (Boolean)
    - paidAt: Thời gian thanh toán (Date)
    - isDelivered: Trạng thái vận chuyển (Boolean)
    - deliveredAt: Thời gian vận chuyển (Date)
    - timestamps: thuộc tính này cho phép tự động tạo ra các trường createdAt và updatedAt để lưu trữ thời gian tạo và cập nhật đối tượng.
*/