import Head from 'next/head'
import classes from 'generalStyles/pageStyles.module.css'
import LandingHeader from 'components/assets/Headers/LandingHeader/LandingHeader'
import Title from 'components/Client/Landing/Title/Title'
import About from 'components/Client/Landing/About/About'
import Section from 'components/Client/Landing/Section/Section'

export default function Hom() {

  return (
    <div className={classes.PageContainer}>
      <Head>
        <title>Alban Print</title>
      </Head>
      <LandingHeader/>
      <Title/>
      <About 
      title={'Diseñamos e imprmimos los diseños que necesitas.'}
      subtitle={'Resolvemos las necesidades de negocios, fiestas y eventos, marcas personales, equipos deportivos y mucho mas.'}
      />
      <Section title={"Tarjetas"} image={"/tarjetas.jpg"}/>
      <Section title={"Etiquetas Adhesivas"} image={"/etiquetas.jpg"}/>
      <Section title={"Cajas"} image={"/cajas.jpg"}/>
      <Section title={"Vinilos"} image={"/vinilos.jpg"}/>
      <Section title={"Camisetas"} image={"/camisetas.jpg"}/>
      <Section title={"Banderas"} image={"/banderas.jpg"}/>
      <Section title={"Impresión 3D"} image={"/cajas.jpg"}/>
    </div>
  )
}
