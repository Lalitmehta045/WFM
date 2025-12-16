<?php
// Contact Form Handler for Hostinger
// This script handles form submission and sends email

// Configuration
$to_email = "support@wipeoutmanagement.com"; // Your email where you want to receive messages
$from_email = "noreply@wipeoutmanagement.com"; // From email for the server

// Set headers to prevent CORS issues
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Get JSON data from request body
$json_data = file_get_contents('php://input');
$data = json_decode($json_data);

// Validate required fields
if (!$data || !isset($data->name) || !isset($data->email) || !isset($data->message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

// Sanitize input data
$name = filter_var($data->name, FILTER_SANITIZE_STRING);
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$mobile = isset($data->mobile) ? filter_var($data->mobile, FILTER_SANITIZE_STRING) : '';
$message = filter_var($data->message, FILTER_SANITIZE_STRING);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address"]);
    exit;
}

// Prepare email
$subject = "New Contact Form Submission from Wipeout Website";
$email_body = "
You have received a new message from the contact form on Wipeout Facility Management website.

Name: $name
Email: $email
Mobile: $mobile

Message:
$message

---
This email was sent from the contact form on your website.
Date: " . date('Y-m-d H:i:s');

// Email headers
$headers = "From: $from_email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
try {
    if (mail($to_email, $subject, $email_body, $headers)) {
        // Success response
        echo json_encode([
            "success" => true, 
            "message" => "Message sent successfully!",
            "data" => [
                "name" => $name,
                "email" => $email,
                "timestamp" => date('Y-m-d H:i:s')
            ]
        ]);
    } else {
        // Email sending failed
        http_response_code(500);
        echo json_encode([
            "success" => false, 
            "message" => "Failed to send email. Please try again later."
        ]);
    }
} catch (Exception $e) {
    // Exception occurred
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Server error: " . $e->getMessage()
    ]);
}
?>
