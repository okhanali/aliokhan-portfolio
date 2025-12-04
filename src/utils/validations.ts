import * as yup from 'yup';

const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/;

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, 'İsim alanında sadece harf kullanılabilir')
    .min(3, 'İsim en az 3 karakterden olmalı')
    .required('İsim alanı zorunludur'),

  email: yup
    .string()
    .email('Lütfen geçerli bir e-posta adresi giriniz')
    .required('E-posta alanı zorunludur'),

  message: yup
    .string()
    .min(10, 'Mesajınız en az 10 karakter olmalı')
    .required('Mesaj alanı zorunludur.'),
});
