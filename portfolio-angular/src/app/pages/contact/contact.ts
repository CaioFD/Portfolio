import { Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Footer } from '../../shared/footer/footer';
import { LanguageService } from '../../core/i18n/language.service';

const SERVICE_ID = 'service_ymv8p1n';
const TEMPLATE_ID = 'template_dj9qhxj';
const PUBLIC_KEY = 'WWfcMwdLgkTVrn3Rp';

const CONTENT = {
  en: {
    heading: 'Contact',
    headingSpan: 'Me',
    namePlaceholder: 'Full Name',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Phone Number',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message',
    send: 'Send Message',
    sending: 'Sending...',
    sendingMessage: 'Sending message...',
    requiredFields: 'Please fill in all required fields (Name, Email, and Message).',
    invalidEmail: 'Please enter a valid email address.',
    success: "Message sent successfully! I'll be in touch soon.",
    genericError: 'Failed to send the message. ',
    unavailable: 'The server is temporarily unavailable. Please wait a few minutes and try again.',
    tooMany: 'Too many attempts. Please wait a few minutes and try again.',
    configIssue: 'Configuration issue. Please check that all fields are filled in.',
    authError: 'Authorization error. Please contact me at caiodiniz200204@gmail.com.',
    unknownError: (status: string | number) =>
      `Error ${status}. Please contact me directly at caiodiniz200204@gmail.com.`,
  },
  pt: {
    heading: 'Fale',
    headingSpan: 'Comigo',
    namePlaceholder: 'Nome Completo',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Telefone',
    subjectPlaceholder: 'Assunto',
    messagePlaceholder: 'Sua Mensagem',
    send: 'Enviar Mensagem',
    sending: 'Enviando...',
    sendingMessage: 'Enviando mensagem...',
    requiredFields: 'Por favor, preencha todos os campos obrigatórios (Nome, Email e Mensagem).',
    invalidEmail: 'Por favor, insira um endereço de email válido.',
    success: 'Mensagem enviada com sucesso! Em breve entrarei em contato.',
    genericError: 'Falha ao enviar a mensagem. ',
    unavailable: 'O servidor está temporariamente indisponível. Aguarde alguns minutos e tente novamente.',
    tooMany: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
    configIssue: 'Problema de configuração. Verifique se todos os campos foram preenchidos.',
    authError: 'Erro de autorização. Entre em contato comigo em caiodiniz200204@gmail.com.',
    unknownError: (status: string | number) =>
      `Erro ${status}. Entre em contato comigo diretamente em caiodiniz200204@gmail.com.`,
  },
};

@Component({
  imports: [FormsModule, Footer],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  private readonly i18n = inject(LanguageService);

  readonly content = computed(() => CONTENT[this.i18n.lang()]);

  readonly name = signal('');
  readonly email = signal('');
  readonly phone = signal('');
  readonly subject = signal('');
  readonly message = signal('');

  readonly sending = signal(false);

  onSubmit(): void {
    const t = this.content();
    const name = this.name().trim();
    const email = this.email().trim();
    const message = this.message().trim();

    if (!name || !email || !message) {
      alert(t.requiredFields);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert(t.invalidEmail);
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
            alert(t.success);
            this.contactForm.nativeElement.reset();
            this.name.set('');
            this.email.set('');
            this.phone.set('');
            this.subject.set('');
            this.message.set('');
          },
          (error) => {
            console.error('FAILED...', error);

            let errorMessage = t.genericError;
            if (error?.status === 418) {
              errorMessage = t.unavailable;
            } else if (error?.status === 429) {
              errorMessage = t.tooMany;
            } else if (error?.status === 400) {
              errorMessage = t.configIssue;
            } else if (error?.status === 401) {
              errorMessage = t.authError;
            } else {
              errorMessage = t.unknownError(error?.status ?? 'unknown');
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
