# EmailJS Setup Guide for Contact Form

यह guide आपको EmailJS को setup करने में मदद करेगा ताकि contact form से emails भेजे जा सकें।

---

## Step 1: EmailJS Dashboard में जाएँ

1. https://www.emailjs.com/ पर जाएँ
2. अपने account में **login** करें (आपने पहले से create कर लिया है)
3. Dashboard खुल जाएगा

---

## Step 2: Email Service जोड़ें

1. Dashboard में बाएँ तरफ **"Email Services"** को click करें
2. **"Add Service"** button को click करें
3. **Gmail** को चुनें (या अपनी email provider चुनें)
4. Gmail को select करने पर एक form दिखेगा:
   - **Service Name**: `Gmail` रखें (या कोई नाम दें)
   - **Gmail Account**: अपना gmail (lalitmehta778@gmail.com) enter करें
5. **Connect Account** button को click करें
6. एक popup खुलेगा जहाँ आपको अपने Gmail credentials देने होंगे
   - अपना email और password enter करें
   - Google को authorize करें
7. Service बन जाएगी। अब आपके पास एक **Service ID** होगी (जैसे `service_abc123`)
   - इसे copy करके कहीं save करें

---

## Step 3: Email Template बनाएँ

1. Dashboard में **"Email Templates"** को click करें
2. **"Create New Template"** button को click करें
3. Template create होगा। नीचे दिए गए settings करें:

### Template Settings:

**Template Name**: `Contact Form Submission`

**Email To**: `lalitmehta778@gmail.com`

**Email Subject**: `New Contact Form Submission from {{from_name}}`

**Email Body** (नीचे दिया गया code paste करें):

```
Hello,

You have received a new contact form submission:

---

**Name:** {{from_name}}
**Email:** {{from_email}}
**Mobile:** {{mobile}}

**Message:**
{{message}}

---

Please reply at your earliest convenience.

Best regards,
Wipeout Facility Management Website
```

4. Save करने से पहले **"Test It"** button से test करें:
   - Test data fill करें
   - अपने email पर test message आएगा
   - اگر success है तो आगे बढ़ें
5. **Save Template** button को click करें
6. Template save हो जाएगा। अब आपके पास एक **Template ID** होगी (जैसे `template_xyz789`)
   - इसे भी copy करके save करें

---

## Step 4: User ID / Public Key प्राप्त करें

1. Dashboard के top-right में अपने **profile icon** पर click करें
2. **"Account"** को click करें
3. **Public Key** (या User ID) दिखेगी - कुछ ऐसी दिखती है: `abc123def456ghi`
4. इसे copy करके save करें

---

## Step 5: Environment Variables Setup करें

अब आपके पास ये तीन चीजें होंगी:
- **Service ID** (जैसे: `service_abc123`)
- **Template ID** (जैसे: `template_xyz789`)
- **User ID / Public Key** (जैसे: `abc123def456ghi`)

अब project में `.env` file बनाएँ:

### File: `client/.env`

```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_USER_ID=abc123def456ghi
```

**Important**: अपनी actual IDs को ऊपर paste करें।

---

## Step 6: Dev Server Restart करें

1. Terminal खोलें और जाएँ:
```powershell
cd C:\Users\HP-PC\wipeout-facility-management-\client
```

2. अगर dev server पहले से चल रहा है तो **Ctrl+C** दबाकर बंद करें

3. फिर से start करें:
```powershell
npm run dev
```

यह step जरूरी है ताकि Vite आपके `.env` file को pick up करे।

---

## Step 7: Test करें

1. Browser में website खोलें (http://localhost:5173)
2. नीचे **"Get in Touch"** section में जाएँ
3. Form भरें:
   - First Name: John
   - Last Name: Doe
   - Email: test@example.com
   - Mobile: 9876543210
   - Message: Test message
4. **"Send Message"** button को click करें
5. Button पर "Sending..." दिखना चाहिए
6. कुछ seconds बाद एक **success toast** आएगा
7. आपके **lalitmehta778@gmail.com** पर email आएगा ✅

---

## Troubleshooting

### Problem: "Email service is not configured" error दिख रहा है

**Solution**: 
- `.env` file check करें कि सभी तीनों variables सही हैं
- Dev server को restart करें (Ctrl+C फिर npm run dev)

### Problem: Email नहीं आ रही

**Solution**:
- EmailJS dashboard में देखें कि template सही है या नहीं
- Gmail account में "Less secure apps" को allow करें (अगर पूछा जाए)
- EmailJS की "Logs" में जाकर error message देखें

### Problem: CORS या network error

**Solution**:
- Internet connection check करें
- EmailJS की official documentation देखें: https://www.emailjs.com/docs/

---

## Important Notes

⚠️ **Security**:
- `.env` file को **git में commit न करें** (अभी करने की ज़रूरत नहीं, पर future के लिए)
- EmailJS के public keys सभी को दिख सकते हैं (ये safe है)

✅ **Testing के लिए अभी ठीक है**

📧 **Future में सुरक्षा बढ़ानी हो तो**:
- Backend server बनाएँ जो emails भेजे
- या Netlify/Vercel functions use करें

---

## अगर कोई issue हो तो बताइए! 🚀

