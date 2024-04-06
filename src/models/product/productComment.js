const mongoose = require("mongoose");

const productCommentSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    userAvatar: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      require: false,
    },
    edit: {
      type: Boolean,
      default: false,
      required: true,
    },
    hidden: {
      type: Boolean,
      default: false,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductComment", productCommentSchema);

/*
  ### DOCS 
  
  - productId:  id của sản phẩm chứa bình luận này (1-n : product-msg)
  - userId:  id của người dùng bình luận (1-n : user-msg)
  - userName: tên người bình luận
  - userAvatar: avt người bình luận
  - rating:  đánh giá, bắt buộc khi comment
  - comment: nội dung bình luận, không bắt buộc khi comment
  - edit: trạng thái chỉnh sửa bình luận hoặc đánh giá (đã chỉnh sửa hoặc chưa chỉnh sửa)
  - time: thời gian bình luận cuối cùng
  - hidden: ẩn comment
*/
