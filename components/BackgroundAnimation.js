import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Resize the canvas to fill the parent container
    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles with randomized properties.
    const particles = [];
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         r: Math.random() * 3 + 1,
         vx: (Math.random() - 0.5) * 0.5,
         vy: (Math.random() - 0.5) * 0.5,
         alpha: Math.random()
      });
    }
    
    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let particle of particles) {
         particle.x += particle.vx;
         particle.y += particle.vy;
         
         // Bounce particles off canvas edges
         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
         
         particle.alpha = Math.min(Math.max(particle.alpha + 0.005, 0), 1);
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(0, 112, 243, ${particle.alpha})`;
         ctx.fill();
      }
      animationFrameId = window.requestAnimationFrame(updateParticles);
    }
    
    updateParticles();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 0, 
        pointerEvents: 'none' 
      }}
    />
  );
};

export default BackgroundAnimation;
