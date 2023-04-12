/* Trong ứng dụng Node.js, middleware là một hàm được sử dụng để thực hiện các tác vụ trung gian trên các yêu cầu HTTP trước khi chúng 
được xử lý bởi các hàm xử lý chính. Ví dụ, các middleware có thể được sử dụng để xác thực người dùng, kiểm tra các tham số yêu cầu,
thực hiện logging, ghi nhật ký và nhiều tác vụ khác.

Trong file middlewareController.js, chúng ta định nghĩa một số middleware như checkAuth và checkAdmin để kiểm tra xem người dùng có 
quyền truy cập vào các tài nguyên cần thiết hay không. ví dụ: */

// Middleware để kiểm tra xác thực người dùng
const checkAuth = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.userData = { userId: decodedToken.userId };
      next();
    } catch (error) {
      res.status(401).json({ message: 'Bạn không có quyền truy cập' });
    }
  };
  
  // Middleware để kiểm tra quyền admin
  const checkAdmin = (req, res, next) => {
    if (req.userData && req.userData.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Bạn không có quyền truy cập' });
    }
  };
  
  // Xuất các middleware để sử dụng ở các module khác
  module.exports = {
    checkAuth,
    checkAdmin
  };
  
/*Ở đây, middleware checkAuth được sử dụng để kiểm tra xác thực người dùng bằng cách xác định xem mã thông báo xác thực có tồn tại và 
  hợp lệ không. Nếu thành công, middleware này sẽ gán một đối tượng userData cho yêu cầu và chuyển tiếp nó đến middleware hoặc hàm xử 
  lý chính tiếp theo. Nếu không, nó sẽ trả về một thông báo lỗi 401.

  Middleware checkAdmin được sử dụng để kiểm tra quyền quản trị viên của người dùng. Nếu userData chứa thông tin quản trị viên,
   middleware này sẽ chuyển tiếp yêu cầu đến middleware hoặc hàm xử lý chính tiếp theo. Nếu không, nó sẽ trả về một thông báo lỗi 403. 
*/ 