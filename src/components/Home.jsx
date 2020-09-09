import React from 'react'
import Hero from './Hero'
import About from './About'
import Topics from './Topics'
    
import Modal from './Modal'

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Topics />
            <Modal />
        </div>
    )
}
