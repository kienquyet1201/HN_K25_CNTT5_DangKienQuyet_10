let currentGateCode = "";
let isGateValid = false;
let totalRevenue = 0;
let totalGateSales = 0;

while (true) {
    let choice = prompt(`HỆ THỐNG BÁN VÉ KHU VUI CHƠI DREAM PARK
1. Nhập và kiểm chuẩn mã vé cổng
2. Tính tiền vé trò chơi
3. Thẩm định mã vé cổng may mắn
0. Thoát chương trình
Vui lòng nhập lựa chọn của bạn (0 - 3):`);

    if (choice === null) {
        console.log("bạn đã thoát");
        break;
    }

    choice = choice.trim();

    switch (choice) {
        case "1": {
            currentGateCode = "";
            isGateValid = false;

            let input = prompt("Nhập mã vé cổng:");

            if (input === null) {
                console.log("Chưa nhập mã vé cổng");
                break;
            }

            input = input.trim().toUpperCase();

            if (input === "") {
                console.log("Chưa nhập mã vé cổng");
                break;
            }

            if (input.length < 6) {
                console.log("Lỗi: Độ dài mã vé nhỏ hơn 6 ký tự");
                break;
            }

            if (input.startsWith("PRK-") === false) {
                console.log('Lỗi: Sai tiền tố "PRK-"');
                break;
            }

            let hasSpace = false;

            for (let i = 0; i < input.length; i++) {
                if (input[i].trim() === "") {
                    hasSpace = true;
                    break;
                }
            }

            if (hasSpace === true) {
                console.log("Lỗi: Mã vé chứa khoảng trắng ở giữa");
                break;
            }

            currentGateCode = input;
            isGateValid = true;

            console.log("Mã vé cổng hợp lệ: " + currentGateCode);
            break;
        }

        case "2": {
            if (isGateValid === false) {
                console.log("Chưa có mã vé cổng hợp lệ. Vui lòng chọn chức năng 1 trước.");
                break;
            }

            let rideCount = 0;
            let pricePerRide = 0;
            let isCancelled = false;

            while (true) {
                let input = prompt("Nhập số vé trò chơi:");

                if (input === null) {
                    isCancelled = true;
                    break;
                }

                input = input.trim();

                if (input === "") {
                    console.log("Lỗi: Số vé trò chơi phải là số nguyên lớn hơn 0");
                } else {
                    let number = Number(input);

                    if (isNaN(number) || number <= 0 || number % 1 !== 0) {
                        console.log("Lỗi: Số vé trò chơi phải là số nguyên lớn hơn 0");
                    } else {
                        rideCount = number;
                        break;
                    }
                }
            }

            if (isCancelled === true) {
                console.log("Đã hủy giao dịch");
                break;
            }

            while (true) {
                let input = prompt("Nhập giá mỗi vé trò chơi:");

                if (input === null) {
                    isCancelled = true;
                    break;
                }

                input = input.trim();

                if (input === "") {
                    console.log("Lỗi: Giá mỗi vé trò chơi phải là số nguyên lớn hơn 0");
                } else {
                    let number = Number(input);

                    if (isNaN(number) || number <= 0 || number % 1 !== 0) {
                        console.log("Lỗi: Giá mỗi vé trò chơi phải là số nguyên lớn hơn 0");
                    } else {
                        pricePerRide = number;
                        break;
                    }
                }
            }

            if (isCancelled === true) {
                console.log("Đã hủy giao dịch");
                break;
            }

            let baseCost = rideCount * pricePerRide;
            let discount = 0;

            if (rideCount >= 4) {
                discount = Math.round(baseCost * 0.1);
            }

            let insurance = Math.round((baseCost - discount) * 0.08);
            let totalPayment = baseCost - discount + insurance;

            console.log("==================================================");
            console.log("HÓA ĐƠN VÉ TRÒ CHƠI");
            console.log("==================================================");
            console.log("Mã vé cổng: " + currentGateCode);
            console.log("Số vé trò chơi: " + rideCount);
            console.log("Giá mỗi vé trò chơi: " + pricePerRide.toLocaleString("vi-VN") + " VNĐ");
            console.log("Chi phí cơ sở: " + baseCost.toLocaleString("vi-VN") + " VNĐ");
            console.log("Tiền giảm giá: " + discount.toLocaleString("vi-VN") + " VNĐ");
            console.log("Phí bảo hiểm tai nạn: " + insurance.toLocaleString("vi-VN") + " VNĐ");
            console.log("Tổng thanh toán: " + totalPayment.toLocaleString("vi-VN") + " VNĐ");
            console.log("==================================================");

            totalRevenue = totalRevenue + totalPayment;
            totalGateSales = totalGateSales + 1;

            currentGateCode = "";
            isGateValid = false;
            break;
        }

        case "0": {
            console.log("Bạn đã thoát chương trình. Tạm biệt!");
            break;
        }

        default: {
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập từ 0 đến 2.");
            break;
        }
    }

    if (choice === "0") {
        break;
    }
}