



const icons = document.querySelectorAll('.dna-icon');
        const threshold = 180; // Distance to trigger escape
        const fleeDistance = 250; // How far to fly away

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            icons.forEach(icon => {
                const rect = icon.getBoundingClientRect();
                const iconX = rect.left + rect.width / 2;
                const iconY = rect.top + rect.height / 2;

                const diffX = iconX - mouseX;
                const diffY = iconY - mouseY;
                const distance = Math.sqrt(diffX * diffX + diffY * diffY);

                if (distance < threshold) {
                    // Calculate the angle away from the mouse
                    const angle = Math.atan2(diffY, diffX);
                    
                    // Calculate new position
                    let newX = iconX + Math.cos(angle) * fleeDistance;
                    let newY = iconY + Math.sin(angle) * fleeDistance;

                    // Boundary checks (keep icons on screen)
                    const pad = 80;
                    newX = Math.max(pad, Math.min(window.innerWidth - pad, newX));
                    newY = Math.max(pad, Math.min(window.innerHeight - pad, newY));

                    // Update position
                    icon.style.left = `${newX - rect.width / 2}px`;
                    icon.style.top = `${newY - rect.height / 2}px`;
                    
                    // Add a little "scare" scale effect
                    icon.style.transform = "scale(1.2)";
                    setTimeout(() => {
                        icon.style.transform = "scale(1)";
                    }, 400);
                }
            });
        });



