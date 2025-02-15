<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // بررسی اینکه همه فیلدها ارسال شده‌اند
    if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["Password"]) || empty($_POST["confirmPassword"])) {
        echo "لطفاً همه فیلدها را پر کنید.";
        exit;
    }

    // دریافت داده‌ها
    $name = $_POST["fullName"];
    $email = $_POST["email"];
    $password = $_POST["Password"];
    $confirm_password = $_POST["confirmPassword"];

    // بررسی اعتبار ایمیل
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "ایمیل وارد شده معتبر نیست.";
        exit;
    }

    // بررسی اینکه رمز عبور و تکرار رمز عبور یکسان هستند
    if ($password !== $confirm_password) {
        echo "رمز عبور و تکرار رمز عبور باید یکسان باشند.";
        exit;
    }

    // اگر همه اعتبارسنجی‌ها درست باشند، می‌توانید داده‌ها را پردازش کنید
    echo "داده‌ها با موفقیت دریافت شد.";
} else {
    echo "فرم به درستی ارسال نشده است.";
}
?>


</body>
</html>