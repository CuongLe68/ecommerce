const productControllers = require("../controllers/productController");
const router = require("express").Router();

//PRODUCT
router.get("/allProduct/:category?", productControllers.getAllProducts); // Lấy danh sách tất cả sản phẩm
router.get("/getProduct/:id", productControllers.getProductById); // Lấy thông tin chi tiết sản phẩm theo id
router.get("/category/:category?", productControllers.getProductsLimitCategory); //lấy danh sách sản phẩm theo số lượng, danh mục
router.get("/category-sort/:category?",productControllers.sortProductsByCategory); //Sắp xếp tăng hoặc giảm sản phẩm theo danh mục dựa theo giá
router.post("/createProducts", productControllers.createProduct); // Thêm sản phẩm mới
router.put("/update/:id", productControllers.updateProduct); //Cập nhật thông tin MỘT sản phẩm
router.put("/manyUpdate", productControllers.updateManyProduct); //Cập nhật thông tin NHIỀU sản phẩm
router.delete("/delete/:id", productControllers.deleteProduct); //Xóa sản phẩm
router.delete("/manyDelete", productControllers.deleteManyProduct); //Xóa NHIỀU sản phẩm

//COMMENT
router.post("/comment", productControllers.createComment); //Tạo bình luận mới
router.get("/get-comment/product/:productId?",productControllers.getCommentbyIdProduct); //Lấy danh sách bình luận theo sản phẩm
router.get("/get-comment/user/:userId?", productControllers.getCommentbyIdUser); //Lấy danh sách bình luận theo người dùng
router.put("/update-comment/:id", productControllers.updateComment); //Cập nhật thông tin MỘT bình luận
router.delete("/delete-comment/:id", productControllers.deleteComment); //xóa 1 comment
router.delete("/delete-many-comment/product/:productId",productControllers.deleteManyCommentbyProduct); //Xóa tất cả comment theo id sản phẩm
router.delete("/delete-many-comment/user/:userId",productControllers.deleteManyCommentbyUser); //Xóa tất cả comment theo id người dùng

//CATEGORY
router.post("/create-category", productControllers.createCategoryProduct); // Tạo mới category
router.get("/get-category-all/:category?", productControllers.getAllCategoriesProduct); // Lấy tất cả category
router.get("/get-category-id/:id", productControllers.getCategoryProductById); // Lấy category theo ID
router.put("/update-category/:id", productControllers.updateCategoryProduct); // Cập nhật category theo ID
router.delete("/delete-category/:id", productControllers.deleteCategoryProduct); // Xóa category theo ID
router.delete("/delete-many-category",productControllers.deleteManyCategoryProduct); //Xóa NHIỀU category

module.exports = router;
