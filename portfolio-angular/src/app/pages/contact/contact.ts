import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Footer } from '../../shared/footer/footer';

const SERVICE_ID = 'service_ymv8p1n';
const TEMPLATE_ID = 'template_dj9qhxj';
const PUBLIC_KEY = 'WWfcMwdLgkTVrn3Rp';

@Component({
  imports: [FormsModule, Footer],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  readonly name = signal('');
  readonly email = signal('');
  readonly phone = signal('');
  readonly subject = signal('');
  readonly message = signal('');

  readonly sending = signal(false);

  onSubmit(): void {
    const name = this.name().trim();
    const email = this.email().trim();
    const message = this.message().trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    this.sending.set(true);

    setTimeout(() => {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, this.contactForm.nativeElement, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            alert("Message sent successfully! I'll be in touch soon.");
            this.contactForm.nativeElement.reset();
            this.name.set('');
            this.email.set('');
            this.phone.set('');
            this.subject.set('');
            this.message.set('');
          },
          (error) => {
            console.error('FAILED...', error);

            let errorMessage = 'Failed to send the message. ';
            if (error?.status === 418) {
              errorMessage =
                'The server is temporarily unavailable. Please wait a few minutes and try again.';
            } else if (error?.status === 429) {
              errorMessage =
                'Too many attempts. Please wait a few minutes and try again.';
            } else if (error?.status === 400) {
              errorMessage =
                'Configuration issue. Please check that all fields are filled in.';
            } else if (error?.status === 401) {
              errorMessage =
                'Authorization error. Please contact me at caiodiniz200204@gmail.com.';
            } else {
              errorMessage = `Error ${
                error?.status || 'unknown'
              }. Please contact me directly at caiodiniz200204@gmail.com.`;
            }
            alert(errorMessage);
          }
        )
        .finally(() => {
          this.sending.set(false);
        });
    }, 1500);
  }
}
