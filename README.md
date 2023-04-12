<h2> MỤC ĐÍCH: TAO CÁC API GIÚP ĐẨY NHANH QUÁ TRÌNH BUILD WEBSITE ECOMMERCE</h2><br/>

<h3>I. CẤU HÌNH<h3>
   <h4>Bước 1: git clone https://github.com/CuongLe68/ecommerce.git</h4>
   <h4>Bước 2: Vào thư mục dự án, mở command lên nhập lệnh "npm install" để dowload các thư viện về</h4>
   <h4>Bước 3: Ở command nhập lệnh "npm start" để chạy server</h4>
<h3>II. DANH SÁCH API VÀ CÁCH SỬ DỤNG<h3>
<h4>1. PRODUCT<h4>

<h5>A. Lấy danh sách tất cả sản phẩm</h5>
- function: getAllProducts()<br/>
- Phương thức: GET<br/>
- Router: /v1/products/allProduct/:category?<br/>
- ví dụ: https://cuongle.com/v1/products/category-sort/category=ao?sort=asc&limit=1&page=1&limitPage=20&sortBy=price<br/>
- Trong đó:<br/>
   + category=ao : áo là danh mục (params)<br/>
   + sort=asc : sắp xếp tăng dần (query)<br/>
   + limit=1: là số lượng sản phẩm cần lấy(query)<br/>
   + page=1: là trang hiện tại (query)<br/>
   + limitPage=20: là số sản phẩm mỗi trang (query)<br/>
   + sortBy=price: là sắp xếp theo price(query)<br/>
         
<h5>B. Lấy thông tin chi tiết sản phẩm theo id</h5>
- function: getProductById()<br/>
- Phương thức: GET<br/>
- Router: /v1/products/getProduct/:id<br/>
- ví dụ: https://cuongle.com/v1/products/category-sort/6420572d3eb471449502a9cc<br/>
- Trong đó:<br/>
  + 6420572d3eb471449502a9cc : là id của sản phẩm có key là id (params)<br/>
