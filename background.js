/* A self-contained moving contour background inspired by scientific illustrations. */
(() => {
  "use strict"; // Keep this file isolated from the site's existing JavaScript.

  const canvas = document.getElementById("site-background"); // Find the decorative canvas added to index.html.
  if (!canvas) return; // Do nothing if the optional canvas has not been installed.

  const context = canvas.getContext("2d", { alpha: true }); // Create a transparent 2D drawing surface.
  if (!context) return; // Stop gracefully if the browser cannot draw on the canvas.

  const media = window.matchMedia("(prefers-reduced-motion: reduce)"); // Detect the visitor's motion preference.
  const nodes = []; // Store the positions of sparse, understated reference points.
  const maximumPixels = 1.7; // Cap pixel density to limit CPU and battery use.
  const lineCount = 16; // Define the number of faint, topographic-style curves.
  let width = 0; // Store the drawable width in CSS pixels.
  let height = 0; // Store the drawable height in CSS pixels.
  let frameId = 0; // Keep track of the current animation request.
  let startTime = 0; // Remember when the animation began.
  let lastFrame = 0; // Store the previous frame time for frame limiting.

  const random = (seed) => { // Return a repeatable pseudo-random value for a given seed.
    return (Math.sin(seed * 78.233 + 19.19) * 43758.5453) % 1; // Generate deterministic variation without external libraries.
  }; // Finish the random-number helper.

  const pick = (seed) => { // Convert the pseudo-random value into a positive range.
    return Math.abs(random(seed)); // Return a value between zero and one.
  }; // Finish the positive-number helper.

  const resize = () => { // Keep the canvas sharp when the window changes size.
    width = window.innerWidth; // Read the current viewport width.
    height = window.innerHeight; // Read the current viewport height.
    const ratio = Math.min(window.devicePixelRatio || 1, maximumPixels); // Avoid excessive retina rendering costs.
    canvas.width = Math.round(width * ratio); // Assign the physical pixel width.
    canvas.height = Math.round(height * ratio); // Assign the physical pixel height.
    context.setTransform(ratio, 0, 0, ratio, 0, 0); // Draw using ordinary CSS pixel coordinates.
    nodes.length = 0; // Clear the previous set of small reference points.
    const count = Math.min(38, Math.max(14, Math.round(width * height / 31000))); // Scale the point density to the screen.
    for (let index = 0; index < count; index += 1) { // Create every small reference point.
      nodes.push({ x: pick(index + 3) * width, y: pick(index + 91) * height, radius: 0.8 + pick(index + 153) * 1.1 }); // Save its position and radius.
    } // Finish generating the points.
    draw(0); // Paint a frame immediately after resizing.
  }; // Finish the resize handler.

  const draw = (elapsed) => { // Render one frame of the contour illustration.
    context.clearRect(0, 0, width, height); // Remove the previous frame without covering the page.
    const dark = document.documentElement.dataset.theme === "dark"; // Match the site's current light/dark mode.
    const stroke = dark ? "rgba(169, 192, 183, 0.23)" : "rgba(76, 112, 104, 0.16)"; // Choose muted contour colours.
    const points = dark ? "rgba(169, 192, 183, 0.36)" : "rgba(76, 112, 104, 0.28)"; // Choose subtle dot colours.
    const time = elapsed * 0.00006; // Convert elapsed milliseconds into very slow motion.
    context.lineWidth = 0.8; // Draw thin lines instead of dominant decorative shapes.
    context.strokeStyle = stroke; // Apply the chosen contour colour.

    for (let line = 0; line < lineCount; line += 1) { // Draw each scientific contour separately.
      const baseline = (line + 0.6) * height / lineCount; // Space the curves evenly down the screen.
      const variation = (line % 4) * 2.4; // Vary the curve heights so they are not identical.
      context.beginPath(); // Start one independent curve.
      for (let x = -20; x <= width + 20; x += 9) { // Trace the curve in small horizontal steps.
        const broadWave = Math.sin(x * 0.0034 + line * 0.27 + time) * (16 + variation); // Create broad smooth undulations.
        const fineWave = Math.sin(x * 0.009 - line * 0.51 - time * 0.7) * 5; // Add a second, gentle frequency.
        const y = baseline + broadWave + fineWave; // Combine both movements into one line.
        if (x === -20) context.moveTo(x, y); // Begin the path at its leftmost point.
        else context.lineTo(x, y); // Continue the path across the page.
      } // Finish tracing the current curve.
      context.stroke(); // Display the finished fine contour.
    } // Finish all the curves.

    context.fillStyle = points; // Apply the quiet dot colour.
    for (const node of nodes) { // Draw each little reference point.
      const drift = Math.sin(time * 1.4 + node.x * 0.012) * 3; // Make the dots move almost imperceptibly.
      context.beginPath(); // Begin a new circle.
      context.arc(node.x, node.y + drift, node.radius, 0, Math.PI * 2); // Draw the dot at its current location.
      context.fill(); // Fill the circular point.
    } // Finish drawing the points.
  }; // Finish the frame renderer.

  const animate = (timestamp) => { // Run the animation at a deliberately modest frame rate.
    if (!startTime) startTime = timestamp; // Set the first animation timestamp.
    if (timestamp - lastFrame >= 1000 / 24) { // Render no faster than approximately 24 fps.
      draw(timestamp - startTime); // Draw the next illustration frame.
      lastFrame = timestamp; // Record the time of this frame.
    } // Finish the optional frame render.
    frameId = window.requestAnimationFrame(animate); // Schedule the following animation frame.
  }; // Finish the animation loop.

  const updateAnimation = () => { // Start or stop movement when conditions change.
    window.cancelAnimationFrame(frameId); // Prevent duplicate animation loops.
    frameId = 0; // Clear the previous request identifier.
    draw(0); // Always show a static background illustration.
    if (!media.matches && !document.hidden) frameId = window.requestAnimationFrame(animate); // Animate only when permitted and visible.
  }; // Finish animation preference handling.

  window.addEventListener("resize", resize, { passive: true }); // Update the canvas when the browser changes size.
  document.addEventListener("visibilitychange", updateAnimation); // Pause while the page is not visible.
  media.addEventListener("change", updateAnimation); // Respond to the visitor's accessibility settings.
  resize(); // Initialize the drawing dimensions and sample points.
  updateAnimation(); // Start the optional subtle animation.
})(); // Keep all background logic out of the global namespace.
