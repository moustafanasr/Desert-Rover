# خطوات تشغيل وعرض Desert Rover للكلاينت

ده مشروع Frontend تفاعلي مبني على التصميم المرجعي اللي أرسلته، باستخدام HTML وCSS وJavaScript وGSAP وScrollTrigger وPolyfills. **المشروع عرض تجريبي وليس موقع WordPress شغال على سيرفر حقيقي بعد.**

## تشغيل المشروع على جهازك

1. فك ضغط الملف ZIP.
2. افتح فولدر `desert-rover-preview`.
3. افتح `index.html` في المتصفح، أو الأفضل تشغله من Terminal بالأمر:

```bash
python -m http.server 8000
```

بعدها افتح: `http://localhost:8000/`

## رفع المشروع على GitHub

اعمل Repository جديد على GitHub باسم `desert-rover-demo`، وبعدها من داخل فولدر المشروع نفذ:

```bash
git init
git add .
git commit -m "Desert Rover client preview"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/desert-rover-demo.git
git push -u origin main
```

بدّل `YOUR_USERNAME` باسم حساب GitHub بتاعك. لو الـRepository موجود بالفعل ومتربط بمشروع، راجع إعداد الـremote قبل ما تنفذ أمر إضافته.

بعد الرفع افتح **Settings → Pages** واختار **Deploy from a branch** ثم **main** و **/(root)** واضغط **Save**.

رابط الموقع بعد النشر هيبقى بالشكل ده:

`https://YOUR_USERNAME.github.io/desert-rover-demo/`

## تعديل الموقع

- **الستايل والألوان:** `assets/css/style.css`.
- **المحتوى والصفحات والتفاعلات والترجمة:** `assets/js/app.js`.
- **الصور:** `assets/images/`.
- **شكل التصميم الأصلي:** `design-reference.png`.
- **الصفحة الرئيسية:** `index.html` (وغيرها من صفحات HTML كلها بتستخدم نفس كود JavaScript المشترك).

## ملاحظات أساسية

- اللغات الموجودة: English / Deutsch / العربية.
- الأسعار والتقييمات والبرامج في الـDemo للتوضيح فقط؛ لازم تتأكد من معلومات العميل قبل استخدامها بشكل تجاري.
- الحجز الحالي بيعرض تجربة الحجز وبيحفظ بيانات تجريبية في متصفحك **فقط**. مفيش بوابة دفع أو إيميلات أو نظام توافر حقيقي.
- التأكد من موافقات تصوير واستخدام صور العملاء — وبالأخص صور الأطفال — قبل رفعها على Repository عام.
- بعد موافقة العميل على التصميم، نحول المكونات لقالب WordPress Custom Theme ونوصلها بـWooCommerce والـBooking Engine وبوابة الدفع، ونبني لوحة الإدارة لتعديل الرحلات والأسعار والتواريخ والترجمة.
