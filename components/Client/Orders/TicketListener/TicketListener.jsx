import React from 'react'
import classes from './TicketListener.module.css'
import Link from 'next/link'
import Spinner from 'components/assets/Spinner/Spinner'


const TicketListener = ({info, OrderState}) => {
    
return (
<div className={classes.Container} >{
     OrderState.notSended ? (
        <div className={classes.InfoContainer} > 
            <h2 className={classes.InfoTitle}>
                Danos algo de información antes de hacer tu pedido
            </h2>
            <p className={classes.Info}>
                Si olvidaste algo podés volver y revisar tu carrito. 
            </p>
            <p className={classes.Info}>
                Se creará un mensaje de tu parte para nosotros por Whatsapp.
            </p>
        </div>
     ) 
     : OrderState.ErrorResponse ? (
        <div className={classes.ErrorContainer} >
            <p className={classes.ErrorMessage}>
               Algo salió mal y tu pedido no se realizó, podés <Link href="/store">volver</Link> e intentarlo de nuevo.<br /><br /> 
              Error: <b>{info.err}</b>
            </p>
            <i className={"fas fa-cogs"}></i>
        </div>    
     )
     : OrderState.waitingResponse ? (
            <Spinner/>
         ):(
        null
     )


    }</div>)
}

export default TicketListener
