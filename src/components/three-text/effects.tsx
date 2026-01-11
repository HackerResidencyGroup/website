import { extend, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js'

import { WaterPass } from './shaders/water-pass'
import { state } from './state'

extend({ EffectComposer, ShaderPass, RenderPass, WaterPass })

export function Effects() {
  const composer = useRef<EffectComposer>(null)
  const water = useRef<WaterPass>(null)
  const { gl, size, camera, scene } = useThree()

  useEffect(
    () => void composer.current?.setSize(size.width, size.height),
    [size]
  )

  let last = state.top
  let index = 0
  const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  useFrame(() => {
    if (!water.current) return
    if (!composer.current) return

    const { top } = state
    values[index] = Math.abs(top - last)
    const normalize = values.reduce((a, b) => a + b) / values.length
    water.current.factor = THREE.MathUtils.lerp(
      water.current.factor,
      normalize / 20,
      0.1
    )
    last = top
    index = (index + 1) % 10
    gl.autoClear = true
    composer.current.render()
  }, 1)

  return (
    <effectComposer ref={composer} args={[gl]}>
      <RenderPass attachArray='passes' scene={scene} camera={camera} />

      <WaterPass attachArray='passes' ref={water} />

      <ShaderPass attachArray='passes' args={[GammaCorrectionShader]} />
    </effectComposer>
  )
}
