import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-20 items-center grid grid-cols-1 md:grid-cols-7 gap-x-14 gap-y-4">
          <h3 className='col-span-2'>
            聯絡我們
          </h3>

          <div className='col-span-3'>
            <p className="text-lg leading-relaxed mb-4">
              法印佛堂位於新北市新店區山上，藉由天職靈能者蔡君如老師協助，為陰陽兩界之溝通單位，不是一般開放性佛堂，為維護客戶隱私及保護大眾身心平安，皆為預約安排制。
            </p>

            <p className="text-lg leading-relaxed">
              若想了解更多，歡迎與佛堂護法助理聯絡，造成不便之處請多多見諒！
            </p>
          </div>

          <div className='col-span-2'>
            <p className="text-lg leading-relaxed">
              電子郵件｜animahaven@fain.tw
            </p>

            <p className="text-lg leading-relaxed">
              電　　話｜0981-367-177
            </p>

            <p className="text-lg leading-relaxed">
              海外撥打｜+886-981-367-177
            </p>

            <button className='bg-black border-black text-white hover:bg-white hover:text-black border duration-200 transition-colors
                                font-bold py-2 px-12 mt-4'>
              <a href="https://www.facebook.com/profile.php?id=100057154132700">
                法印佛堂臉書
              </a>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
