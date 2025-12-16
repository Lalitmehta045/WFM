# PHP Mail Setup for Hostinger

## 🚀 Quick Setup Guide

### 1. Files to Upload
Upload these files to your Hostinger public_html folder:

```
├── contact-form-handler.php    (PHP backend)
├── dist/                       (Your React build)
│   ├── index.html
│   ├── assets/
│   └── ...
```

### 2. Configure Email Address

Edit `contact-form-handler.php` and update your email:

```php
$to_email = "your-email@domain.com"; // Change this to your email
```

### 3. Build React App

```bash
npm run build
```

### 4. Upload to Hostinger

1. Go to Hostinger File Manager
2. Upload `dist/` folder contents to `public_html/`
3. Upload `contact-form-handler.php` to `public_html/`
4. Make sure PHP file permissions are set to 644

### 5. Test the Form

1. Visit your website
2. Fill out the contact form
3. Submit and check:
   - Success message on screen
   - Email in your inbox
   - Check spam folder too

## 🔧 Troubleshooting

### If Email Not Sending:

1. **Check PHP Mail Function:**
   ```php
   // Create test-mail.php
   <?php
   if (mail("your-email@domain.com", "Test", "Test message")) {
       echo "Mail sent successfully!";
   } else {
       echo "Mail sending failed.";
   }
   ?>
   ```

2. **Check Hostinger Email Settings:**
   - Go to Hostinger Panel → Email → Email Accounts
   - Ensure email account exists
   - Check email forwarding if needed

3. **Check PHP Error Logs:**
   - Hostinger Panel → Advanced → PHP Configuration
   - Look for error logs

### Common Issues & Solutions:

| Issue | Solution |
|-------|----------|
| CORS Error | Add `header("Access-Control-Allow-Origin: *");` in PHP |
| 404 Error | Ensure PHP file is in public_html folder |
| 500 Error | Check PHP syntax and permissions |
| No Email | Check spam folder, verify email address |

### Alternative: SMTP Configuration

If PHP mail doesn't work, use SMTP:

```php
// Add this to contact-form-handler.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@domain.com';
$mail->Password = 'your-email-password';
$mail->SMTPSecure = PHPMailer::SMTP::STARTTLS;
$mail->Port = 587;
```

## 📱 Testing

1. **Form Submission Test:**
   - Fill all fields
   - Click submit
   - Check success message

2. **Email Delivery Test:**
   - Check inbox within 5 minutes
   - Check spam folder
   - Verify all form data is present

3. **Mobile Test:**
   - Test on mobile devices
   - Ensure responsive design works

## 🎯 Success Checklist

- [ ] PHP file uploaded to public_html
- [ ] Email address configured
- [ ] React app built and uploaded
- [ ] Form submission works
- [ ] Email received successfully
- [ ] Mobile responsive working

## 📞 Support

If you face issues:

1. Check Hostinger documentation
2. Verify PHP version (7.4+ recommended)
3. Contact Hostinger support for email issues
4. Test with different email providers

---

**Note:** This setup works perfectly with Hostinger's shared hosting plans. No additional plugins required!
