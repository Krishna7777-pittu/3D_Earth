import { useState, Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows} from '@react-three/drei'
import Earth from '../public/Earth'
import Footer from './footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset='sunset'/>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000"/>
      </Canvas>
      <div className='container'>
        <h1>Earth</h1>
        <p>
        Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water.
        </p>
        
      </div>
      <Footer />
      
    </>
  )
}

export default App
