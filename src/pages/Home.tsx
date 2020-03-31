import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'

import Main from '../components/Main/Main'
import Disclaimer from '../components/Main/Disclaimer'

import './Home.scss'

function Home() {
  return (
    <>
      <PDFViewer>
        <Main />
      </PDFViewer>
      <Disclaimer />
    </>
  )
}

ReactPDF.render(<Main />, `${__dirname}/example.pdf`)

export default Home
