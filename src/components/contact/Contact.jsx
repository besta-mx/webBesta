import "./contact.scss";
import React from 'react';
import FAQ from './FAQ';
import { useState } from 'react';

function Contact() {

    const [faqs, setfaqs] = useState([
        {
          question: '¿Quien es BESTA?',
          answer: 'Somos una arrendadora de autos con un producto integral ideal para nuestros socios conductores de plataformas de chofer privado.',
          open: true
        },
        {
          question: '¿Cada cuando realizo mis pagos de arrendamiento?',
          answer: 'Los pagos son semanales y fijos.',
          open: false
        },
        {
          question: '¿Los mantenimientos son gratis?',
          answer: 'Solo los mantenimientos preventivos son sin costo alguno algo que nuestros competidores no ofrecen.',
          open: false
        },
        {
          question: '¿Puedo ahorrar en gasolina con BESTA?',
          answer: 'Gracias a nuestro producto integral nuestros vehículos cuentan con una tanque de GNV que te ayuda a ahorrar en gastos de gasolina y poder tener un mejor rendimiento en las carreteras.',
          open: false
        },
        {
          question: '¿Se necesita mucha papelería para obtener un auto?',
          answer: 'Con nosotros es muy fácil obtener un vehículo ya que nuestra validación no requiere de consultas al buro de crédito.',
          open: false
        },
        {
          question: '¿Que plataformas permiten utilizar en BESTA?',
          answer: 'Trabajamos con plataformas oficiales, autorizadas y seguras en la ciudad de Monterrey y Guadalajara (UBER y DIDI).',
          open: false
        }
      ]);


    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }


    return (
        <div className="contact" id="faq">
            <h1>Preguntas Frecuentes</h1>
            <h2>Te ayudamos a solucionar cualquier duda que tengas sobre nosotros.</h2>
            <div className="container">
            <div className="faqs">
                {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Contact
