import LogoBCA from "@/assets/image/logo-provider/Logo_BCA.svg"
import LogoBRI from "@/assets/image/logo-provider/Logo_BRI.svg"
import LogoBNI from "@/assets/image/logo-provider/Logo_BNI.svg"
import LogoMandiri from "@/assets/image/logo-provider/Logo_Mandiri.svg"
import LogoJago from "@/assets/image/logo-provider/Logo_Jago.svg"
import LogoSeaBank from "@/assets/image/logo-provider/Logo_SeaBank.svg"
import LogoDana from "@/assets/image/logo-provider/Logo_Dana.svg"
import LogoGopay from "@/assets/image/logo-provider/Logo_Gopay.svg"
import { SvgProps } from "react-native-svg"

export const LOGO_PROVIDER_MAP: Record<string, React.FC<SvgProps>> = {
    BCA: LogoBCA,
    BRI: LogoBRI,
    BNI: LogoBNI,
    MANDIRI: LogoMandiri,
    JAGO: LogoJago,
    SEABANK: LogoSeaBank,
    DANA: LogoDana,
    GOPAY: LogoGopay,
}

export const getBankLogo = (bankName: string): React.FC<SvgProps> | null => {
    const formattedCode = bankName?.toUpperCase()?.trim()
    return LOGO_PROVIDER_MAP[formattedCode] || null
}
