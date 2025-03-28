import type React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    // <main className="min-h-screen bg-gradient-to-b from-primary/20 to-primary/40 flex flex-col items-center justify-between p-4">
    <main className="min-h-screen bg-gradient-to-b from-[#543F92] to-[#3A2A66] flex flex-col items-center justify-between p-4">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center py-12 md:py-24">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="relative w-32 h-32 mb-6">
            <Image
              src="/images/logo2.png"
              alt="Amazon-Almadina Store Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-secondary mt-5 mb-2 text-right direction-rtl" dir="rtl">تبضع مع امزون المدينة الآن وامتلك أحدث الأجهزة الإلكترونية!</h1>
          <p className="text-lg text-white">موجودين على كل المنصات اختار الي يعجبك واطلب</p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <SocialButton
            href="https://t.me/MatrxStore"
            icon={<Image src="/images/tele.png" alt="Telegram" width={30} height={30} className="w-8 h-8" />}
            label="Telegram"
            arabicLabel="تيليجرام"
          />

          <SocialButton
            href="https://www.facebook.com/share/153yAthi4X/"
            icon={<Image src="/images/face.png" alt="Telegram" width={30} height={30} className="w-8 h-8" />}
            label="Facebook"
            arabicLabel="فيسبوك"
          />

          <SocialButton
            href="https://www.tiktok.com/@storealmadina"
            icon={<Image src="/images/tiktok.png" alt="Telegram" width={30} height={30} className="w-8 h-8" />}
            label="TikTok"
            arabicLabel="تيك توك"
          />

          <SocialButton
            href="https://www.instagram.com/matr1xstore?igsh=dmlpNnlkN3dlZ3N5"
            icon={<Image src="/images/insta.png" alt="Telegram" width={30} height={30} className="w-8 h-8" />}
            label="Instagram"
            arabicLabel="انستاجرام"
          />

          <SocialButton
            href="http://wa.me/9647866309566"
            icon={<Image src="/images/whatsapp.png" alt="Telegram" width={30} height={30} className="w-8 h-8" />}
            label="WhatsApp"
            arabicLabel="واتساب"
          />


          <SocialButton
            href="https://maps.app.goo.gl/o95ZCYUrkB7ag8W1A?g_st=atm"
            icon={<Image src="/images/location.png" alt="location" width={30} height={30} className="w-8 h-8" />}
            label="Location"
            arabicLabel="الموقع"
          />
          
        </div>
      </div>

      <footer className="w-full text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} Amazon-Almadina Store. All rights reserved.
      </footer>
    </main>
  )
}

interface SocialButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  arabicLabel: string
}

function SocialButton({ href, icon, label, arabicLabel }: SocialButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/5"
    >
      <div className="flex items-center">
        <div className="bg-primary/10 p-2 rounded-full mr-3 text-primary">{icon}</div>
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-right text-gray-600 font-medium">{arabicLabel}</span>
    </Link>
  )
}

