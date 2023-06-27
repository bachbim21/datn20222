package rsa.sp.lgo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import java.io.UnsupportedEncodingException;
import javax.mail.internet.MimeMessage;

@Configuration
public class MailService {
    @Autowired
    private JavaMailSender mailSender;
    @Value("${spring.mail.username}")
    private String sender;
    @Value("${lgo.url}")
    private String url;
    public void sendEmail(String recipientEmail, String token)
            throws  UnsupportedEncodingException, javax.mail.MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        String urlResponse = url + "/" + "reset-password?token=" + token + "&email=" + recipientEmail;
        helper.setFrom(sender, "Lgo");
        helper.setTo(recipientEmail);

        String subject = "Request reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Here is link to reset password:</p>"
                + "<a href=" + urlResponse + ">Link</a>"
                + "<br>"
                + "<p>Link lasts for 5 minutes</p>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }
}
