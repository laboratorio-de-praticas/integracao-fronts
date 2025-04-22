import Image from 'next/image'
import Link from 'next/link'
import '../../styles/header.css' 

export default function Header() {
  return (
    <header>
      <div className="logo-fatec">
        <Image src="/imgs/logo fatec.png" alt="Logo Fatec"width={327.2} height={78.4} className="logo-fatec-foto" />
      </div>
      
      <div className="redes-sociais-icons"> 
        {/* posteriormente endereçar corretamente */}
        <Link href="#"><Image src="/imgs/flickr.png" alt="Flickr" width={30} height={30} /></Link>
        <Link href="#"><Image src="/imgs/linkedin.png" alt="Linkedin" width={30} height={30} /></Link>
        <Link href="#"><Image src="/imgs/tiktok.png" alt="Tiktok" width={30} height={30} /></Link>
        <Link href="#"><Image src="/imgs/youtube.png" alt="Youtube" width={30} height={30} /></Link>
        <Link href="#"><Image src="/imgs/twitter.png" alt="Twitter" width={30} height={30} /></Link>
        <Link href="#"><Image src="/imgs/istagram.png" alt="Instagram" width={30} height={30} /></Link>
        <Link href="#"><Image src="/imgs/facebook.png" alt="Facebook" width={30} height={30} /></Link>
        <Link href="#" className="governo"><p>/governosp</p></Link>
      </div>

      <div className="menu-hamburguer">
        <Link href="#"><Image src="/imgs/hamburguer.png" alt="Menu" width={20} height={13} /></Link>
      </div>
    </header>
  )
}
// autora: Isabele Letícia