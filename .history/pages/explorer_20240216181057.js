import React, { useState, useEffect } from 'react'
import CSVTable from '@/components/TableRender'

const styles = {
  header: {
    fontSize: '28px',
    color: '#2E3D49',
    textAlign: 'center',
    margin: '30px 0',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '18px',
    textAlign: 'center',
    color: '#4A4A4A',
    margin: '0 20px',
    lineHeight: '1.8',
  },
  nigeria: {
    color: '#008751',
    fontSize: '24px',
  },
  china: {
    color: '#D60026',
    fontSize: '24px',
  },
  usa: {
    color: '#3C3B6E',
    fontSize: '24px',
  },
  indonesia: {
    color: '#EAAA00',
    fontSize: '24px',
  },
}
export default function explorer() {
  return (
    <div>
      <p style={styles.paragraph}>
        Whether you're curious about stocks in <span style={styles.nigeria}>Nigeria</span>,{' '}
        <span style={styles.indonesia}>Indonesia</span>,{' '}
        <span style={styles.usa}>the United States</span>, or{' '}
        <span style={styles.china}>China</span>, we've got you covered. With an ever-growing list of
        stocks to explore, there's always something new to learn and be amazed by. So why wait?
        Start your journey with us today and see how fun and exciting the world of global markets
        can be!
      </p>
      <h1 style={styles.header}>Explore Away Your Curiosity</h1>
      <center>
        <CSVTable />
      </center>
    </div>
  )
}
