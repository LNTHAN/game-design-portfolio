// Enhanced Famicom Modal JavaScript - Fixed for all 6 projects
document.addEventListener('DOMContentLoaded', function () {
    console.log("Enhanced Famicom Modal with all projects loaded!");

    const modal = document.getElementById('famicom-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal) {
        console.error("Modal not found!");
        return;
    }

    // Detailed project data - all 6 projects
    const projectDetails = {
        "Chibi Clash": {
            title: "Chibi Clash",
            role: "Project Manager / Game Designer",
            description: `
                <h4>🎮 Game Overview</h4>
                <p>A competitive PvP RPG combining inventory management with roguelike elements. Players battle in real-time while managing limited equipment slots and randomized loot drops.</p>
                
                <h4>🛠️ Contribution</h4>
                <p>I designed everything in the game from scratch - game modes, enemies, equipments, special events, power ups, shop and economy.</p>
                <ul>
                    <li>Designed roguelite PvE mode with 30 different waves (enemies and bosses)</li>
                    <li>Designed over a hundred different items of multiple archetypes.</li>
                    <li>Design a full PvP ranking system using Matchmaking Ratings.</li>
                    <li>Planned feature timeline, managed a complete team of developers, ui/ux, vfx, sfx artists.</li>
                </ul>
            `
        },
        "Magic Tiles 3": {
            title: "Magic Tiles 3",
            role: "Game Designer",
            description: `
                <h4>🎵 Game Overview</h4>
                <p>A piano rhythm game that transforms mobile devices into musical instruments. Players tap falling tiles in sync with popular songs, creating an immersive musical experience.</p>
                
                <h4>🛠️ Contribution</h4>
                <ul>
                    <li>Designed "Deluxe Mode" for the game - introducing new gameplay elements, power ups and economy.</li>
                    <li>Worked closely with Data Analysts to conduct small and large scale tests, concluded how to move forward with the feature and finetuned datas.</li>
                    <li>Supported Musicians to make 100+ new songs/beat maps.</li>
                </ul>
            `
        },
        "Mech Master": {
            title: "Mech Master",
            role: "Game Designer",
            description: `
                <h4>🤖 Game Overview</h4>
                <p>A deep tactical RPG where players command customizable mecha units in turn-based combat. Features complex mech building and strategic positioning.</p>
                
                <h4>⚙️ Key Features</h4>
                <p>I designed everything in the game- Mecha races, stories, world building, mecha parts, stats, skills, pilots, fighting maps and terrains.</p>
                <ul>
                    <li>Designed 7 mecha races with hundreds of parts combination, 50+ different skills and passives for the equipments.</li>
                    <li>Designed 5 rarities of pilots, all with different models and skills.</li>
                    <li>Designed 3 different maps with terrains and weather effects.</li>
                    <li>Planned fan events outside of the game and raised ~$1 million.</li>
                </ul>
            `
        },
        "Fantasy Tactics": {
            title: "Fantasy War Tactics R",
            role: "Project Manager / Game Designer",
            description: `
                <h4>🏰 Game Overview</h4>
                <p>A classic-inspired tactical RPG featuring job classes, elemental magic, and deep strategic combat.</p>
                
                <h4>🛠️ My Contributions</h4>
                <ul>
                    <li>Desiged 4 new characters with 24 new skils and 12 new equipments.</li>
                    <li>Revamped 50+ old characters with new stats, skills and equipments.</li>
                    <li>Adjust and update over 10 ingame events.</li>
                    <li>Redesigned all IAP packages ingame and raise average weekly revenue from $2.5k to $10k.</li>
                </ul>
            `
        },
        "TK Royale": {
            title: "Sangokushi Royale",
            role: "Feature Planner",
            description: `
                <h4>⚔️ Game Overview</h4>
                <p>A tactical RPG based on the legendary Three Kingdoms period of Chinese history. Players recruit famous historical generals and engage in large-scale strategic battles.</p>
                
                <h4>🛠️ My Contributions</h4>
                <ul>
                    <li>Designed 10+ new generals and equipments.</li>
                    <li>Designed 100+ new scenario maps with gameplay followed closely with story from historic Three Kingdoms battles.</li>
                    <li>In charge of managing and updating Guild vs. Guild battles, 1 of the 4 major events in the game</li>
                </ul>
            `
        },
        "S Online": {
            title: "S Online",
            role: "Game Operator",
            description: `
                <h4>🌟 Game Overview</h4>
                <p>A fantasy MMORPG featuring large-scale guild warfare, dungeon exploration, and huge boss battles.</p>
                
                <h4>🛠️ My Contributions</h4>
                <ul>
                    <li>Scheduled new weekly and monthly events</li>
                    <li>Suggested new features, enemies and boss to the main team</li>
                    <li>Held fanpage events to push IAP spending</li>
                </ul>
            `
        }
    };

    // Set up event listeners for project buttons
    document.querySelectorAll('.view-project-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const projectCard = this.closest('.project-card');
            if (!projectCard) {
                console.error("Project card not found!");
                return;
            }

            // Get project data
            const title = projectCard.querySelector('.project-title-card')?.textContent || 'Unknown Project';
            const thumbnail = projectCard.querySelector('.project-thumbnail')?.src || '';
            const videoSource = projectCard.querySelector('.project-video source');
            const videoSrc = videoSource ? videoSource.src : '';

            console.log(`Opening modal for: ${title}`);

            // Get detailed project info from our custom data
            const projectInfo = projectDetails[title] || {
                title: title,
                role: projectCard.querySelector('.project-role-card')?.textContent || 'Unknown Role',
                description: projectCard.querySelector('.project-summary-card')?.textContent || 'No description available'
            };

            // Update modal content
            modal.querySelector('.modal-project-title').textContent = projectInfo.title;
            modal.querySelector('.modal-project-role').textContent = projectInfo.role;
            modal.querySelector('.modal-project-description').innerHTML = projectInfo.description;

            // Set up video with autoplay and loop
            const modalVideo = modal.querySelector('.modal-video');
            if (modalVideo && videoSrc) {
                const videoSourceElement = modalVideo.querySelector('source');
                if (videoSourceElement) {
                    videoSourceElement.src = videoSrc;
                    modalVideo.load();
                    modalVideo.play().catch(e => console.log("Video autoplay prevented:", e));
                }
            }

            // Build carousel with ALL projects (fixed logic)
            const carousel = modal.querySelector('.cartridge-carousel');
            if (carousel) {
                carousel.innerHTML = '';
                let activeIndex = 0;
                const allProjects = [];

                // Collect all projects - improved logic to ensure all 6 are included
                document.querySelectorAll('.project-card').forEach((card, index) => {
                    const cardTitle = card.querySelector('.project-title-card')?.textContent?.trim() || '';
                    const cardThumbnail = card.querySelector('.project-thumbnail')?.src || '';
                    const cardVideoSource = card.querySelector('.project-video source');
                    const cardVideoSrc = cardVideoSource ? cardVideoSource.src : '';

                    console.log(`Processing project ${index + 1}: ${cardTitle}`);

                    // Include project even if thumbnail is missing (use placeholder or fallback)
                    if (cardTitle) {
                        const cardProjectInfo = projectDetails[cardTitle] || {
                            title: cardTitle,
                            role: card.querySelector('.project-role-card')?.textContent?.trim() || '',
                            description: card.querySelector('.project-summary-card')?.textContent?.trim() || 'No description available'
                        };

                        allProjects.push({
                            thumbnail: cardThumbnail || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+', // Fallback placeholder
                            videoSrc: cardVideoSrc,
                            ...cardProjectInfo
                        });

                        if (cardTitle === title) {
                            activeIndex = allProjects.length - 1;
                        }
                    }
                });

                console.log(`Total projects found: ${allProjects.length}`);

                // Create thumbnails for all projects
                allProjects.forEach((project, index) => {
                    const cartridge = document.createElement('img');
                    cartridge.src = project.thumbnail;
                    cartridge.alt = project.title;
                    cartridge.classList.add('cartridge-thumbnail');
                    cartridge.dataset.index = index;

                    if (index === activeIndex) {
                        cartridge.classList.add('active');
                        console.log(`Set active thumbnail for: ${project.title}`);
                    }

                    cartridge.addEventListener('click', () => {
                        switchToProject(index, allProjects, carousel, modalVideo);
                    });

                    // Handle image load errors
                    cartridge.addEventListener('error', function () {
                        console.log(`Thumbnail failed to load for ${project.title}, using placeholder`);
                        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+';
                    });

                    carousel.appendChild(cartridge);
                });

                console.log(`Created ${allProjects.length} thumbnails in carousel`);
            }

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Enhanced function to switch projects
    function switchToProject(index, allProjects, carousel, modalVideo) {
        const project = allProjects[index];
        console.log(`Switching to project: ${project.title}`);

        // Remove active class from all thumbnails
        carousel.querySelectorAll('.cartridge-thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });

        // Add active class to clicked thumbnail
        const activeThumb = carousel.querySelector(`[data-index="${index}"]`);
        if (activeThumb) {
            activeThumb.classList.add('active');
        }

        // Update video and content
        if (modalVideo && project.videoSrc) {
            const videoSourceElement = modalVideo.querySelector('source');
            if (videoSourceElement) {
                videoSourceElement.src = project.videoSrc;
                modalVideo.load();
                modalVideo.play().catch(e => console.log("Video play prevented:", e));
            }
        }

        // Update project info with detailed descriptions
        modal.querySelector('.modal-project-title').textContent = project.title;
        modal.querySelector('.modal-project-role').textContent = project.role;
        modal.querySelector('.modal-project-description').innerHTML = project.description;
    }

    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            closeModal();
        });
    }

    // Close when clicking outside (but not on active centered thumbnail)
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (modal.style.display === 'flex') {
            const carousel = modal.querySelector('.cartridge-carousel');
            const activeThumb = carousel?.querySelector('.cartridge-thumbnail.active');
            const allThumbs = carousel?.querySelectorAll('.cartridge-thumbnail');

            if (activeThumb && allThumbs && allThumbs.length > 0) {
                let currentIndex = Array.from(allThumbs).indexOf(activeThumb);
                let newIndex = currentIndex;

                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    newIndex = currentIndex - 1;
                    e.preventDefault();
                } else if (e.key === 'ArrowRight' && currentIndex < allThumbs.length - 1) {
                    newIndex = currentIndex + 1;
                    e.preventDefault();
                }

                if (newIndex !== currentIndex) {
                    allThumbs[newIndex].click();
                }
            }
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const modalVideo = modal.querySelector('.modal-video');
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
        // Remove active classes (moves thumbnails back to carousel)
        modal.querySelectorAll('.cartridge-thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        console.log('Modal closed');
    }
});