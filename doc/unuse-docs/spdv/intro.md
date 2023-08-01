---
sidebar_position: 1
---

# Tích hợp dịch vụ XaaS lên nền tảng Chuyển đổi số oneSME

**Business Unit: CĐS-09**

**Phiên bản: 1.0.0**

**Ngày xuất bản: 2021-05-07**

**Số hiệu tài liệu: VNPT-oneSME-TL001**

## TỔNG QUAN

### TRƯỚC KHI BẮT ĐẦU

Nếu bạn là một nhà cung cấp dịch vụ Saas, bạn có dịch vụ mới muốn được đưa lên nền tảng oneSME. Trước khi bắt đầu, bạn phải thực hiện đăng ký để trở thành Nhà cung cấp dịch vụ trên nền tảng của chúng tôi.

#### Bạn có đáp ứng các yêu cầu của chúng tôi?

-   **Yêu cầu về tổ chức của bạn**
    -   Bạn là tổ chức doanh nghiệp cung cấp dịch vụ phần mềm có uy tín trên thị trường.
    -   Bạn đã có tập khách hàng là các doanh nghiệp đã sử dụng dịch vụ
-   **Yêu cầu về sản phẩm của bạn**
    -   Sản phẩm của bạn phải ở trạng thái sẵn sàng đưa đến khách hàng - production product (không phải là một sản phẩm ở dạng trải nghiệm alpha hoặc beta) để được phê duyệt và bán công khai cho khách hàng doanh nghiệp trên nền tảng oneSME.
    -   Sản phẩm của bạn phải là sản phẩm Saas (Software as a service), là dịch vụ phần mềm cho phép người dùng sử dụng trên nền tảng điện toán đám mây (cloud)
-   **Yêu cầu về vận hành của bạn trên nền tảng oneSME**
    -   Tổ chức của bạn sẵn sàng dành nguồn lực để duy trì (maintenance) sản phẩm dịch vụ đã được phê duyệt trên nền tảng oneSME
    -   Cung cấp hỗ trợ kịp thời cho khách hàng của bạn.
    -   Yêu cầu về hạ tầng của bạn
    -   Các sản phẩm dịch vụ Saas của bạn khi được bán trên nền tảng oneSME phải được triển khai trên môi trường điện toán đám mây (IDG) của hoặc môi trường tương đương đặt tại Việt Nam.

Khi bạn đã đáp ứng được đầy đủ các yêu cầu mà chúng tôi đã liệt kê ở phía trên. Hãy bắt đầu đăng ký để trở thành Nhà cung cấp dịch vụ trên nền tảng oneSME của chúng tôi

Thông thường, qui trình để phê duyệt và thẩm định một đối tác trở thành Nhà cung cấp dịch vụ trên nền tảng của chúng tôi sẽ mất thời gian khoảng từ 3-4 tuần. Với những trường hợp đặc biệt, thời gian này sẽ thay đổi phụ thuộc vào từng trường hợp cụ thể.

##### Quy trình đăng ký trở thành Nhà cung cấp dịch vụ

**Trường hợp developer chưa có tài khoản platform:**

-   Bước 1: Truy cập trang chủ của platform developer portal: [https://one-sme.vnpt.vn/dev-portal](https://onedx.vnpt-technology.vn/dev-portal)
-   Bước 2: Chọn đăng ký tài khoản developer.
-   Bước 3: Nhập thông tin và xác nhận tuân thủ các chính sách, điều khoản sử dụng platform với vai trò là developer.
-   Bước 4: Xác nhận email kích hoạt tài khoản sau đăng ký.
-   Bước 5: Đăng nhập vào developer portal.

**Trường hợp developer đã có tài khoản SME trên platform:**

-   Bước 1: Truy cập vào oneSME marketplace: [https://one-sme.vnpt.vn](https://onedx.vnpt-technology.vn)
-   Bước 2: Đăng nhập tài khoản SME.
-   Bước 3: Chọn “chuyển sang dev portal”.
-   Bước 4: Xác nhận tuân thủ các chính sách điều khoản sử dụng platform với vai trò là developer.

### CÁC BƯỚC ĐƯA SPDV LÊN NỀN TẢNG oneSME

Để đưa một SPDV lên nền tảng oneSME của chúng tôi, các bạn sẽ trải qua các bước chính như sau:

1. Thiết lập SPDV (Set up your Xaas product) Developer sau khi đăng nhập developer portal cần đăng ký thông tin, mô tả SPDV lên nền tảng và cung cấp các thông tin cần thiết phục vụ quy trình tích hợp SPDV với nền tảng. Nền tảng dựa trên thông tin developer cung cấp tiến hành khởi tạo môi trường sandbox cho phép SPDV kết nối với nền tảng để bắt đầu tích hợp và kiểm thử.
2. Xem các mô hình định giá gói dịch vụ có sẵn trên nền tảng và chọn mô hình phù hợp với sản phẩm. Sau khi tích hợp SPDV thành công, developer yêu cầu admin nền tảng phê duyệt nội dung SPDV. Sau khi SPDV được duyệt, developer truy cập vào developer portal của nền tảng để tiến hành chọn mô hình định giá phù hợp với sản phẩm và yêu cầu admin nền tảng phê duyệt cấp phép cho SPDV được xuất bản đến với SME.
3. Tích hợp SPDV với nền tảng oneSME Các SPDV sau khi đăng ký thông tin, mô tả, sẽ được cung cấp môi trường tích hợp trên nền tảng. Nền tảng sẽ cung cấp 1 định danh (api key) cho SPDV đã đăng ký và 1 mật khẩu xác thực việc gọi các APIs do nền tảng cung cấp thao tác vào môi trường sandbox do nền tảng cung cấp.
4. Xuất bản SPDV đến khách hàng SPDV sẽ được xuất bản đến khách hàng khi nội dung, mô tả và quá trình tích hợp đã hoàn thành và được admin nền tảng phê duyệt. Developer cần chủ động bật trạng thái xuất bản SPDV sau khi được duyệt để chủ động về thời điểm mà SPDV bắt đầu được kinh doanh trên nền tảng.

## THIẾT LẬP TÀI KHOẢN NHÀ CUNG CẤP DỊCH VỤ

### Trường hợp developer chưa có tài khoản platform:

-   Bước 1: Truy cập trang chủ của nền tảng ở site developer portal: [https://one-sme.vnpt.vn/dev-portal](https://onedx.vnpt-technology.vn/dev-portal)
-   Bước 2: Màn hình đăng nhập developer portal được hiển thị, chọn “Đăng ký” để chuyển sang giao diện đăng ký tài khoản developer
-   Bước 3: Màn hình đăng ký tài khoản developer được hiển thị, yêu cầu developer nhập đầy đủ các thông tin về doanh nghiệp của nhà phát triển. Chọn “Tiếp theo” để tiếp tục đăng ký tài khoản
-   Bước 4: Màn hình đăng ký thông tin tài khoản đại diện nhà phát triển được hiển thị, yêu cầu developer nhập đầy đủ thông tin tài khoản đại diện cho nhà phát triển. Chọn “Đăng ký” để hoàn tất việc đăng ký tài khoản
-   Bước 5: Hoàn tất đăng ký, nền tảng xuất hiện thông báo “Đăng ký thành công” và yêu cầu developer kích hoạt tài khoản qua email để truy cập vào portal của nền tảng
-   Bước 6: Vào email, chọn link “kích hoạt tài khoản” để kích hoạt tài khoản developer
-   Bước 7: Kích hoạt thành công, thông báo sẽ hiển thị. Developer chọn “Đăng nhập” để đăng nhập vào developer portal bằng tài khoản vừa kích hoạt
-   Bước 8: Đăng nhập thành công, giao diện developer portal được hiển thị

### Trường hợp developer đã có tài khoản SME trên platform:

-   Bước 1: Truy cập vào oneSME marketplace: [https://one-sme.vnpt.vn](https://onedx.vnpt-technology.vn), chọn “Đăng nhập” và chọn “Chuyển sang Dev Portal”
-   Bước 2: Màn hình xác nhận trở thành developer của nền tảng xuất hiện, yêu cầu xác nhận với chính sách và điều khoản sử dụng developer portal. Chọn “Tiếp theo” để truy cập vào trang chủ của developer portal

## THIẾT LẬP SPDV (Set up you Xaas product)

-   Bước 1: Nhà cung cấp dịch vụ truy cập vào site developer portal của nền tảng oneSME: [https://one-sme.vnpt.vn/dev-portal](https://onedx.vnpt-technology.vn/dev-portal) ![Danh sách dịch vụ](/img/spdv/services.png)

-   Bước 2: Chọn menu “Danh sách dịch vụ”, chọn “Tạo dịch vụ”
-   Bước 3: Nhập thông tin cơ bản của SPDV, chọn “Tạo dịch vụ” ![Danh sách dịch vụ](/img/spdv/create-service.png)

-   Bước 4: Tạo dịch vụ thành công, nền tảng khởi tạo môi trường sandbox tích hợp SPDV và gửi email chứa api key và mật khẩu để gọi đến APIs do nền tảng cung cấp.
-   Bước 5: SPDV mới hiển thị trên danh sách các SPDV của developer. Chọn “Chi tiết” để xem thông tin SPDV vừa đăng ký ![Danh sách dịch vụ](/img/spdv/edit-service.png)
-   Bước 6: Trên màn hình thông tin, phần mô tả dịch vụ, nhập đầy đủ các thông tin, mô tả của SPDV và các thông tin phục vụ trao đổi dữ liệu giữa nền tảng và SPDV qua APIs. Thông tin tích hợp developer phải cung cấp lúc cập nhật thông tin SPDV gồm có:
    -   Một đường dẫn API để oneSME gửi dữ liệu hoạt động của SME trên oneSME sang SPDV. Developer bắt buộc phải phát triển API theo mẫu do oneSME định nghĩa
    -   Một token để xác thực API phía trên để đảm bảo bảo mật, an toàn thông tin
    -   Một URL đến tenant mà SPDV cung cấp cho SME sau khi thuê bao SPDV thành công. Khi SME Sử dụng URL này để truy cập SPDV và tự động đăng nhập vào SPDV
-   Bước 7: Chọn “Cập nhật” để lưu thông tin vào nền tảng oneSME
-   Bước 8: Tiến hành tích hợp SPDV với nền tảng qua môi trường sandbox. Các chức năng cần tích hợp:
    -   Khi SME thuê bao thành công một SPDV trên oneSME, SPDV cần đồng bộ thông tin SME cho lần đầu tiên, nền tảng sử dụng URL do developer cung cấp để đẩy tín hiệu cài đặt dịch vụ kèm theo token cấp quyền sử dụng APIs do nền tảng cung cấp, để lấy thông tin SME và gói dịch vụ SME thuê bao cài đặt môi trường phía SPDV cho SME sử dụng SPDV
    -   SPDV gọi đến các APIs lấy dữ liệu thông tin doanh nghiệp SME, danh sách nhân sự của SME, thông tin gói dịch vụ SME đã thuê bao của SPDV, …
    -   Sau khi cài đặt thành công, SPDV cần gọi đến API xác nhận cài đặt thành công sang nền tảng để nền tảng kết thúc thời gian cài đặt SPDV và chuyển sang chế độ sử dụng SPDV.
    -   SME chọn SPDV đã được cài đặt trên nền tảng oneSME, nền tảng sẽ điều hướng SME sang portal của SPDV qua URL developer đã đăng ký từ trước. Portal SPDV thực hiện SSO với nền tảng thông qua token người sử dụng và api key, mật khẩu tích hợp để xác thực người dùng đăng nhập vào SPDV
    -   Trong quá trình sử dụng:
        -   Nếu SME có bất cứ thay đổi gì về gói dịch vụ đã đăng ký (subscription) bao gồm việc nâng cấp (upgrade), hạ cấp (downgrade), thay đổi số lượng unit đã chọn, thêm gói dịch vụ bổ sung (add-on), hủy dịch vụ (cancel subscription), … thì các APIs sẽ được đồng bộ giữa nhà cung cấp dịch vụ và nền tảng.
        -   Nếu developer có bất cứ thay đổi về gói dịch vụ như thay đổi thông tin khuyến mại, thay đổi thông tin ngày thanh toán chu kỳ thanh toán tiếp theo, hủy gói dịch vụ, … thì các APIs trao đổi thông tin sẽ được đồng bộ giữa nhà cung cấp dịch vụ và nền tảng.
-   Bước 9: Sau khi tích hợp hoàn thành, developer gửi yêu cầu phê duyệt thông tin, mô tả SPDV và kết quả tích hợp SPDV đến quản trị nền tảng.
-   Bước 10: SPDV được duyệt sẽ cần chọn mô hình gói cước phù hợp với sản phẩm trên danh sách các mô hình sẵn có do nền tảng cung cấp và gửi yêu cầu phê duyệt định giá sản phẩm đến quản trị nền tảng
-   Bước 11: Sau khi gói cước của SPDV được duyệt, developer truy cập vào developer portal để xuất bản SPDV đến với khách hàng trên nền tảng oneSME.

## CHỌN MÔ HÌNH GÓI CƯỚC

### Giới thiệu các mô hình gói cước trên nền tảng

Chọn mô hình tính cước là phần hỗ trợ nhà cung cấp dịch vụ tạo một gói cước cho một SPDV hoặc một nhóm SPDV (bundling / combo). Khi tạo gói cước cho SPDV của mình, bạn có thể chọn các kế hoạch định giá pricing model) được định nghĩa sẵn trên nền tảng như sau:<br/>

<div align="center">

![SSO infomation](/img/spdv/pricing.png)

</div><br/>

1.  **Mô hình định giá miễn phí - Freemium:** Là mô hình định giá cho phép người dùng sử dụng vô thời hạn một phiên bản ‘cơ bản’ của sản phẩm hoặc dich vụ. Phiên bản miễn phí (Freemium) được giới hạn theo một số cách để khuyến khích người dùng nâng cấp lên phiên bản trả phí.
2.  **Mô hình định giá cố định – Flat rate pricing:** Mô hình cung cấp một sản phẩm dịch vụ với nhóm tính năng cố định và một mức giá duy nhất. Mô hình này phù hợp với các nhà cung cấp chỉ có duy nhất một sản phẩm dịch vụ.
3.  **Mô hình định giá dựa trên sử dụng thực tế - Usage based pricing (pay as you go):** Là mô hình người dùng chi trả cho những gì họ sử dụng trong một thời gian nhất định. Mô hình này cho phép cả nhà cung cấp dịch vụ và người dùng thay đổi chi phí của họ để phục vụ và sử dụng.
4.  **Mô hình định giá phân cấp lũy kế– Tiered pricing:** Là mô hình nhà cung cấp định giá sản phẩm dịch vụ theo các gói giá khác nhau với giá tăng dần. Nhà cung cấp dịch vụ có thể tạo các gói giá từ thấp đến cao phụ thuộc vào một số đặc tính của gói giá: Theo tính năng, theo người dùng, theo khối lượng …
5.  **Mô hình định giá phân cấp theo sản lượng – Volume pricing:** Là mô hình nhà cung cấp định giá sản phẩm dịch vụ theo các gói giá khác nhau với giá tăng dần. Tổng hóa đơn phụ thuộc vào sản lượng người dùng đăng ký.
6.  **Mô hình định giá theo bậc thang – Stair Step pricing:** Cũng là mô hình định giá theo các cấp số lượng dựa vào đó giá được xác định. Nhưng đối với mỗi cấp, giá cố định (flat-rate) được chỉ định thay vì giá trên mỗi đơn vị
7.  **Mô hình định giá theo đơn vị (unit: users, transaction, data…):** Là mô hình định giá sản phẩm dịch vụ theo một đơn vị cố định: người dùng, giao dịch, tính năng sản phẩm với một mức giá. Ví dụ: SPDV có giá 100$ /người dùng, 10$/hóa đơn, …
8.  **Định giá kiểu kết hợp (Combined pricing):** Mô hình kết hợp giữa subscription và các mô hình tính phí còn lại.

### Thiết lập gói cước

Nhà cung cấp dịch vụ thực hiện các bước sao để tạo gói cước cho SPDV:

-   Bước 1: Tạo gói cước: Người dùng chọn chi tiết một SPDV và chọn Tạo gói cước hoặc vào menu Product Catalogue ⇒ Gói cước ⇒ Tạo gói cước
-   Bước 2: Nhập thông tin gói cước vào form Tạo gói cước

### Thiết lập các thông tin cơ bản

Thiết lập các thông tin cơ bản của gói cước bao gồm:

-   Tên gói cước
-   ID gói cước
-   Mô tả gói cước

### Thiết lập chu kỳ thanh toán

![Thiết lập chu kỳ thanh toán](/img/spdv/period.png)

-   **Chu kỳ thanh toán:** Bạn có thể thiết lập chu kỳ thanh toán bằng cách nhập số lượng + đơn vị thời gian để ra các chu kỳ mong muốn. Ví dụ: 1 tuần, 1 tháng, 3 tháng, 1 năm… Khách hàng sẽ thanh toán theo mỗi chu kỳ này
-   **Số chu kỳ:** là số lần khách hàng phải thanh toán.

### Thiết lập mô hình định giá (pricing model)

#### Kế hoạch định giá theo trọn gói (Flat rate)

![Flat rate](/img/spdv/flatrate.png)

-   Bạn có thể đặt một mức giá cho một gói dịch vụ cố định, không giới hạn số lượng sử dụng. Để thiết lập các gói khác nhau cho một dịch vụ, thì có thể tạo nhiều gói với các tính năng khác nhau. Với mỗi gói này thì để mức giá khác nhau.
-   Bạn có thể tạo gói dùng miễn phí(freemium) bằng cách nhập giá 0đ cho một gói dịch vụ

#### Kế hoạch định giá theo đơn vị (Per Unit)

![Per unit](/img/spdv/unit.png)

-   Với kế hoạch định giá này, bạn sẽ đưa ra mức giá cho một đơn vị (người, hóa đơn, dung lượng…). Khi mua dịch vụ, khách hàng sẽ nhập số lượng mong muốn, số tiền sẽ được tính bằng số lượng nhân với đơn giá.
-   Với kế hoạch định giá này, bạn có thể thiết lập cho phép người dùng dùng miễn phí một số đơn vị.

#### Kế hoạch định giá theo lũy kế (Tier)

![Tier](/img/spdv/tier.png)

-   Với kế hoạch định giá theo lũy kế, bạn sẽ đặt giá theo từng cấp độ của dịch vụ. Khách hàng khi mua dịch vụ sẽ nhập số lượng đơn vị mong muốn, và hệ thống sẽ tính ra tổng tiền thanh toán tương ứng.
-   Ví dụ cụ thể như sau: Bạn đặt giá
    -   Từ 1-100, đơn giá = 100
    -   Từ 101-500, đơn giá = 80
    -   Từ 501 trở lên, đơn giá = 50
-   Khi khách hàng mua, và nhập số lượng mong muốn = 150, thì số tiền được tính như sau: Số tiền = 100 đơn vị đầu tiên x 100 + 50 đơn vị tiếp theo x 80 = 14.000

#### Kế hoạch định giá theo khối lượng (Volume)

![Volume](/img/spdv/volume.png)

-   Với kế hoạch định giá theo khối lượng, bạn sẽ đặt giá theo từng mức độ khối lượng của dịch vụ. Khách hàng khi mua dịch vụ sẽ nhập số lượng đơn vị mong muốn, và hệ thống sẽ tính ra tổng tiền thanh toán tương ứng.
-   Ví dụ cụ thể như sau: Bạn đặt giá
    -   Từ 1-100, đơn giá = 100
    -   Từ 101-500, đơn giá = 80
    -   Từ 501 trở lên, đơn giá = 50
-   Khi khách hàng mua, và nhập số lượng mong muốn = 150, thì số tiền được tính như sau Số tiền = số lượng x khoảng đơn giá tương ứng = 150 x 80 = 12.000

#### Kế hoạch định giá theo bậc thang (Stair-step)

![Stair step](/img/spdv/stairstep.png)

-   Với kế hoạch định giá theo bậc thang, bạn sẽ đặt giá theo từng bậc khối lượng của dịch vụ. Khách hàng khi mua sẽ không được chọn số lượng cụ thể, mà chọn khối lượng tối đa có thể thỏa mãn mong muốn của họ
-   Ví dụ cụ thể như sau: Bạn đặt giá
    -   Từ 1-100, đơn giá = 100
    -   Từ 101-500, đơn giá = 800
    -   Từ 501 trở lên, đơn giá = 5000
-   Khi khách hàng mua, họ chỉ được chọn mức tối đa, không được chọn số lượng cụ thể.
    -   Nếu chọn mức 100, họ phải trả 100
    -   Nếu chọn mức 500, họ phải trả 800
    -   Nếu chọn mức không giới hạn, họ phải trả 5000

### Thiết lập phí thiết lập

Bạn có thể đặt giá cho phí thiết lập hoặc không. Đây là khoản phí khách hàng phải trả 1 lần duy nhất vào lần đầu tiên mua dịch vụ.

### Thiết lập thông tin dùng thử

![Trial infomation](/img/spdv/trail.png)

Bạn có thể nhập thông tin thời gian dùng thử bằng cách nhập số lượng + đơn vị thời gian tương ứng. Khách hàng khi đăng ký sẽ được dùng thử không mất tiền trong khoảng thời gian bạn đã thiết lập. Đây là nội dung không bắt buộc, bạn có thể thiết lập hoặc không

### Thiết lập thông tin thuế

![Tax infomation](/img/spdv/tax.png)

Khi thiết lập giá cho các gói dịch vụ, bạn có thể thiết lập thông tin thuế đi kèm của dịch vụ, bao gồm các thông tin:

-   Loại thuế mà khách hàng phải chịu khi mua dịch vụ
-   Thuế suất tương ứng với mỗi loại thuế
-   Mức giá trên đã bao gồm thuế hay chưa

Dựa trên các thông tin thiết lập, hệ thống sẽ tính ra được số tiền thực trả cho doanh nghiệp và số thuế phải nộp

### Thiết lập thông tin dịch vụ bổ sung

![Addon infomation](/img/spdv/addon.png)

Với các gói dịch vụ, bạn có thể thiết lập các dịch vụ bổ sung, khuyến khích khách hàng mua thêm để phục vụ cho hoạt động của họ. Dịch vụ bổ sung gồm 2 loại, bắt buộc và không bắt buộc. Khi bắt buộc, tức khách hàng luôn phải mua dịch vụ bổ sung này khi mua dịch vụ chính

### Thiết lập thông tin tính năng sản phẩm

![Feature infomation](/img/spdv/feature.png)

Mỗi gói dịch vụ có thể có các tính năng khác nhau và bạn có thể tự thiết lập thông tin này khi tạo gói bằng cách chọn trong các tính năng đã được tạo trước cho dịch vụ.

## TÍCH HỢP SẢN PHẨM DỊCH VỤ với NỀN TẢNG oneSME

### Cài đặt SPDV sau thuê bao (Bắt buộc)

#### Mô tả chung

SME thực hiện đăng ký thuê bao gói SPDV thành công, nền tảng gọi đến API mà developer đã đăng ký từ trước để gửi thông tin doanh nghiệp SME đã thuê bao và danh sách tài khoản người dùng SPDV của SME đó. Developer bắt buộc phải ghi nhận thông tin doanh nghiệp và danh sách nhân viên của SME. Sau khi tiếp nhận thông tin SPDV phải tự động cài đặt tenant cho SME mới thuê bao

-   Bước 1: Tài khoản SME thực hiện tìm kiếm và thuê bao thành công SPDV trên oneSME
-   Bước 2: oneSME ghi nhận thông tin thuê bao SPDV của SME, gọi API do developer cung cấp và truyền vào thông tin doanh nghiệp, danh sách nhân sự, thông tin gói dịch vụ SME đã thuê bao
-   Bước 3: Hệ thống SPDV tiếp nhận thông tin thuê bao do oneSME gửi sang, xác thực bảo mật từ token trong header của API (token được developer cung cấp khi tạo SPDV trên oneSME). Hệ thống SPDV phải cung cấp tenant cho SME theo thông tin gói thuê bao của SME
-   Bước 4: Hệ thống SPDV gọi API do oneSME cung cấp để thông báo quá trình cài đặt môi trường cho SME đã xong và SPDV đã sẵn sàng cho SME sử dụng
-   Bước 5: oneSME tiếp nhận thông báo, thay đổi trạng thái SPDV trên portal, thông báo cho SME biết SPDV đã sẵn sàng phục vụ

#### Mô tả luồng tích hợp

<div align="center">

![Feature infomation](/img/spdv/flow-img.png)

</div><br/>

#### Danh sách APIs

| STT | Mô tả                              | URL                                             | Method |
| --- | ---------------------------------- | ----------------------------------------------- | ------ |
| 1   | oneSME gửi thông tin thuê bao SPDV | /{URL SPDV}/onesme/transaction                  | POST   |
| 2   | SPDV xác nhận cài đặt thành công   | /{URL oneSME}/api/dev-integration/setup/success | GET    |

### Xác thực người dùng trên SPDV (Bắt buộc)

#### Mô tả chung

Sau khi SME thuê bao SPDV và hệ thống SPDV đã sẵn sàng cho SME sử dụng. SME sẽ lựa chọn SPDV trên oneSME để truy cập vào tenant do SPDV cung cấp để sử dụng dịch vụ. Việc đăng nhập vào SPDV sẽ được xử lý tự động theo các thông tin xác thực người dùng đã có trên oneSME

-   Bước 1: Người dùng SME đăng nhập vào oneSME, trên màn hình “Dịch vụ của tôi” chọn SPDV muốn sử dụng.
-   Bước 2: oneSME gọi URL truy cập SPDV do developer đã đăng ký lúc tạo SPDV trên nền tảng. URL sẽ phải thêm parameter token xác thực tài khoản SME đang đăng nhập oneSME
-   Bước 3: SPDV tiếp nhận token người dùng, gọi API do oneSME cung cấp để verify token được truyền vào URL phía trên
-   Bước 4: SPDV xác thực thành công và cho phép người dùng truy cập vào SPDV

#### Mô tả luồng tích hợp

<div align="center">

![SSO infomation](/img/spdv/sso-img.png)

</div><br/>

#### Danh sách APIs

| STT | Mô tả | URL | Method |
| --- | --- | --- | --- |
| 1 | URL dành cho SME truy cập sử dụng hệ thống SPDV | /{URL SPDV}/?token={SME token} | GET |
| 2 | Hệ thống SPDV Verify token SME trên oneSME | /{oneSME domain}/auth-server/api/dev-integration/login | POST |

### Trong quá trình sử dụng SPDV

#### Mô tả chung

Sau khi thuê bao thành công SPDV, trong thời gian sử dụng 2 hệ thống oneSME và SPDV cần phải trao đổi các thông tin liên quan đến doanh nghiệp và các thông tin về thuê bao SPDV. Các hoạt động phát sinh dữ liệu trao đổi bao gồm:

-   Tích hợp subscription
    -   Thay đổi Subscription (Edit subscription)
    -   Thêm dịch vụ bổ sung (Addon)
    -   Thêm phí cho subscription, loại phí thu 1 lần
    -   Thêm chương trình khuyến mại(coupon)
    -   Thay đổi thông tin ngày kết thúc dùng thử
    -   Thay đổi ngày thanh toán
    -   Hủy đăng ký dịch vụ
    -   Xóa đăng ký dịch vụ
-   Tích hợp billing
    -   oneSME phát sinh tính giá tự động
-   Tích hợp payment
    -   Thêm mới thẻ thanh toán
    -   Cập nhật thông tin thẻ thanh toán
    -   Hủy bỏ thẻ thanh toán
-   Tích hợp invoice
    -   oneSME tự động phát sinh hóa đơn
    -   Cập nhật hóa đơn
    -   Xóa hóa đơn
    -   Thay đổi trạng thái hóa đơn

### Luồng tích hợp

-   Tích hợp subscription ![Luồng tích hợp Subscription](/img/spdv/subscription.png)
-   Tích hợp billing<br/> ![Luồng tích hợp Billing](/img/spdv/billing.png)<br/>
-   Tích hợp payment<br/> ![Luồng tích hợp Payment](/img/spdv/payment.png)<br/>
-   Tích hợp invoice
    -   Đồng bộ dữ liệu hóa đơn từ oneSME sang SPDV khi hóa đơn được tạo ![Luồng tích hợp hóa đơn từ oneSME sang SPDV khi hóa đơn được tạo](/img/spdv/invoice-1.png)
    -   Đồng bộ dữ liệu hóa đơn từ oneSME sang SPDV khi hóa đơn được cập nhật ![Luồng tích hợp hóa đơn từ oneSME sang SPDV khi hóa đơn được cập nhật](/img/spdv/invoice-2.png)
    -   Đồng bộ dữ liệu hóa đơn từ oneSME sang SPDV khi SME xóa hóa đơn ![Luồng tích hợp hóa đơn từ oneSME sang SPDV khi SME xóa hóa đơn](/img/spdv/invoice-3.png)
    -   Đồng bộ dữ liệu hóa đơn từ SPDV sang oneSME khi SPDV xóa hóa đơn ![Luồng tích hợp hóa đơn từ SPDV sang oneSME khi SPDV xóa hóa đơn](/img/spdv/invoice-4.png)
    -   Đồng bộ dữ liệu hóa đơn từ oneSME sang SPDV khi oneSME thay đổi trạng thái thanh toán của hóa đơn ![Luồng tích hợp hóa đơn từ oneSME sang SPDV khi oneSME thay đổi trạng thái thanh toán của hóa đơn](/img/spdv/invoice-5.png)
    -   Đồng bộ dữ liệu hóa đơn từ SPDV sang oneSME khi SPDV thay đổi trạng thái thanh toán của hóa đơn ![Luồng tích hợp hóa đơn từ SPDV sang oneSME khi SPDV thay đổi trạng thái thanh toán của hóa đơn](/img/spdv/invoice-6.png)

### Thay đổi thông tin phía oneSME cần gửi dữ liệu sang SPDV

#### Mô tả chung

Trong quá trình sử dụng SPDV, mỗi khi SME có hoạt động thay đổi thông tin của subscription trên oneSME hoặc nền tảng tự động cập nhật thông tin subscription của SME, dữ liệu thay đổi sẽ được gửi sang SPDV để hệ thống sản phẩm sử dụng theo dõi dữ liệu của SME. Các hoạt động trên các chức năng sau:

-   **Thay đổi thông tin doanh nghiệp**
-   **Thay đổi thông tin nhân sự**
-   **Thay đổi thông tin subscription**
-   **Thay đổi thông tin billing**
-   **Thay đổi thông tin payment**
-   **Thay đổi thông tin invoice**

Khi có hoạt động thay đổi thông tin xảy ra trên oneSME, hệ thống oneSME sẽ chủ động gọi API do developer cung cấp lúc tạo SPDV trên oneSME và đẩy thông tin sang cho SPDV

#### Danh sách APIs

<table>
    <thead>
        <tr>
            <th width="10%">STT</th>
            <th width="40%">Mô tả</th>
            <th width="40%">URL</th>
            <th width="10%">Method</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Thay đổi thông tin doanh nghiệp trên oneSME	</td>
            <td rowspan="6">&#123;URL SPDV&#125;/onesme/transaction?token=&#123;SMEToken&#125;</td>
            <td rowspan="6">POST</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Thay đổi thông tin nhân sự trên oneSME	</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Thay đổi thông tin subscription trên oneSME	</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Thay đổi thông tin billing trên oneSME	</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Thay đổi thông tin payment trên oneSME	</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Thay đổi thông tin invoice trên oneSME	</td>
        </tr>
    </tbody>
</table>

### Hệ thống SPDV lấy thông tin từ oneSME và gửi thông tin khi có thay đổi sang oneSME

#### Mô tả chung

Sau khi SME thuê bao SPDV và sử dụng hệ thống SPDV, oneSME cần đồng bộ các thông tin mà người dùng SME thay đổi từ hệ thống SPDV có liên quan đến oneSME:

-   **Thông tin doanh nghiệp**
-   **Thông tin nhân sự**
-   **Thông tin subscription của SME**

Hệ thống SPDV nếu cung cấp các chức năng thay đổi thông tin như trên bắt buộc phải gọi API do oneSME cung cấp để gửi dữ liệu thay đổi về nền tảng.

Nếu SPDV có nhu cầu cần lấy thông tin dù không có hoạt động thay đổi dữ liệu SME nào diễn ra, cũng có thể gọi API do oneSME cung cấp để truy vấn dữ liệu

#### Danh sách APIs

<table>
    <thead>
        <tr>
            <th width="10%">STT</th>
            <th width="40%">Mô tả</th>
            <th width="40%">URL</th>
            <th width="10%">Method</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center" colspan="4">Thông tin doanh nghiệp</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Lấy thông tin doanh nghiệp</td>
            <td>&#123;oneSME domain&#125;/auth-server/api/users/business</td>
            <td>GET</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Cập nhật thông tin doanh nghiệp</td>
            <td>&#123;oneSME domain&#125;/auth-server/api/users/sme</td>
            <td>PUT</td>
        </tr>
         <tr>
            <td align="center" colspan="4">Thông tin nhân sự</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Lấy danh sách nhân sự</td>
            <td>&#123;oneSME domain&#125;/auth-server/api/users-sme/employees</td>
            <td>GET</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Cập nhật thông tin nhân sự</td>
            <td>&#123;oneSME domain&#125;/auth-server/api/sme-employees/&#123;id&#125;</td>
            <td>PUT</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Thêm nhân viên mới</td>
            <td>&#123;oneSME domain&#125;/auth-server/api/sme-employees</td>
            <td>POST</td>
        </tr>
        <tr>
            <td align="center" colspan="4">Thông tin subscription</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Lấy thông tin subscription</td>
            <td>&#123;oneSME domain&#125;/api/portal/subscription/&#123;id&#125;</td>
            <td>GET</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Cập nhật thông tin subscription</td>
            <td>&#123;oneSME domain&#125;/api/portal/subscription/&#123;id&#125;</td>
            <td>PUT</td>
        </tr>
        <tr>
            <td align="center" colspan="4">Thông tin billing</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Lấy thông tin cước phí</td>
            <td>&#123;oneSME domain&#125;/api/portal/subscription/&#123;id&#125;/billing</td>
            <td>GET</td>
        </tr>
        <tr>
            <td align="center" colspan="4">Thông tin payment</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Lấy thông tin hình thức thanh toán</td>
            <td>&#123;oneSME domain&#125;/api/portal/payment</td>
            <td>GET</td>
        </tr>
        <tr>
            <td align="center" colspan="4">Lấy thông tin hóa đơn</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Lấy thông tin hình thức thanh toán</td>
            <td>&#123;oneSME domain&#125;/api/portal/invoice/&#123;id&#125;</td>
            <td>GET</td>
        </tr>
    </tbody>
</table>

### Đặc tả APIs

#### APIs do oneSME cung cấp

-   **GET /{oneSME domain}/api/dev-integration/setup/success?subscriptionId={subscriptionId}**

<table>
    <tr>
      <td width="10%"><b>URL</b></td>
      <td width="90%" colspan="4">&#123;URL oneSME&#125;/api/dev-integration/setup/success?subscriptionId=&#123;subscriptionId&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Xác nhận SPDV đã cài đặt thành công môi trường cho SME mới<br/> &#123;URL oneSME&#125; là đường dẫn API do oneSME cung cấp</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">SPDV</td>
  </tr>
  <tr>
      <td  rowspan="7" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td width="38%">Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request Parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">subscriptionId: number</td>
      <td>Id subscription lấy từ api &#123;URL SPDV&#125;/onesme/transaction</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="5" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: SPDV xác nhận cài đặt cho SME thành công</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Thực hiện cập nhật trạng thái cài đặt thành công theo subscriptionId</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>

-   **POST /{oneSME domain}/auth/api/dev-integration/login**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth/api/dev-integration/login</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">POST</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Xác thực người dùng có được phép sử dụng SPDV</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập SME portal</td>
  </tr>
  <tr>
      <td  rowspan="8" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2">apiKey: text</td>
      <td>Mã SPDV<br/>- Bắt buộc nhập<br/>- Giới hạn 100 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">secretKey: text</td>
      <td>Mật khẩu SPDV<br/>- Bắt buộc nhập<br/>- Giới hạn 100 ký tự</td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="24" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Kiểm tra apiKey và secretKey tồn tại trên platform</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Kiểm tra token có phải user được phép sử dụng SPDV</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 3: Lấy thông tin user từ cơ sở dữ liệu</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#91;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID của user</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên user</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>email: text</td>
      <td>Email user</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID của user</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>avatar: text</td>
      <td>URL ảnh avatar của user đăng nhập</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>smeId: number</td>
      <td>ID của SME admin</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>smeName: text</td>
      <td>Tên doanh nghiệp SME</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>website: text</td>
      <td>Website doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>phoneNumber: text</td>
      <td>Số điện thoại doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>address: text</td>
      <td>Địa chỉ doanh nghiệp <br /> - Định dạng: số nhà, đường, quận/huyện, tỉnh/thành phố, quốc gia</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>accessToken: text</td>
      <td>Access token dùng để xác thực các dev APIs</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#93;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="30" valign="top"><b>Luồng phụ</b></td>
      <td colspan="3">1. apiKey hoặc secretKey không tồn tại</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "devIntegration"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "key"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">2. user không được phép sử dụng SPDV</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "devIntegration"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "user"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
</table>

-   **GET /{oneSME domain}/auth-server/api/users/business**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth-server/api/users/business</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Xem thông tin doanh nghiệp của SME admin</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập SME portal</td>
  </tr>
  <tr>
      <td  rowspan="4" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="28" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Lấy thông tin doanh nghiệp của người dùng đã đăng nhập theo id lấy từ token trong cơ sở dữ liệu</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>icon: text</td>
      <td>URL ảnh đại diện doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>coverImage: text</td>
      <td>URL ảnh bìa doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>phoneNumber: text</td>
      <td>Số điện thoại của doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>email: text</td>
      <td>Email của doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>countryId: number</td>
      <td>ID quốc gia</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>countryName: text</td>
      <td>Tên quốc gia</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>provinceId: number</td>
      <td>ID tỉnh/thành phố</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>provinceName: text</td>
      <td>Tên tỉnh/thành phố</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>districtId: number</td>
      <td>ID quận/huyện</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>districtName: text</td>
      <td>Tên quận/huyện</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>address: text</td>
      <td>Địa chỉ doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>website: text</td>
      <td>Website doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>description: text</td>
      <td>Giới thiệu doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>taxCode: text</td>
      <td>Mã số thuế doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessScaleId: number</td>
      <td>ID quy mô doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessScaleName: text</td>
      <td>Tên quy mô doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessAreasId: number</td>
      <td>ID lĩnh vực kinh doanh</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessAreasName: text</td>
      <td>Tên lĩnh vực kinh doanh</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="15" valign="top"><b>Luồng phụ</b></td>
      <td colspan="3">1. id không tồn tại</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "id"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
</table>

-   **PUT /{oneSME domain}/auth-server/api/users/sme**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth-server/api/users/sme</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">PUT</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Cập nhật thông tin doanh nghiệp SME của người đăng nhập</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập là admin của SME</td>
  </tr>
  <tr>
      <td  rowspan="18" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2">name: text</td>
      <td>Tên doanh nghiệp<br/>- Bắt buộc nhập<br/>- Giới hạn tối đa 20 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">businessScale: number</td>
      <td>ID của quy mô doanh nghiệp<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">businessAreas: number</td>
      <td>ID lĩnh vực kinh doanh<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">address: text</td>
      <td>Địa chỉ doanh nghiệp<br/>- Bắt buộc nhập<br/>- Giới hạn tối đa 100 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">district: number</td>
      <td>ID quận/huyện<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">province: number</td>
      <td>ID tỉnh/thành phố<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">country: number</td>
      <td>ID quốc gia<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">phoneNumber: text</td>
      <td>Số điện thoại doanh nghiệp<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">website: text</td>
      <td>Website của doanh nghiệp<br/>- Định dạng URL<br/>- Giới hạn tối đa 100 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">description: text</td>
      <td>Giới thiệu doanh nghiệp<br/>- Giới hạn tối đa 500 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">icon: number</td>
      <td>ID ảnh đại diện doanh nghiệp<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">taxCode: text</td>
      <td>Mã số thuế doanh nghiệp<br/>- Định dạng mã số thuế<br/>- Giới hạn tối đa 20 ký tự</td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="16" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Kiểm tra phoneNumber hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Kiểm tra name hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 3: Kiểm tra name tồn tại trong hệ thống</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 4: Kiểm tra businessScale hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 5: Kiểm tra businessAreas hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 6: Kiểm tra address hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 7: Kiểm tra district hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 8: Kiểm tra province hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 9: Kiểm tra country hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 10: Kiểm tra website hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 11: Kiểm tra description hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 12: Kiểm tra taxCode hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 13: Lưu thông tin doanh nghiệp vào cơ sở dữ liệu. Lưu thời điểm hiện tại vào thời gian cập nhật</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="180" valign="top"><b>Luồng phụ</b></td>
      <td colspan="3">1. phoneNumber không hợp lệ</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "phoneNumber"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">2. name không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "name"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">3. name đã tồn tại</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "name"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.duplicate.name"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">4. businessScale không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "businessScale"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">5. businessAreas không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "businessAreas"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
    <tr>
      <td colspan="3">6. address không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "address"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">7. district không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "district"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">8. province không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "province"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">9. country không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "country"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">10. website không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "website"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">11. description không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "description"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">12. taxCode không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "taxCode"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
</table>

-   **GET /{oneSME domain}/auth-server/api/users-sme/employees**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth-server/api/users-sme/employees?status=&#123;status&#125;&amp;search=&#123;searchText&#125;&amp;page=&#123;page&#125;&amp;size=&#123;size&#125;&amp;sort=&#123;sortColumn,sortType&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Tìm kiếm danh sách tài khoản nhân viên của SME</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập SME portal có quyền SME admin</td>
  </tr>
  <tr>
      <td  rowspan="12" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2">status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVE: Đang hoạt động<br/>- INACTIVE: Không hoạt động<br/>- Mặc định là rỗng: Lấy tất cả các gói ở mọi trạng thái hoạt động</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">searchText: text</td>
      <td>Nội dung tìm kiếm:<br/>- Mặc định là rỗng: lấy tất cả tài khoản thuộc SME<br/>- Nếu page > totalPage: trả về danh sách rỗng</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">page: number</td>
      <td>Chỉ số trang:<br/>- Mặc định = 1<br/>- Nếu page > totalPage: trả về danh sách rỗng</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">size: number</td>
      <td>Số bản ghi trên 1 trang:<br/>- Mặc định = 10<br/>- Định dạng số nguyên<br/>- Nếu size &gt; 1: tự động gán size = 1</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">sortColumn: text</td>
      <td>Tên cột cần sắp xếp:<br/>- Mặc định là cột thời gian cập nhật</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">sortType: text</td>
      <td>Kiểu sắp xếp:<br/>- asc: Sắp xếp tăng dần<br/>- desc: Sắp xếp giảm dần<br/>- Mặc định là DESC</td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="22" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Lấy danh sách tài khoản của nhân viên SME có admin là user đăng nhập theo tiêu chí tìm kiếm trong cơ sở dữ liệu. Nếu không tìm thấy bản ghi nào thì trả về danh sách rỗng</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">totalPage: number</td>
      <td>Tổng số trang<br/>- Bằng 0 nếu danh sách rỗng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">data: array</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#91;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID tài khoản</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên tài khoản</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>email: text</td>
      <td>Email tài khoản</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVE: Đang hoạt động<br/>- INACTIVE: Không hoạt động</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>phoneNumber: text</td>
      <td>Số điện thoại doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>address: text</td>
      <td>Địa chỉ doanh nghiệp <br /> - Định dạng: số nhà, đường, quận/huyện, tỉnh/thành phố, quốc gia</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>avatar: text</td>
      <td>URL ảnh đại diện employee</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#93;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td valign="top"><b>Luồng phụ</b></td>
      <td colspan="3"></td>
      <td></td>
  </tr>
</table>

-   **PUT /{oneSME domain}/auth-server/api/sme-employees/{id}**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth-server/api/sme-employees/&#123;id&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Xem thông tin doanh nghiệp của SME admin</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập SME portal</td>
  </tr>
  <tr>
      <td  rowspan="4" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="28" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Lấy thông tin doanh nghiệp của người dùng đã đăng nhập theo id lấy từ token trong cơ sở dữ liệu</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>icon: text</td>
      <td>URL ảnh đại diện doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>coverImage: text</td>
      <td>URL ảnh bìa doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>phoneNumber: text</td>
      <td>Số điện thoại của doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>email: text</td>
      <td>Email của doanh nghiệp</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>countryId: number</td>
      <td>ID quốc gia</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>countryName: text</td>
      <td>Tên quốc gia</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>provinceId: number</td>
      <td>ID tỉnh/thành phố</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>provinceName: text</td>
      <td>Tên tỉnh/thành phố</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>districtId: number</td>
      <td>ID quận/huyện</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>districtName: text</td>
      <td>Tên quận/huyện</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>address: text</td>
      <td>Địa chỉ doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>website: text</td>
      <td>Website doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>description: text</td>
      <td>Giới thiệu doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>taxCode: text</td>
      <td>Mã số thuế doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessScaleId: number</td>
      <td>ID quy mô doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessScaleName: text</td>
      <td>Tên quy mô doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessAreasId: number</td>
      <td>ID lĩnh vực kinh doanh</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessAreasName: text</td>
      <td>Tên lĩnh vực kinh doanh</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="15" valign="top"><b>Luồng phụ</b></td>
      <td colspan="3">1. id không tồn tại</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "id"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
</table>

-   **PUT /{oneSME domain}/auth-server/api/users/sme**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth-server/api/users/sme</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">PUT</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Cập nhật thông tin cá nhân của tài khoản SME employee</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập SME portal có quyền SME admin</td>
  </tr>
  <tr>
      <td  rowspan="18" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Path parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">id: number</td>
      <td>ID tài khoản<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">lastname: text</td>
      <td>Họ + tên đệm của người đăng ký tài khoản<br/>- Bắt buộc nhập<br/>- Giới hạn tối đa 50 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">firstname: text</td>
      <td>Tên của người đăng ký tài khoản<br/>- Bắt buộc nhập<br/>- Giới hạn tối đa 10 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">phoneNumber: text</td>
      <td>Số điện thoại doanh nghiệp<br/>- Bắt buộc nhập<br/>- Định dạng số, ký tự đặc biệt: +<br/>- Giới hạn 10 - 12 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">roles: &#91;number&#93;</td>
      <td>Danh sách ID vai trò của SME<br/>- Bắt buộc nhập<br/>- - Định dạng danh sách số nguyên<br/>- Giới hạn tối thiểu 1 phần tử</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">email: text</td>
      <td>Email tài khoản<br/>- Bắt buộc nhập<br/>- Định dạng email<br/>- Giới hạn 50 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">status: text</td>
      <td>Trạng thái hoạt động của tài khoản<br/>- Bắt buộc nhập<br/>- ACTIVE: Đang hoạt động<br/>- INACTIVE: Không hoạt động</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">avatar: number</td>
      <td>- Định dạng số nguyên</td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="13" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Kiểm tra id tồn tại</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Kiểm tra lastname hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 3: Kiểm tra firstname hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 4: Kiểm tra phoneNumber hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 5: Kiểm tra roles hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 6: Kiểm tra roles thuộc các vai trò của SME</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 7: Kiểm tra email hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 8: Kiểm tra email trùng lặp</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 9: Kiểm tra status hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 10: Lưu thông tin tài khoản vào cơ sở dữ liệu. Lưu thời điểm hiện tại vào thời gian cập nhật</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="135" valign="top"><b>Luồng phụ</b></td>
      <td colspan="3">1. id không tồn tại</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "id"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">2. lastname không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "lastname"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">3. firstname không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "firstname"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">4. phoneNumber không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "phoneNumber"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">5. roles không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "roles"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
    <tr>
      <td colspan="3">6. roles không phải thuộc vai trò của SME</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "roles"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">7. email không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "email"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">8. email đã tồn tại</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "email"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.duplicate.value"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">9. status không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "status"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
</table>

-   **POST /{oneSME domain}/auth-server/api/sme-employees**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">/auth-server/api/sme-employees</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">POST</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Tạo tài khoản SME employee</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản đã đăng nhập SME portal có quyền SME admin</td>
  </tr>
  <tr>
      <td  rowspan="13" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">lastname: text</td>
      <td>Họ + tên đệm của người đăng ký tài khoản<br/>- Bắt buộc nhập<br/>- Giới hạn tối đa 50 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">firstname: text</td>
      <td>Tên của người đăng ký tài khoản<br/>- Bắt buộc nhập<br/>- Giới hạn tối đa 10 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">phoneNumber: text</td>
      <td>Số điện thoại employee<br/>- Bắt buộc nhập<br/>- Định dạng số, ký tự đặc biệt: +<br/>- Giới hạn 14 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">roles: &#91;number&#93;</td>
      <td>Danh sách ID vai trò của SME<br/>- Bắt buộc nhập<br/>- Định dạng danh sách số nguyên<br/>- Giới hạn tối thiểu 1 phần tử</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">email: text</td>
      <td>Email tài khoản<br/>- Bắt buộc nhập<br/>- Định dạng email<br/>- Giới hạn 50 ký tự</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">status: text</td>
      <td>Trạng thái hoạt động của tài khoản<br/>- Bắt buộc nhập<br/>- ACTIVE: Đang hoạt động<br/>- INACTIVE: Không hoạt động</td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="12" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Kiểm tra lastname hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Kiểm tra firstname hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 3: Kiểm tra phoneNumber hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 4: Kiểm tra roles hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 5: Kiểm tra roles thuộc các vai trò của SME</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 6: Kiểm tra email hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 7: Kiểm tra email trùng lặp</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 8: Kiểm tra status hợp lệ</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 9: Lưu thông tin tài khoản vào cơ sở dữ liệu. Lưu thời điểm hiện tại vào thời gian cập nhật</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="120" valign="top"><b>Luồng phụ</b></td>
      <td colspan="3">1. lastname không hợp lệ</td>
      <td></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "lastname"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">2. firstname không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "firstname"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">3. phoneNumber không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "phoneNumber"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">4. roles không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "roles"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
    <tr>
      <td colspan="3">5. roles không phải thuộc vai trò của SME</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "roles"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.object.not.found"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">6. email không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "email"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">7. email đã tồn tại</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "email"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.duplicate.value"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="3">8. status không hợp lệ</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 400 Bad Request</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>"error": object</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#123;</td>
      <td>&nbsp;</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>timestamp: number</td>
      <td>Thời điểm request</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>message: text</td>
      <td>Mô tả lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>object: "account"</td>
      <td>Tên biến request object</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>field: "status"</td>
      <td>Tên trường dữ liệu đang gặp lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>errorCode: "error.valid.pattern"</td>
      <td>Mã lỗi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
</table>

-   **GET /{oneSME domain}/api/portal/subscription/{id}**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">&#123;URL oneSME&#125;/api/portal/subscription/&#123;id&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Lấy thông tin subscription<br/>&#123;URL oneSME&#125; là đường dẫn API do oneSME cung cấp</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">SME</td>
  </tr>
  <tr>
      <td  rowspan="8" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">id: number</td>
      <td>ID subscription</td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="57" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: oneSME truy vấn dữ liệu từ cơ sở dữ liệu và gửi đi</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">planId: number</td>
      <td>ID kế hoạch định giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">planCode: text</td>
      <td>Mã kế hoạch định giá</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">planName: text</td>
      <td>Tên kế hoạch định giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">period: number</td>
      <td>Chu kỳ thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">periodType: text</td>
      <td>Loại thời gian chu kỳ tính phí<br/>- DAILY<br/>- WEEKLY<br/>- MONTHLY<br/>- YEARLY</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">numberOfPeriod: number</td>
      <td>Số lượng chu kỳ thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">quantity: number</td>
      <td>Số lượng đăng ký cho gói dịch vụ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">unitPrice: number</td>
      <td>Đơn giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">unitId: number</td>
      <td>ID đơn vị tính</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">unitName: text</td>
      <td>Tên đơn vị tính</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">unitCurrencyId: number</td>
      <td>ID loại tiền tệ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">unitCurrencyName: text</td>
      <td>Tên loại tiền tệ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">setupFee: number</td>
      <td>Phí thiết lập</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">trialTime: number</td>
      <td>Thời gian dùng thử</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">trialType: text</td>
      <td>Loại thời gian dùng thử<br/>- DAYS: Ngày<br/>- WEEKS: Tuần<br/>- MONTHS: Tháng<br/>-YEARS: Năm</td>
 </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">TrialEndDate: text</td>
      <td>Ngày kết thúc dùng thử</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">amount: number</td>
      <td>Thành tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">status: text</td>
      <td>Trạng thái sử dụng<br/>- INTRIAL: đang dùng thử<br/>- ACTIVAED: Đã dùng chính thức<br/>- CANCELLED: Đã hủy</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">paymentDate: text</td>
      <td>Ngày thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">changedPaymentDate: text</td>
      <td>Ngày thanh toán hóa đơn thay đổi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">startDate: text</td>
      <td>Ngày bắt đầu tính phí</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">billingPeriod: number</td>
      <td>Chu kỳ tính phí</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">billingMode: text</td>
      <td>Cấu hình lựa chọn thời gian thanh toán<br/>- IMMEDIATE: Thanh toán luôn<br/>- NEXT_BILLING: Thanh toán vào chu kỳ thanh toán tiếp theo</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">addons: </td>
      <td>Dịch vụ bổ sung</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&#91;&#123;</td>
      <td>id: number</td>
      <td>ID dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Loại dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Mã dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>quantity: number</td>
      <td>Số lượng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>price: number</td>
      <td>Đơn giá dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>trialDays: number</td>
      <td>Số ngày dùng thử</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td>&nbsp;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">coupons: </td>
      <td>Chương trình khuyến mại</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&#91;&#123;</td>
      <td>id: number</td>
      <td>ID chương trình khuyến mại</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Mã chương trình khuyến mại</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên chương trình khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Hình thức khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>discount: number</td>
      <td>Giá trị giảm giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>numberOfUse: number</td>
      <td>Số lần sử dụng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>applyId: number</td>
      <td>ID gói áp dụng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>applyType: text</td>
      <td>Loại gói áp dụng<br/></td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">tax: </td>
      <td>Loại thuế</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&#91;&#123;</td>
      <td>id: number</td>
      <td>ID thuế</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên loại thuế</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>value: number</td>
      <td>Giá trị thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Loại thuế<br/>- IN: Thuế trong<br/>- OUT: Thuế ngoài</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>

-   **PUT /{oneSME domain}/api/portal/subscription/{id}**

<table>
    <tr>
      <td><b>URL</b></td>
      <td colspan="4">&#123;URL oneSME&#125;/api/portal/subscription/&#123;id&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">PUT</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Cập nhật thông tin subscription<br/>&#123;URL oneSME&#125; là đường dẫn API do oneSME cung cấp</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">SME</td>
  </tr>
  <tr>
      <td  rowspan="61" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td>Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
   <tr>
      <td colspan="3">Request Parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
   <tr>
      <td></td>
      <td colspan="2">id: number</td>
      <td>Id subscription<br/>- Bắt buộc nhập<br/>- Định dạng số nguyên</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2">planId: number</td>
      <td>ID kế hoạch định giá</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">planCode: text</td>
      <td>Mã kế hoạch định giá</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">planName: text</td>
      <td>Tên kế hoạch định giá</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">period: number</td>
      <td>Chu kỳ thanh toán</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">periodType: text</td>
      <td>Loại thời gian chu kỳ tính phí<br/>- DAILY<br/>- WEEKLY<br/>- MONTHLY<br/>- YEARLY</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">numberOfPeriod: number</td>
      <td>Số lượng chu kỳ thanh toán</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">quantity: number</td>
      <td>Số lượng đăng ký cho gói dịch vụ</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">unitPrice: number</td>
      <td>Đơn giá</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">unitId: number</td>
      <td>ID đơn vị tính</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">unitName: text</td>
      <td>Tên đơn vị tính</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">unitCurrencyId: number</td>
      <td>ID loại tiền tệ</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">unitCurrencyName: text</td>
      <td>Tên loại tiền tệ</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">setupFee: number</td>
      <td>Phí thiết lập</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">trialTime: number</td>
      <td>Thời gian dùng thử</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">trialType: text</td>
      <td>Loại thời gian dùng thử<br/>- DAYS: Ngày<br/>- WEEKS: Tuần<br/>- MONTHS: Tháng<br/>-YEARS: Năm</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">TrialEndDate: text</td>
      <td>Ngày kết thúc dùng thử</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">amount: number</td>
      <td>Thành tiền</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">status: text</td>
      <td>Trạng thái sử dụng<br/>- INTRIAL: đang dùng thử<br/>- ACTIVAED: Đã dùng chính thức<br/>- CANCELLED: Đã hủy</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">paymentDate: text</td>
      <td>Ngày thanh toán</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">changedPaymentDate</td>
      <td>Ngày thanh toán hóa đơn thay đổi</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">startDate: text</td>
      <td>Thành tiền</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">billingPeriod: number</td>
      <td>Chu kỳ tính phí</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">billingMode: text</td>
      <td>Cấu hình lựa chọn thời gian thanh toán<br/>- IMMEDIATE: Thanh toán luôn<br/>- NEXT_BILLING: Thanh toán vào chu kỳ thanh toán tiếp theo</td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">addons: array</td>
      <td>Dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td></td>
      <td>&#91;&#123;</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>id: number</td>
      <td>ID dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>type: text</td>
      <td>Loại dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>name: text</td>
      <td>Tên dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>code: text</td>
      <td>Mã dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>quantity: number</td>
      <td>Số lượng</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>price: number</td>
      <td>Đơn giá dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>trialDays: number</td>
      <td>Số ngày dùng thử</td>
  </tr>
  <tr>
      <td></td>
      <td>&#125;&#93;</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">coupons: array</td>
      <td>Chương trình khuyến mại</td>
  </tr>
  <tr>
      <td></td>
      <td>&#91;&#123;</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>id: number</td>
      <td>ID chương trình khuyến mại</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>code: text</td>
      <td>Mã chương trình khuyến mại</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>name: text</td>
      <td>Tên chương trình khuyến mại</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>type: text</td>
      <td>Hình thức khuyến mại</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>discount: number</td>
      <td>Giá trị giảm giá</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>numberOfUse: number</td>
      <td>Số lần sử dụng</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>applyId: number</td>
      <td>ID gói áp dụng</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>applyType: text</td>
      <td>Loại gói áp dụng<br/>- PLAN: gói dịch vụ/combo<br/>- ADDON: dịch vụ bổ sung<br/>- TOTAL: trên tổng hóa đơn</td>
  </tr>
  <tr>
      <td></td>
      <td>&#125;&#93;</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td colspan="2">tax: array</td>
      <td>Loại thuế</td>
  </tr>
  <tr>
      <td></td>
      <td>&#91;&#123;</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>id: number</td>
      <td>ID thuế</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>name: text</td>
      <td>Tên loại thuế</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>value: number</td>
      <td>Giá trị thuế</td>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td>type: text</td>
      <td>Loại thuế<br/>- IN: Thuế trong<br/>- OUT: Thuế ngoài</td>
  </tr>
  <tr>
      <td></td>
      <td>&#125;&#93;</td>
      <td></td>
      <td></td>
  </tr>
   <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="5" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: Tiếp nhận dữ liệu thay đổi</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Lưu lại dữ liệu thay đổi vào cơ sở dữ liệu</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>

-   **GET /{oneSME domain}/api/portal/subscription/{id}/billing**

<table>
    <tr>
      <td width="10%"><b>URL</b></td>
      <td width="90%" colspan="4">&#123;URL oneSME&#125;/api/portal/subscription/&#123;id&#125;/billing</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Lấy thông tin billing của subscription<br/> &#123;URL oneSME&#125; là đường dẫn API do oneSME cung cấp</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">SME</td>
  </tr>
  <tr>
      <td  rowspan="7" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td width="38%">Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">id: number</td>
      <td>ID subscription</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="14" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: oneSME truy vấn dữ liệu từ cơ sở dữ liệu và gửi đi</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">amountAjustment: number</td>
      <td>Số tiền điều chỉnh</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">amountRefund: number</td>
      <td>Số tiền hoàn trả</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">amountBeforeTax: number</td>
      <td>Số tiền trước thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">createdDate: date</td>
      <td>Ngày tạo billing</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">usedQuantity: number</td>
      <td>Số lượng SPDV đã sử dụng</td>
  </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#125;</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>

-   **GET /{oneSME domain}/api/portal/payment**

<table>
    <tr>
      <td width="10%"><b>URL</b></td>
      <td width="90%" colspan="4">&#123;URL oneSME&#125;/api/portal/payment</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Lấy thông tin payment<br/> &#123;URL oneSME&#125; là đường dẫn API do oneSME cung cấp</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">SME</td>
  </tr>
  <tr>
      <td  rowspan="3" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td width="38%">Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="33" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: oneSME truy vấn dữ liệu từ cơ sở dữ liệu và gửi đi</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">offline: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>collectorId: number</td>
      <td>ID Người thu tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>collectorName: text</td>
      <td>Tên người thu tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>payerId: number</td>
      <td>ID người trả tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>payerName: text</td>
      <td>Tên người trả tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>address: text</td>
      <td>Địa chỉ thu tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVATED: Đang hoạt động<br/>- CANCELLED: Đã hủy</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">card: &#91;&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>cardType: text</td>
      <td>Loại thẻ<br/>- ATM: Thẻ thanh toán nội địa<br/>- VISA: Thẻ visa</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>cardNumber: text</td>
      <td>Số thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>bankId: text</td>
      <td>ID ngân hàng phát hành thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>bankName: text</td>
      <td>Tên ngân hàng phát hành thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>customerName:text</td>
      <td>Tên chủ thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>password: text</td>
      <td>Mật khẩu thẻ (nếu có)</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>expiredMonth: number</td>
      <td>Tháng thẻ hết hiệu lực</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>expiredYear: number</td>
      <td>Tên chủ thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>customerName:text</td>
      <td>Năm thẻ hết hiệu lực</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVATED: Đang hoạt động<br/>- CANCELLED: Đã hủy</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">vnptPay: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>account: text</td>
      <td>Tài khoản VNPT Pay</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVATED: Đang hoạt động<br/>- CANCELLED: Đã hủy</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#125;</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>

-   **GET /{oneSME domain}/api/portal/invoice/{id}**

<table>
    <tr>
      <td width="10%"><b>URL</b></td>
      <td width="90%" colspan="4">&#123;URL oneSME&#125;/api/portal/invoice/&#123;id&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Lấy thông tin hóa đơn<br/> &#123;URL oneSME&#125; là đường dẫn API do oneSME cung cấp</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">SME</td>
  </tr>
  <tr>
      <td  rowspan="7" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td width="38%">Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">id: number</td>
      <td>ID invoice</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td rowspan="32" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: oneSME truy vấn dữ liệu từ cơ sở dữ liệu và gửi đi</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
       <td colspan="2">&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">id: number</td>
      <td>ID hóa đơn</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">code: text</td>
      <td>Số/mã hóa đơn</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">additionalType: text</td>
      <td>Loại phí bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">additionalFee: number</td>
      <td>Cước phí bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">amountAfterTax: number</td>
      <td>Số tiền sau thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">inword: text</td>
      <td>Số tiền viết bằng chữ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">invoiceDate: text</td>
      <td>Ngày hóa đơn</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">status: text</td>
      <td>Trạng thái hóa đơn:<br/>- PAID: Đã thanh toán<br/>- PAYMENT_DUE: Đến hạn thanh toán<br/>- NOT_PAID: Chưa thanh toán<br/>- PENDING: chờ thanh toán<br/>- VOIDED: vô hiệu hóa<br/>- REMOVED: đã xóa</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">totalAmount: number</td>
      <td>Tổng tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">items: &#91;&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Mã item</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên item</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>unit: text</td>
      <td>Đơn vị tính:<br/>- SERVICE: SPDV<br/>- COMBO: combo<br/>- ADDON: dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>price: number</td>
      <td>Đơn giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>quantity: number</td>
      <td>Số lượng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>amount: number</td>
      <td>Thành tiền</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">tax: &#123;</td>
      <td>Loại thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên loại thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>value: number</td>
      <td>Giá trị thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Loại thuế<br/>- IN: Thuế trong<br/>- OUT: Thuế ngoài</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2">&#125;</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>

#### APIs do SPDV cung cấp

-   **GET /{URL SPDV}/?token={SME token}**
<table>
    <tr>
      <td width="10%"><b>URL</b></td>
      <td width="90%" colspan="4">&#123;URL SPDV&#125;/?token=&#123;SMEToken&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">GET</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">Chuyển hướng người dùng truy cập vào hệ thống SPDV<br/> &#123;URL SPDV&#125; là đường dẫn đến tenant của SME trên hệ thống SPDV</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Tài khoản SME</td>
  </tr>
  <tr>
      <td  rowspan="7" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td width="38%">Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">SMEToken: text</td>
      <td>Token người dùng SME đăng nhập vào oneSME<br/>- Bắt buộc nhập</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td valign="top"><b>Luồng chính</b></td>
      <td colspan="3">Bước 1: oneSME gọi URL khi SME chọn SPDV</td>
      <td></td>
  </tr>
  <tr>
      <td><b>Luồng phụ</b></td>
      <td colspan="4"></td>
  </tr>
</table>

-   **POST /{URL SPDV}/onesme/transaction?token={SMEToken}**

<table>
    <tr>
      <td width="10%"><b>URL</b></td>
      <td width="90%" colspan="4">&#123;URL SPDV&#125;/onesme/transaction?token=&#123;SMEToken&#125;</td>
	</tr>
    <tr>
      <td><b>Method</b></td>
      <td colspan="4">POST</td>
  </tr>
  <tr>
      <td><b>Mô tả</b></td>
      <td colspan="4">oneSME gửi thông tin SME, gói thuê bao, cước phí, thanh toán, hóa đơn của SME<br/> &#123;URL SPDV&#125; là đường dẫn đến tenant của SME trên hệ thống SPDV</td>
  </tr>
  <tr>
      <td><b>Tác nhân</b></td>
      <td colspan="4">Hệ thống oneSME</td>
  </tr>
  <tr>
      <td  rowspan="153" valign="top"><b>Request</b></td>
      <td colspan="3"></td>
      <td width="38%">Mô tả</td>
  </tr>
  <tr>
      <td colspan="3">Header</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Authorization: Bearer token</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Content-type: application/json</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Request parameters</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">SMEToken: text</td>
      <td>Token người dùng SME đăng nhập vào oneSME<br/>- Bắt buộc nhập</td>
  </tr>
  <tr>
      <td>&#125;</td>
      <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Body</td>
      <td></td>
  </tr>
  <tr>
      <td>&#123;</td>
       <td colspan="2"></td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">sme: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>icon: text</td>
      <td>URL ảnh đại diện doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>coverImage: text</td>
      <td>URL ảnh bìa doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>phoneNumber: text</td>
      <td>Số điện thoại của doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>email: text</td>
      <td>Email của doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>countryId: number</td>
      <td>ID quốc gia</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>countryName: text</td>
      <td>Tên quốc gia</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>provinceId: number</td>
      <td>ID tỉnh/thành phố</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>provinceName: text</td>
      <td>Tên tỉnh/thành phố</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>districtId: number</td>
      <td>ID quận/huyện</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>districtName: text</td>
      <td>Tên quận/huyện</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>address: text</td>
      <td>Địa chỉ doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>website: text</td>
      <td>Website doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>description: text</td>
      <td>Giới thiệu doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>taxCode: text</td>
      <td>Mã số thuế doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessScaleId: number</td>
      <td>ID quy mô doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessScaleName: text</td>
      <td>Tên quy mô doanh nghiệp</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessAreasId: number</td>
      <td>ID lĩnh vực kinh doanh</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>businessAreasName: text</td>
      <td>Tên lĩnh vực kinh doanh</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">employees: &#91;&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: text</td>
      <td>Id nhân viên</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên employee</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>email: text</td>
      <td>Email tài khoản</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVE: Đang hoạt động<br/>- INACTIVE: Không hoạt động<br/>- REMOVED: Đã xóa</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>avatar: text</td>
      <td>URL ảnh đại diện employee</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>phoneNumber: text</td>
      <td>Số điện thoại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>department: text</td>
      <td>Tên phòng ban</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>isAdmin: boolean</td>
      <td>Nhân viên có quyền quản trị SPDV<br/>- TRUE: Nhân viên có quyền quản trị SPDV<br/>- FALSE: Không có quyền</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">subscription: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID của subscription</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>pricingId: number</td>
      <td>ID kế hoạch định giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>pricingCode: text</td>
      <td>Mã kế hoạch định giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>pricingName: text</td>
      <td>Tên kế hoạch định giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>period: number</td>
      <td>Chu kỳ thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>periodType: text</td>
      <td>Loại thời gian chu kỳ tính phí<br/>- DAILY<br/>- WEEKLY<br/>- MONTHLY<br/>- YEARLY</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>numberOfPeriod: number</td>
      <td>Số lượng chu kỳ thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>quantity: number</td>
      <td>Số lượng đăng ký cho gói dịch vụ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>unitPrice: number</td>
      <td>Đơn giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>unitId: number</td>
      <td>ID đơn vị tính</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>unitName: text</td>
      <td>Tên đơn vị tính</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>unitCurrencyId: number</td>
      <td>ID loại tiền tệ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>unitCurrencyName: text</td>
      <td>Tên loại tiền tệ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>setupFee: number</td>
      <td>Phí thiết lập</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>trialTime: number</td>
      <td>Thời gian dùng thử</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>trialType: text</td>
      <td>Loại thời gian dùng thử<br/>- DAYS: Ngày<br/>- WEEKS: Tuần<br/>- MONTHS: Tháng<br/>-YEARS: Năm</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>trialEndDate: text</td>
      <td>Ngày kết thúc dùng thử</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>amount: number</td>
      <td>Thành tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái sử dụng<br/>- INTRIAL: đang dùng thử<br/>- ACTIVAED: Đã dùng chính thức<br/>- CANCELLED: Đã hủy</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>paymentDate: text</td>
      <td>Ngày thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>changedPaymentDate</td>
      <td>Ngày thanh toán hóa đơn thay đổi</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>startDate: text</td>
      <td>Ngày bắt đầu tính phí</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>billingPeriod: number</td>
      <td>Ngày thanh toán</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>billingMode: text</td>
      <td>Cấu hình lựa chọn thời gian thanh toán<br/>- IMMEDIATE: Thanh toán luôn<br/>- NEXT_BILLING: Thanh toán vào chu kỳ thanh toán tiếp theo</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">addons: &#91;&#123;</td>
      <td>Dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Loại dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Mã dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>quantity: number</td>
      <td>Số lượng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>price: number</td>
      <td>Đơn giá dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>trialDays: number</td>
      <td>Số ngày dùng thử</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">coupons: &#91;&#123;</td>
      <td>Chương trình khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID chương trình khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Mã chương trình khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên chương trình khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Mã dịch vụ bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Hình thức khuyến mại</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>discount: number</td>
      <td>Giá trị giảm giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>numberOfUse: number</td>
      <td>Số lần sử dụng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>applyId: number</td>
      <td>ID gói áp dụng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>applyType: text</td>
      <td>Loại gói áp dụng<br/>- PLAN: gói dịch vụ/combo<br/>- ADDON: dịch vụ bổ sung<br/>- TOTAL: trên tổng hóa đơn</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2">tax: &#91;&#123;</td>
      <td>Loại thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên loại thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>value: number</td>
      <td>Giá trị thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Loại thuế<br/>- IN: Thuế trong<br/>- OUT: Thuế ngoài</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">billing: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>amountAdjustment: number</td>
      <td>Số tiền điều chỉnh</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>amountRefund: number</td>
      <td>Số tiền hoàn trả</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>amountBeforeTax: number</td>
      <td>Số tiền trước thuế</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>createdDate: date</td>
      <td>Ngày tạo billing</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>usedQuantity: number</td>
      <td>Số lượng SPDV đã sử dụng</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">payment: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>offline: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">collectorId: number</td>
      <td>ID Người thu tiền</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">collectorName: text</td>
      <td>Tên người thu tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">payerId: number</td>
      <td>ID người trả tiền</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">payerName: text</td>
      <td>Tên người trả tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">address: text</td>
      <td>Địa chỉ thu tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVATED: Đang hoạt động<br/>- CANCELLED: Đã hủy</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>card: &#91;&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">cardType: text</td>
      <td>Loại thẻ<br/>- ATM: Thẻ thanh toán nội địa<br/>- VISA: Thẻ visa</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">cardNumber: text</td>
      <td>Số thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">bankId: text</td>
      <td>ID ngân hàng phát hành thẻ</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">bankName: text</td>
      <td>Tên ngân hàng phát hành thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">customerName:text</td>
      <td>Tên chủ thẻ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">password: text</td>
      <td>Mật khẩu thẻ (nếu có)</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">expiredMonth: number</td>
      <td>Tháng thẻ hết hiệu lực</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">expiredYear: number</td>
      <td>Năm thẻ hết hiệu lực</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVATED: Đang hoạt động<br/>- CANCELLED: Đã hủy</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>vnptPay: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">account: text</td>
      <td>Tài khoản VNPT Pay</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">password: text</td>
      <td>Mật khẩu VNPT Pay</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">status: text</td>
      <td>Trạng thái hoạt động<br/>- ACTIVATED: Đang hoạt động<br/>- CANCELLED: Đã hủy</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
      <td></td>
   </tr>
   <tr>
      <td>&nbsp;</td>
      <td colspan="2">invoice: &#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: text</td>
      <td>ID hóa đơn</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>code: text</td>
      <td>Số/mã hóa đơn</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>additionalType: text</td>
      <td>Loại phí bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>additionalFee: number</td>
      <td>Cước phí bổ sung</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>amountAfterTax: number</td>
      <td>Số tiền sau thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>inword: text</td>
      <td>Số tiền viết bằng chữ</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>invoiceDate: text</td>
      <td>Ngày hóa đơn</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>status: text</td>
      <td>Trạng thái hóa đơn:<br/>- PAID: Đã thanh toán<br/>- PAYMENT_DUE: Đến hạn thanh toán<br/>- NOT_PAID: Chưa thanh toán<br/>- PENDING: chờ thanh toán<br/>- VOIDED: vô hiệu hóa<br/>- REMOVED: đã xóa</td>
	  </tr>
      <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>totalAmount: number</td>
      <td>Tổng tiền</td>
  </tr>
     <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>items: &#91;&#123;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">code: text</td>
      <td>Mã item</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">name: text</td>
      <td>Tên item</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">unit: text</td>
      <td>Đơn vị tính:</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">price: number</td>
      <td>Đơn giá</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">quantity: number</td>
      <td>Số lượng</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td align="center">amount: number</td>
      <td>Thành tiền</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;&#93;</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">tax: &#123;</td>
      <td>Loại thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>id: number</td>
      <td>ID thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>name: text</td>
      <td>Tên loại thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>value: number</td>
      <td>Giá trị thuế</td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>type: text</td>
      <td>Loại thuế<br/>- IN: Thuế trong<br/>- OUT: Thuế ngoài</td>
  </tr>
   <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td></td>
   </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&#125;</td>
      <td>&nbsp;</td>
      <td></td>
   </tr>
    <tr>
      <td>&#125;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td></td>
   </tr>
   <tr>
      <td rowspan="5" valign="top"><b>Luồng chính</b></td>
  </tr>
  <tr>
      <td colspan="3">Bước 1: oneSME truy vấn dữ liệu từ cơ sở dữ liệu và gửi dữ liệu sang SPDV</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Bước 2: Gửi lại thông tin sau 1 khoảng thời gian nếu SPDV không phản hồi nhận dữ liệu thành công</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="3">Response</td>
      <td></td>
  </tr>
  <tr>
      <td>&nbsp;</td>
      <td colspan="2">Status: 200 OK</td>
      <td></td>
  </tr>
  <tr>
      <td colspan="4"><b>Luồng phụ</b></td>
      <td></td>
  </tr>
</table>
