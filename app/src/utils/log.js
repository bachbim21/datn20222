export const log = {
  success: {
    common: "Thành công",
    login: "Đăng nhập thành công",
    signup: "Đăng ký tài khoản thành công!",
    project: "Tạo dự án không thành công",
    checkMail: "Vui lòng kiểm tra email của bạn",
  },
  error: {
    tokenInvalid: "Hết thời gian yêu cầu, vui lòng đăng nhập lại",
    emailNotFound: "Email không tồn tại",
    accountNotActive: "Tài khoản hiện tại đang bị khoá",
    notHavePrivilege: "Bạn không có quyền thực hiện hành động",
    notActive: "Dữ liệu đã bị khoá, không được phép truy cập",
    emailAlreadyUse: "Email đã được sử dụng",
    loginError: "Sai email hoặc mật khẩu",
    emailInvalid: "Email không hợp lệ",
    notWhitespace: "Không được chứa khoảng trắng",
    passwordInvalid: "Mật khẩu không hợp lệ",
    maxLength50: "Không nhiều hơn 50 kí tự",
    maxLength20: "Không nhiều hơn 20 kí tự",
    minLength6: "Không được ít hơn 6 kí tự",
    required: "Trường này không được bỏ trống",
    dateFormat: "Ngày phải có định dạng dd/MM/yyyy",
    confirmPassword: "Xác nhận mật khẩu sai",
    notAllow: "Bạn không có quyền truy cập thông tin",
    notFound: "Dữ liệu không tồn tại",
    roleInvalid: "Vai trò không tồn tại",
  },
};
export const status = {
  notAuthentication: 401,
  notAllowMethod: 415,
};
