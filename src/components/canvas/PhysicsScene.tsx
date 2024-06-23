import {Physics, RigidBody} from '@react-three/jolt';
import { Box } from "@react-three/drei";

export function PhysicsScene() {
  return (
    <Physics gravity={0.1}>
      <RigidBody position={[0, 1, 0]}>
        <Box>
          <meshBasicMaterial color="red"/>
        </Box>
      </RigidBody>
    </Physics>
  )
}
