export default `
uniform float u_progress;
uniform float u_direction;
uniform float u_waveIntensity;
uniform float u_offset;
uniform float u_time;

varying vec2 vUv;
void main(){
  
  vec3 pos = position.xyz;
  float dist = length(uv - .5);
  float maxDist = length(vec2(.5));
  float normDist = dist / maxDist;
  
  float stickOut = normDist;
  float stickIn = -normDist;
  float stickEff = mix(stickOut, stickIn, u_direction);
  
  float stick = .5;
  
  float waveIn = u_progress * (1./stick);
  float waveOut = -(u_progress - 1.) * (1./(1. - stick));
  float stickProg = min(waveIn, waveOut);
  
  float offIn = clamp(waveIn, 0., 1.);
  float offOut = clamp(1. - waveOut, 0., 1.);
  float offProg = mix(offIn, offOut, u_direction);

  pos.z += stickEff * u_offset * stickProg - u_offset * offProg;
  
  pos.z += sin(dist * 8. -  u_time * 10.) * u_waveIntensity;
  
  vUv = uv;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`