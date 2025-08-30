    const starContainer = document.getElementById('starContainer');
    
    function createStar() {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 10 + 5; 
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      const colors = ['#ffffff', '#b3d9ff', '#ff9999', '#fff9b3'];
      star.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starContainer.appendChild(star);
    }

    
    for (let i = 0; i < 100; i++) {
      setTimeout(createStar, i * 50);
    }

    const mediumStars = [
      { id: 'mediumStar1', size: 30, color: '#b3d9ff', left: '30%', top: '30%' },
      { id: 'mediumStar2', size: 35, color: '#ff9999', left: '70%', top: '30%' },
      { id: 'mediumStar3', size: 32, color: '#fff9b3', left: '35%', top: '70%' },
      { id: 'mediumStar4', size: 28, color: '#e6e6fa', left: '65%', top: '65%' },
      { id: 'mediumStar5', size: 33, color: '#98fb98', left: '50%', top: '25%' }
    ];

    mediumStars.forEach(star => {
      const element = document.getElementById(star.id);
      element.style.width = `${star.size}px`;
      element.style.height = `${star.size}px`;
      element.style.left = star.left;
      element.style.top = star.top;
    });

    function openModal(name, description) {
      const modal = document.getElementById('modal');
      const modalTitle = document.getElementById('modalTitle');
      const modalDescription = document.getElementById('modalDescription');
      modalTitle.textContent = name;
      modalDescription.textContent = description;
      modal.classList.add('active');
    }

    function closeModal() {
      const modal = document.getElementById('modal');
      modal.classList.remove('active');
    }

    