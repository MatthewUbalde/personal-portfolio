/// <reference types="vite/client" />
declare module 'react-google-recaptcha'

interface ImportMetaEnv {
  readonly VITE_EMAILJS_KEY: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_RECEIVE_TEMPLATE_ID: string
  readonly VITE_RECAPTHA_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}