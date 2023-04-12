<h2> Mục đích: Tạo các API giúp đẩy nhanh quá trình build web ecommerce</h2><br/>

<h3>I. PRODUCT<h3>

<h4>1. Lấy danh sách tất cả sản phẩm</h4>
- function: getAllProducts()<br/>
- Phương thức: GET<br/>
- Router: https://your-website.com/v1/products/allProduct/:category?<br/>
- ví dụ: https://cuongle.com/v1/products/category-sort/category=ao?sort=asc&limit=1&page=1&limitPage=20&sortBy=price<br/>
         Trong đó:<br/>
         + category=ao : áo là danh mục (params)<br/>
         + sort=asc : sắp xếp tăng dần (query)<br/>
         + limit=1: là số lượng sản phẩm cần lấy(query)<br/>
         + page=1: là trang hiện tại (query)<br/>
         + limitPage=20: là số sản phẩm mỗi trang (query)<br/>
         + sortBy=price: là sắp xếp theo giá(query)<br/>
         
<h4>2. Lấy thông tin chi tiết sản phẩm theo id</h4>
- function: getProductById()<br/>
- Phương thức: GET<br/>
- Router: https://your-website.com/v1/products/getProduct/:id<br/>
- ví dụ: https://cuongle.com/v1/products/category-sort/6420572d3eb471449502a9cc<br/>
         Trong đó:<br/>
         + 6420572d3eb471449502a9cc : là id của sản phẩm có key là id (params)<br/>
