### Mục đích: Tạo các API giúp đẩy nhanh quá trình build web ecommerce

I. PRODUCT

1.Lấy danh sách tất cả sản phẩm
- function: getAllProducts()
- Phương thức: GET
- Router: https://<your-website>.com/v1/products/allProduct/:category?
- ví dụ: https://cuongle.com/v1/products/category-sort/ao?sort=asc&limit=1&page=1&limitPage=20&sortBy=price
         Trong đó:<br/>
         + ao? : áo là danh mục (params)<br/>
         + sort=asc : sắp xếp tăng dần (query)<br/>
         + limit=1: là số lượng sản phẩm cần lấy<br/>
         + page=1: là trang hiện tại (query)<br/>
         + limitPage=20: là số sản phẩm mỗi trang (query)<br/>
         + sortBy=price: là sắp xếp theo giá<br/>
