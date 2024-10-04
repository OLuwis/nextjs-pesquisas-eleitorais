import { HeartIcon } from "lucide-react"
import { SiGithub, SiLinkedin, SiMedium } from "@icons-pack/react-simple-icons";

export default function Rodape() {
  const iconStyle = "inline w-5 h-5 mx-1 -mt-0.5"

  return (
    <footer className="w-full text-center py-6">
      Feito com <HeartIcon className={`fill-red-500 stroke-red-500 ${iconStyle}`} /> por <a className="underline" href="http://oluwis.github.io" target="_blank">Luwis</a> - <a href="http://github.com/oluwis" target="_blank"><SiGithub className={iconStyle} /></a> <a href="https://medium.com/@luwis" target="_blank"><SiMedium className={iconStyle} /></a> <a href="https://www.linkedin.com/in/luismiguelreis" target="_blank"><SiLinkedin className={iconStyle} /></a>
    </footer>
  )
}