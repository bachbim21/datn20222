export const log = {
  success: {
    common: "Thành công",
    login: "Đăng nhập thành công",
    signup: "Đăng ký tài khoản thành công!",
    project: "Tạo dự án không thành công",
    checkMail: "Vui lòng kiểm tra email của bạn"
  },
  error: {
    login: "Email hoặc mật khẩu sai",
    notActive: "Dữ liệu đã bị khoá, không được phép truy cập",
    notFoundEmail: "Email không tồn tại",
    existsEmail: "Email đã được sử dụng",
    wrongLogin: "Sai email hoặc mật khẩu",
    invalidEmail: "Email không hợp lệ",
    notWhitespace: "Không được chứa khoảng trắng",
    invalidPassword: "Mật khẩu không hợp lệ",
    maxLength50: "Không nhiều hơn 50 kí tự",
    maxLength20: "Không nhiều hơn 20 kí tự",
    minLength6: "Không được ít hơn 6 kí tự",
    required: "Trường này không được bỏ trống",
    date: "Ngày phải có định dạng dd/MM/yyyy",
    notMatchPassword: "Xác nhận mật khẩu sai",
    token: "Hết thời gian yêu cầu, vui lòng đăng nhập lại",
    notAllow: "Bạn không có quyền truy cập thông tin",
    notFound: "Dữ liệu không tồn tại",
  },
};
export const status = {
  notAuthentication: 401,
  notAllowMethod: 415,
};
