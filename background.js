/* Interactive scientific network for the existing site-background canvas. */
/* Replace only the previous background.js; leave index.html and background.css unchanged. */
(() => {
  "use strict"; // Keep background variables separate from the existing site.

  const canvas = document.getElementById("site-background"); // Select the canvas already installed in the previous update.
  if (!canvas) return; // Exit quietly when the optional background is absent.
  const context = canvas.getContext("2d", { alpha: true }); // Request a transparent drawing context.
  if (!context) return; // Avoid errors when canvas drawing is unavailable.

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)"); // Check the visitor's motion accessibility preference.
  const cursor = { x: -1000, y: -1000, active: false }; // Track the pointer without requiring a click.
  const nodes = []; // Store all background graph vertices.
  const networkEdges = []; // Preserve random background connections between frames.
  const researchSelector = "#research-graph .graph-node"; // Read the original topic circles without altering the HTML.
  const researchBridgeDistance = 275; // Link nearby background vertices to visible research topics.
  const maximumResearchBridges = 3; // Limit visual clutter around each anchored topic.
  const densityArea = 12000; // Set the approximate area occupied by each node in square pixels.
  const maximumNodes = 300; // Prevent expensive rendering on very large monitors.
  const normalLinkDistance = 125; // Connect nearby vertices with faint lines.
  const cursorLinkDistance = 160; // Draw additional links around the passing cursor.
  const cursorInfluence = 455; // Define how far the mouse can displace nearby vertices.
  const maximumPixelRatio = 1.7; // Limit high-density rendering for battery efficiency.
  const targetFrameInterval = 1000 / 30; // Aim for smooth but moderate 30 FPS animation.
  let width = 0; // Store the current viewport width.
  let height = 0; // Store the current viewport height.
  let frameId = 0; // Hold the scheduled animation frame identifier.
  let previousFrame = 0; // Hold the timestamp of the last rendered frame.
  let seed = 1741; // Seed deterministic node positions for a consistent layout.

  const random = () => { // Produce predictable pseudo-random coordinates without external libraries.
    seed = (seed * 1664525 + 1013904223) >>> 0; // Advance a linear congruential generator.
    return seed / 4294967296; // Return a number in the interval from zero to one.
  }; // End the random-number generator.

  const palette = () => { // Select colors that fit the existing light and dark themes.
    const dark = document.documentElement.dataset.theme === "dark"; // Read the theme already managed by script.js.
    return { // Supply low-contrast academic colors rather than bright neon effects.
      link: dark ? "115, 155, 145" : "67, 104, 96", // Set the RGB color of the network edges.
      dot: dark ? "167, 198, 188" : "67, 104, 96", // Set the RGB color of the node centers.
      hover: dark ? "100, 255, 190" : "0, 115, 85" // More saturated green on hover.
    }; // Finish the palette object.
  }; // End the theme palette helper.

  const createNodes = () => { // Create a loosely distributed constellation of moving points.
    nodes.length = 0; // Remove node coordinates from the previous viewport size.
    networkEdges.length = 0; // Rebuild connection topology when the viewport changes.
    seed = 1741; // Restore deterministic generation after resizing.
    const count = Math.min(maximumNodes, Math.max(32, Math.round(width * height / densityArea))); // Match node count to viewport area.
    const columns = Math.max(4, Math.round(Math.sqrt(count * width / Math.max(height, 1)))); // Choose a balanced number of invisible layout columns.
    const rows = Math.ceil(count / columns); // Choose enough invisible layout rows for the nodes.
    for (let index = 0; index < count; index += 1) { // Populate each position in the graph.
      const column = index % columns; // Determine the node's nominal horizontal slot.
      const row = Math.floor(index / columns); // Determine the node's nominal vertical slot.
      const x = random() * width; // Completely random horizontal position.
      const y = random() * height; // Completely random vertical position.
      nodes.push({ baseX: x, baseY: y, x, y, vx: 0, vy: 0, phase: random() * Math.PI * 2, radius: 2.5 + random() * 1.5 }); // Store the position, velocity, motion phase, and dot radius.
    } // Finish creating vertices.
    const connected = new Set(); // Avoid duplicate links between pairs of background nodes.
    for (let index = 0; index < nodes.length; index += 1) { // Give each node a varied number of neighbors.
      const origin = nodes[index]; // Choose the current vertex.
      const candidates = nodes.map((node, otherIndex) => ({ // Consider potential neighbors using their resting coordinates.
        index: otherIndex, // Preserve the candidate index.
        distance: Math.hypot(origin.baseX - node.baseX, origin.baseY - node.baseY) // Measure neighbor proximity.
      })).filter(candidate => candidate.index !== index).sort((a, b) => a.distance - b.distance); // Prefer local connections.
      const wanted = random() < 0.35 ? 0 : 1 + Math.floor(random() * 3); // Leave 35% of nodes without outgoing connections; connect the others to 1–3 nearby nodes.
      const pool = candidates.filter(candidate => candidate.distance < 130).slice(0, 5); // Restrict connections to close neighbors, encouraging local groups.
      for (let attempt = 0; attempt < wanted && pool.length; attempt += 1) { // Choose different nearby partners.
        const chosen = Math.floor(random() * pool.length); // Add randomness to the connection pattern.
        const target = pool.splice(chosen, 1)[0]; // Do not choose the same neighbor twice for this origin.
        const low = Math.min(index, target.index); // Normalize the first endpoint.
        const high = Math.max(index, target.index); // Normalize the second endpoint.
        const key = `${low}:${high}`; // Identify an undirected edge uniquely.
        if (connected.has(key)) continue; // Skip an edge already added by its other endpoint.
        connected.add(key); // Record the new edge.
        networkEdges.push({ first: low, second: high, weight: 0.68 + random() * 0.32 }); // Keep randomized edge opacity stable across frames.
      } // Finish assigning partners to this vertex.
    } // Finish building the varied-degree network.
  }; // End the node generator.

  const drawLine = (x1, y1, x2, y2, color, opacity, thickness) => { // Draw a single translucent network connection.
    context.strokeStyle = `rgba(${color}, ${opacity})`; // Set the edge color and alpha independently.
    context.lineWidth = thickness; // Keep edges fine and understated.
    context.beginPath(); // Start an independent path for this edge.
    context.moveTo(x1, y1); // Set the start of the line.
    context.lineTo(x2, y2); // Set the endpoint of the line.
    context.stroke(); // Paint the line on the transparent canvas.
  }; // End the edge renderer.

  const draw = () => { // Render links, cursor interactions, and vertices for one frame.
    context.clearRect(0, 0, width, height); // Preserve transparency behind the website content.
    const colors = palette(); // Match the graph to the current theme.
    const cursorDistanceSquared = cursorLinkDistance * cursorLinkDistance; // Calculate the mouse connection range squared.
    for (const edge of networkEdges) { // Draw the same randomized topology while vertices move.
      const first = nodes[edge.first]; // Read the current first endpoint.
      const second = nodes[edge.second]; // Read the current second endpoint.
      const distance = Math.hypot(first.x - second.x, first.y - second.y); // Measure the current edge length.
      const alpha = (0.11 + Math.max(0, 1 - distance / 290) * 0.25) * edge.weight; // Fade long links without removing the connection.
      drawLine(first.x, first.y, second.x, second.y, colors.link, alpha, 2); // Draw a background edge with the original thickness.
    } // Finish drawing randomized edges.
    const researchBounds = document.getElementById("research-graph")?.getBoundingClientRect(); // Find the current visible research graph.
    if (researchBounds && researchBounds.bottom > 0 && researchBounds.top < height) { // Add bridges only while Research Interests is visible.
      const topicGroups = document.querySelectorAll(researchSelector); // Find existing thematic nodes without duplicating them.
      for (const group of topicGroups) { // Join each anchored research topic to its nearby moving background.
        const circle = group.querySelector("circle"); // Find the original node circle inside the SVG group.
        if (!circle) continue; // Skip incomplete graph nodes.
        const box = circle.getBoundingClientRect(); // Find the circle's screen position even after dragging.
        const anchorX = box.left + box.width / 2; // Convert to canvas viewport coordinates.
        const anchorY = box.top + box.height / 2; // Convert to canvas viewport coordinates.
        const neighbors = nodes.map((node, index) => ({ node, index, distance: Math.hypot(node.x - anchorX, node.y - anchorY) })) // Calculate nearby moving background points.
          .filter(candidate => candidate.distance < researchBridgeDistance) // Avoid crossing the entire page with bridge lines.
          .sort((a, b) => a.distance - b.distance) // Prefer the closest surrounding vertices.
          .slice(0, maximumResearchBridges); // Limit each topic to a few fine connectors.
        for (const neighbor of neighbors) { // Draw bridges behind the research overlay.
          const alpha = 0.1 + (1 - neighbor.distance / researchBridgeDistance) * 0.22; // Fade each bridge with distance.
          drawLine(anchorX, anchorY, neighbor.node.x, neighbor.node.y, colors.link, alpha, 1.5); // Visually merge the two networks.
        } // Finish drawing links to this research topic.
      } // Finish connecting all visible topics.
    } // Finish the optional Research Interests integration.
    for (const node of nodes) { // Draw the currently visible node centers.
      const dx = node.x - cursor.x; // Measure the node's horizontal distance to the mouse.
      const dy = node.y - cursor.y; // Measure the node's vertical distance to the mouse.
      const distanceSquared = dx * dx + dy * dy; // Calculate squared cursor-to-node distance.
      const nearCursor = cursor.active && distanceSquared < cursorDistanceSquared; // Identify nodes inside the hover region.
      const hoverStrength = nearCursor ? 1 - Math.sqrt(distanceSquared) / cursorLinkDistance : 0; // Fade hover effects at the interaction boundary.
      if (nearCursor) drawLine(cursor.x, cursor.y, node.x, node.y, colors.hover, hoverStrength * 0.85, 1.5); // Connect the mouse to nearby nodes without clicking.
      context.fillStyle = `rgba(${nearCursor ? colors.hover : colors.dot}, ${0.35 + hoverStrength * 0.65})`; // Increase opacity up to 1 near cursor.
      context.beginPath(); // Start the circular node path.
      context.arc(node.x, node.y, node.radius + hoverStrength * 3.0, 0, Math.PI * 2); // Draw a modestly enlarged hovered vertex.
      context.fill(); // Paint the vertex.
    } // Finish rendering vertices and hover links.
  }; // End the canvas drawing function.

  const updatePositions = (time) => { // Apply ambient drift and a smooth mouse-repulsion field.
    for (const node of nodes) { // Update each vertex independently.
      const driftX = Math.sin(time * 0.00024 + node.phase) * 7; // Create slow natural horizontal oscillation.
      const driftY = Math.cos(time * 0.00020 + node.phase * 1.3) * 7; // Create slow natural vertical oscillation.
      const homeX = node.baseX + driftX; // Define the node's gently moving resting x-coordinate.
      const homeY = node.baseY + driftY; // Define the node's gently moving resting y-coordinate.
      let forceX = (homeX - node.x) * 0.025; // Apply a spring pulling the node toward its resting x-coordinate.
      let forceY = (homeY - node.y) * 0.025; // Apply a spring pulling the node toward its resting y-coordinate.
      const dx = node.x - cursor.x; // Measure horizontal cursor displacement.
      const dy = node.y - cursor.y; // Measure vertical cursor displacement.
      const distance = Math.sqrt(dx * dx + dy * dy); // Calculate true distance to the cursor.
      if (cursor.active && distance < cursorInfluence) { // Respond whenever the mouse passes near the node.
        const strength = (1 - distance / cursorInfluence) ** 2; // Make the motion stronger nearer the mouse.
        forceX += (dx / Math.max(distance, 1)) * strength * 1.7; // Gently push the node away along the x-axis.
        forceY += (dy / Math.max(distance, 1)) * strength * 1.7; // Gently push the node away along the y-axis.
      } // Finish applying the mouse repulsion force.
      node.vx = (node.vx + forceX) * 0.88; // Apply horizontal velocity with damping to prevent jitter.
      node.vy = (node.vy + forceY) * 0.88; // Apply vertical velocity with damping to prevent jitter.
      node.x += node.vx; // Integrate the horizontal displacement.
      node.y += node.vy; // Integrate the vertical displacement.
    } // Finish updating the graph's points.
  }; // End the motion engine.

  const renderFrame = (timestamp) => { // Run the animation using the browser's frame scheduler.
    if (timestamp - previousFrame >= targetFrameInterval) { // Limit drawing work to approximately 30 FPS.
      updatePositions(timestamp); // Advance the network and cursor spring physics.
      draw(); // Draw the current network configuration.
      previousFrame = timestamp; // Record the last successful render time.
    } // Finish the frame-rate check.
    frameId = window.requestAnimationFrame(renderFrame); // Schedule the next animation update.
  }; // End the animation loop.

  const refreshAnimation = () => { // Respect motion preferences and pause the effect on hidden tabs.
    window.cancelAnimationFrame(frameId); // Stop any previously scheduled animation loop.
    frameId = 0; // Clear the outstanding frame identifier.
    previousFrame = 0; // Reset the frame timing after resuming.
    if (!reducedMotion.matches && !document.hidden) frameId = window.requestAnimationFrame(renderFrame); // Animate only when allowed and visible.
    else draw(); // Keep a static network visible when animation is disabled.
  }; // End the animation controller.

  const resize = () => { // Adapt the network to the current browser viewport.
    width = window.innerWidth; // Read the current available width.
    height = window.innerHeight; // Read the current available height.
    const ratio = Math.min(window.devicePixelRatio || 1, maximumPixelRatio); // Choose a modest canvas resolution for performance.
    canvas.width = Math.round(width * ratio); // Set the physical pixel width.
    canvas.height = Math.round(height * ratio); // Set the physical pixel height.
    context.setTransform(ratio, 0, 0, ratio, 0, 0); // Keep drawing coordinates measured in CSS pixels.
    createNodes(); // Generate nodes for the updated viewport.
    draw(); // Paint the updated background immediately.
  }; // End the resize handler.

  const moveCursor = (event) => { // Detect hover directly through window events without canvas click handling.
    if (event.pointerType === "touch") return; // Avoid unwanted mouse-like effects while scrolling on touchscreens.
    cursor.x = event.clientX; // Store the pointer's horizontal viewport coordinate.
    cursor.y = event.clientY; // Store the pointer's vertical viewport coordinate.
    cursor.active = true; // Enable nearby links and mouse-responsive movement.
    if (reducedMotion.matches) draw(); // Update static hover highlighting without continuous animation.
  }; // End the mouse movement handler.

  const leaveCursor = () => { // Disable hover effects when the mouse exits the viewport.
    cursor.active = false; // Stop drawing mouse-to-node connections.
    cursor.x = -1000; // Move the reference cursor outside the drawable region.
    cursor.y = -1000; // Move the reference cursor outside the drawable region.
    if (reducedMotion.matches) draw(); // Remove cursor highlights in reduced-motion mode.
  }; // End the cursor exit handler.

  window.addEventListener("pointermove", moveCursor, { passive: true }); // Listen for mouse movement even above text, cards, and buttons.
  document.addEventListener("pointerleave", leaveCursor); // Stop hover response when the pointer leaves the page.
  window.addEventListener("blur", leaveCursor); // Reset hover when the window loses focus.
  window.addEventListener("resize", resize, { passive: true }); // Rebuild network geometry after viewport changes.
  document.addEventListener("visibilitychange", refreshAnimation); // Pause animation while the browser tab is hidden.
  reducedMotion.addEventListener("change", refreshAnimation); // Honor changes to reduced-motion accessibility preferences.
  const themeObserver = new MutationObserver(draw); // Refresh colors when the existing site's theme changes.
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] }); // Watch only the site's theme attribute.
  resize(); // Render the initial network without modifying the existing page structure.
  refreshAnimation(); // Activate the mouse-responsive network animation.
})(); // End the isolated background module.
