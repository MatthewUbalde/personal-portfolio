// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ThumbnailData =
{ 
  title?: string;
  imgPath?: string;
  altImg?: string;
  link?: string;
}

// Following naming convention like the g-recaptcha-response
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ContactFormData = 
{
  'from-name': string,
  'email': string,
  'message': string,
  'g-recaptcha-response': string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FormState = 'unknown' | 'submitted' | 'error' | 'no-recaptcha' 
