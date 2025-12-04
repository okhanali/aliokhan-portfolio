import type { FC } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage, type FormikHelpers } from 'formik';
import { FORM_FIELDS, INITIAL_VALUES } from '../../utils/constants';
import { contactSchema } from '../../utils/validations';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../lib/firebase';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Form: FC = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);

    try {
      // 1. Firebase Firestore'a Kaydet
      await addDoc(collection(db, 'contact_messages'), {
        ...values,
        createdAt: serverTimestamp(),
      });

      // 2. EmailJS ile Mail Gönder
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          PUBLIC_KEY
        );
      } else {
        console.warn('EmailJS parametreleri eksik!');
      }

      toast.success('Mesajınız başarıyla gönderildi! En kısa sürede döneceğim. 🚀');
      resetForm();
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      toast.error('Bir hata oluştu, lütfen tekrar deneyin.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={INITIAL_VALUES} validationSchema={contactSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <FormikForm className="p-6 md:p-8 rounded-2xl shadow-2xl border backdrop-blur-md transition-colors duration-300 bg-white border-slate-200 dark:bg-slate-800/50 dark:border-white/10">
          <div className="space-y-5">
            {FORM_FIELDS.map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label
                  htmlFor={field.id}
                  className="text-sm font-bold ml-1 transition-colors text-slate-700 dark:text-slate-300"
                >
                  {field.label}
                </label>

                <Field
                  id={field.id}
                  name={field.id}
                  as={field.component === 'textarea' ? 'textarea' : 'input'}
                  type={field.type}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  className={`w-full p-4 rounded-xl border outline-none transition-all duration-300 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 
                    bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white 
                    dark:bg-slate-900/50 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:bg-slate-900
                    ${field.component === 'textarea' ? 'resize-none' : ''}`}
                />

                <ErrorMessage
                  name={field.id}
                  component="div"
                  className="text-red-500 text-xs font-semibold ml-1 animate-pulse"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-[1.02] hover:shadow-cyan-500/25 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Gönderiliyor...</span>
              </div>
            ) : (
              'Mesajı Gönder 🚀'
            )}
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
