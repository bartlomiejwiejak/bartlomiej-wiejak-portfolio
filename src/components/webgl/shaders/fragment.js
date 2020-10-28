export default `
  #define S(a,b,n) smoothstep(a,b,n)
  
  uniform float u_time;
  uniform float u_volatility;
  
  uniform vec2 u_res;
  uniform vec2 u_mouse;
  uniform vec2 u_directionMouse;
  uniform vec2 u_textureFactor;

  uniform sampler2D u_text;

  varying vec2 vUv;
  
  vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
    return uvs * factor - factor / 2. + 0.5;
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 st = (gl_FragCoord.xy - .5 * u_res) / min(u_res.x, u_res.y) * vec2(.4, 1.);
    vec2 mouse_normalized = (u_mouse - .5 * u_res) / min(u_res.x, u_res.y) * vec2(.4, 1.);
    
    float vel = u_volatility; 

    float dist = length(mouse_normalized - st);
    float m_color = S(.2, .01, dist);
       
    vec4 tex1 = vec4(1.);
    
    vel += vel * 2.;
    
    uv.x -= (sin(uv.y) * m_color * vel / 100.) * u_directionMouse.x;
    uv.y -= (sin(uv.x) * m_color * vel / 100.) * u_directionMouse.y;
    tex1.r = texture2D(u_text, centeredAspectRatio(uv, u_textureFactor)).r;
    
    uv.x -= (sin(uv.y) * m_color * vel / 150.) * u_directionMouse.x;
    uv.y -= (sin(uv.x) * m_color * vel / 150.) * u_directionMouse.y;
    tex1.g = texture2D(u_text, centeredAspectRatio(uv, u_textureFactor)).g;
    
    uv.x -= (sin(uv.y) * m_color * vel / 300.) * u_directionMouse.x;
    uv.y -= (sin(uv.x) * m_color * vel / 300.) * u_directionMouse.y;
    tex1.b = texture2D(u_text, centeredAspectRatio(uv, u_textureFactor)).b;
           
    gl_FragColor = tex1;
  }
`