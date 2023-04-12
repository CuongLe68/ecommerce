const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  content: {
    type: Array,
    required: true,
    validate: {
      validator: function (v) {
        return v.length >= 1 && v.length <= 25; // giới hạn số lượng phần tử trong mảng từ 1 đến 25
      },
    },
  },
});

module.exports = mongoose.model("Category", categorySchema);

/*
  ###DOCS

    - name: Tên danh mục (key với product)
    - content: chứa các thuộc tính và chi tiết sản phẩm

    Trong đó, ta định nghĩa schema cho model Category bao gồm các trường như name, description, và image. Mỗi trường được định nghĩa với kiểu dữ 
    liệu và các thuộc tính như required để đảm bảo tính toàn vẹn dữ liệu. Cuối cùng, ta dùng mongoose.model để tạo model và xuất nó ra ngoài module.

*/
