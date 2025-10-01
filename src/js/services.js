// Services Carousel Controller
class ServicesCarousel {
    constructor() {
        this.currentGroup = 1;
        this.totalGroups = 3;
        this.nextBtn = document.getElementById('next-services-btn');
        this.pageIndicators = [];
        
        // Initialize page indicators
        for (let i = 1; i <= this.totalGroups; i++) {
            this.pageIndicators.push(document.getElementById(`page-indicator-${i}`));
        }
        
        this.init();
    }
    
    init() {
        // Add click event to next button
        this.nextBtn.addEventListener('click', () => {
            this.nextGroup();
        });
        
        // Add click events to page indicators
        this.pageIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToGroup(index + 1);
            });
            
            // Add cursor pointer style
            indicator.style.cursor = 'pointer';
        });
        
        // Initialize the display
        this.updateDisplay();
    }
    
    nextGroup() {
        this.currentGroup = this.currentGroup < this.totalGroups ? this.currentGroup + 1 : 1;
        this.updateDisplay();
    }
    
    goToGroup(groupNumber) {
        this.currentGroup = groupNumber;
        this.updateDisplay();
    }
    
    updateDisplay() {
        // Hide all service groups
        for (let i = 1; i <= this.totalGroups; i++) {
            const group = document.getElementById(`services-group-${i}`);
            if (group) {
                group.classList.add('hidden');
            }
        }
        
        // Show current service group with animation
        const currentGroup = document.getElementById(`services-group-${this.currentGroup}`);
        if (currentGroup) {
            currentGroup.classList.remove('hidden');
            
            // Add fade-in animation
            currentGroup.style.opacity = '0';
            currentGroup.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                currentGroup.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                currentGroup.style.opacity = '1';
                currentGroup.style.transform = 'translateY(0)';
            }, 50);
        }
        
        // Update page indicators
        this.updatePageIndicators();
        
        // Update button text
        this.updateButtonText();
    }
    
    updatePageIndicators() {
        this.pageIndicators.forEach((indicator, index) => {
            if (index + 1 === this.currentGroup) {
                indicator.classList.remove('bg-gray-300');
                indicator.classList.add('bg-primary');
                indicator.style.transform = 'scale(1.2)';
            } else {
                indicator.classList.remove('bg-primary');
                indicator.classList.add('bg-gray-300');
                indicator.style.transform = 'scale(1)';
            }
        });
    }
    
    updateButtonText() {
        const buttonText = this.nextBtn.querySelector('span');
        if (this.currentGroup < this.totalGroups) {
            buttonText.textContent = 'Ver mais serviços';
        } else {
            buttonText.textContent = 'Voltar ao início';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ServicesCarousel();
});
