import { HeaderVentas } from '@/components/HeaderVentas/HeaderVentas'
import { MainVentas } from '@/components/MainVentas/MainVentas'

export default function CursoHtmlCssPage () {
  return (
    <>  
        {/* Programar el Header original para que de forma
        condicional cambie su contenido y enlace */}
        <HeaderVentas />

        <MainVentas />
    </>
  )
}

