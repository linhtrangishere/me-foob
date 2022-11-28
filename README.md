## `npm start`

Chạy chương trình với chế độ development
Mở [http://localhost:3000](http://localhost:3000) để kiểm tra.

## `npm run db`

Khởi động AIP để fetch
Mở [http://localhost:5000](http://localhost:5000) để kiểm tra.

## `Ghi chú`

-Vào src\layouts\components\Home\Home.js để xem cách fetch API

#### `Trong DbFiles`

-sever.js không cần đụng tới

-Folder routes là đường dẫn chính để client request

    +index.js là file nguồn

    +site.js là file con (dựa đó để tạo các đường dẫn khác)

-Folder controller (như tên gọi): Chứa components để truyền vào routes

#### `Tạo file '.env' trong thư mục 'backend'`

-Với nội dung:

    DB_SERVER_NAME=`Server name trong SQL Server`

    DB_USERNAME=`Tên user sử dụng trong SQL Server`

    DB_PASSWORD=`Password sử dụng trong SQL Server`