
        document.getElementById("signupForm").addEventListener("submit", function(event) {
            event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم
            
            // دریافت مقادیر ورودی‌ها
            let fullName = document.getElementById("fullName").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            
            // پاک کردن پیام‌های خطا قبل از بررسی مجدد
            document.getElementById("fullNameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("passwordError").textContent = "";
            document.getElementById("confirmPasswordError").textContent = "";
            
            let isValid = true; // متغیر برای بررسی اعتبار فرم
            
            // بررسی پر شدن فیلد نام کامل
            if (fullName === "") {
                document.getElementById("fullNameError").textContent = "لطفاً نام کامل را وارد کنید";
                isValid = false;
            }
            
            // بررسی فرمت ایمیل
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "ایمیل نامعتبر است";
                isValid = false;
            }
            
            // بررسی طول رمز عبور
            if (password.length < 8) {
                document.getElementById("passwordError").textContent = "رمز عبور باید حداقل ۸ کاراکتر باشد";
                isValid = false;
            }
            
            // بررسی مطابقت رمز عبور و تکرار آن
            if (password !== confirmPassword) {
                document.getElementById("confirmPasswordError").textContent = "رمز عبور مطابقت ندارد";
                isValid = false;
            }
            
            // اگر همه فیلدها معتبر باشند، ثبت‌نام موفقیت‌آمیز خواهد بود
            if (isValid) {
                alert("ثبت‌نام با موفقیت انجام شد!");
            }
            Document.getElementById("signupForm").submit();
        });
        // switch mode 
        let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})