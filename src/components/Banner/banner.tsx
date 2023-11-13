import './banner.css';

interface Props {
    status: 'construction' | 'warning' | 'noticed';
}

const defaultMsg: Array<string> = [
  'The site is currently in construction, and does not reflect with the final product. Thank you for your understanding!',
  'Warning! This page is in construction! Thank you for your understanding!',
  'Notice! The site will be updated soon. Please keep that in mind'
]

function bannerMsg(type: string) {
  if (type == 'construction')
    return (<p>{defaultMsg[0]}</p>)
  else if (type == 'warning')
    return (<p>{defaultMsg[1]}</p>)
  else if (type == 'noticed')
    return (<p>{defaultMsg[2]}</p>)
}

function Banner({status}: Props) {
  return (
    <div className={'banner banner-' + status}>
      {bannerMsg(status)}
    </div>
  )
}

export default Banner